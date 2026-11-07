// === Module 15411: getCanSendInvite ===

// Module 15411 (getCanSendInvite)
import hasFlagDefault from "hasFlag" /* 7547 */;
import isInviteActiveDefault from "isInviteActive" /* 11841 */;
import getPartySize from "getPartySize" /* 11843 */;
import hasPartySize from "hasPartySize" /* 11844 */;
import isPartyFull from "isPartyFull" /* 11845 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

({ ActivityFlags: c3, ActivityActionTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export function getCanSendInvite(findActivityResult, author, application1, id1) {
  if (author.author.id === id1) {
    return false;
  } else if (isInviteActiveDefault(findActivityResult, author, application1.id)) {
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
}