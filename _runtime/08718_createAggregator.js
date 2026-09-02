// === Module 8718: createAggregator ===

// Module 8718 (createAggregator)

export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(596)(arg0)) {
      let tmpResult = tmp(8719);
    } else {
      tmpResult = tmp(8720);
    }
    return tmpResult(arg0, callback, callback(717)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};