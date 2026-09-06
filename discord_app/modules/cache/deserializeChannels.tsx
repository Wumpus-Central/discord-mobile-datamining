// discord_app/modules/cache/deserializeChannels.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

function deserializeChannels(arg0) {
  const iter = arg0[Symbol.iterator]();
  while (iter !== undefined) {
    let permissionOverwrites_ = iter.next().permissionOverwrites_;
    let tmp = permissionOverwrites_;
    if (null != permissionOverwrites_) {
      for (const key10012 in tmp) {
        let tmp5 = tmp[key10012];
        let deserializer = BigFlagUtilsAll;
        tmp5.allow = deserializer.deserialize(tmp5.allow);
        let deserializer2 = BigFlagUtilsAll;
        tmp5.deny = deserializer2.deserialize(tmp5.deny);
        continue;
      }
    }
    continue;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/cache/deserializeChannels.tsx");

export default deserializeChannels;
export const deserializeChannelEntries = function deserializeChannelEntries(guildChannels) {
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    let first = tmp4[0];
    let tmp7 = deserializeChannels(tmp4[1]);
    continue;
  }
};
export const deserializeChannel = function deserializeChannel(permissionOverwrites_) {
  permissionOverwrites_ = permissionOverwrites_.permissionOverwrites_;
  if (null != permissionOverwrites_) {
    for (const key10006 in permissionOverwrites_) {
      let tmp3 = permissionOverwrites_[key10006];
      let deserializer = BigFlagUtilsAll;
      tmp3.allow = deserializer.deserialize(tmp3.allow);
      let deserializer2 = BigFlagUtilsAll;
      tmp3.deny = deserializer2.deserialize(tmp3.deny);
      continue;
    }
  }
  return permissionOverwrites_;
};
