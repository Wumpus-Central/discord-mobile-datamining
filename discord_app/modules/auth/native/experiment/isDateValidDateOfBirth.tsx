// === Module 17098: isDateValidDateOfBirth ===

// Module 17098 (isDateValidDateOfBirth)
import _modDef4797 from "module_4797" /* 4797 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4797().diff(arg0, "days") >= 1;
    const obj = _modDef4797();
  }
  return tmp;
};