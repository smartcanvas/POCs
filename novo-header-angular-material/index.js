var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

}]);



app.config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.definePalette('primaryPalette', {

        '50': 'FCE9EC',
        '100': 'F5C7CE',
        '200': 'EC909E',
        '300': 'E1576D',
        '400': 'D71F3C',
        '500': 'B71A33',
        '600': 'A1172D',
        '700': '6C101E',
        '800': '36080F',
        '900': '160306',
        'A100': 'F5C7CE',
        'A200': 'EC909E',
        'A400': 'D71F3C',
        'A700': '6C101E',


        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
        // 'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        // '200', '300', '400', 'A100'],
        // 'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.definePalette('accentPalette', {
        '50': 'E9F9FA',
        '100': 'C7EFF1',
        '200': '90DFE3',
        '300': '58CFD5',
        '400': '20BEC6',
        '500': '1BA2A8',
        '600': '188F95',
        '700': '105F63',
        '800': '083032',
        '900': '031314',
        'A100': 'C7EFF1',
        'A200': '90DFE3',
        'A400': '20BEC6',
        'A700': '105F63',



        // 'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
        // 'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        // '200', '300', '400', 'A100'],
        // 'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('primaryPalette')
        .accentPalette('accentPalette')
}]);




