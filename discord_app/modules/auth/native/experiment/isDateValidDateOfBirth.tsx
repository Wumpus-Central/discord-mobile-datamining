// === Module 16232: isDateValidDateOfBirth ===

// Module 16232 (isDateValidDateOfBirth)
import _modDef4314 from "module_4314" /* 4314 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4314().diff(arg0, "days") >= 1;
    const obj = _modDef4314();
  }
  return tmp;
};