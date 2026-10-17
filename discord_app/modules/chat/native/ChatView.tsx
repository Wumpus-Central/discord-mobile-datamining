// === Module 10671: ChatView ===

// Module 10671 (ChatView)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ChatInputUtils from "ChatInputUtils" /* 5081 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7289 */;
import SummaryActionCreators from "SummaryActionCreators" /* 9973 */;
import ChatViewWrapperDefault from "ChatViewWrapper" /* 10675 */;
import ChatViewStickyHeaderDefault from "ChatViewStickyHeader" /* 10689 */;
import MessagesDefault from "Messages" /* 10791 */;
import ChatInputDefault from "ChatInput" /* 12806 */;
import JumpToPresentButtonDefault from "JumpToPresentButton" /* 12908 */;
import ChatBeginningRowDefault from "ChatBeginningRow" /* 13148 */;
import PortalKeyboardInlineComponentDefault from "PortalKeyboardInlineComponent" /* 13321 */;
import ChatPlaceholderDefault from "ChatPlaceholder" /* 13322 */;
import ChannelSafeAreaBottomDefault from "ChannelSafeAreaBottom" /* 13326 */;
import VoiceMessageOverlayDefault from "VoiceMessageOverlay" /* 13329 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6013 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import MessageStore from "MessageStore" /* 5532 */;

