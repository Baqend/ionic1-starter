angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function() {
    Chats.all().then(function(chats) {
      // We have to call $apply to let angular know the view must be updated.
      // This it not necessary anymore in ionic2/angular2
      $scope.$apply(function() {
        $scope.chats = chats;
      });
    });
  });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  Chats.get($stateParams.chatId).then(function(chat) {
    $scope.$apply(function() {
      $scope.chat = chat;
    });
  })
})

.controller('AccountCtrl', function($scope, db) {
  $scope.user = {
    name: "",
    password: ""
  };

  // db.User.me is the currently logged in user
  $scope.me = db.User.me;

  $scope.register = function() {
    // Registers a new user with the given name and password.
    // Call db.User.login to login with the credentials.
    db.User.register($scope.user.name, $scope.user.password).then(function() {
      $scope.$apply(function() {
        $scope.me = db.User.me;
      });
    });
  }
});
