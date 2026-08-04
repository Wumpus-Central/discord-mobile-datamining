// discord_app/modules/cache/deserializeChannels.tsx
import _slicedToArray from "_slicedToArray";

function deserializeChannels(arg0) {
  const iter = arg0[Symbol.iterator]();
  while (iter !== undefined) {
    let permissionOverwrites_ = iter.next().permissionOverwrites_;
    let tmp = permissionOverwrites_;
    if (null != permissionOverwrites_) {
      let tmp2 = permissionOverwrites_;
      for (const key10012 in tmp) {
        let tmp3 = key10012;
        let tmp4 = permissionOverwrites_;
        let tmp5 = tmp[key10012];
        let tmp6 = importAll;
        let tmp7 = dependencyMap;
        let obj = importAll(506);
        tmp5.allow = obj.deserialize(tmp5.allow);
        let obj2 = importAll(506);
        tmp5.deny = obj2.deserialize(tmp5.deny);
        continue;
      }
    }
    continue;
  }
}
const result = require("set").fileFinishedImporting("modules/cache/deserializeChannels.tsx");

export default deserializeChannels;
export const deserializeChannelEntries = function deserializeChannelEntries(guildChannels) {
  while (tmp !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    let first = tmp4[0];
    let tmp6 = deserializeChannels;
    let tmp7 = deserializeChannels(tmp4[1]);
    continue;
  }
};
export const deserializeChannel = function deserializeChannel(permissionOverwrites_) {
  permissionOverwrites_ = permissionOverwrites_.permissionOverwrites_;
  if (null != permissionOverwrites_) {
    for (const key10006 in permissionOverwrites_) {
      let tmp2 = key10006;
      let tmp3 = permissionOverwrites_[key10006];
      let tmp4 = importAll;
      let tmp5 = dependencyMap;
      let obj = importAll(506);
      tmp3.allow = obj.deserialize(tmp3.allow);
      let obj2 = importAll(506);
      tmp3.deny = obj2.deserialize(tmp3.deny);
      continue;
    }
  }
  return permissionOverwrites_;
};