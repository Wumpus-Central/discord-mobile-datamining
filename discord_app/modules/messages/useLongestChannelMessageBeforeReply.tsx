// === Module 12107: useLongestChannelMessageBeforeReply ===

// Module 12107 (useLongestChannelMessageBeforeReply)
import MessageStore from "MessageStore" /* 5116 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useLongestChannelMessageBeforeReply.tsx");

export const useLongestChannelMessageBeforeReply = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function l() {
    if (null != closure_1) {
      const messages = MessageStore.getMessages(closure_0);
      const findOldestResult = messages.findOldest((author) => author.author.id === closure_1_1);
      let tmp4 = findOldestResult;
      if (null != findOldestResult) {
        const toArrayResult = messages.toArray();
        for (const item10018 of toArrayResult) {
          if (item10018.author.id !== closure_1) {
            obj2.return();
            break;
          } else {
            let length;
            if (tmp4 != null) {
              length = tmp4.content.length;
            }
            if (tmp8.content.length > length) {
              tmp4 = item10018;
            }
            continue;
          }
          return tmp4;
        }
      }
    }
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [MessageStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_1) {
      const messages = MessageStore.getMessages(closure_0);
      const findOldestResult = messages.findOldest((author) => author.author.id === closure_1_1);
      let tmp4 = findOldestResult;
      if (null != findOldestResult) {
        const toArrayResult = messages.toArray();
        for (const item10018 of toArrayResult) {
          if (item10018.author.id !== closure_1) {
            obj2.return();
            break;
          } else {
            let length;
            if (tmp4 != null) {
              length = tmp4.content.length;
            }
            if (tmp8.content.length > length) {
              tmp4 = item10018;
            }
            continue;
          }
          return tmp4;
        }
      }
    }
  }, items1);
});