// discord_app/modules/activities/utils/getCanSendInvite.tsx
import hasFlagDefault from "hasFlag.tsx";
import isInviteActiveDefault from "isInviteActive.tsx";
import getPartySize from "getPartySize.tsx";
import hasPartySize from "hasPartySize.tsx";
import isPartyFull from "isPartyFull.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ ActivityFlags: c3, ActivityActionTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else if (isInviteActiveDefault(findActivityResult, author, application.id)) {
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
