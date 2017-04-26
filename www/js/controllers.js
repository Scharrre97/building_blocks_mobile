angular.module('building-blocks.controllers', [])

  .controller('HomeController', function($scope, News) {

    $scope.news = News.query();
  })

.controller('FacilityController', function($scope, Facility, ionicDatePicker) {
   $scope.facilities = Facility.query();

   var ipObj1 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
      },
      disabledDates: [],
      from: new Date(2017, 2, 26), //Optional
      to: new Date(2019, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      disableWeekdays: [],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    };

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };
  })

  .controller('HelpRequestController', function($scope, $location, HelpRequest) {
    $scope.error = null;
    $scope.help_request = {};

    $scope.createHelpRequest = function() {
      HelpRequest.save($scope.help_request, function(response) {
        $scope.error = null;
        $scope.message = response.message;
      }, function(error) {
        $scope.error = error.data.message;
      });
    }
  })

  .controller('UserController', function($scope, $auth, $state, AuthService) {
    $scope.registrationData = {};
    $scope.loginData = {};
    $scope.register = true;
    $scope.handleRegBtnClick = function() {
      AuthService.save($scope.registrationData, function(resp) {
          $state.go('tab.home');
        },
        function(error) {
          $scope.errors = error.data.errors.full_messages || error.data.errors;
        })
    }

    $scope.handleLgnBtnClick = function() {
      $auth.submitLogin($scope.loginData)
        .then(function(resp) {
          $state.go('tab.home');
        })
        .catch(function(error) {
          $scope.errors = error.errors;
        });
    }

    $scope.toggleToLgnBtnClick = function() {
      $scope.register = $scope.register !== true;
    };

    $scope.handleSignOutBtnClick = function() {
      $auth.signOut()
        .then(function(resp) {
          $state.go('user');
        })
        .catch(function(resp) {

        });
    };
  });
