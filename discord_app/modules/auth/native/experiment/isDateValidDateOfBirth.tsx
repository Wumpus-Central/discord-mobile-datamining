// === Module 17526: isDateValidDateOfBirth ===

// Module 17526 (isDateValidDateOfBirth)
import _modDef2168 from "module_2168" /* 2168 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef2168().diff(arg0, "days") >= 1;
    const obj = _modDef2168();
  }
  return tmp;
};