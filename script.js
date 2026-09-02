/* =========================================
   STI ACADEMY - SCRIPT
========================================= */


/* =========================================
   COURSES
========================================= */

const courses = [
  {
    name: "Web Development",
    short: "Build websites and digital products.",
    description:
      "Learn how to create functional websites and digital experiences using modern web development skills.",
    icon: "</>",
    color: "development"
  },

  {
    name: "Web Design",
    short: "Design beautiful digital experiences.",
    description:
      "Learn how to plan and design attractive, user-friendly websites and digital interfaces.",
    icon: "◈",
    color: "webdesign"
  },

  {
    name: "Graphic Design",
    short: "Turn ideas into powerful visuals.",
    description:
      "Learn how to create professional graphics, visual identities and digital designs.",
    icon: "✦",
    color: "graphic"
  },

  {
    name: "Video Editing",
    short: "Create engaging visual stories.",
    description:
      "Learn how to edit videos, create engaging content and turn raw footage into professional visual stories.",
    icon: "▶",
    color: "video"
  },

  {
    name: "Social Media Management",
    short: "Help brands grow online.",
    description:
      "Learn how to manage social media pages, create content, engage audiences and help brands grow online.",
    icon: "@",
    color: "social"
  }
];


/* =========================================
   QUIZ QUESTIONS
========================================= */

