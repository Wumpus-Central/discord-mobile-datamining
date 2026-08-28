// === Module 9195: isListeningOnSpotify ===

// Module 9195 (isListeningOnSpotify)
import set from "set" /* 2 */;
import getPlatformUserUrlDefault from "getPlatformUserUrl" /* 5192 */;
import SPOTIFY_APP_PROTOCOL from "SPOTIFY_APP_PROTOCOL" /* 8557 */;
import ME from "ME" /* 676 */;

({ ActivityTypes: obj1, PlatformTypes: c3 } = ME);
const isSpotifyParty = SPOTIFY_APP_PROTOCOL.isSpotifyParty;
const result = set.fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === constants.LISTENING;
  }
  if (tmp) {
    tmp = type.name === getPlatformUserUrlDefault.get(constants2.SPOTIFY).name;
    const obj = getPlatformUserUrlDefault;
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