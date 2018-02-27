// Trivia Game
//
//Create an object full of questions on a specific topic
//
//When user clicks start the first question will appear
//
//When the question appears a timer will start
//
//When time runs out it will show the correct answer then move on to the next question appears
//
//When question is answered correctly/incorrect it will show the correct anser then move on the next questions
//
//When all questions are answered a summary displays show total of questions answered correct or incorrect
//
$(function () {
    console.log("Hello Chris");
    //
    //------------------------------
    //Global Variables
    //------------------------------
    var numberOfCorrectAnswers = 0;
    var numberOfIncorrectAnswers = 0;
    var numberOfUnansweredQuestions = 0;
    // Set our count down number
    var number = 10;
    var intervalId;
    var questionNumber = 0;
    var selectedAnswer;
    var correctAnswer;
    var totalNumberOfQuestions = 2;
    //
    //------------------------------
    //Question Object
    //------------------------------

    var Theme1 = [
        {
            "questionNumber": 0,
            "question": "What is the name of Blue",
            "answer_1": "Blue",
            "answer_2": "Orange",
            "answer_3": "Red",
            "answer_4": "Brown",
            "correctAnswer": "Blue",
            "questinImage": "...",
            "questionCorrectImage": "...",
            "questionIncorrectImage": "...",
            "questionTheme": "...",
            "questionThemeImage": "...",
        },
        {
            "questionNumber": 1,
            "question": "What is the name of Red",
            "answer_1": "Blue",
            "answer_2": "Orange",
            "answer_3": "Red",
            "answer_4": "Brown",
            "correctAnswer": "Red",
            "questinImage": "...",
            "questionCorrectImage": "...",
            "questionIncorrectImage": "...",
            "questionTheme": "...",
            "questionThemeImage": "...",
        },
        {
            "questionNumber": 2,
            "question": "What is the name of Orange",
            "answer_1": "Blue",
            "answer_2": "Orange",
            "answer_3": "Red",
            "answer_4": "Brown",
            "correctAnswer": "Orange",
            "questinImage": "...",
            "questionCorrectImage": "...",
            "questionIncorrectImage": "...",
            "questionTheme": "...",
            "questionThemeImage": "...",
        },
    ]
    //
    //------------------------------
    //
    //------------------------------
    var decrement = () => {
        number--;
        $("#timerDisplay").html("<h2>" + number + "</h2>");
        if (number === 0) {
            $("#isCorrect").text("Time Up!");
            numberOfUnansweredQuestions++;
            showAnswerPage();
        }
    }
    var startTimer = () => {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    var showStartPage = () => {
        $("#startPage").css('display', 'show');
        $("#questionsPage").css('display', 'none');
        $("#answerPage").css('display', 'none');
        $("#summaryPage").css('display', 'none');
    }
    var showQuestionsPage = () => {
        startTimer();
        console.log("New question number: " + questionNumber);
        $("#startPage").css('display', 'none');
        $("#questionsPage").css('display', 'initial');
        $("#answerPage").css('display', 'none');
        $("#summaryPage").css('display', 'none');
        newQuestion();

    }
    var newQuestion = () => {
        $(".questionText").text(Theme1[questionNumber].question);
        $("#answer_1").text(Theme1[questionNumber].answer_1);
        $("#answer_2").text(Theme1[questionNumber].answer_2);
        $("#answer_3").text(Theme1[questionNumber].answer_3);
        $("#answer_4").text(Theme1[questionNumber].answer_4);
        clickAnswer();
    }
    var clickAnswer = () => {
        selectedAnswer = null;
        $("#answer_1").on("click", function () {
            selectedAnswer = Theme1[questionNumber].answer_1;
            showAnswerPage();
        });
        $("#answer_2").on("click", function () {
            selectedAnswer = Theme1[questionNumber].answer_2;
            showAnswerPage();
        });
        $("#answer_3").on("click", function () {
            selectedAnswer = Theme1[questionNumber].answer_3;
            showAnswerPage();
        });
        $("#answer_4").on("click", function () {
            selectedAnswer = Theme1[questionNumber].answer_4;
            showAnswerPage();
        });
    }
    var showAnswerPage = () => {
        $("#startPage").css('display', 'none');
        $("#questionsPage").css('display', 'none');
        $("#answerPage").css('display', 'initial');
        $("#summaryPage").css('display', 'none');
        $(".questionText").text(Theme1[questionNumber].question);
        correctAnswer = Theme1[questionNumber].correctAnswer;
        $("#correctAnswer").text("The correct answer is : " + Theme1[questionNumber].correctAnswer);
        checkAnswer();
    }
    var checkAnswer = () => {
        if (selectedAnswer === correctAnswer) {
            $("#isCorrect").text("Correct!");
            numberOfCorrectAnswers++;
            lastQuestionCheck();
        } else if (selectedAnswer === null) {
            numberOfUnansweredQuestions++;
            lastQuestionCheck();
        } else if (selectedAnswer != correctAnswer) {
            $("#isCorrect").text("Incorrect!");
            numberOfIncorrectAnswers++;
            lastQuestionCheck();
        }
        console.log("Selected Answer: " + selectedAnswer);
        console.log("Question Number: " + questionNumber);
        console.log("Total Questions: " + totalNumberOfQuestions);
        console.log("Correct : " + numberOfCorrectAnswers);
        console.log("Wrong : " + numberOfIncorrectAnswers);
        console.log("unanswered : " + numberOfUnansweredQuestions);
    }

    var lastQuestionCheck = () => {
        if (questionNumber < totalNumberOfQuestions) {
            setTimeout(showSummaryPage, (5 * 1000));
            questionNumber++;
            showQuestionsPage();
        } else {
            number = 10;
            setTimeout(newQuestion, (5 * 1000));
            showSummaryPage();
        }
    }
    var showSummaryPage = () => {
        $("#startPage").css('display', 'none');
        $("#questionsPage").css('display', 'none');
        $("#answerPage").css('display', 'none');
        $("#summaryPage").css('display', 'initial');
        $("#numberCorrect").text("Correct Answers : " + numberOfCorrectAnswers)
        $("#numberIncorrect").text("Incorrect Answers : " + numberOfIncorrectAnswers)
        $("#numberUnanswered").text("Unanswered : " + numberOfUnansweredQuestions)
    }
  
    showStartPage();
    $("#startButton").on("click", function () {
        showQuestionsPage();
    });

    //
    //------------------------------
    //
    //------------------------------









});