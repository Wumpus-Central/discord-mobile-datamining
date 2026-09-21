// === Module 11603: ChatView ===

// Module 11603 (ChatView)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ChatInputUtils from "ChatInputUtils" /* 4622 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7556 */;
import SummaryActionCreators from "SummaryActionCreators" /* 11607 */;
import ChatViewWrapperDefault from "ChatViewWrapper" /* 11612 */;
import ChatViewStickyHeaderDefault from "ChatViewStickyHeader" /* 11625 */;
import MessagesDefault from "Messages" /* 11687 */;
import ChatInputDefault from "ChatInput" /* 12211 */;
import JumpToPresentButtonDefault from "JumpToPresentButton" /* 12520 */;
import ChatBeginningRowDefault from "ChatBeginningRow" /* 12722 */;
import PortalKeyboardInlineComponentDefault from "PortalKeyboardInlineComponent" /* 12890 */;
import ChatPlaceholderDefault from "ChatPlaceholder" /* 12891 */;
import ChannelSafeAreaBottomDefault from "ChannelSafeAreaBottom" /* 12895 */;
import VoiceMessageOverlayDefault from "VoiceMessageOverlay" /* 12898 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5494 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import MessageStore from "MessageStore" /* 4976 */;

require = fn;
const createChannelRecord = fn(2045).createChannelRecord;
const ChannelTypes = fn(1074).ChannelTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4756);
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
  const chatInputRef = alwaysRespectKeyboard.chatInputRef;
  let flag2 = alwaysRespectKeyboard.disableGradient;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ guildId, HACK_fixModalInteraction: noop, screenIndex: GatewayConnectionStore, secondaryTextFieldRef: createChannelRecord, setNoExtractUI: ChannelStore } = alwaysRespectKeyboard);
  channel = undefined;
  closure_10 = undefined;
  let ref;
  let isResourceChannel;
  c15 = undefined;
  c16 = undefined;
  let onScroll;
  let onPressKey;
  let scrollToNewMessages;
  let onJumpToPresent;
  let setInterstitial = ref();
  let items = [channelId, flag];
  const effect = noop.useEffect(() => {
    if (!flag) {
      ChatInputUtils.dismissKeyboard();
    }
  }, items);
  let items1 = [ChannelStore];
  let stateFromStores = flag(chatInputRef[11]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let items2 = [stateFromStores, channelId];
  const memo = noop.useMemo(() => {
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
  let obj2 = flag(chatInputRef[11]);
  const isChannelContentGated = flag(chatInputRef[13]).useIsChannelContentGated(channel);
  let obj3 = flag(chatInputRef[13]);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const getSpoilerGatingChannelId = flag(chatInputRef[14]).useGetSpoilerGatingChannelId(stateFromStores);
  closure_10 = noop.useRef(channelId);
  noop.useRef(null);
  ref = noop.useRef(null);
  channelId(chatInputRef[15])(() => new channelId(chatInputRef[16])());
  const tmp10 = channelId(chatInputRef[17])(channelId);
  isResourceChannel = tmp10;
  let obj4 = flag(chatInputRef[14]);
  const items3 = [setInterstitial];
  const items4 = [channelId, tmp10];
  const stateFromStoresObject = flag(chatInputRef[11]).useStateFromStoresObject(items3, () => {
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
      tmp3 = !closure_14;
    }
    obj.shouldRenderBegginingRow = tmp3;
    return obj;
  }, items4);
  ({ shouldRenderPlaceholder: c15, shouldRenderBegginingRow: c16 } = stateFromStoresObject);
  onScroll = noop.useCallback((isFirstMessageVisible) => {
    const current = ref.current;
    if (current != null) {
      current.onChatViewScrolled(isFirstMessageVisible);
    }
  }, []);
  const items5 = [chatInputRef];
  onPressKey = noop.useCallback((arg0) => {
    const current = chatInputRef.current;
    if (current != null) {
      current.handlePressKey(tmp);
    }
  }, items5);
  const items6 = [ref];
  scrollToNewMessages = noop.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToNewMessages();
    }
  }, items6);
  const items7 = [ref];
  onJumpToPresent = noop.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.jumpToPresent();
    }
  }, items7);
  const layoutEffect = noop.useLayoutEffect(() => flag(chatInputRef[18]).trackAppUIViewed(), []);
  const items8 = [channelId];
  const effect1 = noop.useEffect(() => {
    const thread = LazyLoadedThreadManagerDefault.loadThread(channelId);
    const summaries = SummaryActionCreators.fetchSummaries(channelId);
  }, items8);
  const items9 = [channel.id];
  const effect2 = noop.useEffect(() => {
    closure_10.current = channel.id;
  }, items9);
  const effect3 = noop.useEffect(() => () => {
    const result = flag(chatInputRef[21]).clearOldestUnreadMessageId(ref.current);
  }, []);
  let obj5 = { profile: null, children: null };
  const tmp16 = closure_10;
  const tmp2Result = flag(chatInputRef[11]);
  obj5.profile = flag(chatInputRef[33]).Profiles.ChatView;
  const items10 = [channel(channelId(chatInputRef[34]), { channelId, guildId }), , ];
  let tmp18Result = null;
  if (!flag2) {
    tmp18Result = tmp18(tmp9(tmp3[35]), { absolute: true });
  }
  items10[1] = tmp18Result;
  const tmp17 = channelId(chatInputRef[33]);
  if (tmp2Result2.shouldNSFWGateGuild(guildId)) {
    let tmp18Result3 = tmp18(tmp9(tmp3[38]), {});
    tmp9(tmp3[36]).setInterstitial("NsfwGateChat");
    const tmp9Result = tmp9(tmp3[36]);
  } else {
    function renderMessagesWrapper() {
      const obj = { style: setInterstitial.messages, channelId, stickyHeader: React7(ChatViewStickyHeaderDefault, { channel, ref, scrollToNewMessages }), children: null };
      const obj3 = { alwaysRespectKeyboard: flag, channel, screenIndex, chatInputRef, HACK_fixModalInteraction, isResourceChannel, onPressKey, onScroll, ref, style: setInterstitial.chat, visibleMessagesWindowHandler, children: null };
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
      if (c15) {
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
        tmp18Result3 = renderMessagesWrapper();
      }
    }
    if (channelIsLoading) {
      let obj6 = { style: setInterstitial.empty, title: null, body: null };
      let intl = tmp2(tmp3[12]).intl;
      obj6.title = intl.string(tmp2(tmp3[12]).t.ai6Lbr);
      const intl2 = tmp2(tmp3[12]).intl;
      obj6.body = intl2.string(tmp2(tmp3[12]).t["LTr+x9"]);
      let tmp18Result4 = tmp18(tmp2(tmp3[39]).EmptyState, obj6);
      setInterstitial = tmp9(tmp3[36]).setInterstitial;
      setInterstitial("EmptyState");
      const tmp9Result6 = tmp9(tmp3[36]);
    } else if (isChannelContentGated) {
      let obj7 = { guildId, channelId };
      tmp18Result4 = tmp18(tmp9(tmp3[40]), obj7);
      tmp9(tmp3[36]).setInterstitial("GuildNSFW");
      const tmp9Result7 = tmp9(tmp3[36]);
    } else {
      if (null != getSpoilerGatingChannelId) {
        if (null != getSpoilerGatingChannelId) {
          let obj8 = { guildId, channelId: getSpoilerGatingChannelId };
          tmp18Result4 = tmp18(tmp9(tmp3[41]), obj8, channelId);
          tmp9(tmp3[36]).setInterstitial("ChannelSpoiler");
          const tmp9Result8 = tmp9(tmp3[36]);
        }
      }
      if (channel.isDirectory()) {
        let obj9 = { channel, guildId };
        tmp18Result4 = tmp18(tmp9(tmp3[42]), obj9);
        tmp9(tmp3[36]).setInterstitial("GuildDirectory");
        const tmp9Result9 = tmp9(tmp3[36]);
      } else if (channel.isForumLikeChannel()) {
        let obj10 = { channel };
        tmp18Result4 = tmp18(tmp9(tmp3[43]), obj10);
        tmp9(tmp3[36]).setInterstitial("ForumChannel");
        const tmp9Result10 = tmp9(tmp3[36]);
      } else {
        tmp18Result4 = renderMessagesWrapper();
      }
    }
  }
  items10[2] = tmp18Result3;
  obj5.children = items10;
  return tmp16(tmp17, obj5);
});