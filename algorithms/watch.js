function getAngle(hours, minutes){
    let angleHours = 0;
    let angleMinutes = 0;
    let anglebetweenpointers = 0;

    if(hours === 12){
     hours = 0        
    }

    
    angleHours = hours * 30 + 30/60 * minutes;
    angleMinutes = minutes * 6;

    if(angleMinutes > angleHours){
        anglebetweenpointers = angleMinutes - angleHours;
    }else{
        anglebetweenpointers = angleHours - angleMinutes;
    }

  return anglebetweenpointers;

}

console.log(getAngle(1,30))
console.log(getAngle(12,30))
console.log(getAngle(12,15))