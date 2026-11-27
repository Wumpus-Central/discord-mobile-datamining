// === Module 11378: isListeningOnSpotify ===

// Module 11378 (isListeningOnSpotify)
import Constants from "Constants" /* 1071 */;
import ActivityTypes from "ActivityTypes" /* 6015 */;
import PlatformsDefault from "Platforms" /* 6178 */;
import SpotifyConstants from "SpotifyConstants" /* 7632 */;
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