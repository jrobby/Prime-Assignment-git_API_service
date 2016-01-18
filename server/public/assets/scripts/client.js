/**
 * Created by robbynewman on 1/16/16.
 */
console.log("connected");
var app = angular.module('myApp', []);

app.controller('myController', ['$scope', 'gitAPI', 'zenAPI', function($scope, gitAPI, zenAPI){
    $scope.myAPI = gitAPI.data;
    gitAPI.call();

    $scope.zenAPI = zenAPI.data;
    zenAPI.call();





}]);


app.factory('gitAPI', ['$http', function($http){

    var data = {};
    var call= function(){
        $http.jsonp('https://api.github.com/users/jrobby/events?callback=JSON_CALLBACK').then(function(response){
            //console.log(response);
            data.results=response.data;

        });

    }

    return {
        data:data,
        call: call
    }
}]);


app.factory('zenAPI', ['$http', function($http){

    var data = {};
    var call = function (){
        $http.get('https://api.github.com/zen').then(function(response){
            data.results=response.data;
        });
    }

    return {
        data:data,
        call:call
    }
}]);