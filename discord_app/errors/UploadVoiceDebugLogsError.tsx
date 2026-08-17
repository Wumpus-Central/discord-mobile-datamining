// discord_app/errors/UploadVoiceDebugLogsError.tsx
import set from "../../_runtime/00002_set.js";
import { getSystemLocale } from "../intl/index.native.tsx";

let obj = { GENERAL: 0, [0]: "GENERAL", NO_FILE: 1, [1]: "NO_FILE", PROGRESS: 2, [2]: "PROGRESS", UPLOAD: 3, [3]: "UPLOAD", READ: 4, [4]: "READ" };
class UploadVoiceDebugLogsError {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.code = global;
    return obj;
  }
}
Object.defineProperty(UploadVoiceDebugLogsError.prototype, "displayMessage", {
  get: function displayMessage() {
    const code = this.code;
    if (obj.NO_FILE === code) {
      const intl5 = getSystemLocale.intl;
      return intl5.string(getSystemLocale.t.dDMp2Z);
    } else if (tmp.PROGRESS === code) {
      const intl4 = getSystemLocale.intl;
      return intl4.string(getSystemLocale.t.XBxyvo);
    } else if (tmp.UPLOAD === code) {
      const intl3 = getSystemLocale.intl;
      return intl3.string(getSystemLocale.t["6b6rwk"]);
    } else if (tmp.READ === code) {
      const intl2 = getSystemLocale.intl;
      return intl2.string(getSystemLocale.t.VUc3ti);
    } else {
      const GENERAL = tmp.GENERAL;
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.VzHcSm);
    }
  },
  set: undefined
});
const result = set.fileFinishedImporting("errors/UploadVoiceDebugLogsError.tsx");

export default UploadVoiceDebugLogsError;
export const UploadErrorCodes = obj;