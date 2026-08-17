// discord_app/modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx
import useCanUnarchiveThread from "../../../../threads/ThreadHooks.tsx";
import closure_2 from "../../../../../stores/GuildMemberStore.tsx";
import closure_3 from "../../../../../stores/PermissionStore.tsx";
import closure_4 from "../../../../../stores/UserStore.tsx";
import { Permissions } from "../../../../../Constants.tsx";

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