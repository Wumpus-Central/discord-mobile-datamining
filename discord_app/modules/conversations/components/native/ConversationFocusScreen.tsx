// === Module 13398: ConversationFocusScreen ===

// Module 13398 (ConversationFocusScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 8025 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 8039 */;
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7704 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, pendingContent: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.pendingContent = { flex: 1, paddingVertical: nativeDefault.space.PX_24, alignItems: "center", gap: nativeDefault.space.PX_32, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  let container = closure_10();
  let ChatPreview = channelId;
  let tmp = startMessageId;
  const token = channelId(startMessageId[6]).useToken(conversationId(startMessageId[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj = channelId(startMessageId[6]);
  const params = channelId(startMessageId[7]).useRoute().params;
  channelId = params.channelId;
  conversationId = params.conversationId;
  let obj2 = channelId(startMessageId[7]);
  const items = [ConversationsStore];
  const items1 = [channelId, conversationId];
  const stateFromStores = channelId(startMessageId[8]).useStateFromStores(items, () => ConversationsStore.getHydratedMessages(channelId, conversationId), items1);
  const obj3 = channelId(startMessageId[8]);
  const items2 = [ConversationsStore];
  const items3 = [channelId, conversationId];
  const stateFromStoresObject = channelId(startMessageId[8]).useStateFromStoresObject(items2, () => {
    const conversationMetadata = ConversationsStore.getConversationMetadata(channelId, conversationId);
    let flag;
    if (conversationMetadata != null) {
      flag = conversationMetadata.fullyHydrated;
    }
    if (flag == null) {
      flag = false;
    }
    const obj2 = { fullyHydrated: flag, isFullFetchPending: ConversationsStore.isConversationFetchPending(conversationId, true), startMessageId: null };
    startMessageId = undefined;
    if (conversationMetadata != null) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    if (startMessageId == null) {
      startMessageId = null;
    }
    obj2.startMessageId = startMessageId;
    return obj2;
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
      const obj5 = { style: container.pendingContent, children: closure_8(closure_4, {}) };
      return closure_8(closure_6, obj5);
    }
  }
  if (fullyHydrated) {
    const obj6 = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: null, children: null };
    container = container.container;
    obj6.contentContainerStyle = container;
    ChatPreview = ChatPreview(tmp[14]).ChatPreview;
    const obj7 = { channelId, messages: stateFromStores, jumpToChatProps: memo, backgroundColor: token, initialScrollToTop: true, allowReactions: true };
    tmp = closure_8(ChatPreview, obj7);
    obj6.children = tmp;
    closure_8(closure_5, obj6);
  } else {
    const obj8 = { style: container.pendingContent, children: null };
    const obj9 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl = ChatPreview(tmp[11]).intl;
    obj9.children = intl.string(ChatPreview(tmp[11]).t.eylmYW);
    const items7 = [closure_8(ChatPreview(tmp[12]).Text, obj9), ];
    let tmp13Result = null != startMessageId;
    if (tmp13Result) {
      const obj10 = { variant: "tertiary", text: null, onPress: null };
      const intl2 = ChatPreview(tmp[11]).intl;
      obj10.text = intl2.string(ChatPreview(tmp[11]).t.aBNTxl);
      obj10.onPress = callback1;
      tmp13Result = closure_8(ChatPreview(tmp[13]).Button, obj10);
    }
    items7[1] = tmp13Result;
    obj8.children = items7;
    closure_9(closure_6, obj8);
  }
  const obj4 = channelId(startMessageId[8]);
};