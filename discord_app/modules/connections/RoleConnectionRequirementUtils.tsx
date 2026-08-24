// === Module 16951: realizedOperatorFor ===

// Module 16951 (realizedOperatorFor)
import set from "set" /* 2 */;
import OperatorTypes2 from "OperatorTypes" /* 5230 */;

const OperatorTypes = OperatorTypes2.OperatorTypes;
const result = set.fileFinishedImporting("modules/connections/RoleConnectionRequirementUtils.tsx");

export const realizedOperatorFor = function realizedOperatorFor(operator) {
  let GREATER_THAN = operator;
  if (operator == null) {
    GREATER_THAN = OperatorTypes.GREATER_THAN;
  }
  return GREATER_THAN;
};
export const displayedValueFor = function displayedValueFor(value, realizedOperatorForResult) {
  let num = value;
  if (value == null) {
    num = 0;
  }
  const rounded = Math.round(Number(num));
  if (OperatorTypes.GREATER_THAN === realizedOperatorForResult) {
    const _Math2 = Math;
    return Math.max(1, rounded + 1);
  } else if (tmp2.LESS_THAN === realizedOperatorForResult) {
    const _Math = Math;
    return Math.max(0, rounded - 1);
  } else {
    return rounded;
  }
};
export const storedValueFor = function storedValueFor(TableSwitchRow, c7) {
  let num = TableSwitchRow;
  if (TableSwitchRow == null) {
    num = 0;
  }
  const str = Math.round(Number(num));
  if (OperatorTypes.GREATER_THAN === c7) {
    const _Math2 = Math;
    return Math.max(0, str - 1).toString();
  } else if (tmp.LESS_THAN === c7) {
    const _Math = Math;
    return Math.max(1, str + 1).toString();
  } else {
    return str.toString();
  }
};
export const minDisplayedValueFor = function minDisplayedValueFor(arg0) {
  if (OperatorTypes.GREATER_THAN === arg0) {
    return 1;
  } else if (tmp.LESS_THAN === arg0) {
    return 0;
  }
};