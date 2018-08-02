var myApp = angular.module('myApp_drugDetail', []);

myApp.controller('myCtrl_drugDetail', function ($scope, $http) {
    $scope.message = "";
    $scope.error_mesage = "";

    //get all DrugDetail
    $scope.getAllDrugDetail = function () {
        $http({
            mehtod: "GET",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/drugDetails'
        }).then(
                function (response) {
                    $scope.drugDetails = response.data;
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    $scope.getAllDrugDetail();


    //save DrugDetail
    $scope.newDrugDetail = {};
    $scope.saveDrugDetail = function () {
        $http({
            method: "POST",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/drugDetails',
            data: angular.toJson($scope.newDrugDetail),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "DrugDetail Saved Successfully";
                    $scope.getAllDrugDetail();
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    //Select DrugDetail by click

    $scope.clickedDrugDetail = {};
    $scope.selectDrugDetail = function (drugDetail) {
        $scope.message = "DrugDetail Updated Successfully";
        $scope.clickedDrugDetail = drugDetail;
    };

    //Update DrugDetail
    $scope.updateDrugDetail = function () {
        $http({
            method: "PUT",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/drugDetails',
            data: angular.toJson($scope.clickedDrugDetail),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "Drug UPDATE Successfully";
                    $scope.getAllDrugDetail();
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    //BUY Drug
    $scope.buyDrug = function () {
        $http({
            method: "PUT",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/drugDetails/buyDrug',
            data: angular.toJson($scope.clickedDrugDetail),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "Drug BUY Successfully";
                    $scope.getAllDrugDetail();
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    //SALE Drug
    $scope.saleDrug = function () {
        $http({
            method: "PUT",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/drugDetails/saleDrug',
            data: angular.toJson($scope.clickedDrugDetail),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "Drug SALE Successfully";
                    $scope.getAllDrugDetail();
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    //Delete DrugDetail
    $scope.deleteDrugDetail = function () {
        $http({
            method: "DELETE",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/drugDetails/' + $scope.clickedDrugDetail.dd_id,
            data: angular.toJson($scope.newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "DrugDetail Deleted Successfully";
                    $scope.getAllDrugDetail();
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    //Clear message

    $scope.messageClose = function () {
        $scope.message = "";
        $scope.error_mesage = "";
    }


});