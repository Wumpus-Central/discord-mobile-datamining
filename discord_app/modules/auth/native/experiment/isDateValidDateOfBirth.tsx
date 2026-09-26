// === Module 15608: isDateValidDateOfBirth ===

// Module 15608 (isDateValidDateOfBirth)
import _modDef4421 from "module_4421" /* 4421 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4421().diff(arg0, "days") >= 1;
    const obj = _modDef4421();
  }
  return tmp;
};