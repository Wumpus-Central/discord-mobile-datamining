// === Module 12696: ConversationFocusScreen ===

// Module 12696 (ConversationFocusScreen)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import removePendingListFetch from "removePendingListFetch" /* 5014 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ ActivityIndicator: c3, ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, paddingVertical: ThemesDefault.space.PX_24, alignItems: "center", gap: ThemesDefault.space.PX_32, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  let container = callback2();
  let ChatPreview = channelId;
  let tmp = conversationId;
  let obj = channelId(conversationId[6]);
  const params = obj.useRoute().params;
  channelId = params.channelId;
  conversationId = params.conversationId;
  obj1 = channelId(conversationId[7]);
  const items = [closure_6];
  const items1 = [channelId, conversationId];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_6.getHydratedMessages(channelId, conversationId), items1);
  let obj2 = channelId(conversationId[7]);
  const items2 = [closure_6];
  const items3 = [channelId, conversationId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    let obj = closure_1_6;
    const conversationMetadata = closure_1_6.getConversationMetadata(channelId, conversationId);
    let flag;
    if (conversationMetadata != null) {
      flag = conversationMetadata.fullyHydrated;
    }
    if (flag == null) {
      flag = false;
    }
    obj = { fullyHydrated: flag, isFullFetchPending: obj.isConversationFetchPending(conversationId, true), startMessageId: null };
    startMessageId = undefined;
    if (conversationMetadata != null) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    if (startMessageId == null) {
      startMessageId = null;
    }
    obj[2] = startMessageId;
    return obj;
  }, items3);
  ({ fullyHydrated, startMessageId } = stateFromStoresObject);
  const items4 = [channelId, conversationId];
  const callback = startMessageId.useCallback((arg0) => {
    if ("footer_cta" === arg0) {
      const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
      const obj = { channelId: null, conversationId: null, dismissReason: "jump_to_conversation" };
      obj[0] = channelId;
      obj[1] = conversationId;
      const result = ConversationsAnalytics.trackFocusModeDismissed(obj);
    }
  }, items4);
  const items5 = [channelId, startMessageId];
  const items6 = [startMessageId, callback];
  const callback1 = startMessageId.useCallback(() => {
    if (null != startMessageId) {
      const result = channelId(conversationId[9]).closeConversationsAndJumpToMessage(channelId, tmp);
      const obj = channelId(conversationId[9]);
    }
  }, items5);
  const memo = startMessageId.useMemo(() => {
    const obj = { jumpToChatText: null, jumpTargetId: null, onBeforeJumpToMessage: null };
    const intl = channelId(conversationId[10]).intl;
    obj[0] = intl.string(channelId(conversationId[10]).t["bz/ik0"]);
    obj[1] = startMessageId;
    obj[2] = callback;
    return obj;
  }, items6);
  if (!fullyHydrated) {
    if (stateFromStoresObject.isFullFetchPending) {
      obj = { style: null, children: null };
      obj[0] = container.pendingContent;
      obj[1] = callback(callback, {});
      return callback(closure_5, obj);
    }
  }
  if (fullyHydrated) {
    obj = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: null, children: null };
    container = container.container;
    obj[3] = container;
    ChatPreview = ChatPreview(tmp[13]).ChatPreview;
    obj1 = { channelId: null, messages: null, jumpToChatProps: null, initialScrollToTop: true, allowReactions: true };
    obj1[0] = channelId;
    obj1[1] = stateFromStores;
    obj1[2] = memo;
    tmp = callback(ChatPreview, obj1);
    obj[4] = tmp;
    callback(closure_4, obj);
  } else {
    obj2 = { style: null, children: null };
    obj2[0] = container.pendingContent;
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl = ChatPreview(tmp[10]).intl;
    obj3[2] = intl.string(ChatPreview(tmp[10]).t.eylmYW);
    const items7 = [callback(ChatPreview(tmp[11]).Text, obj3), ];
    let tmp12Result = null != startMessageId;
    if (tmp12Result) {
      const obj4 = { variant: "tertiary", text: null, onPress: null };
      const intl2 = ChatPreview(tmp[10]).intl;
      obj4[1] = intl2.string(ChatPreview(tmp[10]).t.aBNTxl);
      obj4[2] = callback1;
      tmp12Result = tmp12(ChatPreview(tmp[12]).Button, obj4);
    }
    items7[1] = tmp12Result;
    obj2[1] = items7;
    callback(closure_5, obj2);
    tmp12 = callback;
  }
};