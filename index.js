// Code your solution in this file!


function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location -42
  }
  else {
    return 42 - location
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(pickup, dropoff) {
  if (pickup > dropoff) {
    return (pickup - dropoff) * 264 }
  else {
    return (dropoff - pickup) * 264
  }

}
