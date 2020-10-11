(function () {
    'use strict';
    
    angular.module('ControllerAsApp', [])
    
    .controller('Storylist2', Storylist2)
    .factory('StoryListFactory', StoryListFactory);
    
    Storylist2.$inject = ['StoryListFactory'];
    function Storylist2(StoryListFactory) {
      var list2 = this;
    
      var storyList = StoryListFactory(10);
    
      list2.items = storyList.getItems();
    
     
      list2.storyname= "";
    
      list2.addItem = function () {
        try {
          storyList.addItem(list2.storyname);
        } catch (error) {
          list2.errorMessage = error.message;
        }
    
      }
    
      list2.removeItem = function (itemIndex) {
        storyList.removeItem(itemIndex);
      };
    }
    
    
    function StoryListService(maxItems) {
      var service = this;
    
 
      var items = [];
    
      service.addItem = function (storyname) {
        if ((maxItems === undefined) ||
            (maxItems !== undefined) && (items.length < maxItems)) {
          var item = {
           
            storyname: storyname
          };
          items.push(item);
        }
        else {
          throw new Error("Max items (" + maxItems + ") reached.");
        }
      };
    
      service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
      };
    
      service.getItems = function () {
        return items;
      };
    }
    
    
    function StoryListFactory() {
      var factory = function (maxItems) {
        return new StoryListService(maxItems);
      };
    
      return factory;
    }
    
    })();
