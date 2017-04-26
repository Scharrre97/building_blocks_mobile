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
    HelpRequest.save($scope.help_request, function(response){
      $scope.error = null;
      $scope.message = response.message;
    }, function(error){
      $scope.error = error.data.message;
    });
  }
});
