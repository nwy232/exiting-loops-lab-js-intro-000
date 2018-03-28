breakOut(array, changeValue, stopValue)
{
  for(var i=0; i<stopValue;i++)
  {
    array[i]=changeValue;
  }
  return array;
}

keepGoing(array, changeValue, skipValue)
{
  for(var i=0; i<stopValue;i++)
  {
    if(array[i]==skipValue)
      continue;

    else
      array[i]=changeValue;
  }
  return array;
}

findBy(array, findFn)
{
  for(var i=0;i<array.length;i++)
  {
    if(array[i]=='findFn()')
      break;
  }

  return null;
}
