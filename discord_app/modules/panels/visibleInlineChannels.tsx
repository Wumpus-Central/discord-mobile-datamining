// === Module 13839: visibleInlineChannels ===

// Module 13839 (visibleInlineChannels)
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/panels/visibleInlineChannels.tsx");

export const registerVisibleInlineChannel = function registerVisibleInlineChannel(arg0, arg1) {
  value = map.get(arg0);
  if (null == value) {
    const _Set = Set;
    const set = new Set();
    const result = map.set(arg0, set);
    value = set;
  }
  value.add(arg1);
};
export const unregisterVisibleInlineChannel = function unregisterVisibleInlineChannel(arg0, arg1) {
  value = map.get(arg0);
  if (null != value) {
    value.delete(arg1);
    if (0 === value.size) {
      map.delete(arg0);
    }
  }
};
export const isChannelVisibleInline = function isChannelVisibleInline(channelId, fn) {
  value = map.get(channelId);
  if (null == value) {
    return false;
  } else {
    for (const item10010 of value) {
      if (arg1(item10010)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
};