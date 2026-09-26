// discord_app/modules/messages/parseReactionPermissions.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/parseReactionPermissions.tsx");

export default function parseReactionPermissions(arg0) {
  ({
    channel,
    canChat,
    isLurking,
    isActiveChannelOrUnarchivableThread,
    renderReactions,
    canAddNewReactions,
    communicationDisabled,
    isAutomodQuarantined,
  } = arg0);
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
  const obj = { disableReactionReads: !renderReactions, disableReactionCreates: null, disableReactionUpdates: null };
  let tmp4 = isLurking;
  if (!isLurking) {
    tmp4 = !canChat;
  }
  if (!tmp4) {
    tmp4 = !(
      (true === canAddNewReactions || isPrivateResult) &&
      !isSystemDMResult &&
      isActiveChannelOrUnarchivableThread &&
      !isMediaThreadResult
    );
    const tmp5 =
      (true === canAddNewReactions || isPrivateResult) &&
      !isSystemDMResult &&
      isActiveChannelOrUnarchivableThread &&
      !isMediaThreadResult;
  }
  obj.disableReactionCreates = tmp4;
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
  obj.disableReactionUpdates = isSystemDMResult;
  return obj;
}
