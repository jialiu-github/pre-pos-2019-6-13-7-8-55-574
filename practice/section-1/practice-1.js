'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(a => collectionB.includes(a));
}
