window.addEventListener("load", function() {

	var btn = document.querySelector("[data-js='js__nav']");
	var link = document.querySelectorAll("[data-js='js__link'");
	btn.addEventListener("click", function (){

	    var cl = this.getAttribute("class");
	    if(cl === "navigation__button"){
	        this.classList.add("open");
	        link.forEach(myLink);
	    }else{
	        this.classList.remove("open");
	    }
	});

	function myLink(item){
		var btn = document.querySelector("[data-js='js__nav']");
		item.addEventListener("click", function (){
	        	btn.classList.remove("open");
	        });
	}

	var field_rf = document.querySelector("[data-js='js__field__rf']");
	var field_front = document.querySelector("[data-js='js__field__front']");
	var box_front = document.querySelectorAll("[data-js='js__box__front']");
	var box_rf = document.querySelectorAll("[data-js='js__box__rf']");

	field_rf.addEventListener("click", function (){
	    var cl = this.getAttribute("class");
	    if(cl === "rf"){
	    	field_front.classList.remove("active");
	        this.classList.add("active");
	        box_front.forEach(deleteClass);
	        box_rf.forEach(addClass);
	    }
	});

	field_front.addEventListener("click", function (){
	    var cl = this.getAttribute("class");
	    if(cl === "front"){
	    	field_rf.classList.remove("active");
	        this.classList.add("active");
	        box_rf.forEach(deleteClass);
	        box_front.forEach(addClass);
	    }
	});

	function deleteClass(item){
		item.classList.remove("active");
	}

	function addClass(item){
		item.classList.add("active");
	}
});