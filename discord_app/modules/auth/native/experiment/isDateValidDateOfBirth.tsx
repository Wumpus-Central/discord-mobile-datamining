// === Module 16752: isDateValidDateOfBirth ===

// Module 16752 (isDateValidDateOfBirth)
import _modDef4704 from "module_4704" /* 4704 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4704().diff(arg0, "days") >= 1;
    const obj = _modDef4704();
  }
  return tmp;
};