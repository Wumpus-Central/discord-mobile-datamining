// discord_app/modules/panels/visibleInlineChannels.tsx
import size from "../../../_runtime/metro/00002__.js";

const map = new Map();
let result = size.fileFinishedImporting("modules/panels/visibleInlineChannels.tsx");

export const registerVisibleInlineChannel = function registerVisibleInlineChannel(channelId, windowId) {
  value = map.get(channelId);
  if (null == value) {
    const _Set = Set;
    const set = new Set();
    const result = map.set(channelId, set);
    value = set;
  }
  value.add(windowId);
};
export const unregisterVisibleInlineChannel = function unregisterVisibleInlineChannel(channelId, windowId) {
  value = map.get(channelId);
  if (null != value) {
    value.delete(windowId);
    if (0 === value.size) {
      map.delete(channelId);
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
