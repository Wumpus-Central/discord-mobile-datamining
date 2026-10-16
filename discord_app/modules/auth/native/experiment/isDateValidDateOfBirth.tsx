// discord_app/modules/auth/native/experiment/isDateValidDateOfBirth.tsx
import _modDef4761 from "../../../../../_runtime/metro/04761__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4761().diff(arg0, "days") >= 1;
    const obj = _modDef4761();
  }
  return tmp;
}
