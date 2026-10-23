// === Module 17362: isDateValidDateOfBirth ===

// Module 17362 (isDateValidDateOfBirth)
import _modDef2049 from "module_2049" /* 2049 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef2049().diff(arg0, "days") >= 1;
    const obj = _modDef2049();
  }
  return tmp;
};