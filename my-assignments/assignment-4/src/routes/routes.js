(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/routes/routes.home.tab.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/routes/routes.categories.tab.html',
      controller: 'CategoriesRouteController as crc', 
      resolve: {
        categoryList: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    
    .state('category-items', {
      url: '/category-items/{categoryShortName}',
      templateUrl: 'src/routes/routes.category-items.tab.html',
      controller: 'CategoryItemsRouteController as irc', 
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }, 
      params: {
        categoryName: null
      }
    });
}


})();
