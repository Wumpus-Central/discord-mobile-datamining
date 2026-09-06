// === Module 17130: useChatBadge ===

// Module 17130 (useChatBadge)
import ReadStateStore from "ReadStateStore" /* 4575 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useChatBadge.tsx");

export default function useChatBadge(arg0) {
  _require = arg0;
  const items = [ReadStateStore];
  return require("initialize").useStateFromStores(items, () => {
    let str = "mention";
    if (ReadStateStore.getMentionCount(closure_0) <= 0) {
      let str2 = null;
      if (ReadStateStore.hasUnread(closure_0)) {
        str2 = "unread";
      }
      str = str2;
    }
    return str;
  });
};