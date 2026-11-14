// === Module 18686: isDateValidDateOfBirth ===

// Module 18686 (isDateValidDateOfBirth)
import _modDef2169 from "module_2169" /* 2169 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef2169().diff(arg0, "days") >= 1;
    const obj = _modDef2169();
  }
  return tmp;
};