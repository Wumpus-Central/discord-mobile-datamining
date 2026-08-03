// === Module 14981: isDateValidDateOfBirth ===

// Module 14981 (isDateValidDateOfBirth)
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(3837)().diff(arg0, "days") >= 1;
    const obj = importDefault(3837)();
  }
  return tmp;
};