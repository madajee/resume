// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    }).
    when('/project', {
        templateUrl: 'pages/project/project.html',
        controller: 'projectController'
    }).
    when('/project/:projectid', {
        templateUrl: function (param) {
            return 'pages/project/project_' + param.projectid + '.html'
        },
        controller: 'learnjsController'
    }).
    otherwise('/');
    
});