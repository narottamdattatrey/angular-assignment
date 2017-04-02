(function() {
    'use strict';
    // Sources: must be an array of objects with two properties (src and type) in order of preference.
    // Tracks: must be an array of objects with five properties (src, kind, srclang, label and default).
    // you can also create your own configuration file
    // $sce.trustAsResourceUrl: this is made to warn AngularJS that our videos
    // are trustful files and there’s no problem to load them.
    // angular.module('myApp', [
    //         'ngSanitize',
    //         'com.2fdevs.videogular',
    //         'com.2fdevs.videogular.plugins.controls',
    //         'com.2fdevs.videogular.plugins.overlayplay',
    //         'com.2fdevs.videogular.plugins.poster',
    //         'info.vietnamcode.nampnq.videogular.plugins.youtube',
    //         'ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages'
    //     ])
    angular.module('myApp', [
            'ngSanitize', 'ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages'
        ])
        .controller('HomeCtrl', ["$sce", "$scope", function($sce, $scope) {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/plus.login');
            // var videoUrl = "http://static.videogular.com/assets/videos/videogular.mp4";
            // var videoUrl = "https://www.youtube.com/watch?v=z3HD_1qA8Jc";
            // this.config = {
            //     sources: [{
            //             src: $sce.trustAsResourceUrl(videoUrl),
            //             type: "video/mp4"
            //         },
            //         {
            //             src: $sce.trustAsResourceUrl("../public/cheezBadi.mp4"),
            //             type: "video/mp4"
            //         },
            //         {
            //             src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),
            //             type: "video/ogg"
            //         }
            //     ],
            //     tracks: [{
            //         src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
            //         kind: "subtitles",
            //         srclang: "en",
            //         label: "English",
            //         default: ""
            //     }],
            //     theme: "bower_components/videogular-themes-default/videogular.css",
            //     plugins: {
            //         poster: "http://www.videogular.com/assets/images/videogular.png"
            //     }
            // };

            //Binding with controller
            this.userName = 'narottam';

            $scope.init = function(){

              // iframe.src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com";

              // $scope.myurl= 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com';
              // console.log($scope.myurl);
            }
            $scope.init();

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


        }]);
}());
