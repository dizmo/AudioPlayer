
// As soon as the dom is loaded, and the dizmo is ready, instantiate the main class
window.document.addEventListener('dizmoready', function() {
    // Your code should be in here so that it is secured that the dizmo is fully loaded

	function updateList(i) {
		var el=document.getElementById('list');
		var l=el.children;
    		for (var j=0;j<l.length;j++) {
			if (j==i-1) { l[j].classList.add('active'); } else { l[j].classList.remove('active'); }
		}
	}

    DizmoHelper.Controller.init();
    DizmoHelper.Controller.setTotalSteps(4);
    DizmoHelper.Controller.setStep(1);

	DizmoHelper.Controller.onFirstStep(function(step){
    	document.getElementById('status').innerHTML=step+"/4";
    	updateList(step);		
	});

	DizmoHelper.Controller.onNextStep(function(step){
    	document.getElementById('status').innerHTML=step+"/4";	
    	updateList(step);		
	});

	DizmoHelper.Controller.onPreviousStep(function(step){
    	document.getElementById('status').innerHTML=step+"/4";	
    	updateList(step);		
	});

	DizmoHelper.Controller.onLastStep(function(step){
    	document.getElementById('status').innerHTML=step+"/4";
    	updateList(step);			
	});

	// initialize song list and status
	document.getElementById('status').innerHTML=DizmoHelper.Controller.getStep()+"/4";
	updateList(DizmoHelper.Controller.getStep());

	// first
    document.getElementById('b1').onclick = function() {
    	DizmoHelper.Controller.firstStep();
    };

    // next
    document.getElementById('b3').onclick = function() {
    	if (DizmoHelper.Controller.getStep()<4) {
    		DizmoHelper.Controller.nextStep();
    	} else {
    		DizmoHelper.Controller.lastStep();
    	}
    };

    // previous
    document.getElementById('b4').onclick = function() {
    	if (DizmoHelper.Controller.getStep()>1) {
    		DizmoHelper.Controller.previousStep();
    	} else {
    		DizmoHelper.Controller.firstStep();
    	}
    };

    // last
    document.getElementById('b5').onclick = function() {
    	DizmoHelper.Controller.lastStep();
    };

});
