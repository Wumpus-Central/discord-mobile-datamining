// === Module 16814: ChannelSettingsUtils ===

// Module 16814 (ChannelSettingsUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsUtils.tsx");

export const getIsChannelNameSettingEditable = function getIsChannelNameSettingEditable(arg0) {
  ({ canManageThread, canSendMessages, isForumPost, isChannelOwner } = arg0);
  if (!isForumPost) {
    canSendMessages = canManageThread;
    if (!isForumPost) {
      canSendMessages = tmp;
      if (tmp2) {
        let tmp3 = canManageThread;
        if (!canManageThread) {
          tmp3 = isChannelOwner;
        }
        canSendMessages = tmp3;
      }
    }
  }
  return canSendMessages;
};