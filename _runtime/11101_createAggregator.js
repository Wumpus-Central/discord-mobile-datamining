// _runtime/11101_createAggregator.js
import baseAssignValue from "00804_baseAssignValue.js";
import createAggregator from "11102_createAggregator.js";


export default createAggregator((arg0, arg1, arg2) => {
  baseAssignValue(arg0, arg2, arg1);
});