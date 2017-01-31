var tasksController = angular.module('tasksController', []);
(function () {
    'use strict',
    tasksController.controller('tasksListController', ['$location', 'tasksServices',
        function ($location, tasksServices) {
            var vm = this;
            vm.deleteTaskModel = function (data) {
                vm.tasks = [];
                tasksServices.deleteTask(data).success(function (response) {
                    listTasks();
                })
            }
            vm.createTaskModel = function () {
                $location.path('/task-creation');
            };

            vm.editTaskModel = function (data) {
                $location.path('/task-details/' + data);
            };

            vm.completeTaskModel = function (id, complete) {
                var obj = {
                    TaskId: id,
                    Complete: complete
                }
                tasksServices.completeTask(obj).success(function () {
                    listTasks();
                });
            }
            vm.isExpired = function (task) {
                return new Date(task.date) < Date.now() && !task.complete;
            }
            vm.formatDate = function (task) {
                var d = new Date(task.date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                return [year, month, day].join('-');
            }

            function listTasks() {
                tasksServices.getAllTasks().success(function (response) {
                    vm.tasks = response;
                });
            }
            listTasks();
        }
    ]);

})();