// === Module 10518: parseReactionPermissions ===

// Module 10518 (parseReactionPermissions)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/messages/parseReactionPermissions.tsx");

export default function parseReactionPermissions(arg0) {
  ({ channel, canChat, isLurking, isActiveChannelOrUnarchivableThread, renderReactions, canAddNewReactions, communicationDisabled, isAutomodQuarantined } = arg0);
  const isPrivateResult = channel.isPrivate();
  const isMediaThreadResult = channel.isMediaThread();
  if (!canChat) {
    canChat = isPrivateResult;
  }
  if (canChat) {
    canChat = isActiveChannelOrUnarchivableThread;
  }
  if (canChat) {
    canChat = !isMediaThreadResult;
  }
  const obj = { disableReactionReads: !renderReactions, disableReactionCreates: null, disableReactionUpdates: null };
  let tmp4 = isLurking;
  if (!isLurking) {
    tmp4 = !canChat;
  }
  if (!tmp4) {
    tmp4 = !((true === canAddNewReactions || isPrivateResult) && !isSystemDMResult && isActiveChannelOrUnarchivableThread && !isMediaThreadResult);
    const tmp5 = (true === canAddNewReactions || isPrivateResult) && !isSystemDMResult && isActiveChannelOrUnarchivableThread && !isMediaThreadResult;
  }
  obj[1] = tmp4;
  if (!isLurking) {
    isLurking = !canChat;
  }
  if (!isLurking) {
    isLurking = true === communicationDisabled;
  }
  if (!isLurking) {
    isLurking = true === isAutomodQuarantined;
  }
  obj[2] = isLurking;
  return obj;
};