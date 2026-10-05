// discord_app/modules/activities/utils/getApplicationFromMessage.tsx
import SpotifyConstants from "../../spotify/SpotifyConstants.tsx";
import SpotifyApplicationRecord from "../../../records/SpotifyApplicationRecord.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const SpotifyApplication = SpotifyApplicationRecord.SpotifyApplication;
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  let fromServer;
  if (null != application.application) {
    fromServer = ApplicationRecord.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};
