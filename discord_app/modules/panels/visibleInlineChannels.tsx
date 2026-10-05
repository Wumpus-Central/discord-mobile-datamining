// === Module 13652: visibleInlineChannels ===

// Module 13652 (visibleInlineChannels)
import size from "module_2" /* 2 */;

let set;

const map = new Map();
let result = size.fileFinishedImporting("modules/panels/visibleInlineChannels.tsx");

export const registerVisibleInlineChannel = function registerVisibleInlineChannel(channelId, windowId) {
  let value = map.get(channelId);
  if (null == value) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const result = map.set(channelId, set);
    value = set;
  }
  value.add(windowId);
};
export const unregisterVisibleInlineChannel = function unregisterVisibleInlineChannel(channelId, windowId) {
  const value = map.get(channelId);
  if (null != value) {
    value.delete(windowId);
    if (0 === value.size) {
      map.delete(channelId);
    }
  }
};
export const isChannelVisibleInline = function isChannelVisibleInline(channelId, fn) {
  const value = map.get(channelId);
  if (null == value) {
    return false;
  } else {
    for (const item10010 of value) {
      if (fn(item10010)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
};