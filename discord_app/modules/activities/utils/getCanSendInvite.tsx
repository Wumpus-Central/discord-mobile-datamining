// === Module 12899: getCanSendInvite ===

// Module 12899 (getCanSendInvite)
import set from "set" /* 2 */;
import getPartySize from "getPartySize" /* 9447 */;
import hasPartySize from "hasPartySize" /* 9448 */;
import resultDefault from "result" /* 11326 */;
import ME from "ME" /* 676 */;

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
      } else if (tmp11(6158)(findActivityResult, constants.JOIN)) {
        const partySize = getPartySize.getPartySize(findActivityResult);
        const obj = getPartySize;
        const tmp5 = require;
        const hasPartySizeResult = hasPartySize.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(9449).isPartyFull(partySize);
          const tmp5Result = tmp5(9449);
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