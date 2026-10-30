// === Module 11195: ChatView ===

// Module 11195 (ChatView)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7478 */;
import SummaryActionCreators from "SummaryActionCreators" /* 10163 */;
import ChatViewWrapperDefault from "ChatViewWrapper" /* 11216 */;
import ChatViewStickyHeaderDefault from "ChatViewStickyHeader" /* 11229 */;
import MessagesDefault from "Messages" /* 11324 */;
import ChatInputDefault from "ChatInput" /* 13673 */;
import JumpToPresentButtonDefault from "JumpToPresentButton" /* 13774 */;
import ChatBeginningRowDefault from "ChatBeginningRow" /* 13991 */;
import PortalKeyboardInlineComponentDefault from "PortalKeyboardInlineComponent" /* 14161 */;
import ChatPlaceholderDefault from "ChatPlaceholder" /* 14162 */;
import ChannelSafeAreaBottomDefault from "ChannelSafeAreaBottom" /* 14166 */;
import VoiceMessageOverlayDefault from "VoiceMessageOverlay" /* 14169 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6562 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import MessageStore from "MessageStore" /* 6056 */;

require = fn;
const createChannelRecord = fn(4862).createChannelRecord;
const ChannelTypes = fn(1072).ChannelTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5009);
let obj = { empty: { flex: 1, borderTopWidth: fn(17).StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE }, messages: { flex: 1, overflow: "hidden" }, chat: null };
let obj3 = { flex: 1, borderTopWidth: fn(17).StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj.chat = { backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
let closure_12 = createStyles.createStyles(obj);
let obj4 = { backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default noop.memo(function ChatView(alwaysRespectKeyboard) {
  let flag = alwaysRespectKeyboard.alwaysRespectKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const channelId = alwaysRespectKeyboard.channelId;
  ({ isActive: dependencyMap, chatInputRef } = alwaysRespectKeyboard);
  let flag2 = alwaysRespectKeyboard.disableGradient;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ guildId, HACK_fixModalInteraction: GatewayConnectionStore, screenIndex: createChannelRecord, secondaryTextFieldRef: ChannelStore, setNoExtractUI: MessageStore } = alwaysRespectKeyboard);
  channel = undefined;
  closure_11 = undefined;
  let ref;
  let isResourceChannel;
  c16 = undefined;
  c17 = undefined;
  let onScroll;
  let onPressKey;
  let scrollToNewMessages;
  let onJumpToPresent;
  let tmp = ref();
  closure_8 = tmp;
  let items = [channelId, flag];
  const effect = chatInputRef.useEffect(() => {
    if (!flag) {
      ChatInputUtils.dismissKeyboard();
    }
  }, items);
  let items1 = [ChannelStore];
  let stateFromStores = flag(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let items2 = [stateFromStores, channelId];
  const memo = chatInputRef.useMemo(() => {
    let tmp2 = stateFromStores;
    if (null == stateFromStores) {
      const obj = { id: channelId, type: ChannelTypes.GUILD_TEXT, name: null };
      const intl = util.intl;
      obj.name = intl.string(util.t.ZTNur7);
      tmp2 = createChannelRecord(obj);
    }
    return { channel: tmp2, channelIsLoading: null == stateFromStores };
  }, items2);
  ({ channelIsLoading, channel } = memo);
  let obj2 = flag(504);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const channelContentGate = flag(11196).useChannelContentGate(guildId, stateFromStores);
  closure_11 = chatInputRef.useRef(channelId);
  chatInputRef.useRef(null);
  ref = chatInputRef.useRef(null);
  channelId(5607)(() => new channelId(isActive[15])());
  const tmp10 = channelId(11214)(channelId);
  isResourceChannel = tmp10;
  let obj3 = flag(11196);
  const items3 = [MessageStore];
  const items4 = [channelId, tmp10];
  const stateFromStoresObject = flag(504).useStateFromStoresObject(items3, () => {
    const messages = MessageStore.getMessages(channelId);
    let tmp = 0 === messages.length;
    if (tmp) {
      tmp = messages.loadingMore || !messages.ready;
      const tmp2 = messages.loadingMore || !messages.ready;
    }
    const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: null };
    const hasMoreBefore = messages.hasMoreBefore;
    let tmp3 = !hasMoreBefore;
    if (!hasMoreBefore) {
      tmp3 = !closure_15;
    }
    obj.shouldRenderBegginingRow = tmp3;
    return obj;
  }, items4);
  ({ shouldRenderPlaceholder: c16, shouldRenderBegginingRow: c17 } = stateFromStoresObject);
  onScroll = chatInputRef.useCallback((isFirstMessageVisible) => {
    const current = ref.current;
    if (current != null) {
      current.onChatViewScrolled(isFirstMessageVisible);
    }
  }, []);
  const items5 = [chatInputRef];
  onPressKey = chatInputRef.useCallback((arg0) => {
    const current = chatInputRef.current;
    if (current != null) {
      current.handlePressKey(tmp);
    }
  }, items5);
  const items6 = [ref];
  scrollToNewMessages = chatInputRef.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToNewMessages();
    }
  }, items6);
  const items7 = [ref];
  onJumpToPresent = chatInputRef.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.jumpToPresent();
    }
  }, items7);
  const layoutEffect = chatInputRef.useLayoutEffect(() => flag(isActive[17]).trackAppUIViewed(), []);
  const items8 = [channelId];
  const effect1 = chatInputRef.useEffect(() => {
    const thread = LazyLoadedThreadManagerDefault.loadThread(channelId);
    const summaries = SummaryActionCreators.fetchSummaries(channelId);
  }, items8);
  const items9 = [channel.id];
  const effect2 = chatInputRef.useEffect(() => {
    closure_11.current = channel.id;
  }, items9);
  const effect3 = chatInputRef.useEffect(() => () => {
    const result = flag(isActive[20]).clearOldestUnreadMessageId(ref.current);
  }, []);
  let obj4 = { profile: null, children: null };
  const tmp16 = channel;
  const tmp3Result = flag(504);
  obj4.profile = flag(11528).Profiles.ChatView;
  let setInterstitial = stateFromStores;
  const items10 = [stateFromStores(channelId(14172), { channelId, guildId }), , ];
  let setInterstitialResult = null;
  if (!flag2) {
    setInterstitialResult = setInterstitial(tmp9(10716), { absolute: true });
  }
  items10[1] = setInterstitialResult;
  if (null != channelContentGate) {
    let result = tmp3(11196).renderChannelContentGate(channelContentGate);
    const tmp3Result2 = tmp3(11196);
    tmp9(9).setInterstitial(channelContentGate.kind);
    const tmp9Result = tmp9(9);
  } else {
    function renderMessagesWrapper() {
      const obj = { style: closure_8.messages, channelId, stickyHeader: React7(ChatViewStickyHeaderDefault, { channel, ref, scrollToNewMessages }), children: null };
      const obj3 = { alwaysRespectKeyboard: flag, channel, isActive, screenIndex, chatInputRef, HACK_fixModalInteraction, isResourceChannel, onPressKey, onScroll, ref, style: closure_8.chat, visibleMessagesWindowHandler, children: null };
      const obj2 = { channel, ref, scrollToNewMessages };
      const tmp5 = ChatViewWrapperDefault;
      const items = [React7(ChatInputDefault, { ref: chatInputRef, channel, isResourceChannel, screenIndex, secondaryTextFieldRef, setNoExtractUI, onJumpToPresent }), ];
      const obj5 = { channelId, guildId: null, shouldRender: null };
      const obj4 = { ref: chatInputRef, channel, isResourceChannel, screenIndex, secondaryTextFieldRef, setNoExtractUI, onJumpToPresent };
      const tmp9 = MessagesDefault;
      obj5.guildId = channel.getGuildId();
      obj5.shouldRender = shouldRender;
      items[1] = React7(ChatBeginningRowDefault, obj5);
      obj3.children = items;
      const items1 = [closure_2_10(tmp9, obj3), , , ];
      let tmp7Result = null;
      if (!obj6.isAndroid()) {
        const obj7 = { channelId: channel.id, messagesRef: ref };
        tmp7Result = React7(PortalKeyboardInlineComponentDefault, obj7);
      }
      items1[1] = tmp7Result;
      let tmp7Result3 = null;
      if (c16) {
        const obj8 = { screenIndex };
        tmp7Result3 = React7(ChatPlaceholderDefault, obj8);
      }
      items1[2] = tmp7Result3;
      obj6 = PlatformUtils;
      let tmp7Result4 = null;
      if (tmp14Result.isAndroid()) {
        const obj9 = { channelId, screenIndex, onJumpToPresent };
        tmp7Result4 = React7(JumpToPresentButtonDefault, obj9);
      }
      const obj10 = { children: null };
      items1[3] = tmp7Result4;
      obj.children = items1;
      const items2 = [closure_2_10(tmp5, obj), React7(ChannelSafeAreaBottomDefault, { channelId }), React7(VoiceMessageOverlayDefault, { channelId })];
      obj10.children = items2;
      return closure_2_10(closure_2_11, obj10);
    }
    if (channelIsLoading) {
      if (!GatewayConnectionStore.isConnected()) {
        result = renderMessagesWrapper();
      }
    }
    if (channelIsLoading) {
      let obj5 = { style: tmp.empty, title: null, body: null };
      let intl = tmp3(1114).intl;
      obj5.title = intl.string(tmp3(1114).t.ai6Lbr);
      const intl2 = tmp3(1114).intl;
      obj5.body = intl2.string(tmp3(1114).t["LTr+x9"]);
      let setInterstitialResult2 = setInterstitial(tmp3(1188).EmptyState, obj5);
      tmp = tmp9(9);
      setInterstitial = tmp.setInterstitial;
      setInterstitial("EmptyState");
    } else if (channel.isDirectory()) {
      let obj6 = { channel, guildId };
      setInterstitialResult2 = setInterstitial(tmp9(14186), obj6);
      tmp9(9).setInterstitial("GuildDirectory");
      const tmp9Result3 = tmp9(9);
    } else if (channel.isForumLikeChannel()) {
      let obj7 = { channel };
      setInterstitialResult2 = setInterstitial(tmp9(14320), obj7);
      tmp9(9).setInterstitial("ForumChannel");
      const tmp9Result4 = tmp9(9);
    } else {
      setInterstitialResult2 = renderMessagesWrapper();
    }
  }
  items10[2] = result;
  obj4.children = items10;
  return tmp16(channelId(11528), obj4);
});