// === Module 12784: getCanSendInvite ===

// Module 12784 (getCanSendInvite)
import obj132 from "obj132" /* 2 */;
import hasFlagDefault from "hasFlag" /* 7260 */;
import resultDefault from "result" /* 10917 */;
import getPartySize from "getPartySize" /* 10918 */;
import hasPartySize from "hasPartySize" /* 10919 */;
import isPartyFull from "isPartyFull" /* 10920 */;
import ME from "ME" /* 676 */;

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