const quizQuestions = [

  {
    question: "What do you usually enjoy doing when you have free time?",

    options: [
      {
        text: "Figuring things out or learning how things work",
        scores: {
          webdev: 3,
          webdesign: 1,
          graphic: 0,
          video: 0,
          social: 1
        }
      },

      {
        text: "Drawing, designing or making things look beautiful",
        scores: {
          webdev: 0,
          webdesign: 3,
          graphic: 3,
          video: 1,
          social: 0
        }
      },

      {
        text: "Watching movies, creating content or telling stories",
        scores: {
          webdev: 0,
          webdesign: 1,
          graphic: 1,
          video: 3,
          social: 2
        }
      },

      {
        text: "Browsing social media and interacting with people",
        scores: {
          webdev: 0,
          webdesign: 0,
          graphic: 1,
          video: 1,
          social: 3
        }
      },

      {
        text: "Exploring new ideas and experimenting",
        scores: {
          webdev: 2,
          webdesign: 2,
          graphic: 1,
          video: 2,
          social: 1
        }
      }
    ]
  },


  {
    question: "How would you describe yourself?",

    options: [
      {
        text: "Logical and curious",
        scores: {
          webdev: 3,
          webdesign: 1,
          graphic: 0,
          video: 0,
          social: 1
        }
      },

      {
        text: "Creative and imaginative",
        scores: {
          webdev: 0,
          webdesign: 3,
          graphic: 3,
          video: 2,
          social: 0
        }
      },

      {
        text: "Expressive and energetic",
        scores: {
          webdev: 0,
          webdesign: 1,
          graphic: 1,
          video: 3,
          social: 2
        }
      },

      {
        text: "Social and communicative",
        scores: {
          webdev: 0,
          webdesign: 0,
          graphic: 0,
          video: 1,
          social: 3
        }
      },

      {
        text: "A mixture of everything",
        scores: {
          webdev: 1,
          webdesign: 1,
          graphic: 1,
          video: 1,
          social: 1
        }
      }
    ]
  },


  {
    question: "When you're given a difficult task, what's your first reaction?",

    options: [
      {
        text: "I break it down and solve it step by step",
        scores: {
          webdev: 3,
          webdesign: 1,
          graphic: 0,
          video: 0,
          social: 1
        }
      },

      {
        text: "I think of a creative way to approach it",
        scores: {
          webdev: 1,
          webdesign: 3,
          graphic: 3,
          video: 2,
          social: 1
        }
      },

      {
        text: "I try different things until something works",
        scores: {
          webdev: 2,
          webdesign: 2,
          graphic: 1,
          video: 3,
          social: 1
        }
      },

      {
        text: "I ask people for ideas or feedback",
        scores: {
          webdev: 0,
          webdesign: 1,
          graphic: 1,
          video: 1,
          social: 3
        }
      },

      {
        text: "I research and learn more about it",
        scores: {
          webdev: 3,
          webdesign: 1,
          graphic: 1,
          video: 1,
          social: 2
        }
      }
    ]
  },


  {
    question: "Which environment would you enjoy working in most?",

    options: [
      {
        text: "Quiet and focused",
        scores: {
          webdev: 3,
          webdesign: 2,
          graphic: 1,
          video: 1,
          social: 0
        }
      },

      {
        text: "Creative and flexible",
        scores: {
          webdev: 1,
          webdesign: 3,
          graphic: 3,
          video: 2,
          social: 1
        }
      },

      {
        text: "Fast-paced and exciting",
        scores: {
          webdev: 1,
          webdesign: 1,
          graphic: 1,
          video: 3,
          social: 2
        }
      },

      {
        text: "Social and interactive",
        scores: {
          webdev: 0,
          webdesign: 1,
          graphic: 1,
          video: 2,
          social: 3
        }
      },

      {
        text: "A combination of different environments",
        scores: {
          webdev: 1,
          webdesign: 2,
          graphic: 1,
          video: 2,
          social: 2
        }
      }
    ]
  },


  {
    question: "What gives you the most satisfaction?",

    options: [
      {
        text: "Solving a problem",
        scores: {
          webdev: 3,
          webdesign: 1,
          graphic: 0,
          video: 0,
          social: 1
        }
      },

      {
        text: "Creating something beautiful",
        scores: {
          webdev: 0,
          webdesign: 3,
          graphic: 3,
          video: 1,
          social: 0
        }
      },

      {
        text: "Telling a story or entertaining people",
        scores: {
          webdev: 0,
          webdesign: 1,
          graphic: 1,
          video: 3,
          social: 2
        }
      },

      {
        text: "Connecting with people",
        scores: {
          webdev: 0,
          webdesign: 0,
          graphic: 0,
          video: 1,
          social: 3
        }
      },

      {
        text: "Turning an idea into something real",
        scores: {
          webdev: 2,
          webdesign: 2,
          graphic: 2,
          video: 2,
          social: 1
        }
      }
    ]
  },


  {
    question: "If you had to create something for a new business, which part would interest you most?",

    options: [
      {
        text: "Making the system work",
        scores: {
          webdev: 3,
          webdesign: 1,
          graphic: 0,
          video: 0,
          social: 0
        }
      },

      {
        text: "Making the brand look good",
        scores: {
          webdev: 0,
          webdesign: 3,
          graphic: 3,
          video: 1,
          social: 1
        }
      },

      {
        text: "Creating promotional content",
        scores: {
          webdev: 0,
          webdesign: 1,
          graphic: 1,
          video: 3,
          social: 2
        }
      },

      {
        text: "Getting people interested in the business",
        scores: {
          webdev: 0,
          webdesign: 0,
          graphic: 1,
          video: 1,
          social: 3
        }
      },

      {
        text: "Planning the whole digital experience",
        scores: {
          webdev: 2,
          webdesign: 3,
          graphic: 1,
          video: 1,
          social: 2
        }
      }
    ]
  },


  {
    question: "How do you normally express your ideas?",

    options: [
      {
        text: "Through logic and explanations",
        scores: {
          webdev: 3,
          webdesign: 1,
          graphic: 0,
          video: 0,
          social: 1
        }
      },

      {
        text: "Through images and designs",
        scores: {
          webdev: 0,
          webdesign: 3,
          graphic: 3,
          video: 1,
          social: 0
        }
      },

      {
        text: "Through videos and storytelling",
        scores: {
          webdev: 0,
          webdesign: 1,
          graphic: 1,
          video: 3,
          social: 2
        }
      },

      {
        text: "Through conversations and social media",
        scores: {
          webdev: 0,
          webdesign: 0,
          graphic: 1,
          video: 1,
          social: 3
        }
      },

      {
        text: "Through a combination of different methods",
        scores: {
          webdev: 1,
          webdesign: 2,
          graphic: 2,
          video: 2,
          social: 2
        }
      }
    ]
  },


  {
    question: "What kind of achievement would make you proudest?",

    options: [
      {
        text: "Building something that actually works",
        scores: {
          webdev: 3,
          webdesign: 1,
          graphic: 0,
          video: 0,
          social: 1
        }
      },

      {
        text: "Creating a design people love",
        scores: {
          webdev: 0,
          webdesign: 3,
          graphic: 3,
          video: 1,
          social: 0
        }
      },

      {
        text: "Creating a video people can't stop watching",
        scores: {
          webdev: 0,
          webdesign: 0,
          graphic: 1,
          video: 3,
          social: 2
        }
      },

      {
        text: "Growing a page or brand successfully",
        scores: {
          webdev: 0,
          webdesign: 0,
          graphic: 1,
          video: 2,
          social: 3
        }
      },

      {
        text: "Creating something completely new",
        scores: {
          webdev: 2,
          webdesign: 2,
          graphic: 2,
          video: 2,
          social: 1
        }
      }
    ]
  },


  {
    question: "What matters most to you when choosing a career?",

    options: [
      {
        text: "Problem-solving and intellectual challenge",
        scores: {
          webdev: 3,
          webdesign: 1,
          graphic: 0,
          video: 0,
          social: 1
        }
      },

      {
        text: "Creativity and self-expression",
        scores: {
          webdev: 0,
          webdesign: 3,
          graphic: 3,
          video: 2,
          social: 1
        }
      },

      {
        text: "Freedom to create and tell stories",
        scores: {
          webdev: 0,
          webdesign: 1,
          graphic: 1,
          video: 3,
          social: 2
        }
      },

      {
        text: "Communication and influence",
        scores: {
          webdev: 0,
          webdesign: 0,
          graphic: 1,
          video: 1,
          social: 3
        }
      },

      {
        text: "Flexibility and opportunities to grow",
        scores: {
          webdev: 2,
          webdesign: 2,
          graphic: 1,
          video: 2,
          social: 2
        }
      }
    ]
  },


  {
    question: "Imagine you become extremely skilled at one thing. Which outcome would excite you most?",

    options: [
      {
        text: "Being able to build useful digital products",
        scores: {
          webdev: 3,
          webdesign: 1,
          graphic: 0,
          video: 0,
          social: 1
        }
      },

      {
        text: "Creating beautiful digital experiences",
        scores: {
          webdev: 1,
          webdesign: 3,
          graphic: 2,
          video: 1,
          social: 0
        }
      },

      {
        text: "Producing professional visual content",
        scores: {
          webdev: 0,
          webdesign: 1,
          graphic: 2,
          video: 3,
          social: 1
        }
      },

      {
        text: "Helping brands become successful online",
        scores: {
          webdev: 0,
          webdesign: 0,
          graphic: 1,
          video: 2,
          social: 3
        }
      },

      {
        text: "Having a versatile digital skillset",
        scores: {
          webdev: 2,
          webdesign: 2,
          graphic: 2,
          video: 2,
          social: 2
        }
      }
    ]
  }

];


