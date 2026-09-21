// === Module 13559: useVibegrationsChannelChatBadge ===

// Module 13559 (useVibegrationsChannelChatBadge)
import ReadStateStore from "ReadStateStore" /* 4771 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChannelChatBadge.tsx");

export default function useVibegrationsChannelChatBadge(arg0) {
  _require = arg0;
  const items = [ReadStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    const mentionCount = ReadStateStore.getMentionCount(closure_0);
    if (mentionCount > 0) {
      const obj2 = { badge: "mention", mentionCount };
      let obj4 = obj2;
    } else if (ReadStateStore.hasUnread(closure_0)) {
      const obj3 = { badge: "unread", mentionCount };
      obj4 = obj3;
    } else {
      obj4 = { badge: null, mentionCount };
    }
    return obj4;
  }, items1);
};