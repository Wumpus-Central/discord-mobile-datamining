// === Module 9312: ConversationFocusScreen ===

// Module 9312 (ConversationFocusScreen)
import noop from "module_19" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7302 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConversationFocusScreen() {
  const cResult = channelId(576).c(17);
  const obj = channelId(576);
  const params = channelId(1505).useRoute().params;
  channelId = params.channelId;
  const conversationId = params.conversationId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelConversationsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === conversationId) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ChannelConversationsStore];
      cResult[5] = items1;
      let tmp9 = items1;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === channelId) {
      if (cResult[7] === conversationId) {
        let tmp11 = cResult[8];
        let tmp12 = cResult[9];
      }
      const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp9, tmp11, tmp12);
      ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
      if (cResult[10] === channelId) {
        if (cResult[11] === conversationId) {
          if (cResult[12] === fullyHydrated) {
            if (cResult[13] === isFullFetchPending) {
              if (cResult[14] === stateFromStores) {
                if (cResult[15] === startMessageId) {
                  let tmp14 = cResult[16];
                }
                return tmp14;
              }
            }
          }
        }
      }
      class I {
        constructor() {
          obj = closure_3;
          tmp = conversationId;
          conversationMetadata = closure_3.getConversationMetadata(channelId, conversationId);
          flag = undefined;
          if (conversationMetadata != null) {
            flag = conversationMetadata.fullyHydrated;
          }
          if (flag == null) {
            flag = false;
          }
          obj1 = { fullyHydrated: flag, isFullFetchPending: obj.isConversationFetchPending(tmp, true), startMessageId: null };
          startMessageId = undefined;
          if (conversationMetadata != null) {
            startMessageId = conversationMetadata.conversation.startMessageId;
          }
          if (startMessageId == null) {
            startMessageId = null;
          }
          obj1.startMessageId = startMessageId;
          return obj1;
        }
      }
      const obj3 = { channelId, conversationId, messages: stateFromStores, fullyHydrated, isFullFetchPending, startMessageId };
      const tmp16 = jsx(conversationId(9313), { channelId, conversationId, messages: stateFromStores, fullyHydrated, isFullFetchPending, startMessageId });
      cResult[10] = channelId;
      cResult[11] = conversationId;
      cResult[12] = fullyHydrated;
      cResult[13] = isFullFetchPending;
      cResult[14] = stateFromStores;
      cResult[15] = startMessageId;
      cResult[16] = tmp16;
      tmp14 = tmp16;
      const tmpResult2 = tmp(504);
    }
    class I {
      constructor() {
        obj = closure_3;
        tmp = conversationId;
        conversationMetadata = closure_3.getConversationMetadata(channelId, conversationId);
        flag = undefined;
        if (conversationMetadata != null) {
          flag = conversationMetadata.fullyHydrated;
        }
        if (flag == null) {
          flag = false;
        }
        obj1 = { fullyHydrated: flag, isFullFetchPending: obj.isConversationFetchPending(tmp, true), startMessageId: null };
        startMessageId = undefined;
        if (conversationMetadata != null) {
          startMessageId = conversationMetadata.conversation.startMessageId;
        }
        if (startMessageId == null) {
          startMessageId = null;
        }
        obj1.startMessageId = startMessageId;
        return obj1;
      }
    }
    const items2 = [channelId, conversationId];
    cResult[6] = channelId;
    cResult[7] = conversationId;
    cResult[8] = I;
    cResult[9] = items2;
    tmp12 = items2;
    tmp11 = I;
    const tmpResult = tmp(504);
  }
  const fn = function o() {
    return ChannelConversationsStore.getHydratedMessages(channelId, conversationId);
  };
  const items3 = [channelId, conversationId];
  cResult[1] = channelId;
  cResult[2] = conversationId;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp7 = items3;
  tmp6 = fn;
  let obj2 = channelId(1505);
}) : (function ConversationFocusScreen() {
  const params = channelId(1505).useRoute().params;
  channelId = params.channelId;
  const conversationId = params.conversationId;
  const obj = channelId(1505);
  const items = [ChannelConversationsStore];
  const items1 = [channelId, conversationId];
  const messages = channelId(504).useStateFromStores(items, () => ChannelConversationsStore.getHydratedMessages(channelId, conversationId), items1);
  let obj2 = channelId(504);
  const items2 = [ChannelConversationsStore];
  const items3 = [channelId, conversationId];
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(items2, () => {
    const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, conversationId);
    let flag;
    if (conversationMetadata != null) {
      flag = conversationMetadata.fullyHydrated;
    }
    if (flag == null) {
      flag = false;
    }
    const obj2 = { fullyHydrated: flag, isFullFetchPending: ChannelConversationsStore.isConversationFetchPending(conversationId, true), startMessageId: null };
    let startMessageId;
    if (conversationMetadata != null) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    if (startMessageId == null) {
      startMessageId = null;
    }
    obj2.startMessageId = startMessageId;
    return obj2;
  }, items3);
  ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
  return jsx(conversationId(9313), { channelId, conversationId, messages, fullyHydrated, isFullFetchPending, startMessageId });
});