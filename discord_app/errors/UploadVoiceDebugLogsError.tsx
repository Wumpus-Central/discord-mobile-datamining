// discord_app/errors/UploadVoiceDebugLogsError.tsx
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
      const intl5 = require(1236) /* getSystemLocale */.intl;
      return intl5.string(require(1236) /* getSystemLocale */.t.dDMp2Z);
    } else if (tmp.PROGRESS === code) {
      const intl4 = require(1236) /* getSystemLocale */.intl;
      return intl4.string(require(1236) /* getSystemLocale */.t.XBxyvo);
    } else if (tmp.UPLOAD === code) {
      const intl3 = require(1236) /* getSystemLocale */.intl;
      return intl3.string(require(1236) /* getSystemLocale */.t["6b6rwk"]);
    } else if (tmp.READ === code) {
      const intl2 = require(1236) /* getSystemLocale */.intl;
      return intl2.string(require(1236) /* getSystemLocale */.t.VUc3ti);
    } else {
      const GENERAL = tmp.GENERAL;
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.VzHcSm);
    }
  },
  set: undefined
});
const result = require("set").fileFinishedImporting("errors/UploadVoiceDebugLogsError.tsx");

export default UploadVoiceDebugLogsError;
export const UploadErrorCodes = obj;