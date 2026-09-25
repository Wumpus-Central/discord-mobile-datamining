// === Module 12785: SpotifyApplicationRecord ===

// Module 12785 (SpotifyApplicationRecord)
import ApplicationRecord from "ApplicationRecord" /* 2002 */;
import Platforms from "Platforms" /* 5590 */;

const spotify = "spotify";
const value = Platforms.get("spotify");
let closure_1 = value;
class SpotifyApplicationRecord extends tmp4 {
  constructor() {
    tmp1 = new tmp({}, new.target, tmp);
    tmp1.id = spotify;
    tmp1.name = closure_1.name;
    return tmp1;
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
tmp6.id = "spotify";
tmp6.name = value.name;
const size = fn(2);
const result = size.fileFinishedImporting("records/SpotifyApplicationRecord.tsx");

export default SpotifyApplicationRecord;
export const SPOTIFY_APPLICATION_ID = "spotify";
export const SpotifyApplication = tmp6;