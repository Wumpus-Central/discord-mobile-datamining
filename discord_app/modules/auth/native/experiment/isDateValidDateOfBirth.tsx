// discord_app/modules/auth/native/experiment/isDateValidDateOfBirth.tsx
import set from "../../../../../_runtime/00002_set.js";
import hooksDefault from "../../../../../_runtime/04075_hooks.js";

const result = set.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hooksDefault().diff(arg0, "days") >= 1;
    const obj = hooksDefault();
  }
  return tmp;
}
