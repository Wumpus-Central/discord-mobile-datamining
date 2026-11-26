// === Module 15240: getApplicationIdForActivity ===

// Module 15240 (getApplicationIdForActivity)
import Constants from "Constants" /* 2145 */;
import isStreamingDefault from "isStreaming" /* 9523 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 11377 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14530 */;
import isOnXboxDefault from "isOnXbox" /* 14900 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 15241 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 15242 */;
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