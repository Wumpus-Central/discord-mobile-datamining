// _runtime/08721_createAggregator.js
import baseAssignValue from "00801_baseAssignValue.js";
import createAggregator from "08722_createAggregator.js";

export default createAggregator((arg0, arg1, arg2) => {
  baseAssignValue(arg0, arg2, arg1);
});
