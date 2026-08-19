// discord_app/modules/activities/utils/getApplicationFromMessage.tsx
import createExecutable from "../../../records/ApplicationRecord.tsx";
import { SpotifyApplication } from "../../../records/SpotifyApplicationRecord.tsx";
import { isSpotifyParty } from "../../spotify/SpotifyConstants.tsx";

const result = require("obj132").fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  if (null != application.application) {
    let fromServer = closure_0.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};