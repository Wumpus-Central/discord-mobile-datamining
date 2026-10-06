// _runtime/08140_createAggregator.js
import baseAssignValue from "00679_baseAssignValue.js";
import createAggregator from "08141_createAggregator.js";

export default createAggregator((arg0, arg1, arg2) => {
  baseAssignValue(arg0, arg2, arg1);
});
