angular.module('myApp')
    .factory('reddit', ['$http', 'audio', 'audio', function($http, audio, audio2){
        var myValue = {};
        $http.jsonp("http://api.reddit.com/r/askreddit/new?jsonp=JSON_CALLBACK").
            success(function(data) {
                myValue.data = data.data.children;
                audio.makeNoise();
                audio2.makeNoise();
            }).
            error(function(data) {
                console.log('broken');

            });
        return myValue;
}]);