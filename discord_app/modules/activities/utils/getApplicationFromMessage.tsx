// === Module 12810: getApplicationFromMessage ===

// Module 12810 (getApplicationFromMessage)
import closure_0 from "createExecutable" /* 4471 */;
import { SpotifyApplication } from "getIconURL" /* 12807 */;
import { isSpotifyParty } from "SPOTIFY_APP_PROTOCOL" /* 8542 */;

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