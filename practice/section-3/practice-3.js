'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const collectionC = collectionA.reduce((acc, current ) => {
    if(acc.find(a => a.key === current)) return acc;
    acc.push({key: current, count: collectionA.filter(ca => ca === current).length});
    return acc;
  }, []);
  return collectionC.map(cc => {
    if(objectB.value.includes(cc.key)){
      cc.count -= Math.floor(cc.count/3);
    }
    return cc;
  })
}
