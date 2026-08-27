// === Module 13317: getIconURL ===

// Module 13317 (getIconURL)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import createExecutableDefault from "createExecutable" /* 4471 */;
import getPlatformUserUrlDefault from "getPlatformUserUrl" /* 5179 */;

require = arg1;
createExecutableDefault;
let c3 = "twitch:";
const result = require("set").fileFinishedImporting("records/TwitchApplicationRecord.tsx");
class TwitchApplicationRecord extends tmp2 {
  constructor(arg0) {
    tmp3 = new TwitchApplicationRecord(global, tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp3.id = "" + c3 + global.url;
    intl = require("getSystemLocale").intl;
    tmp3.name = intl.string(require("getSystemLocale").t.JIPtgq);
    return tmp3;
  }
}
TwitchApplicationRecord.prototype["getIconURL"] = function getIconURL() {
  return getPlatformUserUrlDefault.get("twitch").icon.lightPNG;
};

export default TwitchApplicationRecord;
export const TWITCH_APPLICATION_ID_PREFIX = "twitch:";