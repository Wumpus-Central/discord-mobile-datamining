// discord_app/modules/now_playing/getApplicationIdForActivity.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import items3 from "../activities/Constants.tsx";
import isListeningOnSpotifyDefault from "../activities/utils/isListeningOnSpotify.tsx";
import _isStreamingDefault from "../activities/utils/isStreaming.tsx";
import isOnXboxDefault from "../activities/utils/isOnXbox.tsx";
import getIconURL from "../../records/SpotifyApplicationRecord.tsx";
import getIconURL2 from "../../records/TwitchApplicationRecord.tsx";
import getIconURL3 from "../../records/XboxApplicationRecord.tsx";

const SpotifyApplication = getIconURL.SpotifyApplication;
let closure_3 = getIconURL2.TWITCH_APPLICATION_ID_PREFIX;
let closure_4 = getIconURL3.XBOX_APPLICATION_ID_PREFIX;
let closure_5 = items3.XBOX_ACTIVITY_APPLICATION_ID;
const result = obj132.fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  if (isListeningOnSpotifyDefault(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        let id = SpotifyApplication.id;
      }
      return id;
    }
  }
  if (_isStreamingDefault(party)) {
    if (null != party.url) {
      id = closure_3 + party.url;
    }
  }
  if (null != party.application_id) {
    if (party.application_id !== closure_5) {
      id = party.application_id;
    }
  }
  id = null;
  if (isOnXboxDefault(party)) {
    id = closure_4 + party.name;
  }
};