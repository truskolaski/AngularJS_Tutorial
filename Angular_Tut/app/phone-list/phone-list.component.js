angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'app/phone-list/phone-list.template.html',
        controller: ['$http', function PhoneListController($http) {
            var self = this;

            self.query = '';
            self.orderProp = 'age';

            $http.get('app/phone-list/phone-list.json').then(function (response) {
                self.phones = response.data;
            });

        }]
    });