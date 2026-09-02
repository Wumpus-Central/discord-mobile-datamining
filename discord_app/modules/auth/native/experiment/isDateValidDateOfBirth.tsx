// === Module 15805: isDateValidDateOfBirth ===

// Module 15805 (isDateValidDateOfBirth)
import set from "set" /* 2 */;
import hooksDefault from "hooks" /* 4074 */;

const result = set.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hooksDefault().diff(arg0, "days") >= 1;
    const obj = hooksDefault();
  }
  return tmp;
};