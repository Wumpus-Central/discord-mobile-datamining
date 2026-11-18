// === Module 14254: getApplicationFromMessage ===

// Module 14254 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2143 */;

const SpotifyApplication = fn(14251).SpotifyApplication;
const isSpotifyParty = fn(6806).isSpotifyParty;
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