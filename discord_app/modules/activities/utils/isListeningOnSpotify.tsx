// === Module 9261: isListeningOnSpotify ===

// Module 9261 (isListeningOnSpotify)
import ME from "ME";
import { isSpotifyParty } from "WEB_OPEN";

let c3;
let obj1;
({ ActivityTypes: obj1, PlatformTypes: c3 } = ME);
const result = require("getPlatformUserUrl").fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === constants.LISTENING;
  }
  if (tmp) {
    tmp = type.name === importDefault(4937).get(constants2.SPOTIFY).name;
    const obj = importDefault(4937);
  }
  if (tmp) {
    tmp = null != type.party;
  }
  if (tmp) {
    tmp = null != type.party.id;
  }
  if (tmp) {
    tmp = isSpotifyParty(type.party.id);
  }
  return tmp;
};