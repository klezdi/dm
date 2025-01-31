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
    {
        question: "Canta yerde durmuyorsa",
        answer: "sal",
        image: "raw_data/090524_4.JPG",
        caption: "05.09.2024 - Bodrum-Eski Foca yolu"
    },
    {
        question: "Etil alkol",
        answer: "sangria",
        image: "raw_data/090524_5_1.JPG",
        caption: "05.09.2024 - Bodrum-Eski Foca yolu"
    },
    {
        question: "Ciktisini verdim",
        answer: "panikarac",
        image: "raw_data/090524_5.JPG",
        caption: "05.09.2024 - Izmir-Eski Foca yolu"
    },
    {
        question: "COK sarhos eden",
        answer: "gobek",
        image: "raw_data/090524_6.JPG",
        caption: "05.09.2024 - Eski Foca"
    },
    {
        question: "Gunbatimi sirketi",
        answer: "pamukkale",
        image: "raw_data/090624_1.JPG",
        caption: "06.09.2024 - Eski Foca-Geyikli yolu"
    },
    {
        question: "Tost +",
        answer: "uludag",
        image: "raw_data/090624_2.JPG",
        caption: "06.09.2024 - Geyikli-Bozcaada feribotu"
    },
    {
        question: "Sevdigimiz seylerin",
        answer: "listesi",
        image: "raw_data/090624_3.JPG",
        caption: "06.09.2024 - Geyikli-Bozcaada feribotu"
    },
    {
        question: "Yazilmayan siir",
        answer: "karahan",
        image: "raw_data/090724_1.JPG",
        caption: "07.09.2024 - Bozcaada"
    },
    {
        question: "Icimi guzel",
        answer: "kuntra",
        image: "raw_data/090724_2.JPG",
        caption: "07.09.2024 - Bozcaada"
    },
    {
        question: "Yanabilir",
        answer: "don",
        image: "raw_data/090824_0.JPG",
        caption: "08.09.2024 - Bozcaada"
    },
    {
        question: "Yakaladigimiz",
        answer: "gunbatimi",
        image: "raw_data/090824_6.JPG",
        caption: "08.09.2024 - Bozcaada"
    },
    {
        question: "Sarkilariyla beraber",
        answer: "cohen",
        image: "raw_data/090824_2.JPG",
        caption: "08.09.2024 - Bozcaada"
    },
    {
        question: "Piyano",
        answer: "kedi",
        image: "raw_data/090924_1.JPG",
        caption: "09.09.2024 - Bozcaada"
    },
    {
        question: "Turizm",
        answer: "kerizler",
        image: "raw_data/090924_2.JPG",
        caption: "09.09.2024 - Bozcaada"
    },
    {
        question: "Oglen birasi",
        answer: "ayazma",
        image: "raw_data/090924_3.JPG",
        caption: "09.09.2024 - Bozcaada"
    },
    {
        question: "TSM",
        answer: "vahit",
        image: "raw_data/090924_4.JPG",
        caption: "09.09.2024 - Bozcaada"
    },
    {
        question: "Paketlenir",
        answer: "tablo",
        image: "raw_data/091024_0.JPG",
        caption: "10.09.2024 - Bozcaada"
    },
    {
        question: "Hep birlikte miydiniz?",
        answer: "dionysos",
        image: "raw_data/091124_2.JPG",
        caption: "11.09.2024 - Bozcaada"
    },
    {
        question: "Bulaniklik yaratan",
        answer: "lodos",
        image: "raw_data/091124_3.JPG",
        caption: "11.09.2024 - Bozcaada"
    },
    {
        question: "Hangi feminizm?",
        answer: "musluman",
        image: "raw_data/091124_4.JPG",
        caption: "11.09.2024 - Bozcaada"
    },
    {
        question: "Kacinci kat?",
        answer: "bodrum",
        image: "raw_data/091224_1.JPG",
        caption: "12.09.2024 - Bozcaada"
    },
    {
        question: "Sevdigin vidyo",
        answer: "badada",
        image: "raw_data/091224_2.JPG",
        caption: "12.09.2024 - Bozcaada"
    },
    {
        question: "Cozemedigimiz bir konu",
        answer: "tavla",
        image: "raw_data/091224_3.JPG",
        caption: "12.09.2024 - Bozcaada"
    },
    {
        question: "Bira patates",
        answer: "yaren",
        image: "raw_data/091224_4.JPG",
        caption: "12.09.2024 - Bozcaada"
    },
    {
        question: "Hangi peynir?",
        answer: "ezine",
        image: "raw_data/091324_0.JPG",
        caption: "13.09.2024 - Geyikli-Ezine yolu"
    },
    {
        question: "Deniz tasiti",
        answer: "tost",
        image: "raw_data/091624_1.JPG",
        caption: "16.09.2024 - Ankara / Istanbul"
    },
    {
        question: "Yaz aksamlari icin",
        answer: "ruzgarlik",
        image: "raw_data/091624_2.JPG",
        caption: "16.09.2024 - Ankara / Istanbul"
    },
    {
        question: "Bir gorusme sekli",
        answer: "vidyo",
        image: "raw_data/092124_1.JPG",
        caption: "21.09.2024 - Ankara / Viyana"
    },
    {
        question: "Evden cikip sarap iceriz",
        answer: "espresso",
        image: "raw_data/092324_1.JPG",
        caption: "23.09.2024 - Viyana"
    },
    {
        question: "Levent'le yenilen yemek",
        answer: "thai",
        image: "raw_data/092424_1.GIF",
        caption: "24.09.2024 - Viyana"
    },
    {
        question: "8 sene sonra",
        answer: "chopin",
        image: "raw_data/092424_2.JPG",
        caption: "24.09.2024 - Viyana"
    },
    {
        question: "Korkularin sayisi",
        answer: "dortyuzelliiki",
        image: "raw_data/092424_3.JPG",
        caption: "24.09.2024 - Viyana"
    },
    {
        question: "Englischer",
        answer: "garten",
        image: "raw_data/092624_1.JPG",
        caption: "26.09.2024 - Munih"
    },
    {
        question: "Tek kelime iki insan",
        answer: "moya",
        image: "raw_data/092624_2.JPG",
        caption: "26.09.2024 - Munih"
    },
    {
        question: "Suda, camda olan",
        answer: "yansima",
        image: "raw_data/092724_0.JPG",
        caption: "27.09.2024 - Viyana"
    },
    {
        question: "Exposure",
        answer: "double",
        image: "raw_data/092724_1.JPG",
        caption: "27.09.2024 - Viyana"
    },
    {
        question: "Vegan degilken severiz",
        answer: "omlet",
        image: "raw_data/092824_1.JPG",
        caption: "28.09.2024 - Viyana"
    },
    {
        question: "Bir sure garip bir halde kalmana yol acan",
        answer: "oje",
        image: "raw_data/092824_2_1.JPG",
        caption: "28.09.2024 - Viyana"
    },
    {
        question: "Baban (temsili)",
        answer: "melodika",
        image: "raw_data/092824_2.JPG",
        caption: "28.09.2024 - Viyana"
    },
    {
        question: "Corbayi ozel kilan",
        answer: "nane",
        image: "raw_data/092824_3.JPG",
        caption: "28.09.2024 - Viyana"
    },
    {
        question: "Vazgecemedigimiz goruntulerin kaynagi",
        answer: "ayna",
        image: "raw_data/092924_1.JPG",
        caption: "29.09.2024 - Viyana"
    },
    {
        question: "Yolculuklarda yaninda olan",
        answer: "polaroid",
        image: "raw_data/092924_3_1.JPG",
        caption: "29.09.2024 - Viyana"
    },
    {
        question: "Seni gormek istedigim hal",
        answer: "ciplak",
        image: "raw_data/092924_4.JPG",
        caption: "29.09.2024 - Viyana"
    },
    {
        question: "Sergi adinda bulunan",
        answer: "askima",
        image: "raw_data/093024_1.JPG",
        caption: "30.09.2024 - Berlin / Viyana"
    },
    {
        question: "Evde kullandigin, cok sevdigim",
        answer: "gozluk",
        image: "raw_data/100524_1.JPG",
        caption: "05.10.2024 - Berlin / Viyana"
    },
    {
        question: "Kendinde olunca cekindigin, benim sende bayildigim",
        answer: "ter",
        image: "raw_data/100824_1.JPG",
        caption: "08.10.2024 - Berlin / Viyana"
    },
    {
        question: "Olmazsa olmazimiz",
        answer: "ceviz",
        image: "raw_data/101024_1.JPG",
        caption: "10.10.2024 - Berlin / Viyana"
    },
    {
        question: "Gezdigimiz mahallelerden",
        answer: "mitte",
        image: "raw_data/101124_1.JPG",
        caption: "11.10.2024 - Berlin"
    },
    {
        question: "Ilk denemede ustasi oldugumuz metod",
        answer: "pose",
        image: "raw_data/101224_1.JPG",
        caption: "12.10.2024 - Berlin"
    },
    {
        question: "Hep ustasi oldugumuz",
        answer: "opusmek",
        image: "raw_data/101324_1.JPG",
        caption: "13.10.2024 - Berlin"
    },
    {
        question: "En sevdigim uyanis",
        answer: "beraber",
        image: "raw_data/101424_1.JPG",
        caption: "14.10.2024 - Berlin"
    },
    {
        question: "Kis haric yaptigim",
        answer: "kosu",
        image: "raw_data/101724_0.JPG",
        caption: "17.10.2024 - Berlin / Sheffield"
    },
    {
        question: "Duzenli olarak yaptigin",
        answer: "yoga",
        image: "raw_data/101724_1.JPG",
        caption: "17.10.2024 - Berlin / Sheffield"
    },
    {
        question: "En tarz kiyafetin",
        answer: "parka",
        image: "raw_data/101724_2.JPG",
        caption: "17.10.2024 - Berlin / Sheffield"
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
