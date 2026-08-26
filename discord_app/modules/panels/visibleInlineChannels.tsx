// === Module 13465: map ===

// Module 13465 (map)
import set2 from "set" /* 2 */;

const map = new Map();
let result = set2.fileFinishedImporting("modules/panels/visibleInlineChannels.tsx");

export const registerVisibleInlineChannel = function registerVisibleInlineChannel(arg0, arg1) {
  let value = map.get(arg0);
  if (null == value) {
    const _Set = Set;
    const set = new Set();
    const result = map.set(arg0, set);
    value = set;
  }
  value.add(arg1);
};
export const unregisterVisibleInlineChannel = function unregisterVisibleInlineChannel(arg0, arg1) {
  const value = map.get(arg0);
  if (null != value) {
    value.delete(arg1);
    if (0 === value.size) {
      map.delete(arg0);
    }
  }
};
export const isChannelVisibleInline = function isChannelVisibleInline(channelId, arg1) {
  const value = map.get(channelId);
  if (null == value) {
    return false;
  } else {
    for (const item10010 of value) {
      if (arg1(item10010)) {
        let tmp4 = obj;
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
};