var mainApp = angular.module('mainApp', ['ngRoute', 'ngResource', 'angularjs-datetime-picker', 'tasksController', 'taskAddController', 'taskDetailsController', 'tasksServices']);
mainApp.config(function ($routeProvider, $httpProvider) {
    $routeProvider.when('/tasks', {
        templateUrl: 'Scripts/app/views/tasks-list.html',
        controller: 'tasksListController'
    });
    $routeProvider.when('/task-details/:id', {
        templateUrl: 'Scripts/app/views/task-details.html',
        controller: 'taskDetailsController'
    });
    $routeProvider.when('/task-creation', {
        templateUrl: 'Scripts/app/views/task-creation.html',
        controller: 'taskAddController'
    });
    $routeProvider.otherwise({
        redirectTo: '/tasks'
    });
});