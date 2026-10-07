// === Module 15942: isDateValidDateOfBirth ===

// Module 15942 (isDateValidDateOfBirth)
import _modDef4467 from "module_4467" /* 4467 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4467().diff(arg0, "days") >= 1;
    const obj = _modDef4467();
  }
  return tmp;
};