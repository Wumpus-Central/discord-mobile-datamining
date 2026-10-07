// discord_app/records/TwitchApplicationRecord.tsx
import util from "../intl/index.native.tsx";
import PlatformsDefault from "../lib/Platforms.tsx";
import ApplicationRecord from "ApplicationRecord.tsx";

require = fn;
let c3 = "twitch:";
const size = fn(2);
const result = size.fileFinishedImporting("records/TwitchApplicationRecord.tsx");
class TwitchApplicationRecord extends tmp2 {
  constructor(arg0) {
    tmp3 = new TwitchApplicationRecord(global, tmp2, tmp, new.target);
    tmp3.id = "" + c3 + global.url;
    intl = closure_0(closure_2[1]).intl;
    tmp3.name = intl.string(closure_0(closure_2[1]).t.JIPtgq);
    return tmp3;
  }
}
TwitchApplicationRecord.prototype["getIconURL"] = function getIconURL() {
  return PlatformsDefault.get("twitch").icon.lightPNG;
};

export default TwitchApplicationRecord;
export const TWITCH_APPLICATION_ID_PREFIX = "twitch:";
