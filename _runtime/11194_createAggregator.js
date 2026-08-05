// _runtime/11194_createAggregator.js
import createAggregator from "createAggregator";
import { baseAssignValue } from "00804_baseAssignValue.js";


export default createAggregator((arg0, arg1, arg2) => {
  baseAssignValue /* baseAssignValue */(arg0, arg2, arg1);
});