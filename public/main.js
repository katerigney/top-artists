const BASE_URL="http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=5d2d799dfeb8994f9d3d075007a68162&format=json"



angular
  .module("topArtistApp", [])
  .controller("mainController",["$scope", "$http", ($scope, $http) => {

    $http({
      method: "GET",
      url: BASE_URL
    }).then(response => {
      $scope.topArtists = response.data.artists;
      console.log($scope.topArtists);
    })
  
  
  
  
  }]);

// Create a simple UI that displays the top 50 artist from the Last.fm API.

// Create and user a template file for an artist. This template should display: 
//  - the picture that came with the artist
//  - the artist name
//  - playcount
//  - listencount 

// Give it basic styling, but dont go crazy