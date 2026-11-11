// discord_app/modules/channel_permissions/ChannelPermissionOverwriteEditUtils.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PermissionUtils from "../../utils/PermissionUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
