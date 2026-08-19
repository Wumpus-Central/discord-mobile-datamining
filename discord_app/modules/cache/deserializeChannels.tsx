// === Module 1976: deserializeChannels ===

// Module 1976 (deserializeChannels)
import fromStringAll from "fromString" /* 506 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function deserializeChannels(arg0) {
  const iter = arg0[Symbol.iterator]();
  while (iter !== undefined) {
    let permissionOverwrites_ = iter.next().permissionOverwrites_;
    let tmp = permissionOverwrites_;
    if (null != permissionOverwrites_) {
      for (const key10012 in tmp) {
        let tmp5 = tmp[key10012];
        let deserializer = fromStringAll;
        tmp5.allow = deserializer.deserialize(tmp5.allow);
        let deserializer2 = fromStringAll;
        tmp5.deny = deserializer2.deserialize(tmp5.deny);
        continue;
      }
    }
    continue;
  }
}
const result = require("obj132").fileFinishedImporting("modules/cache/deserializeChannels.tsx");

export default deserializeChannels;
export const deserializeChannelEntries = function deserializeChannelEntries(guildChannels) {
  while (tmp !== undefined) {
    let tmp4 = callback(tmp2, 2);
    let first = tmp4[0];
    let tmp7 = deserializeChannels(tmp4[1]);
    continue;
  }
  tmp = guildChannels[Symbol.iterator]();
};
export const deserializeChannel = function deserializeChannel(permissionOverwrites_) {
  permissionOverwrites_ = permissionOverwrites_.permissionOverwrites_;
  if (null != permissionOverwrites_) {
    for (const key10006 in permissionOverwrites_) {
      let tmp3 = permissionOverwrites_[key10006];
      let deserializer = fromStringAll;
      tmp3.allow = deserializer.deserialize(tmp3.allow);
      let deserializer2 = fromStringAll;
      tmp3.deny = deserializer2.deserialize(tmp3.deny);
      continue;
    }
  }
  return permissionOverwrites_;
};