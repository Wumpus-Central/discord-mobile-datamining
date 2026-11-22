// === Module 14327: getApplicationFromMessage ===

// Module 14327 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2142 */;

const SpotifyApplication = fn(14324).SpotifyApplication;
const isSpotifyParty = fn(6897).isSpotifyParty;
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