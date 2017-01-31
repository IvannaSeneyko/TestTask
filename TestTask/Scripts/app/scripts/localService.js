var tasksServices = angular.module('tasksServices', ['ngResource']);

tasksServices.service('tasksServices', ['$http', function ($http) {
    this.getAllTasks = function () {
        return $http({
            url: 'api/taskmodels/gettasks',
            method: "Get"
        });
    };
    this.getTask = function (data) {
        return $http({
            url: 'api/taskmodels/gettaskmodel?id=' + data,
            method: "Get"
        });
    }
    this.createTask = function (data) {
        return $http({
            url: 'api/taskmodels/posttaskmodel',
            method: "Post",
            data: data
        });
    };
    this.completeTask = function (data) {
        return $http({
            url: 'api/taskmodels/completetaskmodel',
            method: "Post",
            data: data
        });
    };
    this.deleteTask = function (data) {
        return $http.delete('api/taskmodels/deletetaskmodel/?id=' + data);
    };
    this.editTask = function (data) {
        return $http({
            url: 'api/taskmodels/puttaskmodel',
            method: "Put",
            data: data
        });
    };
}]);