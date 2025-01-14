// Array of questions and answers with corresponding images

// Password for access
const correctPassword = "quiz123"; // Set your password here

function startQuiz() {
    const password = prompt("Please enter the password to start the quiz:");

    if (password === correctPassword) {
        // Hide the initial page and show the quiz page
        document.getElementById("initialPage").classList.add("hidden");
        document.getElementById("quizPage").classList.remove("hidden");
        
        // Initialize the first question
        displayQuestion();
    } else {
        // Password incorrect, show an alert
        alert("Incorrect password! Please try again.");
    }
}

const quizData = [
    {
        question: "What is the capital of France?",
        answer: "paris",
        image: "images/image1.png",
        caption: "Paris, the capital of France, is known as the 'City of Light'."
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "jupiter",
        image: "images/image2.png",
        caption: "Jupiter is the largest planet in the solar system, with a massive storm called the Great Red Spot."
    },
    {
        question: "What is the longest river in the world?",
        answer: "nile",
        image: "images/image3.png",
        caption: "The Nile River, at 6,650 km, is the longest river in the world, flowing through 11 countries."
    }
];

let currentQuestionIndex = 0;

// Display the current question
function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("userAnswer").value = ""; // Clear previous input
    document.getElementById("feedback").textContent = "";
    
    // Hide and disable "Next Question" button again
    const nextButton = document.getElementById("nextButton");
    nextButton.classList.add("hidden");
    nextButton.disabled = true;

    // Clear and hide the image container
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; // Remove previous image
    imageContainer.classList.add("hidden"); // Hide it again
}

function checkAnswer() {
    const userAnswer = document.getElementById("userAnswer").value.toLowerCase().trim();
    const feedback = document.getElementById("feedback");
    const imageContainer = document.getElementById("imageContainer");
    const nextButton = document.getElementById("nextButton");
    const currentQuestion = quizData[currentQuestionIndex];

    if (userAnswer === currentQuestion.answer) {
        feedback.textContent = "Correct! Here's the image:";
        feedback.style.color = "green";

        // Clear previous content (image and caption)
        imageContainer.innerHTML = "";

        // Create a new image element for the correct answer
        const answerImage = document.createElement("img");
        answerImage.src = currentQuestion.image;
        answerImage.alt = "Answer image";
        answerImage.style.maxWidth = "100%"; // Ensure responsiveness
        answerImage.style.maxHeight = "500px"; // Restrict height

        // Create a caption element
        const caption = document.createElement("p");
        caption.textContent = currentQuestion.caption;
        caption.style.fontStyle = "italic";
        caption.style.marginTop = "10px";
        caption.style.color = "#555";

        // Append image and caption to container and make it visible
        imageContainer.appendChild(answerImage);
        imageContainer.appendChild(caption);
        imageContainer.classList.remove("hidden");

        // Show and enable the "Next Question" button
        nextButton.classList.remove("hidden");
        nextButton.disabled = false;
    } else {
        feedback.textContent = "Oops! That's not correct. Try again.";
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        // End of quiz message
        document.getElementById("question").textContent = "Congratulations! You've completed the quiz.";
        document.getElementById("feedback").textContent = "Thank you for participating!";
        document.getElementById("userAnswer").classList.add("hidden");
        document.getElementById("nextButton").classList.add("hidden");
    }
}

// Initialize first question
displayQuestion();
