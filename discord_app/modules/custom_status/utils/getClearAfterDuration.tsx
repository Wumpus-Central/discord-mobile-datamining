// === Module 11119: getClearAfterDuration ===

// Module 11119 (getClearAfterDuration)
import _modDef38 from "module_38" /* 38 */;
import DurationsDefault from "Durations" /* 1090 */;
import Constants from "Constants" /* 11115 */;
import size from "module_2" /* 2 */;

const ClearAfterValues = Constants.ClearAfterValues;
const result = size.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = DurationsDefault.Millis.DAY;
  } else {
    _modDef38(typeof DAY === "number", "Invalid custom status clear timeout");
  }
  return DAY;
};