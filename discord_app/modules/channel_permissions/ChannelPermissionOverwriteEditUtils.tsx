// === Module 19694: ChannelPermissionOverwriteEditUtils ===

// Module 19694 (ChannelPermissionOverwriteEditUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import PermissionUtils from "PermissionUtils" /* 5243 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionOverwriteEditUtils.tsx");

export function getChannelPermissionOverwrite(channel, id) {
  let tmp = channel.permissionOverwrites[id];
  if (tmp == null) {
    let everyoneOverwrite;
    if (channel.guild_id === id) {
      everyoneOverwrite = PermissionUtils.makeEveryoneOverwrite(id);
    }
    tmp = everyoneOverwrite;
  }
  return tmp;
}
export function getChannelPermissionOverwriteValue(effectiveOverwrite, flag) {
  if (null == effectiveOverwrite) {
    let ALLOW = PermissionUtils.PASSTHROUGH;
  } else {
    if (obj2.has(effectiveOverwrite.allow, flag)) {
      ALLOW = PermissionUtils.ALLOW;
    } else {
      const hasItem = BigFlagUtilsAll.has(effectiveOverwrite.deny, flag);
      const tmp3 = PermissionUtils;
      ALLOW = hasItem ? tmp3.DENY : tmp3.PASSTHROUGH;
      const tmp8Result = BigFlagUtilsAll;
    }
    obj2 = BigFlagUtilsAll;
  }
  return ALLOW;
}
export function applyChannelPermissionOverwriteEdit(channelPermissionOverwrite, flag, value) {
  const obj = {};
  const merged = Object.assign(channelPermissionOverwrite);
  obj.allow = BigFlagUtilsAll.remove(channelPermissionOverwrite.allow, flag);
  obj.deny = BigFlagUtilsAll.remove(channelPermissionOverwrite.deny, flag);
  if (value === PermissionUtils.ALLOW) {
    obj.allow = BigFlagUtilsAll.add(obj.allow, flag);
    const tmp2Result = BigFlagUtilsAll;
  } else if (value === PermissionUtils.DENY) {
    obj.deny = BigFlagUtilsAll.add(obj.deny, flag);
    const tmp2Result2 = BigFlagUtilsAll;
  }
  return obj;
}