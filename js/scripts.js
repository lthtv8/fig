var _winX = window.innerWidth;

class Pet {
  constructor(data) {
    let _data = data;
	let _speed = 5;
	let _target = "pet"+id;
	let _id = 0;
	let _no = 1;
	let timeout = Math.floor((Math.random() * 10)+10)*100;
	let pet_weight = 58;
	let pet_img = "pets/p"+_no+"/0.png";
	let pet_left = "left:"+(Math.floor((Math.random() * (_winX-100))+50))+"px;";
	init();
	init = () =>{
		$("html").append('<div id="'+_target+'" class="ah_a" style="'+css_pet+pet_left+'"><div class="ah_a_image" style="'+css_pet_image+'"><img src="'+pet_img+'" style="width:'+pet_weight+'px;"></div></div>');
	
		petMove(id);
		
		$("#"+_target).on("contextmenu",function(){
			petLeftClick(id);
			return false;
		});
		//$("#"+target).on( 'dragstart', function() { return false; } );
		$("#"+_target).click(function(){showPetMenu();});
	
	}
	
	jQuery.fn.cssInt = function (prop) {
		return parseInt(this.css(prop), 10) || 0;
	};
    this.move = () => {
		//console.log(timeout);
		petSys[id][4] = setInterval(function(){
			
			//console.log("*");
			let state = Math.floor((Math.random() * 2));
			clearInterval(petSys[id][3]);
			if(state){
				
				var targetX = $("#"+_target).cssInt('left');
				var targetY = $("#"+_target).cssInt('bottom');
				var targetWeight = $("#"+_target).cssInt('weight')/2;
				if(targetX<0+targetWeight){
					moving(id,speed,0);
				}
				else if (targetX>_winX+targetWeight){
					moving(id,-speed,0);
				}
				else{
					var to = Math.floor((Math.random() * _winX) + 1);
					
					if(to<$("#"+_target).cssInt('left'))
						moving(id,-speed,0);
					else if(to>$("#"+_target).cssInt('left'))
						moving(id,speed,0);
				}
				petAni(id,speed,1);
				
				
			}
			else{
				petAni(id,speed,0);
			}
			petMove(id);
		}, timeout);
    }

    this.getDay = () => {
      return _day;
    }
  }
}


	let pet = new Pet([]);