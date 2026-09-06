// === Module 4468: UploadVoiceDebugLogsError ===

// Module 4468 (UploadVoiceDebugLogsError)
import size from "module_2" /* 2 */;

const UploadErrorCodes = { GENERAL: 0, [0]: "GENERAL", NO_FILE: 1, [1]: "NO_FILE", PROGRESS: 2, [2]: "PROGRESS", UPLOAD: 3, [3]: "UPLOAD", READ: 4, [4]: "READ" };
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
      const intl5 = require("util").intl;
      return intl5.string(require("util").t.dDMp2Z);
    } else if (tmp.PROGRESS === code) {
      const intl4 = require("util").intl;
      return intl4.string(require("util").t.XBxyvo);
    } else if (tmp.UPLOAD === code) {
      const intl3 = require("util").intl;
      return intl3.string(require("util").t["6b6rwk"]);
    } else if (tmp.READ === code) {
      const intl2 = require("util").intl;
      return intl2.string(require("util").t.VUc3ti);
    } else {
      const GENERAL = tmp.GENERAL;
      const intl = require("util").intl;
      return intl.string(require("util").t.VzHcSm);
    }
  },
  set: undefined
});
const result = size.fileFinishedImporting("errors/UploadVoiceDebugLogsError.tsx");

export default UploadVoiceDebugLogsError;
export { UploadErrorCodes };