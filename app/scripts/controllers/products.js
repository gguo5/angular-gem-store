(function() {

 var app= angular.module('store-directives',[]);
 app.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "views/product-gallery.html",
      controller: function(){
    this.current = 0;
    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  },
      controllerAs: "gallery"
    };
  });
  app.directive('productTabs',function(){
    return {
      restrict: 'E',
      templateUrl: 'views/product-tabs.html',
      controller: function () {
      this.tab = 1;

      this.setTab = function(newValue){
        this.tab = newValue;
      };

      this.isSet = function(tabName){
        return this.tab === tabName;
      };
    },
    controllerAs: 'tab'
    };
  });
  app.directive('productDescription',function(){
    return {
      restrict: 'E',
      templateUrl: 'views/product-description.html'
    };
  });
  app.directive('productSpecs',function(){
    return {
      restrict: 'A',
      templateUrl: 'views/product-specs.html'
    };
  });
  app.directive('productReviews',function(){
    return {
      restrict: 'E',
      templateUrl: 'views/product-reviews.html'
    };
  });

  })();
