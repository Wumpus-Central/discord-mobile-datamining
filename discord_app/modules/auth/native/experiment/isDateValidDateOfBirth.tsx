// === Module 18013: isDateValidDateOfBirth ===

// Module 18013 (isDateValidDateOfBirth)
import _modDef2042 from "module_2042" /* 2042 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef2042().diff(arg0, "days") >= 1;
    const obj = _modDef2042();
  }
  return tmp;
};