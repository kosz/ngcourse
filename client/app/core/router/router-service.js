'use strict';

angular.module('ngcourse.router', [
  'ui.router'
])

.config(function (
  $stateProvider,
  $urlRouterProvider,
  $locationProvider) {

    $urlRouterProvider.otherwise('/tasks');

    $locationProvider.html5Mode(false);

    $stateProvider
    .state('tasks', {
      url: '/tasks',
      controller: 'TaskListCtrl as taskList',
      templateUrl: '/app/sections/task-list/task-list.html'
    })
    .state('tasksDetail', {
      url: '/tasks/{_id}',
      template: 'task details'
    });
});
