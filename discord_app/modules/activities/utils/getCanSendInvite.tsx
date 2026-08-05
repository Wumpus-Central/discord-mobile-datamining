// discord_app/modules/activities/utils/getCanSendInvite.tsx
import ME from "ME";

let c3;
let c4;
({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (require("isInviteActive.tsx")(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(5837)(findActivityResult, constants.JOIN)) {
        const partySize = require("getPartySize.tsx") /* getPartySize */.getPartySize(findActivityResult);
        const obj = require("getPartySize.tsx") /* getPartySize */;
        const tmp5 = require;
        const hasPartySizeResult = require("hasPartySize.tsx") /* hasPartySize */.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(11070).isPartyFull(partySize);
          const tmp5Result = tmp5(11070);
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