// === Module 8722: createAggregator ===

// Module 8722 (createAggregator)

export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(596)(arg0)) {
      let tmpResult = tmp(8723);
    } else {
      tmpResult = tmp(8724);
    }
    return tmpResult(arg0, callback, callback(717)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};