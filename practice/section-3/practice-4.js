'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const chartList = collectionA.reduce((acc, current) => {
    if(current.includes('-')){
      const charts = Array(Number(current.slice(2))).fill(current[0]);
      return acc.concat(charts);
    }
    acc.push(current);
    return acc;
  },[]);

  const collectionC = chartList.reduce((acc, current) => {
    if(acc.find(a => a.key === current)) return acc;
    acc.push({key: current, count: chartList.filter(c => c === current).length});
    return acc;
  },[]);

  return collectionC.map(cc => {
    if(objectB.value.includes(cc.key)) {
      cc.count -= Math.floor(cc.count/3);
    }
    return cc;
  })
}
