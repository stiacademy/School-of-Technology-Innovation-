/* =========================================================
   STI ACADEMY REGISTRATION WEBSITE
   script.js
   ========================================================= */


/* =========================================================
   COURSE DATA
   ========================================================= */

const courses = [
  {
    name: "Web Development",
    duration: "6 Months",
    description:
      "Learn how to build modern, responsive websites using HTML, CSS, JavaScript and other essential web technologies."
  },
  {
    name: "Web Design",
    duration: "6 Months",
    description:
      "Learn how to create attractive, responsive and user-friendly website designs."
  },
  {
    name: "Graphic Design",
    duration: "1 Month",
    description:
      "Learn the fundamentals of graphic design and how to create professional visual content."
  },
  {
    name: "Video Editing",
    duration: "1 Month",
    description:
      "Learn how to edit engaging and professional videos for social media, businesses and personal projects."
  },
  {
    name: "Social Media Management",
    duration: "1 Month",
    description:
      "Learn how to manage social media pages, create content, grow audiences and handle online communities."
  }
];


/* =========================================================
   QUIZ DATA
   ========================================================= */

const quizQuestions = [
  {
    question: "Which of these sounds most interesting to you?",
    options: [
      "Building websites",
      "Creating beautiful designs",
      "Editing videos",
      "Managing social media"
    ],
    scores: [5, 3, 2, 1]
  },

  {
    question: "What would you enjoy doing most?",
    options: [
      "Writing code",
      "Creating graphics",
      "Editing videos",
      "Creating social media content"
    ],
    scores: [5, 4, 3, 2]
  },

  {
    question: "Which activity sounds more exciting?",
    options: [
      "Making a website work",
      "Designing a poster",
      "Putting clips together",
      "Growing a social media page"
    ],
    scores: [5, 4, 3, 2]
  },

  {
    question: "What type of work would you prefer?",
    options: [
      "Technical work",
      "Creative visual work",
      "Video and storytelling",
      "Communication and marketing"
    ],
    scores: [5, 4, 3, 2]
  },

  {
    question: "Which skill would you like to develop?",
    options: [
      "Programming",
      "Design",
      "Video production",
      "Digital marketing"
    ],
    scores: [5, 4, 3, 2]
  },

  {
    question: "What would you rather create?",
    options: [
      "A website",
      "A brand design",
      "A video",
      "A social media campaign"
    ],
    scores: [5, 4, 3, 2]
  },

  {
    question: "Which type of project sounds best?",
    options: [
      "Building a complete website",
      "Designing a complete brand identity",
      "Creating a professional video",
      "Managing a business social media page"
    ],
    scores: [5, 4, 3, 2]
  },

  {
    question: "What do you think you are naturally good at?",
    options: [
      "Problem solving",
      "Creativity",
      "Storytelling",
      "Communication"
    ],
    scores: [5, 4, 3, 2]
  },

  {
    question: "Which environment would you prefer?",
    options: [
      "Working with technology",
      "Working with visuals",
      "Working with videos",
      "Working with people and audiences"
    ],
    scores: [5, 4, 3, 2]
  },

  {
    question: "What would you like to achieve with your new skill?",
    options: [
      "Build websites",
      "Create professional designs",
      "Create amazing videos",
      "Manage social media professionally"
    ],
    scores: [5, 4, 3, 2]
  }
];


/* =========================================================
   QUIZ VARIABLES
   ========================================================= */

let currentQuestion = 0;

let quizScores = {
  "Web Development": 0,
  "Web Design": 0,
  "Graphic Design": 0,
  "Video Editing": 0,
  "Social Media Management": 0
};

let selectedAnswers = [];

let recommendedCourse = "";


/* =========================================================
   START QUIZ
   ========================================================= */

