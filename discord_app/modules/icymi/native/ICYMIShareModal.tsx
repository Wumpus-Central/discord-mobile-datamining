// === Module 16486: ICYMIShareModal ===

// Module 16486 (ICYMIShareModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import HeaderShared from "HeaderShared" /* 7509 */;
import ShareEventUtils from "ShareEventUtils" /* 9299 */;
import SearchableDestinationListDefault from "SearchableDestinationList" /* 10727 */;
import useShareChatInputActions from "useShareChatInputActions" /* 11332 */;
import ShareChatInputDefault from "ShareChatInput" /* 11343 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AbortCodes = fn(1085).AbortCodes;
const UserRowModes = fn(10605).UserRowModes;
const MessageSendLocation = fn(4889).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 }, headerRightContainer: null, footer: null };
let obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.footer = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_13 = createStyles.createStyles(obj2);
fn(558);
let obj5 = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  const cResult = c.c(9);
  event = event.event;
  if (cResult[0] === event.guild_id) {
    if (cResult[1] === event.id) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["7TVSLK"]);
      cResult[3] = stringResult;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== event.channel_id) {
      let tmp11;
      if (null != event.channel_id) {
        const obj2 = { type: "channel", id: event.channel_id };
        tmp11 = obj2;
      }
      cResult[4] = event.channel_id;
      cResult[5] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp9) {
      if (cResult[7] === tmp4) {
        let tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj3 = { title: tmp7, originDestinationId: tmp9, linkText: tmp4 };
    const tmp15 = closure_1_11(closure_15, obj3);
    cResult[6] = tmp9;
    cResult[7] = tmp4;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const result = ShareEventUtils.SHARE_EVENT_DETAILS_LINK({ guildId: event.guild_id, guildEventId: event.id });
  cResult[0] = event.guild_id;
  cResult[1] = event.id;
  cResult[2] = result;
  tmp4 = result;
  const obj4 = { guildId: event.guild_id, guildEventId: event.id };
  const tmpResult = ShareEventUtils;
}) : ((event) => {
  event = event.event;
  const obj3 = { title: null, originDestinationId: null, linkText: null };
  const result = ShareEventUtils.SHARE_EVENT_DETAILS_LINK({ guildId: event.guild_id, guildEventId: event.id });
  const intl = util.intl;
  obj3.title = intl.string(util.t["7TVSLK"]);
  let tmp4;
  if (null != event.channel_id) {
    const obj4 = { type: "channel", id: event.channel_id };
    tmp4 = obj4;
  }
  obj3.originDestinationId = tmp4;
  obj3.linkText = result;
  return closure_1_11(closure_15, obj3);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(29);
  ({ count, isSending, onSend } = arg0);
  const tmp4 = closure_13();
  [text] = noop.useState("");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first1 = obj2;
  } else {
    first1 = cResult[0];
  }
  const shareChatInputActions = useShareChatInputActions.useShareChatInputActions(tmp7);
  ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  if (cResult[1] === text) {
    if (cResult[2] === onSend) {
      let tmp11 = cResult[3];
    }
    if (cResult[4] !== count) {
      if (count <= 1) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.TXNS7S);
      } else {
        const intl = util.intl;
        const obj3 = { count };
        stringResult = intl.formatToPlainString(util.t.jWtYUm, obj3);
      }
      cResult[4] = count;
      cResult[5] = stringResult;
    } else {
      const sum = tmp4.footer.paddingVertical + useSafeAreaInsetsKeyboardAwareDefault(first1).insets.bottom;
      if (cResult[6] !== sum) {
        const obj4 = { paddingBottom: sum };
        cResult[6] = sum;
        cResult[7] = obj4;
        let tmp16 = obj4;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === tmp4.footer) {
        if (cResult[9] === tmp16) {
          let tmp17 = cResult[10];
        }
        if (0 === count) {
          return null;
        } else {
          if (cResult[11] === handleMessageBlur) {
            if (cResult[12] === handleMessageFocus) {
              if (cResult[13] === handlePressEmoji) {
                if (cResult[14] === handleSelectionChange) {
                  if (cResult[15] === tmp11) {
                    if (cResult[16] === isSending) {
                      if (cResult[17] === text) {
                        if (cResult[18] === textInputRef) {
                          let tmp19 = cResult[19];
                        }
                        let tmp22;
                        if (!isSending) {
                          tmp22 = tmp11;
                        }
                        if (cResult[20] === isSending) {
                          if (cResult[21] === tmp12) {
                            if (cResult[22] === tmp18) {
                              if (cResult[23] === tmp22) {
                                let tmp23 = cResult[24];
                              }
                              if (cResult[25] === tmp17) {
                                if (cResult[26] === tmp23) {
                                  if (cResult[27] === tmp19) {
                                    let tmp26 = cResult[28];
                                  }
                                  return tmp26;
                                }
                              }
                              const obj5 = { style: tmp17, children: null };
                              const items = [tmp19, tmp23];
                              obj5.children = items;
                              const tmp29 = __initData(View, obj5);
                              cResult[25] = tmp17;
                              cResult[26] = tmp23;
                              cResult[27] = tmp19;
                              cResult[28] = tmp29;
                              tmp26 = tmp29;
                            }
                          }
                        }
                        const obj6 = { variant: "primary", size: "md", text: tmp12, disabled: tmp18, onPress: tmp22, loading: isSending };
                        const tmp25 = closure_1_11(components_Button_Button.Button, obj6);
                        cResult[20] = isSending;
                        cResult[21] = tmp12;
                        cResult[22] = tmp18;
                        cResult[23] = tmp22;
                        cResult[24] = tmp25;
                        tmp23 = tmp25;
                      }
                    }
                  }
                }
              }
            }
          }
          const obj7 = { inputRef: textInputRef, text, onChange: tmp7, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: tmp11, disabled: isSending };
          const tmp21 = closure_1_11(ShareChatInputDefault, obj7);
          cResult[11] = handleMessageBlur;
          cResult[12] = handleMessageFocus;
          cResult[13] = handlePressEmoji;
          cResult[14] = handleSelectionChange;
          cResult[15] = tmp11;
          cResult[16] = isSending;
          cResult[17] = text;
          cResult[18] = textInputRef;
          cResult[19] = tmp21;
          tmp19 = tmp21;
        }
      }
      const items1 = [tmp4.footer, tmp16];
      cResult[8] = tmp4.footer;
      cResult[9] = tmp16;
      cResult[10] = items1;
      tmp17 = items1;
    }
  }
  class I {
    constructor() {
      tmp = onSend(closure_1);
      return;
    }
  }
  cResult[1] = text;
  cResult[2] = onSend;
  cResult[3] = I;
  tmp11 = I;
  const tmpResult = useShareChatInputActions;
}) : ((arg0) => {
  ({ count, isSending, onSend } = arg0);
  text = undefined;
  const tmp = closure_13();
  closure_1 = tmp;
  [text] = noop.useState("");
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const shareChatInputActions = useShareChatInputActions.useShareChatInputActions(tmp4);
  let items = [text, onSend];
  ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback = noop.useCallback(() => {
    onSend(first);
  }, items);
  if (count <= 1) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.TXNS7S);
  } else {
    const intl = util.intl;
    const obj2 = { count };
    stringResult = intl.formatToPlainString(util.t.jWtYUm, obj2);
  }
  const items1 = [tmp.footer, insets.bottom];
  let tmp14Result = null;
  if (0 !== count) {
    const obj3 = { style: tmp11, children: null };
    const obj4 = { inputRef: textInputRef, text, onChange: tmp4, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback, disabled: isSending };
    const items2 = [closure_1_11(ShareChatInputDefault, obj4), ];
    const obj5 = { variant: "primary", size: "md", text: stringResult, disabled: tmp12, onPress: null, loading: null };
    let tmp17;
    if (!isSending) {
      tmp17 = callback;
    }
    obj5.onPress = tmp17;
    obj5.loading = isSending;
    items2[1] = closure_1_11(components_Button_Button.Button, obj5);
    obj3.children = items2;
    tmp14Result = __initData(View, obj3);
  }
  return tmp14Result;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  const cResult = require("c").c(34);
  _require = title.title;
  ({ originDestinationId, linkText } = title);
  forwardToChannel = title.forwardToChannel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let obj = require("c");
  first1 = first1(noop.useState(first), 2)[0];
  let tmp3 = first1(noop.useState(first), 2);
  [r10035, asyncGeneratorStep] = first1(noop.useState(false), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        arr = linkText(forwardToChannel[21]);
        arr1 = arr.pop();
        return;
      }
    }
    cResult[1] = R;
  } else {
    class R {
      constructor() {
        arr = linkText(forwardToChannel[21]);
        arr1 = arr.pop();
        return;
      }
    }
  }
  if (cResult[2] === forwardToChannel) {
    class R {
      constructor() {
        arr = linkText(forwardToChannel[21]);
        arr1 = arr.pop();
        return;
      }
    }
  }
  _require = asyncGeneratorStep(async (arg0) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            dependencyMap = tmp2;
            closure_129_0 = title;
            v3(true);
            c3 = 1;
            v3 = 1;
            let obj4 = { value: Promise.all(c3.map(title(forwardToChannel[22]).getOrResolveChannelIdFromDestinationId)), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          const mapped = value.map((item) => channel.getChannel(item));
          const found = mapped.filter(title(forwardToChannel[23]).isNotNullish);
          const item = found.forEach((() => {
            closure_0 = c4(function*(arg0) {
              if (c1 === 2) {
                c1 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c1 = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      if (null != closure_0) {
                        if (closure_0.trim().length > 0) {
                          const _HermesInternal = HermesInternal;
                          let combined = "" + closure_0 + "\n\n" + closure_2_1;
                        }
                        const parsed = tmp3(dependencyMap[24]).parse(closure_0, combined);
                        if (null == closure_2_2) {
                          const tmp8Result = tmp3(dependencyMap[25]);
                          const obj5 = { location: constants.ICYMI };
                          c2 = 1;
                          c1 = 1;
                          const obj6 = { value: tmp8Result.sendMessage(closure_0.id, parsed, false, obj5), done: false };
                          return obj6;
                        } else {
                          tmp11(closure_0);
                        }
                        const obj2 = tmp3(dependencyMap[24]);
                      }
                      combined = closure_2_1;
                    }
                  } else if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  c1 = 3;
                  return { value: "IconComponent", done: null };
                } catch (tmp17) {
                  c1 = tmp;
                  throw tmp17;
                }
              }
            });
            return function() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
          })());
          linkText(forwardToChannel[21]).pop();
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp7) {
        v3 = tmp;
        throw tmp7;
      }
    }
  });
  function handleSendForwards() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[2] = forwardToChannel;
  cResult[3] = linkText;
  cResult[4] = first1;
  cResult[5] = handleSendForwards;
  const tmp5 = first1(noop.useState(false), 2);
}) : ((originDestination) => {
  const title = originDestination.title;
  ({ linkText: importDefault, forwardToChannel: dependencyMap } = originDestination);
  let first;
  c4 = undefined;
  noop = async function _handleSendForwards2(arg0) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_129_0 = title;
            asyncGeneratorStep(true);
            c3 = 1;
            c4 = 1;
            let obj4 = { value: Promise.all(first.map(title(tmp2[22]).getOrResolveChannelIdFromDestinationId)), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          const mapped = value.map((item) => channel.getChannel(item));
          const found = mapped.filter(title(tmp2[23]).isNotNullish);
          const item = found.forEach((() => {
            closure_0 = c4(function*(arg0) {
              if (c1 === 2) {
                c1 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c1 = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      if (null != closure_0) {
                        if (closure_0.trim().length > 0) {
                          const _HermesInternal = HermesInternal;
                          let combined = "" + closure_0 + "\n\n" + closure_2_1;
                        }
                        const parsed = tmp3(dependencyMap[24]).parse(closure_0, combined);
                        if (null == closure_2_2) {
                          const tmp8Result = tmp3(dependencyMap[25]);
                          const obj5 = { location: constants.ICYMI };
                          c2 = 1;
                          c1 = 1;
                          const obj6 = { value: tmp8Result.sendMessage(closure_0.id, parsed, false, obj5), done: false };
                          return obj6;
                        } else {
                          tmp11(closure_0);
                        }
                        const obj2 = tmp3(dependencyMap[24]);
                      }
                      combined = closure_2_1;
                    }
                  } else if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  c1 = 3;
                  return { value: "IconComponent", done: null };
                } catch (tmp17) {
                  c1 = tmp;
                  throw tmp17;
                }
              }
            });
            return function(arg0) {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
          })());
          tmp3(tmp2[21]).pop();
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp7) {
        c4 = tmp;
        throw tmp7;
      }
    }
  };
  const tmp = first(noop.useState([]), 2);
  first = tmp[0];
  [tmp3, c4] = first(noop.useState(false), 2);
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
  }, []);
  const tmp2 = first(noop.useState(false), 2);
  const rect = useSafeAreaInsetsDefault();
  let height = useWindowDimensionsDefault().height;
  const items = [rect.bottom, height];
  let obj = {
    style: noop.useMemo(() => {
      height = "100%";
      if (obj.isAndroid()) {
        height = height + rect.bottom;
      }
      return { height };
    }, items),
    children: null
  };
  let obj4 = {
    title,
    headerTitle() {
      return closure_2_11(HeaderShared.GenericHeaderTitle, { title });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  const tmp11 = title;
  const tmp5 = closure_13();
  const tmp9 = rect;
  let num = 0;
  if (!obj3.isIOS()) {
    num = rect.top;
  }
  obj4.headerStatusBarHeight = num + nativeDefault.space.PX_8;
  obj3 = title(1369);
  obj4.headerLeft = tmp11(6017).getHeaderCloseButton(callback);
  ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp5);
  const items1 = [closure_11(title(6026).Header, obj4), , ];
  let obj5 = { rowMode: UserRowModes.TOGGLE, onSelectedDestinationChange: tmp[1], originDestination: originDestination.originDestinationId, insetEnd: null, disableGradient: true, disableStickySections: true };
  const tmp11Result = tmp11(6017);
  const sum = rect.bottom + nativeDefault.space.PX_8;
  obj5.insetEnd = sum + nativeDefault.space.PX_96;
  items1[1] = closure_11(SearchableDestinationListDefault, obj5);
  items1[2] = closure_11(closure_14, {
    count: first.length,
    isSending: tmp3,
    onSend: function handleSendForwards(arg0) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  });
  obj.children = items1;
  return closure_12(tmp9, obj);
});
let closure_15 = tmp5;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default tmp5;
export const GuildEventShareModal = tmp3;
export const GameShareModal = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  const cResult = require("c").c(3);
  content = content.content;
  _require = content;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1126).intl;
    let stringResult = intl.string(tmp(1126).t["59CWHK"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== content) {
    let obj2 = { title: first, linkText: "", forwardToChannel: null };
    _require = asyncGeneratorStep(async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              c4 = 1;
              const obj5 = { channel: entry, content: "", entry, whenReady: false, doNotNotifyOnError: true, location: constants2.ICYMI };
              c5 = 2;
              c6 = 1;
              const obj6 = { value: entry(16487).sendMessageWithEmbed(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_129_0 = closure_3;
            let tmp12 = null != closure_129_0.body;
            if (tmp12) {
              tmp12 = closure_129_0.body.code === constants.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
            }
            closure_129_1 = tmp12;
            const intl = entry(1126).intl;
            const string = intl.string;
            let t = entry(1126).t;
            if (closure_129_1) {
              let stringResult = string(t.BC5vfD);
            } else {
              stringResult = string(t.F8FvUy);
            }
            const obj8 = { key: "FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", content: stringResult };
            t = ToastActionCreatorsDefault.open(obj8);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else {
            if (arg0 !== 2) {
              c4 = 0;
              c6 = 3;
            }
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp28;
          } else {
            c5 = tmp;
          }
        }
      }
    });
    obj2.forwardToChannel = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const tmp10 = closure_11(closure_15, obj2);
    cResult[1] = content;
    cResult[2] = tmp10;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : ((content) => {
  _require = content.content;
  let obj = { title: null, linkText: "", forwardToChannel: null };
  let intl = require("util").intl;
  obj.title = intl.string(require("util").t["59CWHK"]);
  _require = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c4 = 1;
            const obj6 = { channel: entry, content: "", entry, whenReady: false, doNotNotifyOnError: true, location: constants2.ICYMI };
            c5 = 2;
            c6 = 1;
            const obj7 = { value: entry(16487).sendMessageWithEmbed(obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          let tmp12 = null != closure_129_1.body;
          if (tmp12) {
            tmp12 = closure_129_1.body.code === constants.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
          }
          closure_129_0 = tmp12;
          const intl = entry(1126).intl;
          const string = intl.string;
          let t = entry(1126).t;
          if (closure_129_0) {
            let stringResult = string(t.BC5vfD);
          } else {
            stringResult = string(t.F8FvUy);
          }
          const obj8 = { key: "FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", content: stringResult };
          t = ToastActionCreatorsDefault.open(obj8);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else {
          if (arg0 !== 2) {
            c4 = 0;
            c6 = 3;
          }
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp33) {
        closure_3 = tmp33;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp33;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  obj.forwardToChannel = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return closure_11(closure_15, obj);
});