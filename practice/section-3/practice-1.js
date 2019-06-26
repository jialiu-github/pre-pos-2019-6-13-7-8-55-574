'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(a => {
    if(objectB.value.includes(a.key)){
      a.count--;
      return a;
    }
    return a;
  })
}
