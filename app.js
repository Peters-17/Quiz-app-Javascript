angular.module('quizApp', [])
.controller('QuizController', ['$scope', function($scope) {
    $scope.score = null;
    $scope.questions = [
        {
            text: 'What is 1+1?',
            answers: [
                {text: '2'},
                {text: '3'},
                {text: '4'},
                {text: '5'}
            ],
            correctAnswerIndex: 0
        },
        {
            text: 'What color is the sky?',
            answers: [
                {text: 'Green'},
                {text: 'Blue'},
                {text: 'Red'},
                {text: 'Purple'}
            ],
            correctAnswerIndex: 1
        },
        {
            text: 'What is the capital of France?',
            answers: [
                {text: 'London'},
                {text: 'Paris'},
                {text: 'Berlin'},
                {text: 'Madrid'}
            ],
            correctAnswerIndex: 1
        },
        {
            text: 'Which language is used in Angular?',
            answers: [
                {text: 'JavaScript'},
                {text: 'TypeScript'},
                {text: 'Python'},
                {text: 'Java'}
            ],
            correctAnswerIndex: 1
        }
    ];
  
    $scope.getScore = function() {
        var score = 0;
        $scope.questions.forEach(function(question) {
            if (question.userAnswer === question.correctAnswerIndex) {
                score++;
            }
        });
        $scope.score = score;
    };
}]);