function startQuiz() {
  currentQuestion = 0;

  quizScores = {
    "Web Development": 0,
    "Web Design": 0,
    "Graphic Design": 0,
    "Video Editing": 0,
    "Social Media Management": 0
  };

  selectedAnswers = [];

  const quizStart = document.getElementById("quiz-start");
  const quizContainer = document.getElementById("quiz-container");

  if (quizStart) {
    quizStart.classList.add("hidden");
  }

  if (quizContainer) {
    quizContainer.classList.remove("hidden");
  }

  showQuestion();
}


/* =========================================================
   SHOW QUESTION
   ========================================================= */

function showQuestion() {
  const quizContainer = document.getElementById("quiz-container");

  if (!quizContainer) {
    return;
  }

  const questionData = quizQuestions[currentQuestion];

  if (!questionData) {
    showQuizResult();
    return;
  }

  const progress = Math.round(
    ((currentQuestion + 1) / quizQuestions.length) * 100
  );

  quizContainer.innerHTML = `
    <div class="quiz-question-card">

      <div class="quiz-progress">
        <div class="quiz-progress-bar">
          <div
            class="quiz-progress-fill"
            style="width: ${progress}%;">
          </div>
        </div>

        <p>
          Question ${currentQuestion + 1} of ${quizQuestions.length}
        </p>
      </div>

      <h3>${questionData.question}</h3>

      <div class="quiz-options"></div>

    </div>
  `;

  const optionsContainer =
    quizContainer.querySelector(".quiz-options");

  questionData.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;

    button.addEventListener("click", function () {
      selectAnswer(index);
    });

    optionsContainer.appendChild(button);
  });
}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(index) {
  const questionData = quizQuestions[currentQuestion];

  if (!questionData) {
    return;
  }

  selectedAnswers[currentQuestion] = index;

  const score = questionData.scores[index];

  /*
    Each question contributes to the course
    represented by the answer position.
  */

  const courseByIndex = [
    "Web Development",
    "Graphic Design",
    "Video Editing",
    "Social Media Management"
  ];

  const selectedCourse = courseByIndex[index];

  if (selectedCourse) {
    quizScores[selectedCourse] += score;
  }

  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    showQuizResult();
  }
}


/* =========================================================
   GET RECOMMENDED COURSE
   ========================================================= */

function getRecommendedCourse() {
  let highestScore = -1;
  let bestCourse = "Web Development";

  Object.keys(quizScores).forEach(function (course) {
    if (quizScores[course] > highestScore) {
      highestScore = quizScores[course];
      bestCourse = course;
    }
  });

  recommendedCourse = bestCourse;

  return bestCourse;
}


/* =========================================================
   RECOMMENDATION TEXT
   ========================================================= */

function getRecommendationText(course) {
  const texts = {
    "Web Development":
      "Based on your answers, Web Development may be a great fit for you. You may enjoy solving problems, working with technology and building functional websites.",

    "Web Design":
      "Based on your answers, Web Design may be a great fit for you. You may enjoy creating attractive layouts and making websites visually appealing and easy to use.",

    "Graphic Design":
      "Based on your answers, Graphic Design may be a great fit for you. You may enjoy creativity, visual communication and creating professional designs.",

    "Video Editing":
      "Based on your answers, Video Editing may be a great fit for you. You may enjoy storytelling, working with visuals and creating engaging videos.",

    "Social Media Management":
      "Based on your answers, Social Media Management may be a great fit for you. You may enjoy communication, content creation and growing online communities."
  };

  return (
    texts[course] ||
    "Based on your answers, this course may be a good fit for you."
  );
}


/* =========================================================
   SHOW QUIZ RESULT
   ========================================================= */

