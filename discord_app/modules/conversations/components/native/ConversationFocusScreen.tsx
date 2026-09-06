// === Module 13251: ConversationFocusScreen ===

// Module 13251 (ConversationFocusScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7909 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 7923 */;
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7596 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, pendingContent: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.pendingContent = { flex: 1, paddingVertical: nativeDefault.space.PX_24, alignItems: "center", gap: nativeDefault.space.PX_32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  let container = closure_9();
  let ChatPreview = channelId;
  let tmp = conversationId;
  let obj = channelId(conversationId[6]);
  const params = obj.useRoute().params;
  channelId = params.channelId;
  conversationId = params.conversationId;
  let obj1 = channelId(conversationId[7]);
  const items = [ConversationsStore];
  const items1 = [channelId, conversationId];
  const stateFromStores = obj1.useStateFromStores(items, () => ConversationsStore.getHydratedMessages(channelId, conversationId), items1);
  let obj2 = channelId(conversationId[7]);
  const items2 = [ConversationsStore];
  const items3 = [channelId, conversationId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    let obj = ConversationsStore;
    const conversationMetadata = ConversationsStore.getConversationMetadata(channelId, conversationId);
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
    obj.startMessageId = startMessageId;
    return obj;
  }, items3);
  ({ fullyHydrated, startMessageId } = stateFromStoresObject);
  const items4 = [channelId, conversationId];
  const onBeforeJumpToMessage = startMessageId.useCallback((arg0) => {
    if ("footer_cta" === arg0) {
      const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
      const obj = { channelId, conversationId, dismissReason: "jump_to_conversation" };
      const result = ConversationsAnalytics.trackFocusModeDismissed(obj);
    }
  }, items4);
  const items5 = [channelId, startMessageId];
  const items6 = [startMessageId, onBeforeJumpToMessage];
  const callback1 = startMessageId.useCallback(() => {
    if (null != startMessageId) {
      const result = ConversationNavigatorUtils.closeConversationsAndJumpToMessage(channelId, tmp);
    }
  }, items5);
  const memo = startMessageId.useMemo(() => {
    const obj = { jumpToChatText: null, jumpTargetId: null, onBeforeJumpToMessage: null };
    const intl = util.intl;
    obj.jumpToChatText = intl.string(util.t["bz/ik0"]);
    obj.jumpTargetId = startMessageId;
    obj.onBeforeJumpToMessage = onBeforeJumpToMessage;
    return obj;
  }, items6);
  if (!fullyHydrated) {
    if (stateFromStoresObject.isFullFetchPending) {
      obj = { style: container.pendingContent, children: closure_7(onBeforeJumpToMessage, {}) };
      return closure_7(closure_5, obj);
    }
  }
  if (fullyHydrated) {
    obj = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: null, children: null };
    container = container.container;
    obj.contentContainerStyle = container;
    ChatPreview = ChatPreview(tmp[13]).ChatPreview;
    obj1 = { channelId, messages: stateFromStores, jumpToChatProps: memo, initialScrollToTop: true, allowReactions: true };
    tmp = closure_7(ChatPreview, obj1);
    obj.children = tmp;
    closure_7(closure_4, obj);
  } else {
    obj2 = { style: container.pendingContent, children: null };
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl = ChatPreview(tmp[10]).intl;
    obj3.children = intl.string(ChatPreview(tmp[10]).t.eylmYW);
    const items7 = [closure_7(ChatPreview(tmp[11]).Text, obj3), ];
    let tmp12Result = null != startMessageId;
    if (tmp12Result) {
      const obj4 = { variant: "tertiary", text: null, onPress: null };
      const intl2 = ChatPreview(tmp[10]).intl;
      obj4.text = intl2.string(ChatPreview(tmp[10]).t.aBNTxl);
      obj4.onPress = callback1;
      tmp12Result = closure_7(ChatPreview(tmp[12]).Button, obj4);
    }
    items7[1] = tmp12Result;
    obj2.children = items7;
    closure_8(closure_5, obj2);
  }
};