/* =========================================
   QUIZ VARIABLES
========================================= */

let currentQuestion = 0;

let quizScores = {
  webdev: 0,
  webdesign: 0,
  graphic: 0,
  video: 0,
  social: 0
};

let selectedAnswers = [];

let recommendedCourse = "";


/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

  currentQuestion = 0;

  quizScores = {
    webdev: 0,
    webdesign: 0,
    graphic: 0,
    video: 0,
    social: 0
  };

  selectedAnswers = [];

  const start = document.getElementById("quiz-start");
  const container = document.getElementById("quiz-container");
  const popup = document.getElementById("result-popup");

  if (start) {
    start.classList.add("hidden");
  }

  if (popup) {
    popup.classList.add("hidden");
  }

  if (container) {
    container.classList.remove("hidden");
  }

  showQuestion();

  document
    .getElementById("quiz")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

  const container = document.getElementById("quiz-container");

  if (!container) return;

  const question = quizQuestions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / quizQuestions.length) * 100;

  let optionsHTML = "";

  question.options.forEach((option, index) => {

    optionsHTML += `
      <button
        type="button"
        class="quiz-option"
        onclick="selectAnswer(${index})"
      >
        <span class="option-letter">
          ${String.fromCharCode(65 + index)}
        </span>

        <span>
          ${option.text}
        </span>
      </button>
    `;

  });


  container.innerHTML = `

    <div class="quiz-progress">

      <div class="quiz-progress-top">

        <span>
          Question ${currentQuestion + 1} of ${quizQuestions.length}
        </span>

        <span>
          ${Math.round(progress)}%
        </span>

      </div>

      <div class="progress-track">
        <div
          class="progress-bar"
          style="width:${progress}%"
        ></div>
      </div>

    </div>


    <div class="question-box">

      <p class="question-number">
        QUESTION ${String(currentQuestion + 1).padStart(2, "0")}
      </p>

      <h3>
        ${question.question}
      </h3>

      <div class="quiz-options">
        ${optionsHTML}
      </div>

    </div>

  `;

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(optionIndex) {

  const question = quizQuestions[currentQuestion];

  const selectedOption =
    question.options[optionIndex];

  if (!selectedOption) return;


  /* Add the selected scores */

  Object.keys(selectedOption.scores).forEach(course => {

    quizScores[course] +=
      selectedOption.scores[course];

  });


  selectedAnswers.push(optionIndex);


  /* Move to next question */

  currentQuestion++;


  if (currentQuestion >= quizQuestions.length) {

    showQuizResult();

  } else {

    showQuestion();

  }

}


