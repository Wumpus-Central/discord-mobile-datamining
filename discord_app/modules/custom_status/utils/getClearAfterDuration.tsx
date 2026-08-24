// === Module 9296: getClearAfterDuration ===

// Module 9296 (getClearAfterDuration)
import set from "set" /* 2 */;
import _modDef38 from "module_38" /* 38 */;
import setDefault from "set" /* 687 */;
import StatusTypes from "StatusTypes" /* 9292 */;

const ClearAfterValues = StatusTypes.ClearAfterValues;
const result = set.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = setDefault.Millis.DAY;
  } else {
    _modDef38(typeof DAY === "number", "Invalid custom status clear timeout");
  }
  return DAY;
};