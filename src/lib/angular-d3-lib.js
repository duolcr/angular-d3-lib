angular.module('d3', [])
  .factory('d3Service', ["$document", "$q", "$rootScope",
  	function($document, $q, $rootScope){
    	var d = $q.defer();
    	function onScriptLoad(){
    		$rootScope.$apply(function() { d.resolve(window.d3); });
    	}

    	var scriptTag = $document[0].createElement("script");
    	scriptTag.type = "text/javascript";
    	scriptTag.async = true;
    	scriptTag.src = "bower_components/d3/d3.js";
    	scriptTag.onreadystatechange = function() {
    		if (this.readyState == "complete") onScriptLoad();
    	};
    	scriptTag.onload = onScriptLoad;

    	var s = $document[0].getElementsByTagName("body")[0];
    	s.appendChild(scriptTag);
    	
    	return {
    		d3: function() { return d.promise; }
    	};
  }])
  .config(["$provide", function($provide){
  	var d3Decorator = function($delegate){
  		$delegate.d3().then(function(d3){
  			//build custom funcitons on the d3
  		});
  	};

  	return $provide.decorator("d3Service", d3Decorator);
  }]);