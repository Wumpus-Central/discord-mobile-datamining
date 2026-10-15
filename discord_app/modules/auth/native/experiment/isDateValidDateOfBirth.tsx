// === Module 16991: isDateValidDateOfBirth ===

// Module 16991 (isDateValidDateOfBirth)
import _modDef4758 from "module_4758" /* 4758 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4758().diff(arg0, "days") >= 1;
    const obj = _modDef4758();
  }
  return tmp;
};