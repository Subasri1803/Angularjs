var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$timeout) {
    $scope.names = ["general", "moral", "mystery","comic"];
	 $scope.myHeader = "Helloooo";
  $timeout(function () {
      $scope.myHeader = "Ready to create your storyyyy????";
  }, 2000);
   $scope.disableClick = function (isDisabled) { 
            $scope.isDisabled = !isDisabled; 
            } 
			
	$scope.values=[{name:'The history of Tom Jones',Author:'Henry Fielding'},
		    {name:'Pride and Prejudice',Author:'Jane Austen'},
			{name:'The red and black',Author:'Stendhal'}];
			
	$scope.kp2=1000;
	 $scope.friends = [
    {name: 'History of Tom jones', author:'Henry Fielding'},
    {name: 'Pride and Prejudice', author:'Jane Austen'},
    {name: 'The red and black', author:'Stendhal'}
  ];
    $scope.show=false;
	
	 $scope.users = { 
                user: "" 
            }; 
            $scope.login = function () { 
                $scope.isShow = true; 
                $scope.name = $scope.users.user; 
                $scope.users = { 
                    user: "" 
                } 
            }; 
	 $scope.myObj = {
    "color" : "white",
    "background-color" : "coral",
    "font-size" : "60px",
    "padding" : "50px"
  }
			
	$scope.timeofday='we hope';
	$scope.greet='it is interesting';
  
});

app.controller('yrctrl',function($scope){
	   $scope.greet='you are learning';
});

