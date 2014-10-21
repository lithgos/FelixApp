(function(){
  var app = angular.module('hackathonApp', []);

  app.controller('HackController', ["$scope", "$timeout", function($scope, $timeout){
    

    var $felix = $('#felix');
    function felixWalk(){
      var newLeft = Math.random() * ($(window).width() - $felix.width());
      var newTop = Math.random() * ($(window).height() - $felix.height());
      $felix.css({'left': newLeft, 'top': newTop});
    }

    function setFelixInterval(){
      $felix.css('display', 'block');
      setInterval(function(){
        var newLeft = Math.random() * ($(window).width() - $felix.width());
        var newTop = Math.random() * ($(window).height() - $felix.height());
        $felix.css({'left': newLeft, 'top': newTop});
      }, 500);
    }
    var felixWalk = setTimeout(setFelixInterval, 1500);


    $scope.cards = cards
      
    $scope.cardOne = ""
    $scope.correctCards = []
    $scope.flippedCards = []


    $scope.checkCards = function(card) {
      $scope.flippedCards.push(card)
      
      if( $scope.cardOne == "") {
        $scope.cardOne = card
      } else {
        if (card.text == $scope.cardOne.text ) {
          $timeout(function() {
            $scope.correctCards.push(card.text)
            $scope.cardOne = ""
            $scope.flippedCards = []
            console.log($scope.correctCards)
            if ($scope.correctCards.length == 8) 
            alert('YOU WIN')
          }, 500 )
        } else {

          $timeout(function() {
            $scope.cardOne = ""
            $scope.flippedCards = []
          }, 500 )
         
        }

      }

    }
    //First attempt at shuffle
    // $scope.random = function(){
    //  return 0.5 - Math.random();
    // }

    //Second attempt at shuffle
  //  function shuffle(cards) {
  // var currentIndex = cards.length, temporaryValue, randomIndex ;


  // while (0 !== currentIndex) {

  
  //  randomIndex = Math.floor(Math.random() * currentIndex);
  //  currentIndex -= 1;

  
  //  temporaryValue = cards[currentIndex];
  //  cards[currentIndex] = cards[randomIndex];
  //  cards[randomIndex] = temporaryValue;
  // }

// }

  

  $scope.selectCard = function(){
      if (this.id === 1)
        alert('BOOM')

    }


  $scope.whackFelix = function(){
      $scope.showFelix = true;
    }

  $scope.findFelix = function(){
      $scope.showFelix = false;
      $scope.whackIt = false;
    }

    $scope.hitFelix = function(){
      $scope.whackIt = true;
      alert('You whacked Felix! BOOM!!')
    };


    // $scope.hideFelix = function(){
    //   $scope.wheresFelix = false;
    //   alert("BOOM")
    // }

//    $scope.moveDiv = function() {
//     $scope.span = $("#felix");

//     $scope.span.fadeOut(10, function() {
//         var maxLeft = $(window).width() - $scope.span.width();
//         var maxTop = $(window).height() - $scope.span.height();
//         var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//         var topPos = Math.floor(Math.random() * (maxTop + 1))

//         $scope.span.css({ left: leftPos, top: topPos }).fadeIn(10);
//     });
// };
// $scope.moveDiv();setInterval($scope.moveDiv, 50);


  }])

  cards = [
  {text: 11, image:'http://www.allfancydress.com/images/products/zoom/French-Garlic-Garland.jpg'},
  {text: 1, image: 'http://myinternationaldating.files.wordpress.com/2012/11/frenchman.jpg'},
  {text: 3, image: 'http://www.beautynewsnyc.com/home/wp-content/uploads/2010/10/Baguette1.jpg'},
  {text: 5, image: 'http://www.planetware.com/photos-large/F/eiffel-tower.jpg'},
  {text: 1, image: 'http://myinternationaldating.files.wordpress.com/2012/11/frenchman.jpg'},
  {text: 5, image: 'http://www.planetware.com/photos-large/F/eiffel-tower.jpg'},
  {text: 7, image: 'http://www.dunbarsystems.com/Images/enlarge/croissant1-enlarge(07czf3).jpg'},
  {text: 7, image: 'http://www.dunbarsystems.com/Images/enlarge/croissant1-enlarge(07czf3).jpg'},
  {text: 9, image: 'http://rlv.zcache.co.uk/french_snail_flag_hand_towel-rf0d687cdbc454f449d0e2b09b01319ef_2cf11_8byvr_324.jpg'},
  {text: 11, image:'http://www.allfancydress.com/images/products/zoom/French-Garlic-Garland.jpg'},
  {text: 13, image:'http://www.frenchpresents.com/images/Beret-black-sq-600.jpg'},
  {text: 3, image: 'http://www.beautynewsnyc.com/home/wp-content/uploads/2010/10/Baguette1.jpg'},
  {text: 13, image:'http://www.frenchpresents.com/images/Beret-black-sq-600.jpg'},
  {text: 15, image:'img/Felix.jpg'},
  {text: 9, image: 'http://rlv.zcache.co.uk/french_snail_flag_hand_towel-rf0d687cdbc454f449d0e2b09b01319ef_2cf11_8byvr_324.jpg'},
  {text: 15, image:'img/Felix.jpg'}
  ]
})()

