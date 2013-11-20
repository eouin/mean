angular.module('coolwall.board').controller('BoardController', ['$scope', 'Global', function($scope, Global) {
    $scope.cool.proven = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM111™',
            'snippet': 'The Next, Next Generation tablet.111'}
    ];

    $scope.cool.unproven = [];

    $scope.cool.somethingInBetween = [];

    $scope.uncool.proven = [];

    $scope.uncool.unproven = [];

    $scope.uncool.somethingInBetween = [];

    $scope.subZero.proven = [];

    $scope.subZero.unproven = [];

    $scope.subZero.somethingInBetween = [];

}]);