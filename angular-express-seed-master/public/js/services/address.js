angular.module('myApp')
    .factory('address', function(){
        return {
            houseNumber: 18,
            street: 'Acacia Avenue',
            town: 'Tadcaster',
            county: 'Yorks',
            postcode: 'YK13 4AA',
            resetStreet: function() {this.street = 'Acacia Avenue'},
        };
})