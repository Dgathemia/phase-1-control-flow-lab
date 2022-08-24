  // Write your code here!

  function scuberGreetingForFeet(ride){
    if (ride <= 199) {
      return 'This one is on me!'
    } else if (ride <= 2001) {
      return 'I will gladly take your thirty bucks.'
    } else if (ride >= 2500) {
      return 'No can do.'
    }
    
  
} 

function ternaryCheckCity(someCity){
  // Write your code here!
  
    return ternaryCheckCity = someCity === "NYC"? 'Ok, sounds good.' : 'No go.'
   
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  switch(tip) {
    case 'generous':
    return 'Thank you so much.';
    break;
    case 'not as generous':
      return 'Thank you.';
    break;
    default:
      return 'Bye.';
    break;
    }
    
  
}