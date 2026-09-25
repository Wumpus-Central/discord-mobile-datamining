// === Module 15580: isDateValidDateOfBirth ===

// Module 15580 (isDateValidDateOfBirth)
import _modDef4418 from "module_4418" /* 4418 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4418().diff(arg0, "days") >= 1;
    const obj = _modDef4418();
  }
  return tmp;
};