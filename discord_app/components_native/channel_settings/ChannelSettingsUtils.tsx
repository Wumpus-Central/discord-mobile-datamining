// === Module 16988: ChannelSettingsUtils ===

// Module 16988 (ChannelSettingsUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsUtils.tsx");

export const getIsChannelNameSettingEditable = function getIsChannelNameSettingEditable(arg0) {
  let canManageThread;
  let canSendMessages;
  let isChannelOwner;
  let isForumPost;
  ({ canManageThread, canSendMessages, isForumPost, isChannelOwner } = arg0);
  if (!isForumPost) {
    canSendMessages = canManageThread;
    if (!isForumPost) {
      canSendMessages = tmp;
      if (tmp2) {
        canSendMessages = canManageThread || isChannelOwner;
      }
    }
  }
  return canSendMessages;
};