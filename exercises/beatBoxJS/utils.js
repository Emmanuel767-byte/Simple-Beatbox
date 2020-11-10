/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */

 /*In JAVASCRIPT
new Audio("")  = is a function that accepts a url/src string and becomes /can creat an AUDIO Object
example
let Testrun=  new Audio("");//Audio object created
Testrun.play()//Audio Object Playing

{// call in function response
B
}
 */
class Beat {
    constructor (audioSRC){//Create stting parameter to parse in 
        this.audio= new Audio(audioSRC)//This audio object creates a new Audio using/receiving 
         //the audiosrc
        //create object that passes in the audioSRC everytime
        
    }
play=()=>{
this.audio.currentTime= 0;
//sets playback speed. allowing audio to be played as many times as the button is pressed. 
//instead of waiting for audio to finish play befor initalizing another audio action
 this.audio.play()
    
}
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, PRESSCODE){
        this.color= color;
        this.PRESSCODE= PRESSCODE;
        this.element= document.getElementById(PRESSCODE);//Get the element
        this.setButtonColorInHTML();
        this.setTransitionListener();
    
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
this.element.style.borderColor=this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     * HINT Box shadow looks like this : 0px 0px 17px 0px #FFFFFF
     */
    select = () => {
        this.element.style.backgroundColor= this.color;
        this.element.style.boxShadow= `0px 0px 17px 0px ${this.color}`//make the shadow color specific to any selected button with any color

    }

   
    /**
     * Deselect function to reset background color and boxShadow
     * SOLUTION 1: remove styleon keyUp
     * SOLUTION 2: wait a certain amount of time to reomove style
     * SOLUTION 2: react on TRANSITION END
     */
setTransitionListener=()=>{
    this.element.addEventListener('transitionend', ()=>{
        this.deselect();
    })
}

    deselect = () => {
    this.element.style.backgroundColor="transparent";
    this.element.style.boxShadow="none";
    }
}
