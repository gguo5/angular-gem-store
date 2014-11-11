(function() {
  var app = angular.module('gemstore', ['store-directives']);
  app.controller('MainCtrl', function () {
  });
  app.controller('StoreController', ['$http',function ($http) {
    var store = this;
    store.products = [];
    $http.get('/data/store-products.json').success(function (data)
    {
    console.log('abcddfdfd');
    store.products = data;
    });
  }]);
  app.controller('ReviewController', function () {
    this.review={};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      console.log(this.review.createdOn);
      product.reviews.push(this.review);
      this.review={};
    };
  });
})();