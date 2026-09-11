// === Module 16054: isDateValidDateOfBirth ===

// Module 16054 (isDateValidDateOfBirth)
import _modDef4198 from "module_4198" /* 4198 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4198().diff(arg0, "days") >= 1;
    const obj = _modDef4198();
  }
  return tmp;
};