'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(a => collectionB.flat().includes(a));
}
