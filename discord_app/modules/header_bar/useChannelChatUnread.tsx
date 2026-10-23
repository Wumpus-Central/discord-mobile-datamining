// === Module 9714: useChannelChatUnread ===

// Module 9714 (useChannelChatUnread)
import ReadStateStore from "ReadStateStore" /* 6769 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/header_bar/useChannelChatUnread.tsx");

export const useChannelChatUnread = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelChatUnread(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp6, tmp7);
}) : (function useChannelChatUnread(arg0) {
  _require = arg0;
  const items = [ReadStateStore];
  const items1 = [arg0];
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
});