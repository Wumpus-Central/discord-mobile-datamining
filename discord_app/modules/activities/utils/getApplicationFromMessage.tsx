// === Module 14358: getApplicationFromMessage ===

// Module 14358 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2142 */;

const SpotifyApplication = fn(14355).SpotifyApplication;
const isSpotifyParty = fn(7506).isSpotifyParty;
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