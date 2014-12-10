/**
 * Created by Keith.Barrow on 18/11/2014.
 */
'use strict';
angular.module('myApp')
    .directive('addressLine', function(){
    return {
        restrict:'E',
        transclude:false,
        scope: {
            content: "@",
            foo:"=",
        },
        template: '<div class="address">**** {{content}} {{foo}}***</div>',
        replace:true,
    }
})