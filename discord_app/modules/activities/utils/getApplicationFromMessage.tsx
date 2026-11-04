// === Module 15365: getApplicationFromMessage ===

// Module 15365 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2145 */;

const SpotifyApplication = fn(15362).SpotifyApplication;
const isSpotifyParty = fn(9052).isSpotifyParty;
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