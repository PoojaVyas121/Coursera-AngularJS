(function(){

  angular
    .module('LunchCheck', [])
    .controller('lcController', lcController);

  lcController.$inject = ['$scope'];

  function lcController($scope) {

    $scope.lunchItems = '';

    var lunchSize = {
      'empty' : {
        'msg': 'Please enter data first',
      },
      'good' : {
        'msg': 'Enjoy!',
      },
      'bad' : {
        'msg': 'Too much!',
      }
    }

    $scope.tooMuchCheck = function () {
      $scope.lunchItems = cleanItems ($scope.lunchItems); // array
      $scope.lunchSize = getMsg(); // object
    };

    function getMsg() {
      if ($scope.lunchItems.length === 0) {
        return lunchSize.empty;
      } else if ($scope.lunchItems.length <= 3) {
        return lunchSize.good;
      } else {
        return lunchSize.bad;
      }
    };

    function cleanItems (s) {
      var arr = s.split(',');
      var newArr = [];

      for(var i = 0; i<arr.length; i++) {
          if (arr[i].replace(/\s/g, '').length) {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    }

  }

}());
