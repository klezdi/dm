// Array of questions and answers with corresponding images

// Password for access
const correctPassword = "ihtimal"; // Set your password here

function startQuiz() {
    const password = prompt("Sifreyi girin:");

    if (password === correctPassword) {
        // Hide the initial page and show the quiz page
        document.getElementById("initialPage").classList.add("hidden");
        document.getElementById("quizPage").classList.remove("hidden");
        
        // Resume from saved progress or initialize the first question
        const savedProgress = localStorage.getItem("currentQuestionIndex");
        currentQuestionIndex = savedProgress ? parseInt(savedProgress, 10) : 0;
        displayQuestion();
    } else {
        // Password incorrect, show an alert
        alert("Yanlis! Tekrar deneyin.");
    }
}

const quizData = [
    {
        question: "Turistler nerede bira icer?",
        answer: "tekne",
        image: "images/072924_1.JPG",
        caption: "29.07.2024 - Berlin"
    },
    {
        question: "En iyi ogrenme metodu",
        answer: "playful",
        image: "images/073124_1.JPG",
        caption: "31.07.2024 - Berlin"
    },
    {
        question: "Bizi yakinlastiran sey",
        answer: "sac",
        image: "images/081524_1.JPG",
        caption: "15.08.2024 - Mitilini / Midilli"
    },
    {
        question: "Manuel serinleme araci",
        answer: "yelpaze",
        image: "images/081524_2.JPG",
        caption: "15.08.2024 - Mitilini / Midilli"
    },
    {
        question: "Her sey icinde",
        answer: "kup",
        image: "images/081624_0.jpg",
        caption: "16.08.2024 - Mitilini / Midilli"
    },
    {
        question: "Mythos degil",
        answer: "mamos",
        image: "images/081624_1.JPG",
        caption: "16.08.2024 - Karpuzi / Midilli"
    },
    {
        question: "Kus yapmada kullanilir",
        answer: "origami",
        image: "images/081624_2.JPG",
        caption: "16.08.2024 - Mitilini / Midilli"
    },
    {
        question: "En etkili alan",
        answer: "manyetik",
        image: "images/081624_3.JPG",
        caption: "16.08.2024 - Mitilini / Midilli"
    },
    {
        question: "Su uzerindeki ihtimal",
        answer: "kayik",
        image: "images/081624_4.jpg",
        caption: "16.08.2024 - Mitilini / Midilli"
    },
    {
        question: "Sokakta dinlenme tesisi",
        answer: "bank",
        image: "images/081624_5.JPG",
        caption: "16.08.2024 - Mitilini / Midilli"
    },
    {
        question: "Sarilir",
        answer: "tutun",
        image: "images/081624_6.JPG",
        caption: "16.08.2024 - Mitilini / Midilli"
    },
    {
        question: "Sahilde yapilmamasi gereken bir aktivite",
        answer: "mangal",
        image: "images/081724_1.JPG",
        caption: "17.08.2024 - Karpuzi / Midilli"
    },
    {
        question: " 'Ya onunla ilgili cok komik bir hikaye var' ",
        answer: "erdal",
        image: "images/081724_2_2.jpg",
        caption: "17.08.2024 - Mitilini / Midilli"
    },
    {
        question: "Kirmizi baglantı",
        answer: "atki",
        image: "images/081724_2.JPG",
        caption: "17.08.2024 - Mitilini / Midilli"
    },
    {
        question: "Neyinle vur?",
        answer: "bedeninle",
        image: "images/081724_5.jpg",
        caption: "17.08.2024 - Mitilini / Midilli"
    },
    {
        question: "Travma sonrasi",
        answer: "melinta",
        image: "images/081824_1.jpg",
        caption: "18.08.2024 - Melinta / Midilli"
    },
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
        feedback.textContent = "Dogru cevap!";
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
        feedback.textContent = "Yanlis cevap :/ Baska ne olabilir?";
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        // Save progress to local storage
        localStorage.setItem("currentQuestionIndex", currentQuestionIndex);

        displayQuestion();
    } else {
        // End of quiz message
        document.getElementById("question").textContent = "Congratulations! You've completed the test.";
        document.getElementById("feedback").textContent = "Thank you for participating!";
        document.getElementById("userAnswer").classList.add("hidden");
        document.getElementById("nextButton").classList.add("hidden");

        // Clear progress from local storage
        localStorage.removeItem("currentQuestionIndex");
    }
}

// Initialize first question or resume from progress on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedProgress = localStorage.getItem("currentQuestionIndex");
    if (savedProgress) {
        currentQuestionIndex = parseInt(savedProgress, 10);
    } else {
        currentQuestionIndex = 0;
    }
});