function showQuizResult() {
  const course = getRecommendedCourse();

  const resultPopup = document.getElementById("result-popup");
  const recommendedCourseElement =
    document.getElementById("recommended-course");

  const recommendationText =
    document.getElementById("recommendation-text");

  if (recommendedCourseElement) {
    recommendedCourseElement.textContent = course;
  }

  if (recommendationText) {
    recommendationText.textContent =
      getRecommendationText(course);
  }

  if (resultPopup) {
    resultPopup.classList.remove("hidden");

    resultPopup.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}


/* =========================================================
   CLOSE QUIZ RESULT
   ========================================================= */

function closeResult() {
  const resultPopup = document.getElementById("result-popup");

  if (resultPopup) {
    resultPopup.classList.add("hidden");
  }
}


/* =========================================================
   REGISTER RECOMMENDED COURSE
   ========================================================= */

function registerRecommendedCourse() {
  if (!recommendedCourse) {
    return;
  }

  const courseSelect = document.getElementById("course");

  if (courseSelect) {
    courseSelect.value = recommendedCourse;
  }

  closeResult();

  const registrationSection =
    document.getElementById("registration");

  if (registrationSection) {
    registrationSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}


/* =========================================================
   DISPLAY COURSES
   ========================================================= */

function displayCourses() {
  const courseList = document.getElementById("course-list");

  if (!courseList) {
    return;
  }

  courseList.innerHTML = "";

  courses.forEach(function (course) {
    const card = document.createElement("div");

    card.className = "course-card";

    card.innerHTML = `
      <h3>${course.name}</h3>

      <p class="course-duration">
        ${course.duration}
      </p>

      <p>
        ${course.description}
      </p>

      <button
        type="button"
        class="btn secondary course-details-btn">
        VIEW DETAILS
      </button>
    `;

    const button =
      card.querySelector(".course-details-btn");

    button.addEventListener("click", function () {
      showCourseDetails(course.name);
    });

    courseList.appendChild(card);
  });
}


/* =========================================================
   SHOW COURSE DETAILS
   ========================================================= */

function showCourseDetails(courseName) {
  const course =
    courses.find(function (item) {
      return item.name === courseName;
    });

  if (!course) {
    return;
  }

  const detailsSection =
    document.getElementById("course-details");

  const detailsContent =
    document.getElementById("details-content");

  if (!detailsSection || !detailsContent) {
    return;
  }

  detailsContent.innerHTML = `
    <div class="course-details-card">

      <h2>${course.name}</h2>

      <p class="course-duration">
        Duration: ${course.duration}
      </p>

      <p>
        ${course.description}
      </p>

      <div class="course-details-actions">

        <button
          type="button"
          class="btn primary register-course-btn">
          REGISTER FOR THIS COURSE
        </button>

        <button
          type="button"
          class="btn secondary close-course-btn">
          CLOSE
        </button>

      </div>

    </div>
  `;

  detailsSection.classList.remove("hidden");

  const registerButton =
    detailsContent.querySelector(".register-course-btn");

  const closeButton =
    detailsContent.querySelector(".close-course-btn");

  registerButton.addEventListener("click", function () {
    selectCourse(course.name);
  });

  closeButton.addEventListener("click", function () {
    closeCourseDetails();
  });

  detailsSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* =========================================================
   CLOSE COURSE DETAILS
   ========================================================= */

function closeCourseDetails() {
  const detailsSection =
    document.getElementById("course-details");

  if (detailsSection) {
    detailsSection.classList.add("hidden");
  }
}


/* =========================================================
   SELECT COURSE
   ========================================================= */

function selectCourse(courseName) {
  const courseSelect =
    document.getElementById("course");

  if (courseSelect) {
    courseSelect.value = courseName;
  }

  closeCourseDetails();

  const registrationSection =
    document.getElementById("registration");

  if (registrationSection) {
    registrationSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}


/* =========================================================
   REGISTRATION FORM
   ========================================================= */

function setupRegistrationForm() {
  const form =
    document.getElementById("registration-form");

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput =
      document.getElementById("name");

    const phoneInput =
      document.getElementById("phone");

    const emailInput =
      document.getElementById("email");

    const courseInput =
      document.getElementById("course");

    const paymentNameInput =
      document.getElementById("payment-name");

    const message =
      document.getElementById("form-message");

    const submitButton =
      document.getElementById("send-registration");


    /* -----------------------------------------
       Make sure all elements exist
       ----------------------------------------- */

    if (
      !nameInput ||
      !phoneInput ||
      !emailInput ||
      !courseInput ||
      !paymentNameInput
    ) {
      console.error(
        "One or more registration form fields are missing."
      );

      if (message) {
        message.textContent =
          "There was a problem with the registration form. Please refresh the page and try again.";

        message.className =
          "form-message error";
      }

      return;
    }


    /* -----------------------------------------
       Get values
       ----------------------------------------- */

    const name =
      nameInput.value.trim();

    const phone =
      phoneInput.value.trim();

    const email =
      emailInput.value.trim();

    const course =
      courseInput.value.trim();

    const paymentName =
      paymentNameInput.value.trim();


    /* -----------------------------------------
       Validate fields
       ----------------------------------------- */

    if (
      !name ||
      !phone ||
      !email ||
      !course ||
      !paymentName
    ) {
      if (message) {
        message.textContent =
          "Please complete all registration fields.";

        message.className =
          "form-message error";
      }

      return;
    }


    /* -----------------------------------------
       Validate email
       ----------------------------------------- */

    if (!emailInput.checkValidity()) {
      if (message) {
        message.textContent =
          "Please enter a valid email address.";

        message.className =
          "form-message error";
      }

      emailInput.focus();

      return;
    }


    /* -----------------------------------------
       Registration email
       ----------------------------------------- */

    const adminEmail =
      "stiacademy346@gmail.com";


    /* -----------------------------------------
       Email subject
       ----------------------------------------- */

    const subject =
      "STI Academy Registration - " + name;


    /* -----------------------------------------
       Email body
       ----------------------------------------- */

    const body = `
Hello STI Academy Admin,

A new student has submitted a registration request.

STUDENT DETAILS

Full Name:
${name}

Phone Number:
${phone}

Email Address:
${email}

Course:
${course}

Name on Payment Account:
${paymentName}

The student will attach their payment receipt to this email before sending.

Thank you.
STI Academy Registration Website
`.trim();


    /* -----------------------------------------
       Gmail compose link
       ----------------------------------------- */

    const gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=" +
      encodeURIComponent(adminEmail) +
      "&su=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);


    /* -----------------------------------------
       Open Gmail
       ----------------------------------------- */

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent =
        "OPENING GMAIL...";
    }

    const gmailWindow =
      window.open(
        gmailURL,
        "_blank"
      );


    /* -----------------------------------------
       Check if browser blocked popup
       ----------------------------------------- */

    if (!gmailWindow) {
      if (message) {
        message.textContent =
          "Your browser blocked Gmail from opening. Please allow pop-ups for this website and try again.";

        message.className =
          "form-message error";
      }

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent =
          "SEND REGISTRATION BY EMAIL";
      }

      return;
    }


    /* -----------------------------------------
       Success message
       ----------------------------------------- */

    if (message) {
      message.innerHTML =
        "Your registration details have been prepared in Gmail. Please attach your payment receipt and send the email to STI Admin.";

      message.className =
        "form-message success";
    }


    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent =
        "SEND REGISTRATION BY EMAIL";
    }
  });
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {
  const navLinks =
    document.querySelectorAll(
      'a[href^="#"]'
    );

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}


/* =========================================================
   QUIZ BUTTON
   ========================================================= */

function setupQuizButton() {
  const quizButton =
    document.getElementById("start-quiz");

  if (!quizButton) {
    return;
  }

  quizButton.addEventListener(
    "click",
    function (event) {
      event.preventDefault();

      startQuiz();
    }
  );
}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

function setupEscapeKey() {
  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key !== "Escape") {
        return;
      }

      closeResult();
      closeCourseDetails();
    }
  );
}


/* =========================================================
   PAGE INITIALIZATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    displayCourses();

    setupRegistrationForm();

    setupNavigation();

    setupQuizButton();

    setupEscapeKey();

  }
);
