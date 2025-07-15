const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const chatBox = document.getElementById('chatBox');

const GEMINI_API_KEY = "YOUR_API_KEY";
const MODEL_NAME = "gemini-2.5-flash";
const systemInstructionText = "You are a Coding Instructor, who answers only coding related problems. If a user asks anything not related to coding, reply rudely like you're a dumb person. For coding questions, respond in detail.";

let contextHistory = [];

function addMessage(text, sender = 'bot') {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = text;
  msg.appendChild(bubble);
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function handleQuestion() {
  const question = questionInput.value.trim();
  if (!question) return;

  addMessage(question, 'user');
  questionInput.value = '';

  contextHistory.push({ role: "user", parts: [{ text: question }] });

  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;

  const requestBody = {
    contents: [...contextHistory],
    systemInstruction: {
      parts: [{ text: systemInstructionText }]
    }
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!answer) {
      addMessage("⚠️ Failed to get a valid response.", 'bot');
      return;
    }

    contextHistory.push({ role: "model", parts: [{ text: answer }] });

    const formatted = answer.replace(/(```[\s\S]*?```)|(`[^`]+`)/g, match => {
      if (match.startsWith('```')) {
        return `<pre><code>${match.replace(/```/g, '')}</code></pre>`;
      } else if (match.startsWith('`') && match.endsWith('`')) {
        return `<code>${match.replace(/`/g, '')}</code>`;
      }
      return match;
    });

    addMessage(formatted, 'bot');

  } catch (err) {
    console.error(err);
    addMessage("❌ Error communicating with Gemini API.", 'bot');
  }
}

askButton.addEventListener('click', handleQuestion);
questionInput.addEventListener('keypress', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleQuestion();
  }
});
