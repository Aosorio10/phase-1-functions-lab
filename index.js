// My code
{
function distanceFromHqInBlocks(pickupLocation){
    let distance = Math.abs(42 - pickupLocation)
    return distance
  }
  
  const result = distanceFromHqInBlocks('50');
  const result2 = distanceFromHqInBlocks('43');
  console.log(result);
  console.log(result2);
}

function distanceFromHqInFeet(pickupLocation){
  let distanceInFeet = 264;
  let distanceFromHqInBlocks = 42;
  let distance = Math.abs((pickupLocation - distanceFromHqInBlocks) * distanceInFeet);
  return distance
}

function distanceTravelledInFeet(start, destination){
  let distanceInFeet = 264;
  if ( start < destination){
    return ((destination - start) * distanceInFeet)
  } else {
    return (start - destination) * distanceInFeet
  } 
}

 // function calculatesFarePrice(start, destination)
  //let distanceInFeet = distanceFromHqInFeet
  //let FreeFeet = 400;
  //let total = Math.abs(((start- destination) * distanceFromHqInFeet) - FreeFeet);
  //return total;

function calculatesFarePrice(start, destination){
  let distanceInFeet = distanceTravelledInFeet(start, destination)
  if (distanceInFeet < 400){
    return 0
  } else if ( distanceInFeet > 400 && distanceInFeet < 2000){
    return (distanceInFeet - 400) * 0.02
  } else if ( distanceInFeet > 2000 && distanceInFeet < 2500){
    return 25
    } else {
      return 'cannot travel that far'
    }
}