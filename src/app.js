// (function() {
'use strict';

var myApp = angular.module('myApp', ['ngSanitize', 'ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages']);
myApp.controller('HomeCtrl', HomeCtrl);

/**ngInject*/
function HomeCtrl($sce, $scope){
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');

  //Binding with controller
  this.userName = 'narottam';
  // $scope.run = run;

  $scope.run = function() {
      console.log('init');
      window.myid = 'ZAYZmIfHEiU';
      console.log(window.myid + "inside controller" + new Date().getMilliseconds());
  }

  
  // $scope.run();


  //Get element
  // var uploader = document.getElementById('uploadVideo');
  // var fileButton = document.getElementById('fileButton');
  //
  // //Listen for file selection
  // fileButton.addEventListener('change', function(e) {
  //     //get file
  //     var file = e.target.files[0];
  //
  //     //create a storage ref
  //     var storageRef = firebase.storage().ref('myvideo/' + file.name);
  //
  //     //upload file
  //     var task = storageRef.put(file);
  //     //update progress bar
  //     task.on('state_changed', function progress(snapshot) {
  //             var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //             uploader.value = percentage;
  //         },
  //
  //         function error(err) {
  //             console.log(err);
  //
  //         },
  //         function complete() {
  //
  //         })
  // })

  // Google signIN
  this.signIN = function() {
      console.log('signin called');
      firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          this.userName = user.displayName;
          console.log(this.userName);
          // ...
      }).catch(function(error) {
          // Handle Errors here.
          console.log(error);
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
      });
  }

};
// }());
