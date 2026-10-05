// discord_app/records/SpotifyApplicationRecord.tsx
import ApplicationRecord from "ApplicationRecord.tsx";
import Platforms from "../lib/Platforms.tsx";
import size from "../../_runtime/metro/00002__.js";

let tmp2;
const spotify = "spotify";
const value = Platforms.get("spotify");
const map = value;
class SpotifyApplicationRecord extends ApplicationRecord {
  constructor() {
    const tmp2 = new tmp({}, new.target, tmp);
    tmp2.id = spotify;
    tmp2.name = map.name;
    return tmp2;
  }
  getIconURL() {
    return map.icon.lightPNG;
  }
  getWhiteIconURL() {
    return map.icon.whitePNG;
  }
}
const prototype = SpotifyApplicationRecord.prototype;
const tmp6 = new "getWhiteIconURL"({}, tmp2, tmp);
tmp6.id = "spotify";
tmp6.name = value.name;
const result = size.fileFinishedImporting("records/SpotifyApplicationRecord.tsx");

export default SpotifyApplicationRecord;
export const SPOTIFY_APPLICATION_ID = "spotify";
export const SpotifyApplication = tmp6;
