'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(a => {
    if(objectB.value.includes(a.key)){
      a.count = a.count - Math.floor(a.count/3);
    }
    return a;
  });
}
