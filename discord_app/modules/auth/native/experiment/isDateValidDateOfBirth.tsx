// === Module 16308: isDateValidDateOfBirth ===

// Module 16308 (isDateValidDateOfBirth)
import _modDef4348 from "module_4348" /* 4348 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4348().diff(arg0, "days") >= 1;
    const obj = _modDef4348();
  }
  return tmp;
};