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
    var timer = 10;
    var intervalId;
    var qNum = -1;
    var selectedAnswer;
    var correctAnswer;
    var totalNumberOfQuestions = 8;
    var choice;
    var running = false;
    //
    //------------------------------
    //Question Object
    //------------------------------

    var questionSet = [
        {
            "questionNumber": 0,
            "question": "What is the favorite food of the Teenage Mutant Ninja Turtles?",
            "answer_1": "Hamburgers",
            "answer_2": "Pizza",
            "answer_3": "Tacos",
            "answer_4": "Salad",
            "correctChoice": "answer_2",
            "correctAnswer": "Pizza",
            "questionImage": "../images/ninjaturtles.jpg",
            "imageName": "Ninja_Turtles",
        },
        {
            "questionNumber": 1,
            "question": "Who directed the 2018 superhero film Black Panther?",
            "answer_1": "Steven Spielberg",
            "answer_2": "Christopher Nolan",
            "answer_3": "Quentin Tarantino",
            "answer_4": "Ryan Coogler",
            "correctChoice": "answer_4",
            "correctAnswer": "Ryan Coogler",
            "questionImage": "../images/killmonger.jpg",
            "imageName": "Ryan_Coogler",
        },
        {
            "questionNumber": 3,
            "question": "In the movie The Terminator, what is the name of the company that created Skynet?",
            "answer_1": "Umbrella Company",
            "answer_2": "Star Labs",
            "answer_3": "Stark Industries",
            "answer_4": "Cyberdyne Systems",
            "correctChoice": "answer_4",
            "correctAnswer": "Cyberdyne Systems",
            "questionImage": "../assets/images/terminator.jpg",
            "imageName": "terminator",
        },
        {
            "questionNumber": 4,
            "question": "Emma Watson is known for playing which character in Harry Potter?",
            "answer_1": "Hermoine Granger",
            "answer_2": "Luna Lovegood",
            "answer_3": "Hannah Montanna",
            "answer_4": "Ginny Weasley",
            "correctChoice": "answer_1",
            "correctAnswer": "Hermoine Granger",
            "questionImage": "../assets/images/harry_potter.jpg",
            "imageName": "harry_potter",
        },
        {
            "questionNumber": 5,
            "question": "Bruce Banner turns into what fictional superhero when he becomes angry?",
            "answer_1": "The Thing",
            "answer_2": "The Hulk",
            "answer_3": "The Monster",
            "answer_4": "The Destroyer",
            "correctChoice": "answer_2",
            "correctAnswer": "The Hulk",
            "questionImage": "../assets/images/hulk.jpg",
            "imageName": "hulk",
        },
        {
            "questionNumber": 6,
            "question": "Which actor played Marty McFly in the 1980s sci-fi classic Back to the Future?",
            "answer_1": "Matt Dillon",
            "answer_2": "Ralph Macchio",
            "answer_3": "Corey Feldman",
            "answer_4": "Micheal J. Fox",
            "correctChoice": "answer_4",
            "correctAnswer": "Micheal J. Fox",
            "questionImage": "../assets/images/backtofuture.jpg",
            "imageName": "backtofuture",
        },
        {
            "questionNumber": 7,
            "question": "Who played the female lead in the dystopian political thriller V for Vendetta?",
            "answer_1": "Natalie Portman",
            "answer_2": "Drew Barrymore",
            "answer_3": "Jessica Biel",
            "answer_4": "Reese Witherspoon",
            "correctChoice": "answer_1",
            "correctAnswer": "Natalie Portman",
            "questionImage": "../images/vendetta.jpg",
            "imageName": "Vendetta",
        },
        {
            "questionNumber": 8,
            "question": "Tyler Durden is a ficitional character appearing as the central protagonist and antagonist in what 1999 American film?",
            "answer_1": "The Matrix",
            "answer_2": "Fight Club",
            "answer_3": "The Sixth Sense",
            "answer_4": "Office Space",
            "correctChoice": "answer_2",
            "correctAnswer": "Fight Club",
            "questionImage": "../assets/images/fightclub.jpg",
            "imageName": "fightclub",
        },
        {
            "questionNumber": 9,
            "question": "In the Star Wars universe, who is Luke Skywalker's mother?",
            "answer_1": "Shimi Skywalker",
            "answer_2": "Padme Amidala",
            "answer_3": "Ashoka Tano",
            "answer_4": "Liea Organa",
            "correctChoice": "answer_2",
            "correctAnswer": "Padme Amidala",
            "questionImage": "../assets/images/starwars.jpg",
            "imageName": "starwars",
        },
    ]
    //
    //------------------------------
    //
    //------------------------------
    var decrement = () => {
        timer--;
        $("#timerDisplay").html("<h2>" + timer + "</h2>");
        if (timer === 0) {
            $("#isCorrect").text("Time Up!");
            numberOfUnansweredQuestions++;
            console.log('timer')
            showAnswerPage();
        }
    }
    var startTimer = () => {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }
    var stopTimer = () => {
        running = false;
        clearInterval(intervalId)
    }
    var showStartPage = () => {
        $("#startPage").show();
        $("#questionsPage").hide();
        $("#answerPage").hide();
        $("#summaryPage").hide();
    }
    var showQuestionsPage = () => {
        qNum++;
        startTimer();
        $("#startPage").hide();
        $("#questionsPage").show();
        $("#answerPage").hide();
        $("#summaryPage").hide();
        $(".questionText").text(questionSet[qNum].question);
        $("#answer_1").text(questionSet[qNum].answer_1);
        $("#answer_2").text(questionSet[qNum].answer_2);
        $("#answer_3").text(questionSet[qNum].answer_3);
        $("#answer_4").text(questionSet[qNum].answer_4);

    }
    var showAnswerPage = () => {
        $("#startPage").hide();
        $("#questionsPage").hide();
        $("#answerPage").show();
        $("#summaryPage").hide();
        $(".questionText").text(questionSet[qNum].question);
        $("#correctAnswer").text("The correct answer is : " + questionSet[qNum].correctAnswer);
        // $(".answerImage").html('<img src='+questionSet[qNum].questionImage+' alt="'+questionSet[qNum].imageName+'">');
        console.log(correctAnswer);
        console.log(selectedAnswer);
        if (qNum < totalNumberOfQuestions) {
            timer = 30
            setTimeout(showQuestionsPage, (5000));
        } else {
            setTimeout(showSummaryPage, (5000));
        }
    }


    var showSummaryPage = () => {
        $("#startPage").hide();
        $("#questionsPage").hide();
        $("#answerPage").hide();
        $("#summaryPage").show();
        $("#numberCorrect").text("Correct Answers : " + numberOfCorrectAnswers)
        $("#numberIncorrect").text("Incorrect Answers : " + numberOfIncorrectAnswers)
        $("#numberUnanswered").text("Unanswered : " + numberOfUnansweredQuestions)
        qNum = -1;

    }
    showStartPage();
    $("#startButton").on("click", function () {
        showQuestionsPage();
    });

    $(".answer").on("click", function () {
        selectedAnswer = null;
        selectedAnswer = this.id
        console.log('selected : ' + selectedAnswer);
        correctAnswer = questionSet[qNum].correctChoice;
        console.log('correct : ' + correctAnswer);
        // console.log("Question Number: " + qNum);
        // console.log("Total Questions: " + totalNumberOfQuestions);
        if (selectedAnswer === correctAnswer) {
            $("#isCorrect").text("Correct!");
            numberOfCorrectAnswers++;

        } else if (selectedAnswer != correctAnswer) {
            $("#isCorrect").text("Incorrect!");
            numberOfIncorrectAnswers++;
        }
        stopTimer();
        showAnswerPage();
    });
    $("#restartButton").on("click", function () {
        numberOfCorrectAnswers = 0;
        numberOfIncorrectAnswers = 0;
        numberOfUnansweredQuestions = 0;
        showQuestionsPage();
    });
});