'use strict';

function countSameElements(collection) {
  const chartList = collection.reduce((acc, c)=> {
    if(c.includes('-')){
      const charts = Array(Number(c.slice(2))).fill(c[0]);
      return acc.concat(charts);
    }
    acc.push(c);
    return acc;
  },[]);

  return chartList.reduce((acc, c) => {
    if(acc.find(a => a.key === c)) return acc;
    acc.push({key: c, count: chartList.filter(ci => ci === c).length});
    return acc;
  },[])
}
