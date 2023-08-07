app.controller("indexCtrl", function ($scope, $rootScope) {
  $rootScope.hide = 0;
  $rootScope.count = 0;
  $scope.checkCount = 0;
  var so = 6;
  var so1 = 0,
    so2 = 6;
  $scope.pageCount = Math.ceil($rootScope.subjects.length / so);
  check();
  $scope.Prev = function () {
    if ($rootScope.count > 0) {
      $rootScope.count -= so;
      so1 -= 6;
      so2 -= 6;
      check();
    }
    $scope.checkCount = 0;
  };
  $scope.Next = function () {
    so1 += 6;
    so2 += 6;
    check();
    if ($rootScope.count < ($scope.pageCount - 1) * so) {
      $rootScope.count += so;
    }
    if ($rootScope.subjects.length > 6 && $rootScope.subjects.length % 6 == 0) {
      $scope.checkCount = 1;
    }
  };

  function check() {
    $scope.check = angular.copy($rootScope.subjects.slice(so1, so2));
  }
  $scope.checkLogin = function (checkID) {
    if ($rootScope.Student == null) {
      Swal.fire({
        title:
          '<h1 style="color:red;font-weight:bold;font-size:30px;">Bạn chưa đăng nhập</h1>',
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Đăng nhập",
        cancelButtonText: "Hủy",
        showDenyButton: true,
        denyButtonText: "Tiếp tục không cần tài khoản",
        timer: 5000,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "#!login";
        } else if (result.isDenied) {
          window.location.href = "#!viewtest/" + checkID;
        }
      });
      return;
    } else {
      window.location.href = "#!viewtest/" + checkID;
    }
  };
});
