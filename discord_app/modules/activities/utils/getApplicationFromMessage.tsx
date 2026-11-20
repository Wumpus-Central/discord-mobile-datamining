// === Module 14207: getApplicationFromMessage ===

// Module 14207 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2141 */;

const SpotifyApplication = fn(14204).SpotifyApplication;
const isSpotifyParty = fn(6778).isSpotifyParty;
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