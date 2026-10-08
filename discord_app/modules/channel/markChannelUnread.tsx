// === Module 10323: markChannelUnread ===

// Module 10323 (markChannelUnread)
import markUnreadDefault from "markUnread" /* 10324 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;

const require = globalThis.__r;

const require = fn;
const ReadState = fn(6040).ReadState;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = ReadState.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    markUnreadDefault(arg0, lastMessageId);
  }
};
export const useCanMarkChannelUnread = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanMarkChannelUnread(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return ReadStateStore.canBeUnread(id.id) && ReadStateStore.hasLastMessage(id.id) && !id.isCategory();
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useCanMarkChannelUnread(arg0) {
  _require = arg0;
  const items = [ReadStateStore];
  return require("initialize").useStateFromStores(items, () => ReadStateStore.canBeUnread(id.id) && ReadStateStore.hasLastMessage(id.id) && !id.isCategory());
});