var myApp = angular.module('myApp_drugGroupName', []);

myApp.controller('myCtrl_drugGroupName', function ($scope, $http) {
    $scope.message = "";
    $scope.error_mesage = "";

    //get all DrugGroupName
    $scope.getAllDrugGroupName = function () {
        $http({
            mehtod: "GET",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/drugGroupNames'
        }).then(
                function (response) {
                    $scope.drugGroupNames = response.data;
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };
    $scope.getAllDrugGroupName();


    //save DrugGroupName
    $scope.newDrugGroupName = {};
    $scope.saveDrugGroupName = function () {
        $http({
            method: "POST",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/drugGroupNames',
            data: angular.toJson($scope.newDrugGroupName),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "DrugGroupName Saved Successfully";
                    $scope.getAllDrugGroupName();
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    //Select DrugGroupName by click
    $scope.clickedDrugGroupName = {};
    $scope.selectDrugGroupName = function (drugGroupName) {
        $scope.message = "drugGroupName Updated Successfully";
        $scope.clickedDrugGroupName = drugGroupName;
    };

    //Update DrugGroupName
    $scope.updateDrugGroupName = function () {
        $http({
            method: "PUT",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/drugGroupNames',
            data: angular.toJson($scope.clickedDrugGroupName),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "DrugGroupName Update Successfully";
                    $scope.getAllDrugGroupName();
                },
                function (reason) {
                    $scope.error_message = reason.data;
                }
        );
    };

    //Delete DrugGroupName
    $scope.deleteDrugGroupName = function () {
        $http({
            method: "DELETE",
            url: 'http://localhost:8080/Project_AngularJS_Rest/webresources/drugGroupNames/' + $scope.clickedDrugGroupName.dg_id,
            data: angular.toJson($scope.newDrugGroupName),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
                function (response) {
                    $scope.message = "DrugGroupName Deleted Successfully";
                    $scope.getAllDrugGroupName();
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