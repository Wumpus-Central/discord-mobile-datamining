// === Module 15444: getApplicationFromMessage ===

// Module 15444 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2140 */;

const SpotifyApplication = fn(15441).SpotifyApplication;
const isSpotifyParty = fn(8991).isSpotifyParty;
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