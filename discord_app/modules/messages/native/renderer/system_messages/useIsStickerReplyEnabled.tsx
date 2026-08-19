// discord_app/modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx
import useCanUnarchiveThread from "../../../../threads/ThreadHooks.tsx";
import trackCommunicationDisabled from "../../../../../stores/GuildMemberStore.tsx";
import getUncachedChannelPermissions from "../../../../../stores/PermissionStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import { Permissions } from "../../../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx");

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