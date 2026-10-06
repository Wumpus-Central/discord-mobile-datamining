// === Module 13093: getCanSendInvite ===

// Module 13093 (getCanSendInvite)
import hasFlagDefault from "hasFlag" /* 6826 */;
import isInviteActiveDefault from "isInviteActive" /* 11399 */;
import _slicedToArray from "_slicedToArray" /* 11400 */;
import hasPartySize from "hasPartySize" /* 11401 */;
import isPartyFull from "isPartyFull" /* 11402 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ActivityFlags: c3, ActivityActionTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(applicationActivity, author, application1, id4) {
  if (author.author.id === id4) {
    return false;
  } else if (isInviteActiveDefault(applicationActivity, author, application1.id)) {
    const activity = author.activity;
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type !== constants2.JOIN_REQUEST) {
      return false;
    } else if (hasFlagDefault(applicationActivity, constants.JOIN)) {
      const obj = _slicedToArray;
      const partySize = obj.getPartySize(applicationActivity);
      const obj2 = hasPartySize;
      const hasPartySizeResult = obj2.hasPartySize(partySize);
      let isPartyFullResult = !hasPartySizeResult;
      if (hasPartySizeResult) {
        const tmp5Result = isPartyFull;
        isPartyFullResult = tmp5Result.isPartyFull(partySize);
      }
      return !isPartyFullResult;
    } else {
      return false;
    }
  } else {
    return false;
  }
};