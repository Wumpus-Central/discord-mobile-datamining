// === Module 14821: getApplicationIdForActivity ===

// Module 14821 (getApplicationIdForActivity)
import Constants from "Constants" /* 2026 */;
import isStreamingDefault from "isStreaming" /* 8658 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10555 */;
import isOnXboxDefault from "isOnXbox" /* 14053 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14316 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 14822 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 14823 */;
import size from "module_2" /* 2 */;

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
};