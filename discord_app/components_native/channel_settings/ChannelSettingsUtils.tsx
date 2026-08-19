// === Module 16033: getIsChannelNameSettingEditable ===

// Module 16033 (getIsChannelNameSettingEditable)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("components_native/channel_settings/ChannelSettingsUtils.tsx");

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