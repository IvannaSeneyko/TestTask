var taskAddController = angular.module('taskAddController', []);
(function () {
    'use strict',
    taskAddController.controller('taskAddController', ['$location', 'tasksServices',
        function ($location, tasksServices) {
            var vm = this;
            vm.priorities = ["Low", "Normal", "High"];
            vm.createTaskModel = function () {
                vm.task.complete = false;
                tasksServices.createTask(vm.task).success(function () {
                    $location.path('/tasks');
                });
            }
            vm.cancel = function () {
                $location.path('/task-list');
            };
        }
    ]);
})();