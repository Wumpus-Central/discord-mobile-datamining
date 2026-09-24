// === Module 16400: isDateValidDateOfBirth ===

// Module 16400 (isDateValidDateOfBirth)
import _modDef4416 from "module_4416" /* 4416 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4416().diff(arg0, "days") >= 1;
    const obj = _modDef4416();
  }
  return tmp;
};