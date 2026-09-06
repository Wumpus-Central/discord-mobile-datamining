// === Module 15983: isDateValidDateOfBirth ===

// Module 15983 (isDateValidDateOfBirth)
import _modDef4153 from "module_4153" /* 4153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4153().diff(arg0, "days") >= 1;
    const obj = _modDef4153();
  }
  return tmp;
};