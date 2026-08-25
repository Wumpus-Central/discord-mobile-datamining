// === Module 12824: getApplicationFromMessage ===

// Module 12824 (getApplicationFromMessage)
import closure_0 from "createExecutable" /* 4406 */;
import { SpotifyApplication } from "getIconURL" /* 12821 */;
import { isSpotifyParty } from "SPOTIFY_APP_PROTOCOL" /* 9050 */;

const result = require("set").fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  if (null != application.application) {
    let fromServer = closure_0.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};