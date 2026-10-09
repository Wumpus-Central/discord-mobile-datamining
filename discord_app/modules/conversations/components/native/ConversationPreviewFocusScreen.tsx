// === Module 17496: ConversationPreviewFocusScreen ===

// Module 17496 (ConversationPreviewFocusScreen)
import ConversationFocusViewDefault from "ConversationFocusView" /* 9351 */;
import noop from "module_19" /* 19 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7312 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewFocusScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConversationPreviewFocusScreen() {
  const cResult = conversationId(576).c(16);
  let obj = conversationId(576);
  const params = conversationId(1506).useRoute().params;
  ({ channelId, conversationId } = params);
  const messageId = params.messageId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConversationPreviewStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== conversationId) {
    const fn = function o() {
      return ConversationPreviewStore.getHydratedMessages(conversationId);
    };
    const items1 = [conversationId];
    cResult[1] = conversationId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj2 = conversationId(1506);
  const stateFromStores = conversationId(504).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConversationPreviewStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== conversationId) {
    const fn2 = function h() {
      const obj = { fullyHydrated: ConversationPreviewStore.isFullyHydrated(conversationId), isFullFetchPending: ConversationPreviewStore.isConversationFetchPending(conversationId, true), startMessageId: null };
      const conversation = ConversationPreviewStore.getConversation(conversationId);
      let startMessageId;
      if (conversation != null) {
        startMessageId = conversation.startMessageId;
      }
      if (startMessageId == null) {
        startMessageId = null;
      }
      obj.startMessageId = startMessageId;
      return obj;
    };
    const items3 = [conversationId];
    cResult[5] = conversationId;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp12 = items3;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult = conversationId(504);
  const stateFromStoresObject = conversationId(504).useStateFromStoresObject(tmp9, tmp11, tmp12);
  ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
  if (cResult[8] === channelId) {
    if (cResult[9] === conversationId) {
      if (cResult[10] === fullyHydrated) {
        if (cResult[11] === isFullFetchPending) {
          if (cResult[12] === messageId) {
            if (cResult[13] === stateFromStores) {
              if (cResult[14] === startMessageId) {
                let tmp14 = cResult[15];
              }
              return tmp14;
            }
          }
        }
      }
    }
  }
  const tmp15 = jsx(ConversationFocusViewDefault, { channelId, conversationId, jumpMessageId: messageId, messages: stateFromStores, fullyHydrated, isFullFetchPending, startMessageId });
  cResult[8] = channelId;
  cResult[9] = conversationId;
  cResult[10] = fullyHydrated;
  cResult[11] = isFullFetchPending;
  cResult[12] = messageId;
  cResult[13] = stateFromStores;
  cResult[14] = startMessageId;
  cResult[15] = tmp15;
  tmp14 = tmp15;
  const tmpResult2 = conversationId(504);
}) : (function ConversationPreviewFocusScreen() {
  const params = conversationId(1506).useRoute().params;
  conversationId = params.conversationId;
  ({ channelId, messageId } = params);
  let obj = conversationId(1506);
  const items = [ConversationPreviewStore];
  const items1 = [conversationId];
  const messages = conversationId(504).useStateFromStores(items, () => ConversationPreviewStore.getHydratedMessages(conversationId), items1);
  const obj2 = conversationId(504);
  const items2 = [ConversationPreviewStore];
  const items3 = [conversationId];
  const stateFromStoresObject = conversationId(504).useStateFromStoresObject(items2, () => {
    const obj = { fullyHydrated: ConversationPreviewStore.isFullyHydrated(conversationId), isFullFetchPending: ConversationPreviewStore.isConversationFetchPending(conversationId, true), startMessageId: null };
    const conversation = ConversationPreviewStore.getConversation(conversationId);
    let startMessageId;
    if (conversation != null) {
      startMessageId = conversation.startMessageId;
    }
    if (startMessageId == null) {
      startMessageId = null;
    }
    obj.startMessageId = startMessageId;
    return obj;
  }, items3);
  ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
  return jsx(ConversationFocusViewDefault, { channelId, conversationId, jumpMessageId, messages, fullyHydrated, isFullFetchPending, startMessageId });
});