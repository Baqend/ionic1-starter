angular.module('starter.services', [])

.factory('Chats', function(db) {
  var chats = [];

  return {
    all: function() {
      // loads all messages from Baqend
      return db.Message.find().resultList(function(result) {
        chats = result;
        chats.forEach(function(chat) {
          // creates file object from the saved url
          chat.face = new db.File(chat.face);
        });
        return chats;
      });
    },
    get: function(chatId) {
      // loads the message object from Baqend
      return db.Message.load(chatId).then(function(chat) {
        // creates file object from the saved url
        chat.face = new db.File(chat.face);
        return chat;
      });
    }
  };
})

.factory('db', function ($ionicPlatform, $cordovaNativeStorage) {

  // replace this with your Baqend app name
  var appName = 'app-starter';

  // Uses the native storage of the device to prevent lost of our user token.
  // It's not recommended to use localStorage: http://gonehybrid.com/dont-assume-localstorage-will-always-work-in-your-hybrid-app/
  var TokenStorage = DB.util.TokenStorage;

  var emf = new DB.EntityManagerFactory({tokenStorageFactory: {
    create: function(origin) {
      return NativeStorage.create(origin)
    }
  }});

  var db = emf.createEntityManager(true);

  $ionicPlatform.ready().then(function () {
      emf.connect(appName, true);
  });

  function NativeStorage(origin, token) {
    TokenStorage.apply(this, arguments);
  }

  NativeStorage.create = function(origin) {
    return $cordovaNativeStorage.getItem(origin).then(function(token) {
      return token;
    }, function() {
      //if the key is not found an error is thrown
      return null;
    }).then(function(token) {
      return new NativeStorage(origin, token);
    });
  };

  NativeStorage.prototype = Object.create(TokenStorage.prototype, {
    constructor: {value: NativeStorage}
  });

  NativeStorage.prototype._saveToken = function(origin, token) {
    if (token) {
      $cordovaNativeStorage.setItem(origin, token);
    }
  };

  return db;
});
