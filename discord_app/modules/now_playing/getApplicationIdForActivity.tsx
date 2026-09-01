// === Module 13402: getApplicationIdForActivity ===

// Module 13402 (getApplicationIdForActivity)
import set from "set" /* 2 */;
import items3 from "items3" /* 4506 */;
import _isStreamingDefault from "_isStreaming" /* 8108 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 9256 */;
import isOnXboxDefault from "isOnXbox" /* 9387 */;
import getIconURL from "getIconURL" /* 12894 */;
import getIconURL2 from "getIconURL" /* 13403 */;
import getIconURL3 from "getIconURL" /* 13404 */;

const SpotifyApplication = getIconURL.SpotifyApplication;
let closure_3 = getIconURL2.TWITCH_APPLICATION_ID_PREFIX;
let closure_4 = getIconURL3.XBOX_APPLICATION_ID_PREFIX;
let closure_5 = items3.XBOX_ACTIVITY_APPLICATION_ID;
const result = set.fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

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