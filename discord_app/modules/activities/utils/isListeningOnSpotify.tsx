// discord_app/modules/activities/utils/isListeningOnSpotify.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getPlatformUserUrlDefault from "../../../lib/Platforms.tsx";
import SPOTIFY_APP_PROTOCOL from "../../spotify/SpotifyConstants.tsx";
import ME from "../../../Constants.tsx";

({ ActivityTypes: obj1, PlatformTypes: c3 } = ME);
const isSpotifyParty = SPOTIFY_APP_PROTOCOL.isSpotifyParty;
const result = obj132.fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === constants.LISTENING;
  }
  if (tmp) {
    tmp = type.name === getPlatformUserUrlDefault.get(constants2.SPOTIFY).name;
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