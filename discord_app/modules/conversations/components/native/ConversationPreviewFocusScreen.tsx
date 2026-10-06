// === Module 17067: ConversationPreviewFocusScreen ===

// Module 17067 (ConversationPreviewFocusScreen)
import Fragment from "Fragment" /* 21 */;
import ConversationFocusViewDefault from "ConversationFocusView" /* 13111 */;
import react from "react" /* 19 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7121 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let channelId;
  let conversationId;
  let first;
  let fullyHydrated;
  let isFullFetchPending;
  let startMessageId;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = conversationId(576);
  const cResult = obj.c(16);
  const obj2 = conversationId(1493);
  const params = obj2.useRoute().params;
  ({ channelId, conversationId } = params);
  const messageId = params.messageId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConversationPreviewStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== conversationId) {
    const fn = function l() {
      return ConversationPreviewStore.getHydratedMessages(conversationId);
    };
    const items1 = [conversationId];
    cResult[1] = conversationId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = conversationId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConversationPreviewStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== conversationId) {
    const fn2 = function h() {
      let startMessageId;
      const obj = { fullyHydrated: ConversationPreviewStore.isFullyHydrated(conversationId), isFullFetchPending: ConversationPreviewStore.isConversationFetchPending(conversationId, true), startMessageId };
      const conversation = ConversationPreviewStore.getConversation(conversationId);
      startMessageId = undefined;
      if (conversation != null) {
        startMessageId = conversation.startMessageId;
      }
      if (startMessageId == null) {
        startMessageId = null;
      }
      return obj;
    };
    const items3 = [conversationId];
    cResult[5] = conversationId;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult2 = conversationId(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp9, tmp11, tmp12);
  ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
  if (cResult[8] === channelId) {
    if (cResult[9] === conversationId) {
      if (cResult[10] === fullyHydrated) {
        if (cResult[11] === isFullFetchPending) {
          if (cResult[12] === messageId) {
            if (cResult[13] === stateFromStores) {
              let tmp14;
              if (cResult[14] === startMessageId) {
                tmp14 = cResult[15];
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
}) : (() => {
  let channelId;
  let conversationId;
  let fullyHydrated;
  let isFullFetchPending;
  let messageId;
  let startMessageId;
  let obj = conversationId(1493);
  const params = obj.useRoute().params;
  conversationId = params.conversationId;
  ({ channelId, messageId } = params);
  const items = [ConversationPreviewStore];
  const items1 = [conversationId];
  const obj2 = conversationId(504);
  const messages = obj2.useStateFromStores(items, () => ConversationPreviewStore.getHydratedMessages(conversationId), items1);
  const items2 = [ConversationPreviewStore];
  const items3 = [conversationId];
  const obj3 = conversationId(504);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    let startMessageId;
    const obj = { fullyHydrated: ConversationPreviewStore.isFullyHydrated(conversationId), isFullFetchPending: ConversationPreviewStore.isConversationFetchPending(conversationId, true), startMessageId };
    const conversation = ConversationPreviewStore.getConversation(conversationId);
    startMessageId = undefined;
    if (conversation != null) {
      startMessageId = conversation.startMessageId;
    }
    if (startMessageId == null) {
      startMessageId = null;
    }
    return obj;
  }, items3);
  ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
  return jsx(ConversationFocusViewDefault, { channelId, conversationId, jumpMessageId, messages, fullyHydrated, isFullFetchPending, startMessageId });
});
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewFocusScreen.tsx");

export default tmp3;