// === Module 7566: useSelectedConversation ===

// Module 7566 (useSelectedConversation)
import resolveSelectedConversationDefault from "resolveSelectedConversation" /* 7567 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7103 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7108 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/useSelectedConversation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelConversationsStore, ConversationPreviewStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const selectedConversationId = ChannelConversationsStore.getSelectedConversationId(closure_0);
      let tmp4;
      if (null != selectedConversationId) {
        tmp4 = resolveSelectedConversationDefault(ChannelConversationsStore, ConversationPreviewStore, closure_0, selectedConversationId);
      }
      return tmp4;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  const items = [ChannelConversationsStore, ConversationPreviewStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const selectedConversationId = ChannelConversationsStore.getSelectedConversationId(closure_0);
    let tmp4;
    if (null != selectedConversationId) {
      tmp4 = resolveSelectedConversationDefault(ChannelConversationsStore, ConversationPreviewStore, closure_0, selectedConversationId);
    }
    return tmp4;
  }, items1);
});