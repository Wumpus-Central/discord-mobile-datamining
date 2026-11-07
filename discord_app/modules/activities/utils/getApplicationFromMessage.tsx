// === Module 15409: getApplicationFromMessage ===

// Module 15409 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2140 */;

const SpotifyApplication = fn(15406).SpotifyApplication;
const isSpotifyParty = fn(8985).isSpotifyParty;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export function getApplicationFromMessage(application) {
  if (null != application.application) {
    let fromServer = ApplicationRecord.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
}