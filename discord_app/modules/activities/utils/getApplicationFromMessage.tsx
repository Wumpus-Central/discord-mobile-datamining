// discord_app/modules/activities/utils/getApplicationFromMessage.tsx
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";

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
