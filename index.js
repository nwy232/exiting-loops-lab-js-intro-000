function breakOut(array, changeValue, stopValue){
  for(var i=0; i<array.length;i++)
  {
    if(array[i]!=='stopValue')
      array[i]=changeValue;
      break;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(var i=0; i<stopValue;i++)
  {
    if(array[i]==skipValue)
      continue;

    else
      array[i]=changeValue;
  }
  return array;
}

function findBy(array, findFn){
  for(var i=0;i<array.length;i++)
  {
    if(array[i]=='findFn()')
      break;
  }

  return null;
}
