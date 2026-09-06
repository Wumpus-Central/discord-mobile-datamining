// === Module 13233: getCanSendInvite ===

// Module 13233 (getCanSendInvite)
import isInviteActiveDefault from "isInviteActive" /* 11754 */;
import getPartySize from "getPartySize" /* 11755 */;
import hasPartySize from "hasPartySize" /* 11756 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityFlags: c3, ActivityActionTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (isInviteActiveDefault(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(7313)(findActivityResult, constants.JOIN)) {
        const partySize = getPartySize.getPartySize(findActivityResult);
        const tmp5 = require;
        const hasPartySizeResult = hasPartySize.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(11757).isPartyFull(partySize);
          const tmp5Result = tmp5(11757);
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