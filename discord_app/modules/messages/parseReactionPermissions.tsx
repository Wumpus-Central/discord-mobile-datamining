// === Module 10042: parseReactionPermissions ===

// Module 10042 (parseReactionPermissions)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/parseReactionPermissions.tsx");

export default function parseReactionPermissions(arg0) {
  let canAddNewReactions;
  let canChat;
  let channel;
  let communicationDisabled;
  let isActiveChannelOrUnarchivableThread;
  let isAutomodQuarantined;
  let isLurking;
  let renderReactions;
  let tmp4;
  ({ channel, canChat, isLurking, isActiveChannelOrUnarchivableThread, renderReactions, canAddNewReactions, communicationDisabled, isAutomodQuarantined } = arg0);
  const isPrivateResult = channel.isPrivate();
  let isSystemDMResult = channel.isSystemDM();
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
  const obj = { disableReactionReads: !renderReactions, disableReactionCreates: tmp4, disableReactionUpdates: isSystemDMResult };
  tmp4 = isLurking || !canChat;
  if (!tmp4) {
    tmp4 = !((true === canAddNewReactions || isPrivateResult) && !isSystemDMResult && isActiveChannelOrUnarchivableThread && !isMediaThreadResult);
  }
  if (!isSystemDMResult) {
    isSystemDMResult = isLurking;
  }
  if (!isSystemDMResult) {
    isSystemDMResult = !canChat;
  }
  if (!isSystemDMResult) {
    isSystemDMResult = true === communicationDisabled;
  }
  if (!isSystemDMResult) {
    isSystemDMResult = true === isAutomodQuarantined;
  }
  return obj;
};