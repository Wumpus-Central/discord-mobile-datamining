import { t } from "../../../../../_runtime/03867_t.js";
// discord_app/modules/auth/native/experiment/isDateValidDateOfBirth.tsx
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = t().diff(arg0, "days") >= 1;
    const obj = t();
  }
  return tmp;
};