require = fn;
const createChannelRecord = fn(2072).createChannelRecord;
const ChannelTypes = fn(1087).ChannelTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5191);
let obj = { empty: { flex: 1, borderTopWidth: fn(17).StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE }, messages: { flex: 1, overflow: "hidden" }, chat: null };
let obj3 = { flex: 1, borderTopWidth: fn(17).StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj.chat = { backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
let closure_12 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatView(isActive) {
  let setInterstitialResult2 = chatInputRef;
  const cResult = channelId(chatInputRef[11]).c(64);
  ({ alwaysRespectKeyboard, channelId } = isActive);
  isActive = isActive.isActive;
  chatInputRef = isActive.chatInputRef;
  ({ disableGradient, guildId, HACK_fixModalInteraction } = isActive);
  const screenIndex = isActive.screenIndex;
  const secondaryTextFieldRef = isActive.secondaryTextFieldRef;
  const setNoExtractUI = isActive.setNoExtractUI;
  alwaysRespectKeyboard = tmp4;
  let messages = ref2();
  if (cResult[0] !== (undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard)) {
    const fn = function u() {
      if (!closure_7) {
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
    const effect = HACK_fixModalInteraction.useEffect(tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [setNoExtractUI];
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
        closure_10 = HACK_fixModalInteraction.useRef(channelId);
        HACK_fixModalInteraction.useRef(null);
        const tmp22 = null != empty;
        const tmpResult6 = channelId(setInterstitialResult2[16]);
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              tmp = new isActive(chatInputRef[17])();
              return tmp;
            }
          }
          cResult[14] = U;
        } else {
          class U {
            constructor() {
              tmp = new isActive(chatInputRef[17])();
              return tmp;
            }
          }
        }
        let setInterstitial = isActive;
        const tmp24 = isActive(setInterstitialResult2[18])(U);
        const tmp25 = isActive(setInterstitialResult2[19])(channelId);
        const isResourceChannel = tmp25;
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              tmp = new isActive(chatInputRef[17])();
              return tmp;
            }
          }
          let items1 = [alwaysRespectKeyboard];
          cResult[15] = items1;
          const tmp26 = items1;
        } else {
          class U {
            constructor() {
              tmp = new isActive(chatInputRef[17])();
              return tmp;
            }
          }
        }
        if (cResult[16] === channelId) {
          class U {
            constructor() {
              tmp = new isActive(chatInputRef[17])();
              return tmp;
            }
          }
          const stateFromStoresObject = channelId(setInterstitialResult2[13]).useStateFromStoresObject(tmp26, tmp27, tmp28);
          const shouldRenderPlaceholder = stateFromStoresObject.shouldRenderPlaceholder;
          const shouldRenderBegginingRow = stateFromStoresObject.shouldRenderBegginingRow;
          const _Symbol4 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            cResult[20] = tmp31;
          } else {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
          }
          const onScroll = tmp31;
          if (cResult[21] !== chatInputRef) {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            cResult[21] = chatInputRef;
            cResult[22] = tmp33;
          } else {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
          }
          const onPressKey = tmp33;
          const _Symbol5 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            cResult[23] = tmp35;
          } else {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
          }
          const scrollToNewMessages = tmp35;
          const _Symbol6 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            cResult[24] = tmp37;
          } else {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
          }
          const onJumpToPresent = tmp37;
          const _Symbol7 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            let items2 = [];
            cResult[25] = tmp40;
            cResult[26] = items2;
            let tmp39 = items2;
          } else {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            tmp39 = cResult[26];
          }
          const layoutEffect = HACK_fixModalInteraction.useLayoutEffect(tmp40, tmp39);
          if (cResult[27] !== channelId) {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            const items3 = [channelId];
            cResult[27] = channelId;
            cResult[28] = tmp44;
            cResult[29] = items3;
            let tmp43 = items3;
          } else {
            class U {
              constructor() {
                tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            tmp43 = cResult[29];
          }
          const effect1 = HACK_fixModalInteraction.useEffect(tmp44, tmp43);
          if (cResult[30] !== channel.id) {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
                return;
              }
            }
            const items4 = [channel.id];
            cResult[30] = channel.id;
            cResult[31] = Ie;
            cResult[32] = items4;
            let tmp47 = items4;
          } else {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
                return;
              }
            }
            tmp47 = cResult[32];
          }
          const effect2 = HACK_fixModalInteraction.useEffect(Ie, tmp47);
          const _Symbol8 = Symbol;
          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
                return;
              }
            }
            const items5 = [];
            cResult[33] = tmp51;
            cResult[34] = items5;
            let tmp50 = items5;
          } else {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
                return;
              }
            }
            tmp50 = cResult[34];
          }
          const effect3 = HACK_fixModalInteraction.useEffect(tmp51, tmp50);
          if (cResult[35] === HACK_fixModalInteraction) {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
                return;
              }
            }
          }
          if (cResult[59] === channelId) {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
                return;
              }
            }
            if (cResult[62] !== tmp5) {
              class Ie {
                constructor() {
                  closure_10.current = channel.id;
                  return;
                }
              }
              if (!tmp5) {
                class Ie {
                  constructor() {
                    closure_10.current = channel.id;
                    return;
                  }
                }
                const tmp57 = channel(setInterstitial(setInterstitialResult2[44]), { absolute: true });
              }
              cResult[62] = tmp5;
              cResult[63] = tmp57;
              const tmp56 = tmp57;
            } else {
              class Ie {
                constructor() {
                  closure_10.current = channel.id;
                  return;
                }
              }
            }
            let obj3 = { profile: channelId(setInterstitialResult2[45]).Profiles.ChatView, children: null };
            const items6 = [tmp53, tmp56, ];
            const setInterstitialResult = setInterstitial(setInterstitialResult2[45]);
            const tmp58 = closure_10;
            if (tmpResult8.shouldNSFWGateGuild(guildId)) {
              class Ie {
                constructor() {
                  closure_10.current = channel.id;
                  return;
                }
              }
              let tmp60Result = channel(setInterstitial(setInterstitialResult2[37]), {});
              setInterstitial = setInterstitial(setInterstitialResult2[35]).setInterstitial;
              setInterstitialResult2 = setInterstitial("NsfwGateChat");
              const setInterstitialResult1 = setInterstitial(setInterstitialResult2[35]);
            } else {
              class Ie {
                constructor() {
                  closure_10.current = channel.id;
                  return;
                }
              }
              if (channelIsLoading) {
                class Ie {
                  constructor() {
                    closure_10.current = channel.id;
                    return;
                  }
                }
                if (!screenIndex.isConnected()) {
                  class Ie {
                    constructor() {
                      closure_10.current = channel.id;
                      return;
                    }
                  }
                  tmp60Result = tmp60();
                }
              }
              if (channelIsLoading) {
                class Ie {
                  constructor() {
                    closure_10.current = channel.id;
                    return;
                  }
                }
                let obj4 = { style: messages.empty, title: null, body: null };
                const intl2 = channelId(setInterstitialResult2[14]).intl;
                obj4.title = intl2.string(channelId(setInterstitialResult2[14]).t.ai6Lbr);
                const intl3 = channelId(setInterstitialResult2[14]).intl;
                obj4.body = intl3.string(channelId(setInterstitialResult2[14]).t["LTr+x9"]);
                const tmp62 = channel(channelId(setInterstitialResult2[38]).EmptyState, obj4);
                setInterstitial(setInterstitialResult2[35]).setInterstitial("EmptyState");
                const setInterstitialResult3 = setInterstitial(setInterstitialResult2[35]);
              } else {
                class Ie {
                  constructor() {
                    closure_10.current = channel.id;
                    return;
                  }
                }
              }
            }
            items6[2] = tmp60Result;
            obj3.children = items6;
            obj3 = tmp58(setInterstitialResult, obj3);
            cResult[35] = HACK_fixModalInteraction;
            cResult[36] = tmp4;
            cResult[37] = channel;
            cResult[38] = channelId;
            cResult[39] = channelIsLoading;
            cResult[40] = chatInputRef;
            cResult[41] = tmp5;
            cResult[42] = guildId;
            cResult[43] = tmp33;
            cResult[44] = isActive;
            cResult[45] = tmp25;
            cResult[46] = isChannelContentGated;
            cResult[47] = screenIndex;
            cResult[48] = secondaryTextFieldRef;
            cResult[49] = setNoExtractUI;
            cResult[50] = shouldRenderBegginingRow;
            cResult[51] = shouldRenderPlaceholder;
            cResult[52] = empty;
            cResult[53] = tmp22;
            ({ chat: tmp3[54], empty } = messages);
            cResult[55] = empty;
            messages = messages.messages;
            cResult[56] = messages;
            cResult[57] = tmp24;
            cResult[58] = obj3;
            tmpResult8 = channelId(setInterstitialResult2[36]);
          }
          let obj5 = { channelId, guildId };
          const tmp55 = channel(setInterstitial(setInterstitialResult2[43]), obj5);
          cResult[59] = channelId;
          cResult[60] = guildId;
          cResult[61] = tmp55;
          tmp53 = tmp55;
          const tmpResult7 = channelId(setInterstitialResult2[13]);
        }
        const fn2 = function z() {
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
            tmp3 = !closure_14;
          }
          obj.shouldRenderBegginingRow = tmp3;
          return obj;
        };
        const items7 = [channelId, tmp25];
        cResult[16] = channelId;
        cResult[17] = tmp25;
        cResult[18] = fn2;
        cResult[19] = items7;
        ref2 = HACK_fixModalInteraction.useRef(null);
        tmp27 = fn2;
        tmp28 = items7;
      }
      let obj6 = { channel: tmp14, channelIsLoading: null == stateFromStores };
      cResult[11] = tmp14;
      cResult[12] = null == stateFromStores;
      cResult[13] = obj6;
      tmp20 = obj6;
    }
    let tmp16 = stateFromStores;
    if (null == stateFromStores) {
      class Ie {
        constructor() {
          closure_10.current = channel.id;
          return;
        }
      }
      let obj7 = { id: channelId, type: messages.GUILD_TEXT, name: null };
      const intl = channelId(setInterstitialResult2[14]).intl;
      obj7.name = intl.string(channelId(setInterstitialResult2[14]).t.ZTNur7);
      tmp16 = secondaryTextFieldRef(obj7);
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
  let obj = channelId(chatInputRef[11]);
}) : (function ChatView(alwaysRespectKeyboard) {
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
  let setInterstitial = ref();
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
  const isChannelContentGated = flag(6180).useIsChannelContentGated(channel);
  let obj3 = flag(6180);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const getSpoilerGatingChannelId = flag(6200).useGetSpoilerGatingChannelId(stateFromStores);
  closure_11 = chatInputRef.useRef(channelId);
  chatInputRef.useRef(null);
  ref = chatInputRef.useRef(null);
  channelId(6447)(() => new channelId(isActive[17])());
  const tmp10 = channelId(10673)(channelId);
  isResourceChannel = tmp10;
  let obj4 = flag(6200);
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
  onScroll = chatInputRef.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      current.onChatViewScrolled(arg0);
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
  const layoutEffect = chatInputRef.useLayoutEffect(() => flag(isActive[20]).trackAppUIViewed(), []);
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
    const result = flag(isActive[23]).clearOldestUnreadMessageId(ref.current);
  }, []);
  let obj5 = { profile: null, children: null };
  const tmp16 = channel;
  const tmp2Result = flag(504);
  obj5.profile = flag(12805).Profiles.ChatView;
  const items10 = [stateFromStores(channelId(13484), { channelId, guildId }), , ];
  let tmp18Result = null;
  if (!flag2) {
    tmp18Result = tmp18(tmp9(10529), { absolute: true });
  }
  items10[1] = tmp18Result;
  const tmp17 = channelId(12805);
  if (tmp2Result2.shouldNSFWGateGuild(guildId)) {
    let tmp18Result3 = tmp18(tmp9(13332), {});
    tmp9(9).setInterstitial("NsfwGateChat");
    const tmp9Result = tmp9(9);
  } else {
    function renderMessagesWrapper() {
      const obj = { style: setInterstitial.messages, channelId, stickyHeader: React6(ChatViewStickyHeaderDefault, { channel, ref, scrollToNewMessages }), children: null };
      const obj3 = { alwaysRespectKeyboard: flag, channel, isActive, screenIndex, chatInputRef, HACK_fixModalInteraction, isResourceChannel, onPressKey, onScroll, ref, style: setInterstitial.chat, visibleMessagesWindowHandler, children: null };
      const obj2 = { channel, ref, scrollToNewMessages };
      const tmp5 = ChatViewWrapperDefault;
      const items = [React6(ChatInputDefault, { ref: chatInputRef, channel, isResourceChannel, screenIndex, secondaryTextFieldRef, setNoExtractUI, onJumpToPresent }), ];
      const obj5 = { channelId, guildId: null, shouldRender: null };
      const obj4 = { ref: chatInputRef, channel, isResourceChannel, screenIndex, secondaryTextFieldRef, setNoExtractUI, onJumpToPresent };
      const tmp9 = MessagesDefault;
      obj5.guildId = channel.getGuildId();
      obj5.shouldRender = shouldRender;
      items[1] = React6(ChatBeginningRowDefault, obj5);
      obj3.children = items;
      const items1 = [collapsed(tmp9, obj3), , , ];
      let tmp7Result = null;
      if (!obj6.isAndroid()) {
        const obj7 = { channelId: channel.id, messagesRef: ref };
        tmp7Result = React6(PortalKeyboardInlineComponentDefault, obj7);
      }
      items1[1] = tmp7Result;
      let tmp7Result3 = null;
      if (c16) {
        const obj8 = { screenIndex };
        tmp7Result3 = React6(ChatPlaceholderDefault, obj8);
      }
      items1[2] = tmp7Result3;
      obj6 = PlatformUtils;
      let tmp7Result4 = null;
      if (tmp14Result.isAndroid()) {
        const obj9 = { channelId, screenIndex, onJumpToPresent };
        tmp7Result4 = React6(JumpToPresentButtonDefault, obj9);
      }
      const obj10 = { children: null };
      items1[3] = tmp7Result4;
      obj.children = items1;
      const items2 = [collapsed(tmp5, obj), React6(ChannelSafeAreaBottomDefault, { channelId }), React6(VoiceMessageOverlayDefault, { channelId })];
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
      let intl = tmp2(1128).intl;
      obj6.title = intl.string(tmp2(1128).t.ai6Lbr);
      const intl2 = tmp2(1128).intl;
      obj6.body = intl2.string(tmp2(1128).t["LTr+x9"]);
      let tmp18Result4 = tmp18(tmp2(1202).EmptyState, obj6);
      setInterstitial = tmp9(9).setInterstitial;
      setInterstitial("EmptyState");
      const tmp9Result6 = tmp9(9);
    } else if (isChannelContentGated) {
      let obj7 = { guildId, channelId };
      tmp18Result4 = tmp18(tmp9(11560), obj7);
      tmp9(9).setInterstitial("GuildNSFW");
      const tmp9Result7 = tmp9(9);
    } else {
      if (null != getSpoilerGatingChannelId) {
        if (null != getSpoilerGatingChannelId) {
          let obj8 = { guildId, channelId: getSpoilerGatingChannelId };
          tmp18Result4 = tmp18(tmp9(13334), obj8, channelId);
          tmp9(9).setInterstitial("ChannelSpoiler");
          const tmp9Result8 = tmp9(9);
        }
      }
      if (channel.isDirectory()) {
        let obj9 = { channel, guildId };
        tmp18Result4 = tmp18(tmp9(13335), obj9);
        tmp9(9).setInterstitial("GuildDirectory");
        const tmp9Result9 = tmp9(9);
      } else if (channel.isForumLikeChannel()) {
        let obj10 = { channel };
        tmp18Result4 = tmp18(tmp9(13470), obj10);
        tmp9(9).setInterstitial("ForumChannel");
        const tmp9Result10 = tmp9(9);
      } else {
        tmp18Result4 = renderMessagesWrapper();
      }
    }
  }
  items10[2] = tmp18Result3;
  obj5.children = items10;
  return tmp16(tmp17, obj5);
}));