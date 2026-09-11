// === Module 13348: ConversationFocusScreen ===

// Module 13348 (ConversationFocusScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7983 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 7997 */;
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7668 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4606);
let createStyles = { container: null, pendingContent: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.container = createStyles;
createStyles.pendingContent = { flex: 1, paddingVertical: nativeDefault.space.PX_24, alignItems: "center", gap: nativeDefault.space.PX_32, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  let container = closure_10();
  let ChatPreview = channelId;
  let tmp = startMessageId;
  let obj = channelId(startMessageId[6]);
  const token = obj.useToken(conversationId(startMessageId[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj1 = channelId(startMessageId[7]);
  const params = obj1.useRoute().params;
  channelId = params.channelId;
  conversationId = params.conversationId;
  let obj2 = channelId(startMessageId[8]);
  const items = [ConversationsStore];
  const items1 = [channelId, conversationId];
  const stateFromStores = obj2.useStateFromStores(items, () => ConversationsStore.getHydratedMessages(channelId, conversationId), items1);
  let obj3 = channelId(startMessageId[8]);
  const items2 = [ConversationsStore];
  const items3 = [channelId, conversationId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
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
  onBeforeJumpToMessage = onBeforeJumpToMessage.useCallback((arg0) => {
    if ("footer_cta" === arg0) {
      const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
      const obj = { channelId, conversationId, dismissReason: "jump_to_conversation" };
      const result = ConversationsAnalytics.trackFocusModeDismissed(obj);
    }
  }, items4);
  const items5 = [channelId, startMessageId];
  const items6 = [startMessageId, onBeforeJumpToMessage];
  const callback1 = onBeforeJumpToMessage.useCallback(() => {
    if (null != startMessageId) {
      const result = ConversationNavigatorUtils.closeConversationsAndJumpToMessage(channelId, tmp);
    }
  }, items5);
  const memo = onBeforeJumpToMessage.useMemo(() => {
    const obj = { jumpToChatText: null, jumpTargetId: null, onBeforeJumpToMessage: null };
    const intl = util.intl;
    obj.jumpToChatText = intl.string(util.t["bz/ik0"]);
    obj.jumpTargetId = startMessageId;
    obj.onBeforeJumpToMessage = onBeforeJumpToMessage;
    return obj;
  }, items6);
  if (!fullyHydrated) {
    if (stateFromStoresObject.isFullFetchPending) {
      obj = { style: container.pendingContent, children: closure_8(closure_4, {}) };
      return closure_8(closure_6, obj);
    }
  }
  if (fullyHydrated) {
    obj = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: null, children: null };
    container = container.container;
    obj.contentContainerStyle = container;
    ChatPreview = ChatPreview(tmp[14]).ChatPreview;
    obj1 = { channelId, messages: stateFromStores, jumpToChatProps: memo, backgroundColor: token, initialScrollToTop: true, allowReactions: true };
    tmp = closure_8(ChatPreview, obj1);
    obj.children = tmp;
    closure_8(closure_5, obj);
  } else {
    obj2 = { style: container.pendingContent, children: null };
    obj3 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl = ChatPreview(tmp[11]).intl;
    obj3.children = intl.string(ChatPreview(tmp[11]).t.eylmYW);
    const items7 = [closure_8(ChatPreview(tmp[12]).Text, obj3), ];
    let tmp13Result = null != startMessageId;
    if (tmp13Result) {
      const obj4 = { variant: "tertiary", text: null, onPress: null };
      const intl2 = ChatPreview(tmp[11]).intl;
      obj4.text = intl2.string(ChatPreview(tmp[11]).t.aBNTxl);
      obj4.onPress = callback1;
      tmp13Result = closure_8(ChatPreview(tmp[13]).Button, obj4);
    }
    items7[1] = tmp13Result;
    obj2.children = items7;
    closure_9(closure_6, obj2);
  }
};