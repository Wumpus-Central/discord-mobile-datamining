// === Module 16318: isDateValidDateOfBirth ===

// Module 16318 (isDateValidDateOfBirth)
import _modDef4661 from "module_4661" /* 4661 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4661().diff(arg0, "days") >= 1;
    const obj = _modDef4661();
  }
  return tmp;
};