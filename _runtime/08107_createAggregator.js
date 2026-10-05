// _runtime/08107_createAggregator.js
import baseAssignValue from "00679_baseAssignValue.js";
import createAggregator from "08108_createAggregator.js";

export default createAggregator((arg0, arg1, arg2) => {
  baseAssignValue(arg0, arg2, arg1);
});
