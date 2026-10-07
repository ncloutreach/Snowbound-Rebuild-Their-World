/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label><br>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "1.	What is causing the polar bear’s ice to shrink?",  ///// Write the question inside double quotes
      answers: {
        a: "Climate change",                  ///// Write the option 1 inside double quotes
        b: "Weight of polar bear",
        c: "Rains",               ///// Write the option 2 inside double quotes
        d: "Using ice slides"
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    }, {
      question: "2.	Why do polar bears need sea ice to live?",  ///// Write the question inside double quotes
      answers: {
        a: "For playing games",                  ///// Write the option 1 inside double quotes
        b: "To hunt seals and travel",
        c: "For camping",               ///// Write the option 2 inside double quotes
        d: "To keep their fur clean"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    }, {
      question: "3.	What happens to polar bears when the sea ice melts too quickly?",  ///// Write the question inside double quotes
      answers: {
        a: "Their population grows",                  ///// Write the option 1 inside double quotes
        b: "Finding food will be difficult for them",
        c: "Their eyes become green",               ///// Write the option 2 inside double quotes
        d: "They become happy"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    }, {
      question: "4. What is one main reason for the ice caps melting?",  ///// Write the question inside double quotes
      answers: {
        a: "Cold drinks",                  ///// Write the option 1 inside double quotes
        b: "Global warming",
        c: "Too much snow",               ///// Write the option 2 inside double quotes
        d: "Weight of polar bears"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    }, {
      question: "5. What can we do to help stop the ice from melting?",  ///// Write the question inside double quotes
      answers: {
        a: "Reduce the global warming",                  ///// Write the option 1 inside double quotes
        b: "Do not touch the ice",
        c: "Nothing",               ///// Write the option 2 inside double quotes
        d: "Be optimistic"
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    }
    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
