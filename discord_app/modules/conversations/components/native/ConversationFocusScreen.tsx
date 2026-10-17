// === Module 9677: ConversationFocusScreen ===

// Module 9677 (ConversationFocusScreen)
import ConversationFocusViewDefault from "ConversationFocusView" /* 9678 */;
import noop from "module_19" /* 19 */;
import SelectedConversationStore from "SelectedConversationStore" /* 9638 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConversationFocusScreen() {
  const cResult = channelId(576).c(16);
  let obj = channelId(576);
  const params = channelId(1508).useRoute().params;
  channelId = params.channelId;
  ({ conversationId, messageId } = params);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedConversationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return SelectedConversationStore.getHydratedMessages(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj2 = channelId(1508);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SelectedConversationStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== channelId) {
    const fn2 = function h() {
      const obj = { fullyHydrated: SelectedConversationStore.isFullyHydrated(channelId), isFullFetchPending: SelectedConversationStore.isConversationFetchPending(channelId, true), startMessageId: null };
      const conversation = SelectedConversationStore.getConversation(channelId);
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
    const items3 = [channelId];
    cResult[5] = channelId;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp12 = items3;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult = channelId(504);
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(tmp9, tmp11, tmp12);
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
  const tmpResult2 = channelId(504);
}) : (function ConversationFocusScreen() {
  const params = channelId(1508).useRoute().params;
  channelId = params.channelId;
  ({ conversationId, messageId } = params);
  let obj = channelId(1508);
  const items = [SelectedConversationStore];
  const items1 = [channelId];
  const messages = channelId(504).useStateFromStores(items, () => SelectedConversationStore.getHydratedMessages(channelId), items1);
  const obj2 = channelId(504);
  const items2 = [SelectedConversationStore];
  const items3 = [channelId];
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(items2, () => {
    const obj = { fullyHydrated: SelectedConversationStore.isFullyHydrated(channelId), isFullFetchPending: SelectedConversationStore.isConversationFetchPending(channelId, true), startMessageId: null };
    const conversation = SelectedConversationStore.getConversation(channelId);
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