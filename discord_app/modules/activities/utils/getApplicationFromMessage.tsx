// === Module 14356: getApplicationFromMessage ===

// Module 14356 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2024 */;

const SpotifyApplication = fn(14353).SpotifyApplication;
const isSpotifyParty = fn(8748).isSpotifyParty;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
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
};