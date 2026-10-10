// === Module 16385: isDateValidDateOfBirth ===

// Module 16385 (isDateValidDateOfBirth)
import _modDef4702 from "module_4702" /* 4702 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4702().diff(arg0, "days") >= 1;
    const obj = _modDef4702();
  }
  return tmp;
};