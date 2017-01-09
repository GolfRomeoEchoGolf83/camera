/**
 * Created by Greg on 09/01/2017.
 */
angular.module('camera.controllers', [])

.controller('AppCtrl', function ($scope) {

})

.controller('PhotosCtrl', function ($scope) {
$scope.takePicture = function () {
  var options = {
    quality: 75,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA,
    allowEdit: true,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 300,
    targetHeight: 300,
    saveToPhotoAlbum: false,
  };

  $cordovaCamera.getPicture(options).then(function (imageData) {
    $scope.imgURI = "data:image/jpeg;base64," + imageData;
  }, function (err) {
    console.log(err);
  });
};
});
