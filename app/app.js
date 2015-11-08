
var myApp = angular.module('myApp', [
	'ngRoute',
	'ui.bootstrap',
	'firebase'
	]).

	config(['$routeProvider', function($routeProvider){
		$routeProvider

		//route for home page
		.when('/home', {
			templateUrl : 'home/home.html',
			controller : 'mainCtrl'
		})

		//route for registration
		.when('/register', {
			templateUrl : 'register/register.html',
			controller: 'registerCtrl'
		})

		//route for profile
		.when('/profile', {
			templateUrl : 'profile/profile.html',
			controller: 'profileCtrl'
		})

		//route for game
		.when('/game', {
			templateUrl : 'game/game.html',
			controller : 'gameCtrl'
		})

	}]);


// create the controller and inject Angular's $scope
    myApp.controller('mainCtrl', function($scope) {
    	console.log('home controller is being called');
        $scope.message = 'home page controller!';


    });

// create controller for registration
	myApp.controller('registerCtrl', function($scope) {
    	console.log('register controller is being called');
        $scope.message = 'registration controller!';
    });

    // create controller for registration
	myApp.controller('profileCtrl', function($scope) {
    	console.log('profile controller is being called');
        $scope.message = 'profile controller!';
    });

    // create controller for registration
	myApp.controller('gameCtrl', function($scope, $http, $firebaseObject) {

		var ref = new Firebase("https://leap-learn.firebaseio.com");

		var question = $firebaseObject(ref.child('question'));
		question.$bindTo($scope, 'question');

		var choice1 = $firebaseObject(ref.child('choice1'));
		choice1.$bindTo($scope, 'choice1');

		var choice2 = $firebaseObject(ref.child('choice2'));
		choice2.$bindTo($scope, 'choice2');

		var choice3 = $firebaseObject(ref.child('choice3'));
		choice3.$bindTo($scope, 'choice3');

		var choice4 = $firebaseObject(ref.child('choice4'));
		choice4.$bindTo($scope, 'choice4');

		///////////////////////////////////////////////////////////////////////////////////////
		var question2 = $firebaseObject(ref.child('question2'));
		question2.$bindTo($scope, 'question2');

		var choice2_1 = $firebaseObject(ref.child('choice2_1'));
		choice2_1.$bindTo($scope, 'choice2_1');

		var choice2_2 = $firebaseObject(ref.child('choice2_2'));
		choice2_2.$bindTo($scope, 'choice2_2');

		var choice2_3 = $firebaseObject(ref.child('choice2_3'));
		choice2_3.$bindTo($scope, 'choice2_3');

		var choice2_4 = $firebaseObject(ref.child('choice2_4'));
		choice2_4.$bindTo($scope, 'choice2_4');

		///////////////////////////////////////////////////////////////////////////////////////
		var question3 = $firebaseObject(ref.child('question3'));
		question3.$bindTo($scope, 'question3');

		var choice3_1 = $firebaseObject(ref.child('choice3_1'));
		choice3_1.$bindTo($scope, 'choice3_1');

		var choice3_2 = $firebaseObject(ref.child('choice3_2'));
		choice3_2.$bindTo($scope, 'choice3_2');

		var choice3_3 = $firebaseObject(ref.child('choice3_3'));
		choice3_3.$bindTo($scope, 'choice3_3');

		var choice3_4 = $firebaseObject(ref.child('choice3_4'));
		choice3_4.$bindTo($scope, 'choice3_4');

		///////////////////////////////////////////////////////////////////////////////////////
		var question4 = $firebaseObject(ref.child('question4'));
		question4.$bindTo($scope, 'question4');

		var choice4_1 = $firebaseObject(ref.child('choice4_1'));
		choice4_1.$bindTo($scope, 'choice4_1');

		var choice4_2 = $firebaseObject(ref.child('choice4_2'));
		choice4_2.$bindTo($scope, 'choice4_2');

		var choice4_3 = $firebaseObject(ref.child('choice4_3'));
		choice4_3.$bindTo($scope, 'choice4_3');

		var choice4_4 = $firebaseObject(ref.child('choice4_4'));
		choice4_4.$bindTo($scope, 'choice4_4');

		///////////////////////////////////////////////////////////////////////////////////////
		var question5 = $firebaseObject(ref.child('question5'));
		question5.$bindTo($scope, 'question5');

		var choice5_1 = $firebaseObject(ref.child('choice5_1'));
		choice5_1.$bindTo($scope, 'choice5_1');

		var choice5_2 = $firebaseObject(ref.child('choice5_2'));
		choice5_2.$bindTo($scope, 'choice5_2');

		var choice5_3 = $firebaseObject(ref.child('choice5_3'));
		choice5_3.$bindTo($scope, 'choice5_3');

		var choice5_4 = $firebaseObject(ref.child('choice5_4'));
		choice5_4.$bindTo($scope, 'choice5_4');

		///////////////////////////////////////////////////////////////////////////////////////
		var question6 = $firebaseObject(ref.child('question6'));
		question6.$bindTo($scope, 'question6');

		var choice6_1 = $firebaseObject(ref.child('choice6_1'));
		choice6_1.$bindTo($scope, 'choice6_1');

		var choice6_2 = $firebaseObject(ref.child('choice6_2'));
		choice6_2.$bindTo($scope, 'choice6_2');

		var choice6_3 = $firebaseObject(ref.child('choice6_3'));
		choice6_3.$bindTo($scope, 'choice6_3');

		var choice6_4 = $firebaseObject(ref.child('choice6_4'));
		choice6_4.$bindTo($scope, 'choice6_4');

		///////////////////////////////////////////////////////////////////////////////////////
		var question7 = $firebaseObject(ref.child('question7'));
		question7.$bindTo($scope, 'question7');

		var choice7_1 = $firebaseObject(ref.child('choice7_1'));
		choice7_1.$bindTo($scope, 'choice7_1');

		var choice7_2 = $firebaseObject(ref.child('choice7_2'));
		choice7_2.$bindTo($scope, 'choice7_2');

		var choice7_3 = $firebaseObject(ref.child('choice7_3'));
		choice7_3.$bindTo($scope, 'choice7_3');

		var choice7_4 = $firebaseObject(ref.child('choice7_4'));
		choice7_4.$bindTo($scope, 'choice7_4');
			///////////////////////////////////////////////////





// 			    Leap.loop({hand: function(hand){
//
//
//
//
// 			      var screenPosition = hand.screenPosition(hand.palmPosition);
//
//              var x = screenPosition[0].toPrecision(4);
//              var y = screenPosition[1].toPrecision(4);
//
//
// 					 if(x > 1000){
// 						 if(y > 580){
// 							 window.alert('Correct!!');
// 						 }
// 					 }
//
// }});


			///////////////////////////////////////////////////////



        $scope.message = 'game controller!';
        $http({
  			method: 'GET',
  			//url: 'localhost:3000/leap'
  			url: '/'
		}).then(function successCallback(response) {
    	// this callback will be called asynchronously
   		// when the response is available
  		}, function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
  		});
    });
