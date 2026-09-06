// _runtime/08432_createAggregator.js

export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(514)(arg0)) {
      let tmpResult = tmp(8433);
    } else {
      tmpResult = tmp(8434);
    }
    return tmpResult(arg0, callback, callback(584)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
}
