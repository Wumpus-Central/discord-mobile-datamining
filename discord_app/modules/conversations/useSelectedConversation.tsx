// === Module 7566: useSelectedConversation ===

// Module 7566 (useSelectedConversation)
import resolveSelectedConversationDefault from "resolveSelectedConversation" /* 7567 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7103 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7108 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelConversationsStore, ConversationPreviewStore];
    cResult[0] = items;
    first = items;
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
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelConversationsStore, ConversationPreviewStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const selectedConversationId = ChannelConversationsStore.getSelectedConversationId(closure_0);
    let tmp4;
    if (null != selectedConversationId) {
      tmp4 = resolveSelectedConversationDefault(ChannelConversationsStore, ConversationPreviewStore, closure_0, selectedConversationId);
    }
    return tmp4;
  }, items1);
});
const result = size.fileFinishedImporting("modules/conversations/useSelectedConversation.tsx");

export default tmp2;