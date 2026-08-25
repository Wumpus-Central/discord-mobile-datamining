// === Module 12821: getIconURL ===

// Module 12821 (getIconURL)
import createExecutableDefault from "createExecutable" /* 4406 */;
import importDefaultResult1 from "getPlatformUserUrl" /* 5108 */;

createExecutableDefault;
const spotify = "spotify";
const value = importDefaultResult1.get("spotify");
class SpotifyApplicationRecord extends tmp4 {
  constructor() {
    tmp = new tmp({}, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    tmp.id = spotify;
    tmp.name = closure_1.name;
    return tmp;
  }
}
const prototype = SpotifyApplicationRecord.prototype;
prototype["getIconURL"] = function getIconURL() {
  return value.icon.lightPNG;
};
prototype["getWhiteIconURL"] = function getWhiteIconURL() {
  return value.icon.whitePNG;
};
const tmp6 = new "getWhiteIconURL"({}, tmp2, tmp);
// ThrowIfThisInitialized (0x7c)
tmp6.id = "spotify";
tmp6.name = value.name;
const result = require("set").fileFinishedImporting("records/SpotifyApplicationRecord.tsx");

export default SpotifyApplicationRecord;
export const SPOTIFY_APPLICATION_ID = "spotify";
export const SpotifyApplication = tmp6;