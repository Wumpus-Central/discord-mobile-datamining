// === Module 10940: isListeningOnSpotify ===

// Module 10940 (isListeningOnSpotify)
import Constants from "Constants" /* 1072 */;
import ActivityTypes from "ActivityTypes" /* 5896 */;
import PlatformsDefault from "Platforms" /* 6709 */;
import SpotifyConstants from "SpotifyConstants" /* 9052 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.ActivityTypes.LISTENING;
  }
  if (tmp) {
    tmp = type.name === PlatformsDefault.get(PlatformTypes.SPOTIFY).name;
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