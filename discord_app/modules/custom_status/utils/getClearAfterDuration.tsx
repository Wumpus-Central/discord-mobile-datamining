// === Module 9296: getClearAfterDuration ===

// Module 9296 (getClearAfterDuration)
import obj132 from "obj132" /* 2 */;
import _modDef38 from "module_38" /* 38 */;
import obj132Default from "obj132" /* 687 */;
import StatusTypes from "StatusTypes" /* 9292 */;

const ClearAfterValues = StatusTypes.ClearAfterValues;
const result = obj132.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = obj132Default.Millis.DAY;
  } else {
    _modDef38(typeof DAY === "number", "Invalid custom status clear timeout");
  }
  return DAY;
};