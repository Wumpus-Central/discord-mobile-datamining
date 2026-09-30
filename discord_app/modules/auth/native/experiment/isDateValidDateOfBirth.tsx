// === Module 15806: isDateValidDateOfBirth ===

// Module 15806 (isDateValidDateOfBirth)
import _modDef4451 from "module_4451" /* 4451 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4451().diff(arg0, "days") >= 1;
    const obj = _modDef4451();
  }
  return tmp;
};