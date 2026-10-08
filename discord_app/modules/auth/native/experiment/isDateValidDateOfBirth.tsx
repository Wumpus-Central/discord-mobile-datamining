// === Module 16202: isDateValidDateOfBirth ===

// Module 16202 (isDateValidDateOfBirth)
import _modDef4659 from "module_4659" /* 4659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4659().diff(arg0, "days") >= 1;
    const obj = _modDef4659();
  }
  return tmp;
};