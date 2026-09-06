// === Module 13231: getApplicationFromMessage ===

// Module 13231 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 1918 */;

const SpotifyApplication = fn(13228).SpotifyApplication;
const isSpotifyParty = fn(8340).isSpotifyParty;
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