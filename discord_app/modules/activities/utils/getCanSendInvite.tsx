// discord_app/modules/activities/utils/getCanSendInvite.tsx
import set from "../../../../_runtime/00002_set.js";
import getPartySize from "getPartySize.tsx";
import hasPartySize from "hasPartySize.tsx";
import resultDefault from "isInviteActive.tsx";
import ME from "../../../Constants.tsx";

({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = set.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (resultDefault(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(6110)(findActivityResult, constants.JOIN)) {
        const partySize = getPartySize.getPartySize(findActivityResult);
        const obj = getPartySize;
        const tmp5 = require;
        const hasPartySizeResult = hasPartySize.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(9370).isPartyFull(partySize);
          const tmp5Result = tmp5(9370);
        }
        return !isPartyFullResult;
      } else {
        return false;
      }
    } else {
      return false;
    }
    tmp11 = importDefault;
  }
};