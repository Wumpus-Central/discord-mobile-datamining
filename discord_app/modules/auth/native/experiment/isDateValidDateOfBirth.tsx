// === Module 15899: isDateValidDateOfBirth ===

// Module 15899 (isDateValidDateOfBirth)
import _modDef4461 from "module_4461" /* 4461 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4461().diff(arg0, "days") >= 1;
    const obj = _modDef4461();
  }
  return tmp;
};