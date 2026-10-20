// discord_app/modules/chat/native/ChatView.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import LazyLoadedThreadManagerDefault from "../../threads/LazyLoadedThreadManager.tsx";
import SummaryActionCreators from "../../summaries/SummaryActionCreators.tsx";
import ChatViewWrapperDefault from "ChatViewWrapper.tsx";
import ChatViewStickyHeaderDefault from "ChatViewStickyHeader.tsx";
import MessagesDefault from "../../messages/native/Messages.tsx";
import ChatInputDefault from "../../chat_input/native/ChatInput.tsx";
import JumpToPresentButtonDefault from "../../../components_native/chat/JumpToPresentButton.tsx";
import ChatBeginningRowDefault from "../../../components_native/chat/ChatBeginningRow.tsx";
import PortalKeyboardInlineComponentDefault from "../../keyboard/native/PortalKeyboardInlineComponent.ios.tsx";
import ChatPlaceholderDefault from "placeholder/ChatPlaceholder.tsx";
import ChannelSafeAreaBottomDefault from "../../main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx";
import VoiceMessageOverlayDefault from "../../voice_messages/native/components/VoiceMessageOverlay.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";

require = fn;
const createChannelRecord = fn(4804).createChannelRecord;
const ChannelTypes = fn(1087).ChannelTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4945);
let obj = {
  empty: {
    flex: 1,
    borderTopWidth: fn(17).StyleSheet.hairlineWidth,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  messages: { flex: 1, overflow: "hidden" },
  chat: null,
};
let obj3 = {
  flex: 1,
  borderTopWidth: fn(17).StyleSheet.hairlineWidth,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.chat = {
  backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT,
  justifyContent: "flex-start",
  overflow: "hidden",
  flex: 1,
};
let closure_12 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = {
  backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT,
  justifyContent: "flex-start",
  overflow: "hidden",
  flex: 1,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChatView(isActive) {
        let setInterstitialResult = chatInputRef;
        const cResult = channelId(chatInputRef[11]).c(62);
        ({ alwaysRespectKeyboard, channelId } = isActive);
        isActive = isActive.isActive;
        chatInputRef = isActive.chatInputRef;
        ({ disableGradient, guildId, HACK_fixModalInteraction } = isActive);
        const screenIndex = isActive.screenIndex;
        const secondaryTextFieldRef = isActive.secondaryTextFieldRef;
        const setNoExtractUI = isActive.setNoExtractUI;
        MessageStore = tmp4;
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
            const fn2 = function p() {
              return ChannelStore.getChannel(channelId);
            };
            cResult[6] = channelId;
            cResult[7] = fn2;
            let tmp12 = fn2;
          } else {
            tmp12 = cResult[7];
          }
          let stateFromStores = channelId(setInterstitialResult[13]).useStateFromStores(tmp10, tmp12);
          if (cResult[8] === channelId) {
            if (cResult[9] === stateFromStores) {
              let tmp14 = cResult[10];
            }
            if (cResult[11] === tmp14) {
              if (cResult[12] === tmp19) {
                let tmp20 = cResult[13];
              }
              ({ channelIsLoading, channel } = tmp20);
              if (stateFromStores == null) {
                stateFromStores = null;
              }
              const channelContentGate = channelId(setInterstitialResult[15]).useChannelContentGate(
                guildId,
                stateFromStores,
              );
              closure_10 = HACK_fixModalInteraction.useRef(channelId);
              HACK_fixModalInteraction.useRef(null);
              const tmpResult3 = channelId(setInterstitialResult[15]);
              const _Symbol2 = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                class U {
                  constructor() {
                    tmp = new isActive(chatInputRef[16])();
                    return tmp;
                  }
                }
                cResult[14] = U;
              } else {
                class U {
                  constructor() {
                    tmp = new isActive(chatInputRef[16])();
                    return tmp;
                  }
                }
              }
              let obj7 = isActive;
              const tmp23 = isActive(setInterstitialResult[17])(U);
              const tmp24 = isActive(setInterstitialResult[18])(channelId);
              const isResourceChannel = tmp24;
              const _Symbol3 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class U {
                  constructor() {
                    tmp = new isActive(chatInputRef[16])();
                    return tmp;
                  }
                }
                let items1 = [MessageStore];
                cResult[15] = items1;
                const tmp25 = items1;
              } else {
                class U {
                  constructor() {
                    tmp = new isActive(chatInputRef[16])();
                    return tmp;
                  }
                }
              }
              if (cResult[16] === channelId) {
                class U {
                  constructor() {
                    tmp = new isActive(chatInputRef[16])();
                    return tmp;
                  }
                }
                const stateFromStoresObject = channelId(setInterstitialResult[13]).useStateFromStoresObject(
                  tmp25,
                  Z,
                  tmp27,
                );
                empty = stateFromStoresObject.shouldRenderPlaceholder;
                const shouldRenderBegginingRow = stateFromStoresObject.shouldRenderBegginingRow;
                const _Symbol4 = Symbol;
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  cResult[20] = Y;
                } else {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                }
                const onScroll = Y;
                if (cResult[21] !== chatInputRef) {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  cResult[21] = chatInputRef;
                  cResult[22] = tmp31;
                } else {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                }
                const onPressKey = tmp31;
                const _Symbol5 = Symbol;
                if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  cResult[23] = tmp33;
                } else {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                }
                const scrollToNewMessages = tmp33;
                const _Symbol6 = Symbol;
                if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  cResult[24] = tmp35;
                } else {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                }
                const onJumpToPresent = tmp35;
                const _Symbol7 = Symbol;
                class Z {
                  constructor() {
                    messages = closure_7.getMessages(channelId);
                    tmp = 0 === messages.length;
                    if (tmp) {
                      tmp2 = messages.loadingMore || !messages.ready;
                      tmp = tmp2;
                    }
                    obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: null };
                    hasMoreBefore = messages.hasMoreBefore;
                    tmp3 = !hasMoreBefore;
                    if (!hasMoreBefore) {
                      tmp4 = closure_14;
                      tmp3 = !closure_14;
                    }
                    obj.shouldRenderBegginingRow = tmp3;
                    return obj;
                  }
                }
                const layoutEffect = HACK_fixModalInteraction.useLayoutEffect(tmp37, tmp38);
                if (cResult[27] !== channelId) {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  let items2 = [channelId];
                  cResult[27] = channelId;
                  cResult[28] = tmp42;
                  cResult[29] = items2;
                  let tmp41 = items2;
                } else {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  tmp41 = cResult[29];
                }
                const effect1 = HACK_fixModalInteraction.useEffect(tmp42, tmp41);
                if (cResult[30] !== channel.id) {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  const items3 = [channel.id];
                  cResult[30] = channel.id;
                  cResult[31] = tmp46;
                  cResult[32] = items3;
                  let tmp45 = items3;
                } else {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  tmp45 = cResult[32];
                }
                const effect2 = HACK_fixModalInteraction.useEffect(tmp46, tmp45);
                const _Symbol8 = Symbol;
                if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  const items4 = [];
                  cResult[33] = tmp50;
                  cResult[34] = items4;
                  let tmp49 = items4;
                } else {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  tmp49 = cResult[34];
                }
                const effect3 = HACK_fixModalInteraction.useEffect(tmp50, tmp49);
                if (cResult[35] === HACK_fixModalInteraction) {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                }
                if (cResult[57] === channelId) {
                  class Y {
                    constructor(arg0) {
                      current = closure_12.current;
                      if (current != null) {
                        tmp = isActive;
                        onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                      }
                      return;
                    }
                  }
                  if (cResult[60] !== tmp5) {
                    class Y {
                      constructor(arg0) {
                        current = closure_12.current;
                        if (current != null) {
                          tmp = isActive;
                          onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                        }
                        return;
                      }
                    }
                    if (!tmp5) {
                      class Y {
                        constructor(arg0) {
                          current = closure_12.current;
                          if (current != null) {
                            tmp = isActive;
                            onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                          }
                          return;
                        }
                      }
                      const tmp56 = channel(obj7(setInterstitialResult[39]), { absolute: true });
                    }
                    cResult[60] = tmp5;
                    cResult[61] = tmp56;
                    const tmp55 = tmp56;
                  } else {
                    class Y {
                      constructor(arg0) {
                        current = closure_12.current;
                        if (current != null) {
                          tmp = isActive;
                          onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                        }
                        return;
                      }
                    }
                  }
                  let obj3 = { profile: channelId(setInterstitialResult[40]).Profiles.ChatView, children: null };
                  const items5 = [tmp52, tmp55];
                  if (null != channelContentGate) {
                    class Y {
                      constructor(arg0) {
                        current = closure_12.current;
                        if (current != null) {
                          tmp = isActive;
                          onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                        }
                        return;
                      }
                    }
                    let result = obj13.renderChannelContentGate(channelContentGate);
                    obj7 = obj7(setInterstitialResult[34]);
                    setInterstitialResult = obj7.setInterstitial(channelContentGate.kind);
                  } else {
                    class Y {
                      constructor(arg0) {
                        current = closure_12.current;
                        if (current != null) {
                          tmp = isActive;
                          onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                        }
                        return;
                      }
                    }
                    if (channelIsLoading) {
                      class Y {
                        constructor(arg0) {
                          current = closure_12.current;
                          if (current != null) {
                            tmp = isActive;
                            onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                          }
                          return;
                        }
                      }
                      if (!screenIndex.isConnected()) {
                        class Y {
                          constructor(arg0) {
                            current = closure_12.current;
                            if (current != null) {
                              tmp = isActive;
                              onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                            }
                            return;
                          }
                        }
                        result = tmp64();
                      }
                    }
                    if (channelIsLoading) {
                      class Y {
                        constructor(arg0) {
                          current = closure_12.current;
                          if (current != null) {
                            tmp = isActive;
                            onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                          }
                          return;
                        }
                      }
                      let obj4 = { style: messages.empty, title: null, body: null };
                      const intl2 = channelId(setInterstitialResult[14]).intl;
                      obj4.title = intl2.string(channelId(setInterstitialResult[14]).t.ai6Lbr);
                      const intl3 = channelId(setInterstitialResult[14]).intl;
                      obj4.body = intl3.string(channelId(setInterstitialResult[14]).t["LTr+x9"]);
                      const tmp60 = channel(channelId(setInterstitialResult[35]).EmptyState, obj4);
                      obj7(setInterstitialResult[34]).setInterstitial("EmptyState");
                      const obj7Result2 = obj7(setInterstitialResult[34]);
                    } else {
                      class Y {
                        constructor(arg0) {
                          current = closure_12.current;
                          if (current != null) {
                            tmp = isActive;
                            onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                          }
                          return;
                        }
                      }
                    }
                  }
                  items5[2] = result;
                  obj3.children = items5;
                  obj3 = closure_10(obj7(setInterstitialResult[40]), obj3);
                  cResult[35] = HACK_fixModalInteraction;
                  cResult[36] = tmp4;
                  cResult[37] = channel;
                  cResult[38] = channelId;
                  cResult[39] = channelIsLoading;
                  class Z {
                    constructor() {
                      messages = closure_7.getMessages(channelId);
                      tmp = 0 === messages.length;
                      if (tmp) {
                        tmp2 = messages.loadingMore || !messages.ready;
                        tmp = tmp2;
                      }
                      obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: null };
                      hasMoreBefore = messages.hasMoreBefore;
                      tmp3 = !hasMoreBefore;
                      if (!hasMoreBefore) {
                        tmp4 = closure_14;
                        tmp3 = !closure_14;
                      }
                      obj.shouldRenderBegginingRow = tmp3;
                      return obj;
                    }
                  }
                  cResult[40] = chatInputRef;
                  cResult[41] = channelContentGate;
                  cResult[42] = tmp5;
                  cResult[43] = guildId;
                  cResult[44] = tmp31;
                  cResult[45] = isActive;
                  cResult[46] = tmp24;
                  cResult[47] = screenIndex;
                  cResult[48] = secondaryTextFieldRef;
                  cResult[49] = setNoExtractUI;
                  cResult[50] = shouldRenderBegginingRow;
                  cResult[51] = empty;
                  ({ chat: tmp3[52], empty } = messages);
                  cResult[53] = empty;
                  messages = messages.messages;
                  cResult[54] = messages;
                  cResult[55] = tmp23;
                  cResult[56] = obj3;
                  const obj7Result = obj7(setInterstitialResult[40]);
                }
                let obj5 = { channelId, guildId };
                const tmp54 = channel(obj7(setInterstitialResult[38]), obj5);
                cResult[57] = channelId;
                cResult[58] = guildId;
                cResult[59] = tmp54;
                tmp52 = tmp54;
                const tmpResult4 = channelId(setInterstitialResult[13]);
              }
              class Z {
                constructor() {
                  messages = closure_7.getMessages(channelId);
                  tmp = 0 === messages.length;
                  if (tmp) {
                    tmp2 = messages.loadingMore || !messages.ready;
                    tmp = tmp2;
                  }
                  obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: null };
                  hasMoreBefore = messages.hasMoreBefore;
                  tmp3 = !hasMoreBefore;
                  if (!hasMoreBefore) {
                    tmp4 = closure_14;
                    tmp3 = !closure_14;
                  }
                  obj.shouldRenderBegginingRow = tmp3;
                  return obj;
                }
              }
              const items6 = [channelId, tmp24];
              cResult[16] = channelId;
              cResult[17] = tmp24;
              cResult[18] = Z;
              cResult[19] = items6;
              ref2 = HACK_fixModalInteraction.useRef(null);
              tmp27 = items6;
            }
            let obj6 = { channel: tmp14, channelIsLoading: null == stateFromStores };
            cResult[11] = tmp14;
            cResult[12] = null == stateFromStores;
            cResult[13] = obj6;
            tmp20 = obj6;
          }
          let tmp16 = stateFromStores;
          if (null == stateFromStores) {
            class Y {
              constructor(arg0) {
                current = closure_12.current;
                if (current != null) {
                  tmp = isActive;
                  onChatViewScrolledResult = current.onChatViewScrolled(isActive);
                }
                return;
              }
            }
            let obj8 = { id: channelId, type: messages.GUILD_TEXT, name: null };
            const intl = channelId(setInterstitialResult[14]).intl;
            obj8.name = intl.string(channelId(setInterstitialResult[14]).t.ZTNur7);
            tmp16 = secondaryTextFieldRef(obj8);
          }
          cResult[8] = channelId;
          cResult[9] = stateFromStores;
          cResult[10] = tmp16;
          tmp14 = tmp16;
          const tmpResult = channelId(setInterstitialResult[13]);
        }
        const items7 = [channelId, undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard];
        cResult[2] = undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard;
        cResult[3] = channelId;
        cResult[4] = items7;
        tmp7 = items7;
        let obj = channelId(chatInputRef[11]);
      }
    : function ChatView(alwaysRespectKeyboard) {
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
        ({
          guildId,
          HACK_fixModalInteraction: GatewayConnectionStore,
          screenIndex: createChannelRecord,
          secondaryTextFieldRef: ChannelStore,
          setNoExtractUI: MessageStore,
        } = alwaysRespectKeyboard);
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
        const channelContentGate = flag(10696).useChannelContentGate(guildId, stateFromStores);
        closure_11 = chatInputRef.useRef(channelId);
        chatInputRef.useRef(null);
        ref = chatInputRef.useRef(null);
        channelId(5560)(() => new channelId(isActive[16])());
        const tmp10 = channelId(10714)(channelId);
        isResourceChannel = tmp10;
        let obj3 = flag(10696);
        const items3 = [MessageStore];
        const items4 = [channelId, tmp10];
        const stateFromStoresObject = flag(504).useStateFromStoresObject(
          items3,
          () => {
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
          },
          items4,
        );
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
        const layoutEffect = chatInputRef.useLayoutEffect(() => flag(isActive[19]).trackAppUIViewed(), []);
        const items8 = [channelId];
        const effect1 = chatInputRef.useEffect(() => {
          const thread = LazyLoadedThreadManagerDefault.loadThread(channelId);
          const summaries = SummaryActionCreators.fetchSummaries(channelId);
        }, items8);
        const items9 = [channel.id];
        const effect2 = chatInputRef.useEffect(() => {
          closure_11.current = channel.id;
        }, items9);
        const effect3 = chatInputRef.useEffect(
          () => () => {
            const result = flag(isActive[22]).clearOldestUnreadMessageId(ref.current);
          },
          [],
        );
        let obj4 = { profile: null, children: null };
        const tmp16 = channel;
        const tmp3Result = flag(504);
        obj4.profile = flag(12872).Profiles.ChatView;
        let setInterstitial = stateFromStores;
        const items10 = [stateFromStores(channelId(13541), { channelId, guildId }), ,];
        let setInterstitialResult = null;
        if (!flag2) {
          setInterstitialResult = setInterstitial(tmp9(10554), { absolute: true });
        }
        items10[1] = setInterstitialResult;
        if (null != channelContentGate) {
          let result = tmp3(10696).renderChannelContentGate(channelContentGate);
          const tmp3Result2 = tmp3(10696);
          tmp9(9).setInterstitial(channelContentGate.kind);
          const tmp9Result = tmp9(9);
        } else {
          function renderMessagesWrapper() {
            const obj = {
              style: closure_8.messages,
              channelId,
              stickyHeader: React6(ChatViewStickyHeaderDefault, { channel, ref, scrollToNewMessages }),
              children: null,
            };
            const obj3 = {
              alwaysRespectKeyboard: flag,
              channel,
              isActive,
              screenIndex,
              chatInputRef,
              HACK_fixModalInteraction,
              isResourceChannel,
              onPressKey,
              onScroll,
              ref,
              style: closure_8.chat,
              visibleMessagesWindowHandler,
              children: null,
            };
            const obj2 = { channel, ref, scrollToNewMessages };
            const tmp5 = ChatViewWrapperDefault;
            const items = [
              React6(ChatInputDefault, {
                ref: chatInputRef,
                channel,
                isResourceChannel,
                screenIndex,
                secondaryTextFieldRef,
                setNoExtractUI,
                onJumpToPresent,
              }),
            ];
            const obj5 = { channelId, guildId: null, shouldRender: null };
            const obj4 = {
              ref: chatInputRef,
              channel,
              isResourceChannel,
              screenIndex,
              secondaryTextFieldRef,
              setNoExtractUI,
              onJumpToPresent,
            };
            const tmp9 = MessagesDefault;
            obj5.guildId = channel.getGuildId();
            obj5.shouldRender = shouldRender;
            items[1] = React6(ChatBeginningRowDefault, obj5);
            obj3.children = items;
            const items1 = [collapsed(tmp9, obj3), , ,];
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
            const items2 = [
              collapsed(tmp5, obj),
              React6(ChannelSafeAreaBottomDefault, { channelId }),
              React6(VoiceMessageOverlayDefault, { channelId }),
            ];
            obj10.children = items2;
            return collapsed(closure_2_11, obj10);
          }
          if (channelIsLoading) {
            if (!GatewayConnectionStore.isConnected()) {
              result = renderMessagesWrapper();
            }
          }
          if (channelIsLoading) {
            let obj5 = { style: tmp.empty, title: null, body: null };
            let intl = tmp3(1128).intl;
            obj5.title = intl.string(tmp3(1128).t.ai6Lbr);
            const intl2 = tmp3(1128).intl;
            obj5.body = intl2.string(tmp3(1128).t["LTr+x9"]);
            let setInterstitialResult2 = setInterstitial(tmp3(1202).EmptyState, obj5);
            tmp = tmp9(9);
            setInterstitial = tmp.setInterstitial;
            setInterstitial("EmptyState");
          } else if (channel.isDirectory()) {
            let obj6 = { channel, guildId };
            setInterstitialResult2 = setInterstitial(tmp9(13392), obj6);
            tmp9(9).setInterstitial("GuildDirectory");
            const tmp9Result3 = tmp9(9);
          } else if (channel.isForumLikeChannel()) {
            let obj7 = { channel };
            setInterstitialResult2 = setInterstitial(tmp9(13527), obj7);
            tmp9(9).setInterstitial("ForumChannel");
            const tmp9Result4 = tmp9(9);
          } else {
            setInterstitialResult2 = renderMessagesWrapper();
          }
        }
        items10[2] = result;
        obj4.children = items10;
        return tmp16(channelId(12872), obj4);
      },
);
