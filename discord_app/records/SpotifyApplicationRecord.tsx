// === Module 12490: getIconURL ===

// Module 12490 (getIconURL)
import "createExecutable";
import importDefaultResult1 from "getPlatformUserUrl";

const spotify = "spotify";
const value = require("getPlatformUserUrl").get("spotify");
class SpotifyApplicationRecord extends tmp4 {
  constructor() {
    tmp = new tmp({}, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    tmp.id = spotify;
    tmp.name = get.name;
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