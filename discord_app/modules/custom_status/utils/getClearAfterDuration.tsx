// === Module 11544: getClearAfterDuration ===

// Module 11544 (getClearAfterDuration)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 11540 */;
import size from "module_2" /* 2 */;

const ClearAfterValues = Constants.ClearAfterValues;
const result = size.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(num) {
  if (num === ClearAfterValues.TODAY) {
    const _Date = Date;
    const date = new Date();
    const _Date2 = Date;
    const date1 = new Date(date);
    date1.setDate(date.getDate() + 1);
    const time = date1.getTime();
    return time - date.getTime();
  } else {
    _modDef38(typeof num === "number", "Invalid custom status clear timeout");
    return num;
  }
};