(function() {
  var app = angular.module('store', []);
  app.controller('StoreController',function($scope){
    $scope.products=gems;

  });

  app.controller('PanelController',function($scope){
    $scope.tab=1;
    $scope.selectTab=function(setTab){
      $scope.tab=setTab;
    };
    $scope.isSelected=function(checkTab){
      return $scope.tab ==checkTab;
    };
  });

  app.controller('ReviewController',function($scope){
    $scope.newreview={};
    $scope.addReview=function(product){
      $scope.newreview.createdOn = Date.now();
      product.reviews.push($scope.newreview);
      $scope.newreview={};

    };
  });


  var gems =[
    {
      name: 'MOR605cc Morrisonite Jasper Cabochon',
      price: 44.00,
      description:'MOR605cc Morrisonite Jasper Cabochon features golden yellow, maroon, blue-green, pink, cream, and tan jasper.' +
      '42mm x 25mm',
      canPurchase:false,
      soldOut:false,
      images:[
        '../images/1.1.jpg'
      ],
      specifications:'None yet',
      reviews:[
        {
          stars:5,
          body:"I love it.",
          author:"dads@dad.com"
        },
        {
          stars:4,
          body:'it looks beautiful.',
          author:'ggdfgj@gvf.com'
        }
      ]
    },
    {
      name: 'SON314c Sonora Dendritic Cabochon',
      price: 32.00,
      description:'SON314c Sonora Dendritic Cabochon features pink and white background with red dendrites creating a desert flower image.' +
      '27mm x 15mm',
      canPurchase:true,
      soldOut:false,
      images:[
        '../images/2.1.jpg'
      ],
      specifications:'None yet',
      reviews:[
        {
          stars:1,
          body:"it is too bad.",
          author:"dads@dad.com"
        }
      ]
    }

  ]
})();
