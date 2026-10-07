// discord_app/modules/now_playing/getApplicationIdForActivity.tsx
import Constants from "../activities/Constants.tsx";
import isStreamingDefault from "../activities/utils/isStreaming.tsx";
import isListeningOnSpotifyDefault from "../activities/utils/isListeningOnSpotify.tsx";
import isOnXboxDefault from "../activities/utils/isOnXbox.tsx";
import SpotifyApplicationRecord from "../../records/SpotifyApplicationRecord.tsx";
import TwitchApplicationRecord from "../../records/TwitchApplicationRecord.tsx";
import XboxApplicationRecord from "../../records/XboxApplicationRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SpotifyApplication = SpotifyApplicationRecord.SpotifyApplication;
let closure_3 = TwitchApplicationRecord.TWITCH_APPLICATION_ID_PREFIX;
let closure_4 = XboxApplicationRecord.XBOX_APPLICATION_ID_PREFIX;
let closure_5 = Constants.XBOX_ACTIVITY_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  if (isListeningOnSpotifyDefault(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        let id = SpotifyApplication.id;
      }
      return id;
    }
  }
  if (isStreamingDefault(party)) {
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
}