/* =========================================
   CALCULATE RESULT
========================================= */

function getRecommendedCourse() {

  const scores = quizScores;

  const highestScore =
    Math.max(...Object.values(scores));


  const winners = Object.keys(scores).filter(
    key => scores[key] === highestScore
  );


  /*
    If there is a tie, use a secondary
    preference based on the user's answers.
  */

  if (winners.length > 1) {

    const preferenceOrder = [
      "webdev",
      "webdesign",
      "graphic",
      "video",
      "social"
    ];

    for (const key of preferenceOrder) {

      if (winners.includes(key)) {
        return key;
      }

    }

  }

  return winners[0];

}


/* =========================================
   RESULT TEXT
========================================= */

function getRecommendationText(courseKey) {

  const explanations = {

    webdev:
      "Your answers show strong problem-solving, curiosity and an interest in understanding how things work. Web Development could be a great fit because it gives you the opportunity to turn ideas into functional digital products.",

    webdesign:
      "Your answers show a strong interest in creativity, visual thinking and creating experiences that people enjoy using. Web Design could be a great fit for your strengths.",

    graphic:
      "Your answers show strong creative instincts and an interest in visual communication. Graphic Design could be a great fit because it allows you to turn ideas into powerful visual designs.",

    video:
      "Your answers show an interest in creativity, storytelling and visual content. Video Editing could be a great fit because it allows you to communicate ideas through engaging videos.",

    social:
      "Your answers show strong communication, people skills and an interest in online communities and brands. Social Media Management could be a great fit for you."
  };

  return explanations[courseKey] || "";
}


/* =========================================
   SHOW QUIZ RESULT
========================================= */

function showQuizResult() {

  const resultKey =
    getRecommendedCourse();

  recommendedCourse = resultKey;


  const names = {
    webdev: "Web Development",
    webdesign: "Web Design",
    graphic: "Graphic Design",
    video: "Video Editing",
    social: "Social Media Management"
  };


  const courseName = names[resultKey];


  const courseElement =
    document.getElementById("recommended-course");

  const textElement =
    document.getElementById("recommendation-text");

  const popup =
    document.getElementById("result-popup");


  if (courseElement) {

    courseElement.innerHTML = `
      <div class="result-course">
        ${courseName}
      </div>
    `;

  }


  if (textElement) {

    textElement.textContent =
      getRecommendationText(resultKey);

  }


  if (popup) {

    popup.classList.remove("hidden");

  }

}


/* =========================================
   CLOSE RESULT
========================================= */

function closeResult() {

  const popup =
    document.getElementById("result-popup");

  if (popup) {
    popup.classList.add("hidden");
  }

}


/* =========================================
   REGISTER RECOMMENDED COURSE
========================================= */

