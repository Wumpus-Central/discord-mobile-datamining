// === Module 12788: getApplicationFromMessage ===

// Module 12788 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2002 */;

const SpotifyApplication = fn(12785).SpotifyApplication;
const isSpotifyParty = fn(7780).isSpotifyParty;
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