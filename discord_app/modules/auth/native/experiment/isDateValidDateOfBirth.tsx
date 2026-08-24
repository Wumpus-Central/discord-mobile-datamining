// === Module 15313: isDateValidDateOfBirth ===

// Module 15313 (isDateValidDateOfBirth)
import set from "set" /* 2 */;
import tDefault from "t" /* 3978 */;

const result = set.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = tDefault().diff(arg0, "days") >= 1;
    const obj = tDefault();
  }
  return tmp;
};