'use strict';

function countSameElements(collection) {
  return collection.reduce((acc, current) => {
    if(acc.find(a => a.key === current)) return acc;
    acc.push({key: current, count: collection.filter(c => c === current).length});
    return acc;
  },[])
}
