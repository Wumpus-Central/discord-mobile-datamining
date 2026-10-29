// === Module 17911: isDateValidDateOfBirth ===

// Module 17911 (isDateValidDateOfBirth)
import _modDef2047 from "module_2047" /* 2047 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef2047().diff(arg0, "days") >= 1;
    const obj = _modDef2047();
  }
  return tmp;
};