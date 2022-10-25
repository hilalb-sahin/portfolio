infoBtn = document.querySelectorAll('.info');
targetDiv = document.querySelectorAll('.projectDetail');

targetDiv[0].style.display ='none';
targetDiv[1].style.display ='none';
targetDiv[2].style.display ='none';
targetDiv[3].style.display ='none';



      for(let i =0 ; i<4 ; i++)
      { 
        infoBtn[i].addEventListener("click", function() {

            if(targetDiv[i].style.display !== 'none'){
                targetDiv[i].style.display = "none";
            }
            else{
                targetDiv[i].style.display = "block";
            }
          });
          
        }

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

