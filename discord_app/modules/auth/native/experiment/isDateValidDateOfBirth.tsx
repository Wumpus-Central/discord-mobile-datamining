// discord_app/modules/auth/native/experiment/isDateValidDateOfBirth.tsx
import set from "../../../../../_runtime/00002_set.js";
import tDefault from "../../../../../_runtime/03975_t.js";

const result = set.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = tDefault().diff(arg0, "days") >= 1;
    const obj = tDefault();
  }
  return tmp;
};