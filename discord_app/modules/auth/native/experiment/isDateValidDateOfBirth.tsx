// === Module 15249: isDateValidDateOfBirth ===

// Module 15249 (isDateValidDateOfBirth)
import obj132 from "obj132" /* 2 */;
import tDefault from "t" /* 3975 */;

const result = obj132.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = tDefault().diff(arg0, "days") >= 1;
    const obj = tDefault();
  }
  return tmp;
};