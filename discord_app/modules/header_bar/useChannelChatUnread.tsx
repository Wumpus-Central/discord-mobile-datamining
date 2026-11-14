// === Module 9067: useChannelChatUnread ===

// Module 9067 (useChannelChatUnread)
import ReadStateStore from "ReadStateStore" /* 7015 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/header_bar/useChannelChatUnread.tsx");

export function useChannelChatUnread(channelId) {
  _require = channelId;
  items = [ReadStateStore];
  const items1 = [channelId];
  return require("initialize").useStateFromStoresObject(items, () => {
    let hasUnreadResult = null != closure_0;
    if (hasUnreadResult) {
      hasUnreadResult = ReadStateStore.hasUnread(closure_0);
    }
    const obj = { hasUnread: hasUnreadResult, mentionCount: null };
    let num = 0;
    if (null != closure_0) {
      num = ReadStateStore.getMentionCount(closure_0);
    }
    obj.mentionCount = num;
    return obj;
  }, items1);
}