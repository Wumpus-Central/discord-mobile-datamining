// === Module 8256: computeIsStickerReplyEnabled ===

// Module 8256 (computeIsStickerReplyEnabled)
import useCanUnarchiveThread from "useCanUnarchiveThread" /* 7272 */;
import closure_2 from "trackCommunicationDisabled" /* 1991 */;
import closure_3 from "getUncachedChannelPermissions" /* 4024 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import { Permissions } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx");

export const computeIsStickerReplyEnabled = function computeIsStickerReplyEnabled(guildId, channel, message, arg3) {
  currentUser = currentUser.getCurrentUser();
  let tmp2 = null != currentUser;
  if (tmp2) {
    member = member.getMember(guildId, currentUser.id);
    let isPending;
    if (member != null) {
      isPending = member.isPending;
    }
    tmp2 = isPending;
  }
  const isReadOnlyThread = useCanUnarchiveThread.computeIsReadOnlyThread(channel);
  let canResult = closure_3.can(Permissions.SEND_MESSAGES, channel);
  if (canResult) {
    canResult = !isReadOnlyThread;
  }
  if (canResult) {
    canResult = !tmp2;
  }
  if (canResult) {
    canResult = !message.author.bot;
  }
  if (canResult) {
    canResult = arg3;
  }
  return canResult;
};