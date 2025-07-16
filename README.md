
# Project Title

A brief description of what this project does and who it's for

# Coding Instructor AI 🤖

Welcome to the **Coding Instructor AI** project! This is a web-based chatbot designed to assist users with their coding-related questions. Built with a focus on a clean, responsive user interface and powered by the Gemini API, it provides detailed answers to programming queries.

## ✨ Features

* **Coding Assistance**: Ask any coding question, and the AI will provide a detailed and helpful response.
* **Contextual Understanding**: The chatbot maintains conversation history to provide more relevant answers.
* **Specific Persona**: The AI is configured to act as a "Coding Instructor," offering coding-specific help and responding humorously (rudely) to non-coding questions.
* **Responsive UI**: A modern, dark-themed, and responsive user interface ensures a great experience across various devices.
* **Code Formatting**: Automatically formats code snippets within the chat for easy readability.

## 🚀 Technologies Used

* **HTML5**: For the structure of the web application.
* **CSS3**: For styling, including a custom dark theme, animations, and responsive design.
* **JavaScript**: For dynamic behavior, handling user input, and API communication.
* **Google Gemini API**: The core AI model (`gemini-2.5-flash`) that powers the chatbot's intelligence and responses.
* **Google Fonts**: For custom typography (Poppins and Fira Code).
* **Font Awesome**: For icons (e.g., send button icon).

## 💡 What I Learned

Through the development of this project, I gained valuable insights into:

* **System Instructions for Chatbots**: A key learning was how to effectively use `systemInstruction` with the Gemini API to define the AI's persona and behavior. This allowed me to configure the chatbot to specifically answer coding questions and respond in a particular manner to off-topic queries, significantly influencing the AI's output and user interaction.
* **Frontend Development Best Practices**: Enhancing UI/UX through advanced CSS techniques, including custom properties, animations, transitions, and responsive design, to create a polished and user-friendly experience.
* **API Integration**: Making `fetch` API calls to interact with large language models and process their responses.
* **Code Organization**: Segregating HTML, CSS, and JavaScript into separate files for better maintainability and scalability.

## 🛠️ Setup and Local Development

To get this project running on your local machine:

1.  **Clone the Repository (or download the files):**
    If you've pushed your project to GitHub, you can clone it:
    ```bash
    git clone [https://github.com/DivyaChaudhary07/Coding-Instructor-AI.git](https://github.com/DivyaChaudhary07/Coding-Instructor-AI.git)
    cd Coding-Instructor-AI
    ```
    Otherwise, ensure you have `index.html`, `style.css`, and `script.js` in the same folder.

2.  **Get a Gemini API Key:**
    * Go to the [Google AI Studio](https://aistudio.google.com/app/apikey) and create a new API key.
    * **Important**: Open `script.js` and replace `"YOUR API KEY"` with your newly generated API key:
        ```javascript
        const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";
        ```

3.  **Open the Project:**
    Simply open the `index.html` file in your web browser. You do not need a local server for this project, as it's purely client-side.

## 👨‍💻 How to Use

1.  Open `index.html` in your web browser.
2.  Type your coding question into the input box at the bottom of the chat interface.
3.  Click the "Send" button or press `Enter` (without `Shift`) to send your question.
4.  The Coding Instructor AI will respond with detailed answers to your coding queries!



## Screenshots

![App Screenshot](https://github.com/DivyaChaudhary07/Coding-Instructor-AI/blob/main/Project/Screenshots/Screenshot%202025-07-16%20050224.png?raw=true)


![App Screenshot](https://github.com/DivyaChaudhary07/Coding-Instructor-AI/blob/main/Project/Screenshots/Screenshot%202025-07-16%20050252.png?raw=true)

---
