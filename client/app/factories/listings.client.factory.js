angular.module('listings').factory('Listings', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://url/api/listings');
      },

      create: function(listing) {
        return $http.post('http://url/api/listings', listing);
      },

      read: function(id) {
        return $http.get('http://url/api/listings' + id);
      },

      update: function(id, listing) {
        return $http.put('http://url/api/listings' + id, listing);
      },

      delete: function(id) {
        return $http.delete('http://url/api/listings' + id);
      }
    };

    return methods;
  }
]);
