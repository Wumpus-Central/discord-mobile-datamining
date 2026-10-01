// === Module 10659: canManageChannelList ===

// Module 10659 (canManageChannelList)
import ChannelStore from "ChannelStore" /* 2044 */;
import PermissionStore from "PermissionStore" /* 4498 */;

const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_sorting/canManageChannelList.tsx");

export default function canManageChannelList(containingCategory, guild) {
  let tmp = containingCategory;
  if (containingCategory == null) {
    tmp = guild;
  }
  return PermissionStore.can(Permissions.MANAGE_CHANNELS, tmp);
};
export const getContainingCategory = function getContainingCategory(parent_id) {
  if (null == parent_id.parent_id) {
    return null;
  } else {
    const channel = ChannelStore.getChannel(parent_id.parent_id);
    let tmp2 = null;
    if (null != channel) {
      tmp2 = null;
      if (channel.isCategory()) {
        tmp2 = channel;
      }
    }
    return tmp2;
  }
};
export const canViewChannelList = function canViewChannelList(channel) {
  let canResult = null == channel;
  if (!canResult) {
    canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
  }
  return canResult;
};