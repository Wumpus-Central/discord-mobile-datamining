// _runtime/08702_createAggregator.js
import baseAssignValue from "00804_baseAssignValue.js";
import createAggregator from "08703_createAggregator.js";

export default createAggregator((arg0, arg1, arg2) => {
  baseAssignValue(arg0, arg2, arg1);
});
