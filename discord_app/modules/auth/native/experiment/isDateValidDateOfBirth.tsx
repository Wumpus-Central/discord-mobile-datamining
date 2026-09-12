// === Module 16078: isDateValidDateOfBirth ===

// Module 16078 (isDateValidDateOfBirth)
import _modDef4228 from "module_4228" /* 4228 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4228().diff(arg0, "days") >= 1;
    const obj = _modDef4228();
  }
  return tmp;
};