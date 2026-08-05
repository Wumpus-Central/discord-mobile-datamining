// discord_app/modules/now_playing/getApplicationIdForActivity.tsx
import { SpotifyApplication } from "getIconURL";
import { TWITCH_APPLICATION_ID_PREFIX as closure_3 } from "getIconURL";
import { XBOX_APPLICATION_ID_PREFIX as closure_4 } from "getIconURL";
import { XBOX_ACTIVITY_APPLICATION_ID as closure_5 } from "items3";

const result = require("getIconURL").fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  if (require("../activities/utils/isListeningOnSpotify.tsx")(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        let id = SpotifyApplication.id;
      }
      return id;
    }
  }
  if (require("../activities/utils/isStreaming.tsx")(party)) {
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
  if (require("../activities/utils/isOnXbox.tsx")(party)) {
    id = closure_4 + party.name;
  }
};