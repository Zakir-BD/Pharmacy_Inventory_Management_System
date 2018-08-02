var myApp = angular.module('myApp_companyProduct', []);

myApp.controller('myCtrl_companyProduct', function ($scope, $http) {
    $scope.message = "";
    $scope.error_mesage = "";

    
//get all CompanyProduct
    $scope.getAllCompanyProduct = function () {
        $http({
            mehtod: "GET",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/companyProducts'
        }).then(
                function (response) {
                    $scope.companyProducts = response.data;
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };
    $scope.getAllCompanyProduct();


    //save CompanyProduct
    $scope.newCompanyProduct = {};
    $scope.saveCompanyProduct = function () {
        console.log(angular.toJson($scope.newCompanyProduct));
        $http({
            method: "POST",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/companyProducts',
            data: angular.toJson($scope.newCompanyProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "CompanyProduct Saved Successfully";
                    $scope.getAllCompanyProduct();

                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    //Select CompanyProduct by click
    $scope.clickedCompanyProduct = {};
    $scope.selectCompanyProduct = function (companyProduct) {
        $scope.message = "CompanyProduct Updated Successfully";
        $scope.clickedCompanyProduct = companyProduct;
    };

    //Update CompanyProduct
    $scope.updateCompanyProduct = function () {
        $http({
            method: "PUT",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/companyProducts',
            data: angular.toJson($scope.clickedCompanyProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "CompanyProduct Update Successfully";
                    $scope.getAllCompanyProduct();
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    //Delete CompanyProduct
    $scope.deleteCompanyProduct = function () {
        $http({
            method: "DELETE",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/companyProducts/' + $scope.clickedCompanyProduct.cp_id,
            data: angular.toJson($scope.newCompanyProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "CompanyProduct Deleted Successfully";
                    $scope.getAllCompanyProduct();
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    //Clear CompanyProduct message
    $scope.messageClose = function () {
        $scope.message = "";
        $scope.error_mesage = "";
    }


});