// === Module 11389: createAggregator ===

// Module 11389 (createAggregator)

export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(599)(arg0)) {
      let tmpResult = tmp(11390);
    } else {
      tmpResult = tmp(11391);
    }
    return tmpResult(arg0, callback, callback(720)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};