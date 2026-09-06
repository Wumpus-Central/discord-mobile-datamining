// discord_app/modules/activities/utils/isListeningOnSpotify.tsx
import PlatformsDefault from "../../../lib/Platforms.tsx";
import SpotifyConstants from "../../spotify/SpotifyConstants.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ ActivityTypes: c2, PlatformTypes: c3 } = Constants);
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === constants.LISTENING;
  }
  if (tmp) {
    tmp = type.name === PlatformsDefault.get(constants2.SPOTIFY).name;
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
}
