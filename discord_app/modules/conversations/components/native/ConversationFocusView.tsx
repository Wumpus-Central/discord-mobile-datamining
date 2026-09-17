// discord_app/modules/conversations/components/native/ConversationFocusView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ConversationsAnalytics2 from "../../ConversationsAnalytics.tsx";
import ConversationNavigatorUtils from "ConversationNavigatorUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4640);
let closure_9 = createStyles.createStyles((backgroundColor) => {
  const obj = {
    container: { flex: 1, backgroundColor },
    pendingContent: {
      flex: 1,
      paddingVertical: nativeDefault.space.PX_24,
      alignItems: "center",
      gap: nativeDefault.space.PX_32,
      backgroundColor,
    },
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusView.tsx");

export default function ConversationFocusView(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  const jumpMessageId = channelId.jumpMessageId;
  ({ fullyHydrated, startMessageId } = channelId);
  let ChatPreview = channelId;
  let tmp = jumpMessageId;
  ({ messages, isFullFetchPending } = channelId);
  const token = channelId(jumpMessageId[5]).useToken(
    conversationId(jumpMessageId[4]).colors.MOBILE_ACTIONSHEET_BACKGROUND,
  );
  let container = closure_9(token);
  const items = [channelId, conversationId];
  const onBeforeJumpToMessage = startMessageId.useCallback((arg0) => {
    if ("footer_cta" === arg0) {
      const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
      const obj = { channelId, conversationId, dismissReason: "jump_to_conversation" };
      const result = ConversationsAnalytics.trackFocusModeDismissed(obj);
    }
  }, items);
  const items1 = [channelId, startMessageId];
  const items2 = [jumpMessageId, startMessageId, onBeforeJumpToMessage];
  const callback1 = startMessageId.useCallback(() => {
    if (null != startMessageId) {
      const result = ConversationNavigatorUtils.closeConversationsAndJumpToMessage(channelId, tmp);
    }
  }, items1);
  const memo = startMessageId.useMemo(() => {
    const obj = { jumpToChatText: null, jumpTargetId: null, onBeforeJumpToMessage: null };
    const intl = util.intl;
    obj.jumpToChatText = intl.string(util.t["bz/ik0"]);
    let tmp = jumpMessageId;
    if (jumpMessageId == null) {
      tmp = startMessageId;
    }
    obj.jumpTargetId = tmp;
    obj.onBeforeJumpToMessage = onBeforeJumpToMessage;
    return obj;
  }, items2);
  if (!fullyHydrated) {
    if (isFullFetchPending) {
      const obj2 = { style: container.pendingContent, children: closure_7(onBeforeJumpToMessage, {}) };
      return closure_7(closure_6, obj2);
    }
  }
  if (fullyHydrated) {
    const obj3 = {
      horizontal: true,
      scrollEnabled: false,
      bounces: false,
      contentContainerStyle: null,
      children: null,
    };
    container = container.container;
    obj3.contentContainerStyle = container;
    ChatPreview = ChatPreview(tmp[11]).ChatPreview;
    const obj4 = {
      channelId,
      messages,
      jumpToChatProps: memo,
      backgroundColor: token,
      initialScrollToTop: null == jumpMessageId,
      allowReactions: true,
    };
    tmp = closure_7(ChatPreview, obj4);
    obj3.children = tmp;
    closure_7(closure_5, obj3);
  } else {
    const obj5 = { style: container.pendingContent, children: null };
    const obj6 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl = ChatPreview(tmp[8]).intl;
    obj6.children = intl.string(ChatPreview(tmp[8]).t.eylmYW);
    const items3 = [closure_7(ChatPreview(tmp[9]).Text, obj6)];
    let tmp11Result = null != startMessageId;
    if (tmp11Result) {
      const obj7 = { variant: "tertiary", text: null, onPress: null };
      const intl2 = ChatPreview(tmp[8]).intl;
      obj7.text = intl2.string(ChatPreview(tmp[8]).t.aBNTxl);
      obj7.onPress = callback1;
      tmp11Result = closure_7(ChatPreview(tmp[10]).Button, obj7);
    }
    items3[1] = tmp11Result;
    obj5.children = items3;
    closure_8(closure_6, obj5);
  }
  let obj = channelId(jumpMessageId[5]);
}
