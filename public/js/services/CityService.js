angular.module('CityService', []).factory('City', ['$http', function($http) {

    return {
        get : function() {
            return $http.get('/api/cities');
        },

        create : function(cityData) {
            return $http.post('/api/cities', cityData);
        },

        delete : function(id) {
            return $http.delete('/api/cities/' + id);
        }
    }       

}]);
