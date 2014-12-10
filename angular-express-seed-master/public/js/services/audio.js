/**
 * Created by Keith.Barrow on 10/12/2014.
 */
angular.module('myApp')
.service ('audio', function (){
    var Audio = function(){
        this.makeNoise = function (){
            console.log('BANG!!!!!!!');
        }
    }
    return new Audio();
});
