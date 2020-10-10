function moveHands(){
    with(new Date()){
        h= 30 * ((getHours() % 12)+getMinutes()/60);//30 degrees hours 
        m= 6 * getMinutes();//6 degrees every minute
        s= 6 * getSeconds();//6 degreesevery seconds
        // setting the rotate css attribute to those value
        document.getElementById("sec").style.cssText="-webkit-transform:rotate(" +s+"deg);";
        document.getElementById("min").style.cssText="-webkit-transform:rotate(" +m+"deg);";
        document.getElementById("hours").style.cssText="-webkit-transform:rotate(" +h+"deg);";
        
        setTimeout(moveHands,1000);//calling the function every sec
       
    }
}
window.onload=moveHands();//starts on load of pages
 