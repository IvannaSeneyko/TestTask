var taskDetailsController = angular.module('taskDetailsController', ['ngRoute']);
(function () {
    'use strict',
    taskAddController.controller('taskDetailsController', ['$location', 'tasksServices', '$routeParams',
        function ($location, tasksServices, $routeParams) {
            var vm = this;
            vm.priorities = ["Low", "Normal", "High"];
            vm.cancel = function () {
                $location.path('/task-list');
            };
            vm.updateTaskModel = function (data) {
                tasksServices.editTask(data).success(function (response) {
                    tasksServices.getAllTasks().success(function (response) {
                        vm.tasks = response;
                    });
                    $location.path('/task-list');
                })
            }
            tasksServices.getTask($routeParams.id).success(function (responce) {
                vm.task = responce;
            });
        }
    ]);
})();