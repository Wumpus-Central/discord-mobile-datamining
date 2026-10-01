// === Module 15822: isDateValidDateOfBirth ===

// Module 15822 (isDateValidDateOfBirth)
import _modDef4450 from "module_4450" /* 4450 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4450().diff(arg0, "days") >= 1;
    const obj = _modDef4450();
  }
  return tmp;
};