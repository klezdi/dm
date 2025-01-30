// Array of questions and answers with corresponding raw_data

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
        image: "raw_data/072924_1.JPG",
        caption: "29.07.2024 - Berlin"
    },
    {
        question: "En iyi ogrenme metodu",
        answer: "playful",
        image: "raw_data/073124_1.JPG",
        caption: "31.07.2024 - Berlin"
    },
    {
        question: "Bizi yakinlastiran sey",
        answer: "sac",
        image: "raw_data/081524_1.JPG",
        caption: "15.08.2024 - Mitilini"
    },
    {
        question: "Manuel serinleme araci",
        answer: "yelpaze",
        image: "raw_data/081524_2.JPG",
        caption: "15.08.2024 - Mitilini"
    },
    {
        question: "Her sey icinde",
        answer: "kup",
        image: "raw_data/081624_0.JPG",
        caption: "16.08.2024 - Mitilini"
    },
    {
        question: "Bazilarinin istemedigi",
        answer: "iliski",
        image: "raw_data/081624_1.JPG",
        caption: "16.08.2024 - Karpuzi"
    },
    {
        question: "Kus yapmada kullanilir",
        answer: "origami",
        image: "raw_data/081624_2.JPG",
        caption: "16.08.2024 - Mitilini"
    },
    {
        question: "En etkili alan",
        answer: "manyetik",
        image: "raw_data/081624_3.JPG",
        caption: "16.08.2024 - Mitilini"
    },
    {
        question: "Su uzerindeki ihtimal",
        answer: "kayik",
        image: "raw_data/081624_4.JPG",
        caption: "16.08.2024 - Mitilini"
    },
    {
        question: "Sokakta dinlenme tesisi",
        answer: "bank",
        image: "raw_data/081624_5.JPG",
        caption: "16.08.2024 - Mitilini"
    },
    {
        question: "Sarilir",
        answer: "tutun",
        image: "raw_data/081624_6.JPG",
        caption: "16.08.2024 - Mitilini"
    },
    {
        question: "Sahilde yapilmamasi gereken bir aktivite",
        answer: "mangal",
        image: "raw_data/081724_1.JPG",
        caption: "17.08.2024 - Karpuzi"
    },
    {
        question: " 'Ya onunla ilgili cok komik bir hikaye var' ",
        answer: "erdal",
        image: "raw_data/081724_2_2.JPG",
        caption: "17.08.2024 - Mitilini"
    },
    {
        question: "Kirmizi baglantı",
        answer: "atki",
        image: "raw_data/081724_2.JPG",
        caption: "17.08.2024 - Mitilini"
    },
    {
        question: "Neyinle vur?",
        answer: "bedeninle",
        image: "raw_data/081724_5.JPG",
        caption: "17.08.2024 - Mitilini"
    },
    {
        question: "Travma sonrasi",
        answer: "melinta",
        image: "raw_data/081824_1.JPG",
        caption: "18.08.2024 - Melinta"
    },
    {
        question: "Seurat",
        answer: "pointillism",
        image: "raw_data/081824_2_1.JPG",
        caption: "18.08.2024 - Melinta"
    },
    {
        question: "Dokununca soylenir",
        answer: "pardon",
        image: "raw_data/081824_2.JPG",
        caption: "18.08.2024 - Melinta"
    },
    {
        question: "Kucuk adimlarla",
        answer: "duskaya",
        image: "raw_data/081824_4.JPG",
        caption: "18.08.2024 - Melinta"
    },
    {
        question: "Sabahlamamizin nedeni",
        answer: "yazitura",
        image: "raw_data/081924_0_0.JPG",
        caption: "19.08.2024 - Melinta"
    },
    {
        question: "Maskert",
        answer: "mert",
        image: "raw_data/081924_1_1.JPG",
        caption: "19.08.2024 - Mitilini-Molivos yolu"
    },
    {
        question: "Sahilde kazanan",
        answer: "idil",
        image: "raw_data/081924_1_3.JPG",
        caption: "19.08.2024 - Molivos"
    },
    {
        question: " 'Sence ben hangi ____ olurdum?' ",
        answer: "sise",
        image: "raw_data/081924_4.JPG",
        caption: "19.08.2024 - Molivos"
    },
    {
        question: "Herkes kim olsa?",
        answer: "duru",
        image: "raw_data/082024_1.JPG",
        caption: "20.08.2024 - Molivos"
    },
    {
        question: "Sarilma sekli",
        answer: "islak",
        image: "raw_data/082524_0.JPG",
        caption: "25.08.2024 - Mitilini"
    },
    {
        question: "Kesildiginde masal yaratan",
        answer: "elektrik",
        image: "raw_data/082524_1.JPG",
        caption: "25.08.2024 - Ayvalik"
    },
    {
        question: "Dogurmamiz gereken",
        answer: "gunes",
        image: "raw_data/082524_2.JPG",
        caption: "25.08.2024 - Ayvalik"
    },
    {
        question: "Onemli bir temas noktasi",
        answer: "omuz",
        image: "raw_data/082524_3.JPG",
        caption: "25.08.2024 - Ayvalik"
    },
    {
        question: "Yanlis karar",
        answer: "sakin",
        image: "raw_data/082624_1_1.JPG",
        caption: "26.08.2024 - Ayvalik"
    },
    {
        question: "Deniz",
        answer: "yildizi",
        image: "raw_data/082624_1.JPG",
        caption: "26.08.2024 - Ayvalik"
    },
    {
        question: "Ongorulemez suret",
        answer: "analog",
        image: "raw_data/082724_1.JPG",
        caption: "27.08.2024 - Ayvalik"
    },
    {
        question: "Hicbir seyin farkinda olmayan",
        answer: "levent",
        image: "raw_data/082724_2.JPG",
        caption: "27.08.2024 - Ayvalik"
    },
    {
        question: "ne guzel oldu ya her sey boyle :)",
        answer: "cok",
        image: "raw_data/082824_1.JPG",
        caption: "28.08.2024 - Ayvalik / Bodrum"
    },
    {
        question: "Nece?",
        answer: "muce",
        image: "raw_data/083124_1.JPG",
        caption: "31.08.2024 - Bozcaada / Bodrum"
    },
    {
        question: "Falda gorulur",
        answer: "kalp",
        image: "raw_data/083124_2.JPG",
        caption: "31.08.2024 - Bozcaada / Bodrum"
    },
    {
        question: "Kumsalda sanat icin kullanilan..",
        answer: "tas",
        image: "raw_data/090124_1.JPG",
        caption: "01.09.2024 - Bozcaada / Bodrum"
    },
    {
        question: "..ya da dilek tutulup denize atilan",
        answer: "tas",
        image: "raw_data/090124_2.JPG",
        caption: "01.09.2024 - Bozcaada / Bodrum"
    },
    {
        question: "Nasil kelimeler?",
        answer: "yeni",
        image: "raw_data/090124_3.JPG",
        caption: "01.09.2024 - Bozcaada / Bodrum"
    },
    {
        question: "___ Mehmet!",
        answer: "kos",
        image: "raw_data/090224_1_1.JPG",
        caption: "02.09.2024 - Bodrum"
    },
    {
        question: "Eksik harfli oyun kaynagi",
        answer: "motorboat",
        image: "raw_data/090224_1_2.JPG",
        caption: "02.09.2024 - Bodrum-Datca feribotu"
    },
    {
        question: "Eczane bar kafe hastane firin",
        answer: "migros",
        image: "raw_data/090224_1_3.JPG",
        caption: "02.09.2024 - Datca"
    },
    {
        question: "Ne buku?",
        answer: "seven",
        image: "raw_data/090224_1.JPG",
        caption: "02.09.2024 - Datca"
    },
    {
        question: "Sabah ilk kadraja giren",
        answer: "ayak",
        image: "raw_data/090324_0.JPG",
        caption: "03.09.2024 - Datca"
    },
    {
        question: "Sahilde gunduz kafasi icin",
        answer: "sarap",
        image: "raw_data/090324_1.JPG",
        caption: "03.09.2024 - Datca"
    },
    {
        question: "Kumsal tasi",
        answer: "cakil",
        image: "raw_data/090324_2.JPG",
        caption: "03.09.2024 - Datca"
    },
    {
        question: "Kasinti cozer",
        answer: "kasik",
        image: "raw_data/090324_3.JPG",
        caption: "03.09.2024 - Datca"
    },
    {
        question: "___ savasinca",
        answer: "notalar",
        image: "raw_data/090424_1.JPG",
        caption: "04.09.2024 - Datca"
    },
    {
        question: "Kendini ___",
        answer: "opmek",
        image: "raw_data/090524_1.JPG",
        caption: "05.09.2024 - Datca-Bodrum feribotu"
    },
    {
        question: "Tuz",
        answer: "zakka",
        image: "raw_data/090524_2.JPG",
        caption: "05.09.2024 - Bodrum"
    },
    {
        question: "Defterle ilgili bir renk",
        answer: "green",
        image: "raw_data/090524_3_1.JPG",
        caption: "05.09.2024 - Bodrum"
    },
];
let currentQuestionIndex = 10;

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
