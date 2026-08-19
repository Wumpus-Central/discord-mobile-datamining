// discord_app/modules/activities/utils/getCanSendInvite.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import hasFlagDefault from "hasFlag.tsx";
import resultDefault from "isInviteActive.tsx";
import getPartySize from "getPartySize.tsx";
import hasPartySize from "hasPartySize.tsx";
import isPartyFull from "isPartyFull.tsx";
import ME from "../../../Constants.tsx";

({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = obj132.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else if (resultDefault(findActivityResult, author, application.id)) {
    const activity = author.activity;
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type !== constants2.JOIN_REQUEST) {
      return false;
    } else if (hasFlagDefault(findActivityResult, constants.JOIN)) {
      const partySize = getPartySize.getPartySize(findActivityResult);
      const hasPartySizeResult = hasPartySize.hasPartySize(partySize);
      let isPartyFullResult = !hasPartySizeResult;
      if (hasPartySizeResult) {
        isPartyFullResult = isPartyFull.isPartyFull(partySize);
        const tmp5Result = isPartyFull;
      }
      return !isPartyFullResult;
    } else {
      return false;
    }
  } else {
    return false;
  }
};