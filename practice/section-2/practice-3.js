'use strict';

function countSameElements(collection) {
  const chartList = collection.reduce((acc, current) => {
    if(!!current.match(/\d+/)) {
      const charts = Array(Number(current.match(/\d+/))).fill(current[0]);
      return acc.concat(charts);
    }
    acc.push(current);
    return acc;
  },[]);
  return chartList.reduce((acc, current) => {
    if(acc.find(a => a.name === current)) return acc;
    acc.push({name: current, summary: chartList.filter(c => c === current).length});
    return acc;
  },[]);
}
