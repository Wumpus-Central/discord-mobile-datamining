// === Module 16065: isDateValidDateOfBirth ===

// Module 16065 (isDateValidDateOfBirth)
import _modDef4196 from "module_4196" /* 4196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4196().diff(arg0, "days") >= 1;
    const obj = _modDef4196();
  }
  return tmp;
};