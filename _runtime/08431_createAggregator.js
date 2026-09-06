// _runtime/08431_createAggregator.js
import baseAssignValue from "00668_baseAssignValue.js";
import createAggregator from "08432_createAggregator.js";

export default createAggregator((arg0, arg1, arg2) => {
  baseAssignValue(arg0, arg2, arg1);
});