function registerRecommendedCourse() {

  const courseNames = {

    webdev: "Web Development",
    webdesign: "Web Design",
    graphic: "Graphic Design",
    video: "Video Editing",
    social: "Social Media Management"

  };


  const course =
    courseNames[recommendedCourse];


  const courseSelect =
    document.getElementById("course");


  if (courseSelect && course) {

    courseSelect.value = course;

  }


  closeResult();


  const registerSection =
    document.getElementById("register");


  if (registerSection) {

    registerSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


/* =========================================
   DISPLAY COURSES
========================================= */

function displayCourses() {

  const courseList =
    document.getElementById("course-list");

  if (!courseList) return;


  courseList.innerHTML = "";


  courses.forEach((course, index) => {

    const card =
      document.createElement("div");

    card.className =
      `course-card ${course.color}`;


    card.innerHTML = `

      <div class="course-icon">
        ${course.icon}
      </div>

      <span class="course-number">
        0${index + 1}
      </span>

      <h3>
        ${course.name}
      </h3>

      <p>
        ${course.short}
      </p>

      <button
        type="button"
        class="course-link"
        onclick="showCourseDetails('${course.name}')"
      >
        VIEW COURSE
        <span>→</span>
      </button>

    `;


    courseList.appendChild(card);

  });

}


/* =========================================
   COURSE DETAILS
========================================= */

function showCourseDetails(courseName) {

  const course =
    courses.find(
      item => item.name === courseName
    );


  if (!course) return;


  const section =
    document.getElementById("course-details");

  const content =
    document.getElementById("details-content");


  if (!section || !content) return;


  content.innerHTML = `

    <div class="details-card">

      <button
        type="button"
        class="details-close"
        onclick="closeCourseDetails()"
      >
        ×
      </button>

      <p class="eyebrow">
        COURSE DETAILS
      </p>

      <div class="details-icon">
        ${course.icon}
      </div>

      <h2>
        ${course.name}
      </h2>

      <p class="details-description">
        ${course.description}
      </p>

      <div class="details-info">

        <div>
          <span>Course Fee</span>
          <strong>₦10,000</strong>
        </div>

        <div>
          <span>Learning Format</span>
          <strong>LIVE CLASSES</strong>
        </div>

        <div>
          <span>Missed Class?</span>
          <strong>RECORDING SHARED</strong>
        </div>

      </div>

      <button
        type="button"
        class="btn primary"
        onclick="selectCourse('${course.name}')"
      >
        REGISTER FOR THIS COURSE
      </button>

    </div>

  `;


  section.classList.remove("hidden");


  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================================
   CLOSE COURSE DETAILS
========================================= */

function closeCourseDetails() {

  const section =
    document.getElementById("course-details");

  if (section) {
    section.classList.add("hidden");
  }

}


/* =========================================
   SELECT COURSE
========================================= */

function selectCourse(courseName) {

  const select =
    document.getElementById("course");


  if (select) {

    select.value = courseName;

  }


  closeCourseDetails();


  const register =
    document.getElementById("register");


  if (register) {

    register.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


/* =========================================
   REGISTRATION FORM
========================================= */

function setupRegistrationForm() {

  const form =
    document.getElementById("registration-form");


  if (!form) return;


  form.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const name =
        document.getElementById("name").value.trim();

      const phone =
        document.getElementById("phone").value.trim();

      const email =
        document.getElementById("email").value.trim();

      const course =
        document.getElementById("course").value;

      const reference =
        document.getElementById("reference").value.trim();


      const message =
        document.getElementById("form-message");


      /*
        WhatsApp cannot automatically attach
        a payment receipt from a normal website.
        The student will attach it manually.
      */

      const whatsappMessage =

`Hello STI Academy Admin,

I want to register for STI Academy.

Full Name: ${name}
Phone Number: ${phone}
Email: ${email}
Course: ${course}
Payment Reference: ${reference}

I have made the ₦10,000 payment.

Please confirm my payment and registration.

I will attach my payment receipt in this WhatsApp chat.`;


      const whatsappURL =
        "https://wa.me/2348131525874?text=" +
        encodeURIComponent(whatsappMessage);


      if (message) {

        message.textContent =
          "Opening WhatsApp... Please attach your payment receipt before sending.";

        message.className =
          "form-message success";

      }


      window.open(
        whatsappURL,
        "_blank"
      );

    }
  );

}


/* =========================================
   SMOOTH NAVIGATION
========================================= */

function setupNavigation() {

  const links =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  links.forEach(link => {

    link.addEventListener(
      "click",
      function (event) {

        const targetID =
          this.getAttribute("href");


        if (
          !targetID ||
          targetID === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(targetID);


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      closeResult();
      closeCourseDetails();

    }

  }
);


/* =========================================
   INITIALIZE WEBSITE
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    displayCourses();

    setupRegistrationForm();

    setupNavigation();

  }
);
