// _runtime/08717_createAggregator.js
import baseAssignValue from "00801_baseAssignValue.js";
import createAggregator from "08718_createAggregator.js";

export default createAggregator((arg0, arg1, arg2) => {
  baseAssignValue(arg0, arg2, arg1);
});
