// === Module 10362: ChatView ===

// Module 10362 (ChatView)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ChatInputUtils from "ChatInputUtils" /* 4985 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7013 */;
import SummaryActionCreators from "SummaryActionCreators" /* 9675 */;
import ChatViewWrapperDefault from "ChatViewWrapper" /* 10366 */;
import ChatViewStickyHeaderDefault from "ChatViewStickyHeader" /* 10380 */;
import MessagesDefault from "Messages" /* 10482 */;
import ChatInputDefault from "ChatInput" /* 11630 */;
import JumpToPresentButtonDefault from "JumpToPresentButton" /* 11964 */;
import ChatBeginningRowDefault from "ChatBeginningRow" /* 12201 */;
import PortalKeyboardInlineComponentDefault from "PortalKeyboardInlineComponent" /* 12378 */;
import ChatPlaceholderDefault from "ChatPlaceholder" /* 12379 */;
import ChannelSafeAreaBottomDefault from "ChannelSafeAreaBottom" /* 12383 */;
import VoiceMessageOverlayDefault from "VoiceMessageOverlay" /* 12386 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5757 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import MessageStore from "MessageStore" /* 5432 */;

require = fn;
const createChannelRecord = fn(2069).createChannelRecord;
const ChannelTypes = fn(1085).ChannelTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj = { empty: { flex: 1, borderTopWidth: fn(17).StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE }, messages: { flex: 1, overflow: "hidden" }, chat: null };
let obj3 = { flex: 1, borderTopWidth: fn(17).StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj.chat = { backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
let closure_12 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatView(chatInputRef) {
  let setInterstitialResult2 = HACK_fixModalInteraction;
  const cResult = channelId(HACK_fixModalInteraction[11]).c(63);
  ({ alwaysRespectKeyboard, channelId } = chatInputRef);
  chatInputRef = chatInputRef.chatInputRef;
  ({ disableGradient, guildId, HACK_fixModalInteraction } = chatInputRef);
  const screenIndex = chatInputRef.screenIndex;
  const secondaryTextFieldRef = chatInputRef.secondaryTextFieldRef;
  const setNoExtractUI = chatInputRef.setNoExtractUI;
  ChannelStore = tmp4;
  let messages = visibleMessagesWindowHandler();
  if (cResult[0] !== (undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard)) {
    const fn = function u() {
      if (!closure_6) {
        ChatInputUtils.dismissKeyboard();
      }
    };
    cResult[0] = tmp4;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === (undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard)) {
    if (cResult[3] === channelId) {
      let tmp7 = cResult[4];
    }
    const effect = screenIndex.useEffect(tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [ChannelStore];
      cResult[5] = items;
      let tmp10 = items;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== channelId) {
      class C {
        constructor() {
          return closure_6.getChannel(channelId);
        }
      }
      cResult[6] = channelId;
      cResult[7] = C;
    } else {
      class C {
        constructor() {
          return closure_6.getChannel(channelId);
        }
      }
    }
    const stateFromStores = channelId(setInterstitialResult2[13]).useStateFromStores(tmp10, C);
    if (cResult[8] === channelId) {
      class C {
        constructor() {
          return closure_6.getChannel(channelId);
        }
      }
      if (cResult[11] === tmp14) {
        class C {
          constructor() {
            return closure_6.getChannel(channelId);
          }
        }
        ({ channelIsLoading, channel } = tmp20);
        const isChannelContentGated = channelId(setInterstitialResult2[15]).useIsChannelContentGated(channel);
        const tmpResult5 = channelId(setInterstitialResult2[15]);
        if (stateFromStores == null) {
          class C {
            constructor() {
              return closure_6.getChannel(channelId);
            }
          }
        }
        empty = channelId(setInterstitialResult2[16]).useGetSpoilerGatingChannelId(stateFromStores);
        closure_9 = obj2.useRef(channelId);
        const tmp22 = null != empty;
        const tmpResult6 = channelId(setInterstitialResult2[16]);
        obj2.useRef(null);
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              tmp = new chatInputRef(HACK_fixModalInteraction[17])();
              return tmp;
            }
          }
          cResult[14] = A;
        } else {
          class A {
            constructor() {
              tmp = new chatInputRef(HACK_fixModalInteraction[17])();
              return tmp;
            }
          }
        }
        let setInterstitial = chatInputRef;
        const tmp24 = chatInputRef(setInterstitialResult2[18])(A);
        const tmp25 = chatInputRef(setInterstitialResult2[19])(channelId);
        const isResourceChannel = tmp25;
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              tmp = new chatInputRef(HACK_fixModalInteraction[17])();
              return tmp;
            }
          }
          let items1 = [messages];
          cResult[15] = items1;
          const tmp26 = items1;
        } else {
          class A {
            constructor() {
              tmp = new chatInputRef(HACK_fixModalInteraction[17])();
              return tmp;
            }
          }
        }
        if (cResult[16] === channelId) {
          class A {
            constructor() {
              tmp = new chatInputRef(HACK_fixModalInteraction[17])();
              return tmp;
            }
          }
          const stateFromStoresObject = channelId(setInterstitialResult2[13]).useStateFromStoresObject(tmp26, tmp27, tmp28);
          const shouldRenderPlaceholder = stateFromStoresObject.shouldRenderPlaceholder;
          const shouldRenderBegginingRow = stateFromStoresObject.shouldRenderBegginingRow;
          const _Symbol4 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            cResult[20] = tmp31;
          } else {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
          }
          const onScroll = tmp31;
          if (cResult[21] !== chatInputRef) {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            cResult[21] = chatInputRef;
            cResult[22] = tmp33;
          } else {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
          }
          const onPressKey = tmp33;
          const _Symbol5 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            cResult[23] = tmp35;
          } else {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
          }
          const scrollToNewMessages = tmp35;
          const _Symbol6 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            cResult[24] = tmp37;
          } else {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
          }
          const onJumpToPresent = tmp37;
          const _Symbol7 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            let items2 = [];
            cResult[25] = tmp40;
            cResult[26] = items2;
            let tmp39 = items2;
          } else {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            tmp39 = cResult[26];
          }
          const layoutEffect = obj2.useLayoutEffect(tmp40, tmp39);
          if (cResult[27] !== channelId) {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            const items3 = [channelId];
            cResult[27] = channelId;
            cResult[28] = tmp44;
            cResult[29] = items3;
            let tmp43 = items3;
          } else {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            tmp43 = cResult[29];
          }
          const effect1 = obj2.useEffect(tmp44, tmp43);
          if (cResult[30] !== channel.id) {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            const items4 = [channel.id];
            cResult[30] = channel.id;
            cResult[31] = tmp48;
            cResult[32] = items4;
            let tmp47 = items4;
          } else {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            tmp47 = cResult[32];
          }
          const effect2 = obj2.useEffect(tmp48, tmp47);
          const _Symbol8 = Symbol;
          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            const items5 = [];
            cResult[33] = tmp52;
            cResult[34] = items5;
            let tmp51 = items5;
          } else {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            tmp51 = cResult[34];
          }
          const effect3 = obj2.useEffect(tmp52, tmp51);
          if (cResult[35] === HACK_fixModalInteraction) {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
          }
          if (cResult[58] === channelId) {
            class A {
              constructor() {
                tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            if (cResult[61] !== tmp5) {
              class A {
                constructor() {
                  tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                  return tmp;
                }
              }
              if (!tmp5) {
                class A {
                  constructor() {
                    tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                    return tmp;
                  }
                }
                const tmp58 = closure_9(setInterstitial(setInterstitialResult2[44]), { absolute: true });
              }
              cResult[61] = tmp5;
              cResult[62] = tmp58;
              const tmp57 = tmp58;
            } else {
              class A {
                constructor() {
                  tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                  return tmp;
                }
              }
            }
            let obj3 = { profile: channelId(setInterstitialResult2[45]).Profiles.ChatView, children: null };
            const items6 = [tmp54, tmp57, ];
            const setInterstitialResult = setInterstitial(setInterstitialResult2[45]);
            const tmp59 = ref;
            if (tmpResult8.shouldNSFWGateGuild(guildId)) {
              class A {
                constructor() {
                  tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                  return tmp;
                }
              }
              let tmp61Result = closure_9(setInterstitial(setInterstitialResult2[37]), {});
              setInterstitial = setInterstitial(setInterstitialResult2[35]).setInterstitial;
              setInterstitialResult2 = setInterstitial("NsfwGateChat");
              const setInterstitialResult1 = setInterstitial(setInterstitialResult2[35]);
            } else {
              class A {
                constructor() {
                  tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                  return tmp;
                }
              }
              if (channelIsLoading) {
                class A {
                  constructor() {
                    tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                    return tmp;
                  }
                }
                if (!secondaryTextFieldRef.isConnected()) {
                  class A {
                    constructor() {
                      tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                      return tmp;
                    }
                  }
                  tmp61Result = tmp61();
                }
              }
              if (channelIsLoading) {
                class A {
                  constructor() {
                    tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                    return tmp;
                  }
                }
                let obj4 = { style: messages.empty, title: null, body: null };
                const intl2 = channelId(setInterstitialResult2[14]).intl;
                obj4.title = intl2.string(channelId(setInterstitialResult2[14]).t.ai6Lbr);
                const intl3 = channelId(setInterstitialResult2[14]).intl;
                obj4.body = intl3.string(channelId(setInterstitialResult2[14]).t["LTr+x9"]);
                const tmp63 = closure_9(channelId(setInterstitialResult2[38]).EmptyState, obj4);
                setInterstitial(setInterstitialResult2[35]).setInterstitial("EmptyState");
                const setInterstitialResult3 = setInterstitial(setInterstitialResult2[35]);
              } else {
                class A {
                  constructor() {
                    tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                    return tmp;
                  }
                }
              }
            }
            items6[2] = tmp61Result;
            obj3.children = items6;
            obj3 = tmp59(setInterstitialResult, obj3);
            cResult[35] = HACK_fixModalInteraction;
            cResult[36] = tmp4;
            cResult[37] = channel;
            cResult[38] = channelId;
            cResult[39] = channelIsLoading;
            cResult[40] = chatInputRef;
            cResult[41] = tmp5;
            cResult[42] = guildId;
            cResult[43] = tmp33;
            cResult[44] = tmp25;
            cResult[45] = isChannelContentGated;
            cResult[46] = screenIndex;
            cResult[47] = secondaryTextFieldRef;
            cResult[48] = setNoExtractUI;
            cResult[49] = shouldRenderBegginingRow;
            cResult[50] = shouldRenderPlaceholder;
            cResult[51] = empty;
            cResult[52] = tmp22;
            ({ chat: tmp3[53], empty } = messages);
            cResult[54] = empty;
            messages = messages.messages;
            cResult[55] = messages;
            cResult[56] = tmp24;
            cResult[57] = obj3;
            tmpResult8 = channelId(setInterstitialResult2[36]);
          }
          let obj5 = { channelId, guildId };
          const tmp56 = closure_9(setInterstitial(setInterstitialResult2[43]), obj5);
          cResult[58] = channelId;
          cResult[59] = guildId;
          cResult[60] = tmp56;
          tmp54 = tmp56;
          const tmpResult7 = channelId(setInterstitialResult2[13]);
        }
        const fn2 = function q() {
          messages = MessageStore.getMessages(channelId);
          let tmp = 0 === messages.length;
          if (tmp) {
            tmp = messages.loadingMore || !messages.ready;
            const tmp2 = messages.loadingMore || !messages.ready;
          }
          const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: null };
          const hasMoreBefore = messages.hasMoreBefore;
          let tmp3 = !hasMoreBefore;
          if (!hasMoreBefore) {
            tmp3 = !closure_13;
          }
          obj.shouldRenderBegginingRow = tmp3;
          return obj;
        };
        const items7 = [channelId, tmp25];
        cResult[16] = channelId;
        cResult[17] = tmp25;
        cResult[18] = fn2;
        cResult[19] = items7;
        ref = obj2.useRef(null);
        tmp27 = fn2;
        tmp28 = items7;
        visibleMessagesWindowHandler = tmp24;
      }
      let obj6 = { channel: tmp14, channelIsLoading: null == stateFromStores };
      cResult[11] = tmp14;
      cResult[12] = null == stateFromStores;
      cResult[13] = obj6;
      tmp20 = obj6;
    }
    let tmp16 = stateFromStores;
    if (null == stateFromStores) {
      class A {
        constructor() {
          tmp = new chatInputRef(HACK_fixModalInteraction[17])();
          return tmp;
        }
      }
      let obj7 = { id: channelId, type: channel.GUILD_TEXT, name: null };
      const intl = channelId(setInterstitialResult2[14]).intl;
      obj7.name = intl.string(channelId(setInterstitialResult2[14]).t.ZTNur7);
      tmp16 = setNoExtractUI(obj7);
    }
    cResult[8] = channelId;
    cResult[9] = stateFromStores;
    cResult[10] = tmp16;
    const tmpResult = channelId(setInterstitialResult2[13]);
  }
  const items8 = [channelId, undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard];
  cResult[2] = undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard;
  cResult[3] = channelId;
  cResult[4] = items8;
  tmp7 = items8;
  let obj = channelId(HACK_fixModalInteraction[11]);
}) : (function ChatView(alwaysRespectKeyboard) {
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
  let stateFromStores = flag(chatInputRef[13]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
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
  let obj2 = flag(chatInputRef[13]);
  const isChannelContentGated = flag(chatInputRef[15]).useIsChannelContentGated(channel);
  let obj3 = flag(chatInputRef[15]);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const getSpoilerGatingChannelId = flag(chatInputRef[16]).useGetSpoilerGatingChannelId(stateFromStores);
  closure_10 = noop.useRef(channelId);
  noop.useRef(null);
  ref = noop.useRef(null);
  channelId(chatInputRef[18])(() => new channelId(chatInputRef[17])());
  const tmp10 = channelId(chatInputRef[19])(channelId);
  isResourceChannel = tmp10;
  let obj4 = flag(chatInputRef[16]);
  const items3 = [setInterstitial];
  const items4 = [channelId, tmp10];
  const stateFromStoresObject = flag(chatInputRef[13]).useStateFromStoresObject(items3, () => {
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
  onScroll = noop.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      current.onChatViewScrolled(arg0);
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
  const layoutEffect = noop.useLayoutEffect(() => flag(chatInputRef[20]).trackAppUIViewed(), []);
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
    const result = flag(chatInputRef[23]).clearOldestUnreadMessageId(ref.current);
  }, []);
  let obj5 = { profile: null, children: null };
  const tmp16 = closure_10;
  const tmp2Result = flag(chatInputRef[13]);
  obj5.profile = flag(chatInputRef[45]).Profiles.ChatView;
  const items10 = [channel(channelId(chatInputRef[43]), { channelId, guildId }), , ];
  let tmp18Result = null;
  if (!flag2) {
    tmp18Result = tmp18(tmp9(tmp3[44]), { absolute: true });
  }
  items10[1] = tmp18Result;
  const tmp17 = channelId(chatInputRef[45]);
  if (tmp2Result2.shouldNSFWGateGuild(guildId)) {
    let tmp18Result3 = tmp18(tmp9(tmp3[37]), {});
    tmp9(tmp3[35]).setInterstitial("NsfwGateChat");
    const tmp9Result = tmp9(tmp3[35]);
  } else {
    function renderMessagesWrapper() {
      const obj = { style: setInterstitial.messages, channelId, stickyHeader: options(ChatViewStickyHeaderDefault, { channel, ref, scrollToNewMessages }), children: null };
      const obj3 = { alwaysRespectKeyboard: flag, channel, screenIndex, chatInputRef, HACK_fixModalInteraction, isResourceChannel, onPressKey, onScroll, ref, style: setInterstitial.chat, visibleMessagesWindowHandler, children: null };
      const obj2 = { channel, ref, scrollToNewMessages };
      const tmp5 = ChatViewWrapperDefault;
      const items = [options(ChatInputDefault, { ref: chatInputRef, channel, isResourceChannel, screenIndex, secondaryTextFieldRef, setNoExtractUI, onJumpToPresent }), ];
      const obj5 = { channelId, guildId: null, shouldRender: null };
      const obj4 = { ref: chatInputRef, channel, isResourceChannel, screenIndex, secondaryTextFieldRef, setNoExtractUI, onJumpToPresent };
      const tmp9 = MessagesDefault;
      obj5.guildId = channel.getGuildId();
      obj5.shouldRender = shouldRender;
      items[1] = options(ChatBeginningRowDefault, obj5);
      obj3.children = items;
      const items1 = [collapsed(tmp9, obj3), , , ];
      let tmp7Result = null;
      if (!obj6.isAndroid()) {
        const obj7 = { channelId: channel.id, messagesRef: ref };
        tmp7Result = options(PortalKeyboardInlineComponentDefault, obj7);
      }
      items1[1] = tmp7Result;
      let tmp7Result3 = null;
      if (c15) {
        const obj8 = { screenIndex };
        tmp7Result3 = options(ChatPlaceholderDefault, obj8);
      }
      items1[2] = tmp7Result3;
      obj6 = PlatformUtils;
      let tmp7Result4 = null;
      if (tmp14Result.isAndroid()) {
        const obj9 = { channelId, screenIndex, onJumpToPresent };
        tmp7Result4 = options(JumpToPresentButtonDefault, obj9);
      }
      const obj10 = { children: null };
      items1[3] = tmp7Result4;
      obj.children = items1;
      const items2 = [collapsed(tmp5, obj), options(ChannelSafeAreaBottomDefault, { channelId }), options(VoiceMessageOverlayDefault, { channelId })];
      obj10.children = items2;
      return collapsed(closure_2_11, obj10);
    }
    if (channelIsLoading) {
      if (!GatewayConnectionStore.isConnected()) {
        tmp18Result3 = renderMessagesWrapper();
      }
    }
    if (channelIsLoading) {
      let obj6 = { style: setInterstitial.empty, title: null, body: null };
      let intl = tmp2(tmp3[14]).intl;
      obj6.title = intl.string(tmp2(tmp3[14]).t.ai6Lbr);
      const intl2 = tmp2(tmp3[14]).intl;
      obj6.body = intl2.string(tmp2(tmp3[14]).t["LTr+x9"]);
      let tmp18Result4 = tmp18(tmp2(tmp3[38]).EmptyState, obj6);
      setInterstitial = tmp9(tmp3[35]).setInterstitial;
      setInterstitial("EmptyState");
      const tmp9Result6 = tmp9(tmp3[35]);
    } else if (isChannelContentGated) {
      let obj7 = { guildId, channelId };
      tmp18Result4 = tmp18(tmp9(tmp3[39]), obj7);
      tmp9(tmp3[35]).setInterstitial("GuildNSFW");
      const tmp9Result7 = tmp9(tmp3[35]);
    } else {
      if (null != getSpoilerGatingChannelId) {
        if (null != getSpoilerGatingChannelId) {
          let obj8 = { guildId, channelId: getSpoilerGatingChannelId };
          tmp18Result4 = tmp18(tmp9(tmp3[40]), obj8, channelId);
          tmp9(tmp3[35]).setInterstitial("ChannelSpoiler");
          const tmp9Result8 = tmp9(tmp3[35]);
        }
      }
      if (channel.isDirectory()) {
        let obj9 = { channel, guildId };
        tmp18Result4 = tmp18(tmp9(tmp3[41]), obj9);
        tmp9(tmp3[35]).setInterstitial("GuildDirectory");
        const tmp9Result9 = tmp9(tmp3[35]);
      } else if (channel.isForumLikeChannel()) {
        let obj10 = { channel };
        tmp18Result4 = tmp18(tmp9(tmp3[42]), obj10);
        tmp9(tmp3[35]).setInterstitial("ForumChannel");
        const tmp9Result10 = tmp9(tmp3[35]);
      } else {
        tmp18Result4 = renderMessagesWrapper();
      }
    }
  }
  items10[2] = tmp18Result3;
  obj5.children = items10;
  return tmp16(tmp17, obj5);
}));