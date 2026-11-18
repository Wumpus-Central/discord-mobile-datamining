// === Module 14257: getCanSendInvite ===

// Module 14257 (getCanSendInvite)
import hasFlagDefault from "hasFlag" /* 7972 */;
import isInviteActiveDefault from "isInviteActive" /* 12137 */;
import getPartySize from "getPartySize" /* 12138 */;
import hasPartySize from "hasPartySize" /* 12139 */;
import isPartyFull from "isPartyFull" /* 12140 */;
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