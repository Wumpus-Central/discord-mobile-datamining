// _runtime/11062_createAggregator.js
import baseAssignValue from "00804_baseAssignValue.js";
import createAggregator from "11063_createAggregator.js";


export default createAggregator((arg0, arg1, arg2) => {
  baseAssignValue(arg0, arg2, arg1);
});