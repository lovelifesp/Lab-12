var app = angular.module("myModule",[]);

app.controller("toDo",function($scope){
  $scope.thingsToDo = ["Buy Eggs", "Pick up dry cleaning","Clean fish tank"];
  $scope.addItem =function(){
  $scope.thingsToDo.push($scope.item);
}
  $scope.removeItem=function(){
    $scope.thingsToDo.splice(app, 1);
  }
});
