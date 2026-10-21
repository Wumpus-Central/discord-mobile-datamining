// discord_app/modules/icymi/native/ICYMIShareModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ShareEventUtils from "../../guild_scheduled_events/utils/ShareEventUtils.tsx";
import useShareChatInputActions from "../../share/native/useShareChatInputActions.tsx";
import ShareChatInputDefault from "../../share/native/ShareChatInput.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AbortCodes = fn(1087).AbortCodes;
const UserRowModes = fn(10574).UserRowModes;
const MessageSendLocation = fn(4971).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4966);
let obj2 = {
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_12,
    gap: nativeDefault.space.PX_12,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderTopWidth: 1,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  },
};
let closure_13 = createStyles.createStyles(obj2);
fn(558);
let obj3 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventShareModal(event) {
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
    }
  : function GuildEventShareModal(event) {
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
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GravityShareFooter(arg0) {
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
      ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } =
        shareChatInputActions);
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
                            const obj6 = {
                              variant: "primary",
                              size: "md",
                              text: tmp12,
                              disabled: tmp18,
                              onPress: tmp22,
                              loading: isSending,
                            };
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
              const obj7 = {
                inputRef: textInputRef,
                text,
                onChange: tmp7,
                onSelectionChange: handleSelectionChange,
                onFocus: handleMessageFocus,
                onBlur: handleMessageBlur,
                onPressEmoji: handlePressEmoji,
                onSend: tmp11,
                disabled: isSending,
              };
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
      const fn = function b() {
        onSend(first);
      };
      cResult[1] = text;
      cResult[2] = onSend;
      cResult[3] = fn;
      tmp11 = fn;
      const tmpResult = useShareChatInputActions;
    }
  : function GravityShareFooter(arg0) {
      ({ count, isSending, onSend } = arg0);
      text = undefined;
      const tmp = closure_13();
      closure_1 = tmp;
      [text] = noop.useState("");
      const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
      const shareChatInputActions = useShareChatInputActions.useShareChatInputActions(tmp4);
      let items = [text, onSend];
      ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } =
        shareChatInputActions);
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
        const obj4 = {
          inputRef: textInputRef,
          text,
          onChange: tmp4,
          onSelectionChange: handleSelectionChange,
          onFocus: handleMessageFocus,
          onBlur: handleMessageBlur,
          onPressEmoji: handlePressEmoji,
          onSend: callback,
          disabled: isSending,
        };
        const items2 = [closure_1_11(ShareChatInputDefault, obj4)];
        const obj5 = {
          variant: "primary",
          size: "md",
          text: stringResult,
          disabled: tmp12,
          onPress: null,
          loading: null,
        };
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
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ICYMIShareModal(forwardToChannel) {
      const cResult = require("c").c(25);
      ({ title, originDestinationId, linkText } = forwardToChannel);
      _require = linkText;
      forwardToChannel = forwardToChannel.forwardToChannel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      const tmp5 = _slicedToArray(noop.useState(first), 2);
      first1 = tmp5[0];
      let obj = require("c");
      const tmp = _require;
      [tmp7, _slicedToArray] = noop.useState(false);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function b() {
          forwardToChannel(first1[21]).pop();
        };
        cResult[1] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === forwardToChannel) {
        if (cResult[3] === linkText) {
          if (cResult[4] === first1) {
            let tmp9 = cResult[5];
          }
          const tmp11 = forwardToChannel(tmp2[26])();
          const height = forwardToChannel(tmp2[27])().height;
          if (cResult[6] === tmp11.bottom) {
            if (cResult[7] === height) {
              let tmp12 = cResult[8];
            }
            if (cResult[9] !== tmp12) {
              let obj2 = { height: tmp12 };
              cResult[9] = tmp12;
              cResult[10] = obj2;
              let tmp13 = obj2;
            } else {
              tmp13 = cResult[10];
            }
            if (cResult[11] !== title) {
              let obj3 = { title, onClose: tmp8 };
              const tmp16 = closure_11(tmp10(tmp2[29]), obj3);
              cResult[11] = title;
              cResult[12] = tmp16;
              let tmp14 = tmp16;
            } else {
              tmp14 = cResult[12];
            }
            const sum = tmp11.bottom + tmp10(tmp2[10]).space.PX_8;
            const sum1 = sum + tmp10(tmp2[10]).space.PX_96;
            if (cResult[13] === originDestinationId) {
              if (cResult[14] === sum1) {
                let tmp19 = cResult[15];
              }
              if (cResult[16] === length) {
                if (cResult[17] === tmp9) {
                  if (cResult[18] === tmp7) {
                    let tmp23 = cResult[19];
                  }
                  if (cResult[20] === tmp13) {
                    if (cResult[21] === tmp14) {
                      if (cResult[22] === tmp19) {
                        if (cResult[23] === tmp23) {
                          let tmp27 = cResult[24];
                        }
                        return tmp27;
                      }
                    }
                  }
                  let obj4 = { style: tmp13, children: null };
                  const items1 = [tmp14, tmp19, tmp23];
                  obj4.children = items1;
                  const tmp30 = closure_12(View, obj4);
                  cResult[20] = tmp13;
                  cResult[21] = tmp14;
                  cResult[22] = tmp19;
                  cResult[23] = tmp23;
                  cResult[24] = tmp30;
                  tmp27 = tmp30;
                }
              }
              let obj5 = { count: length, isSending: tmp7, onSend: tmp9 };
              const tmp26 = closure_11(closure_14, obj5);
              cResult[16] = length;
              cResult[17] = tmp9;
              cResult[18] = tmp7;
              cResult[19] = tmp26;
              tmp23 = tmp26;
            }
            let obj6 = {
              rowMode: UserRowModes.TOGGLE,
              onSelectedDestinationChange: tmp5[1],
              originDestination: originDestinationId,
              insetEnd: sum1,
              disableGradient: true,
              disableStickySections: true,
            };
            const tmp22 = closure_11(tmp10(tmp2[30]), obj6);
            cResult[13] = originDestinationId;
            cResult[14] = sum1;
            cResult[15] = tmp22;
            tmp19 = tmp22;
          }
          let str = "100%";
          if (tmpResult.isAndroid()) {
            str = height + tmp11.bottom;
          }
          cResult[6] = tmp11.bottom;
          cResult[7] = height;
          cResult[8] = str;
          tmp12 = str;
          tmpResult = tmp(tmp2[28]);
        }
      }
      _require = asyncGeneratorStep(async (arg0) => {
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
            if (0 === v1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_129_0 = closure_0;
                v1(true);
                v1 = 1;
                c4 = 1;
                let obj4 = {
                  value: Promise.all(tmp2.map(closure_0(first1[22]).getOrResolveChannelIdFromDestinationId)),
                  done: false,
                };
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
              const found = mapped.filter(closure_0(first1[23]).isNotNullish);
              const item = found.forEach(
                (() => {
                  closure_0 = c4(function* (arg0) {
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
                                let combined = "" + closure_0 + "\n\n" + closure_0;
                              }
                              const parsed = tmp3(dependencyMap[24]).parse(closure_0, combined);
                              if (null == closure_2_1) {
                                const tmp8Result = tmp3(dependencyMap[25]);
                                const obj5 = { location: constants.ICYMI };
                                c2 = 1;
                                c1 = 1;
                                const obj6 = {
                                  value: tmp8Result.sendMessage(closure_0.id, parsed, false, obj5),
                                  done: false,
                                };
                                return obj6;
                              } else {
                                tmp11(closure_0);
                              }
                              const obj2 = tmp3(dependencyMap[24]);
                            }
                            combined = closure_0;
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
                  return function () {
                    const self = this;
                    const apply = closure_0.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                })(),
              );
              forwardToChannel(first1[21]).pop();
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp7) {
            c4 = tmp;
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
      tmp9 = handleSendForwards;
      const tmp6 = _slicedToArray(noop.useState(false), 2);
    }
  : function ICYMIShareModal(arg0) {
      ({ linkText: require, forwardToChannel: importDefault } = arg0);
      _slicedToArray = undefined;
      noop = undefined;
      closure_4 = async function _handleSendForwards2(arg0) {
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
                closure_129_0 = closure_0;
                _slicedToArray(true);
                c3 = 1;
                c4 = 1;
                let obj4 = {
                  value: Promise.all(first.map(closure_0(tmp2[22]).getOrResolveChannelIdFromDestinationId)),
                  done: false,
                };
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
              const found = mapped.filter(closure_0(tmp2[23]).isNotNullish);
              const item = found.forEach(
                (() => {
                  closure_0 = c4(function* (arg0) {
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
                                let combined = "" + closure_0 + "\n\n" + closure_0;
                              }
                              const parsed = tmp3(dependencyMap[24]).parse(closure_0, combined);
                              if (null == closure_2_1) {
                                const tmp8Result = tmp3(dependencyMap[25]);
                                const obj5 = { location: constants.ICYMI };
                                c2 = 1;
                                c1 = 1;
                                const obj6 = {
                                  value: tmp8Result.sendMessage(closure_0.id, parsed, false, obj5),
                                  done: false,
                                };
                                return obj6;
                              } else {
                                tmp11(closure_0);
                              }
                              const obj2 = tmp3(dependencyMap[24]);
                            }
                            combined = closure_0;
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
                  return function (arg0) {
                    const self = this;
                    const apply = closure_0.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                })(),
              );
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
      ({ title, originDestinationId } = arg0);
      const tmp = _slicedToArray(noop.useState([]), 2);
      const first = tmp[0];
      [tmp3, c3] = noop.useState(false);
      const callback = noop.useCallback(() => {
        require("ModalActionCreators").pop();
      }, []);
      const tmp5 = require("useSafeAreaInsets")();
      noop = tmp5;
      let height = require("useWindowDimensions")().height;
      const items = [tmp5.bottom, height];
      let obj = {
        style: noop.useMemo(() => {
          height = "100%";
          if (obj.isAndroid()) {
            height = height + bottom.bottom;
          }
          return { height };
        }, items),
        children: null,
      };
      const items1 = [closure_11(require("SearchableDestinationListHeader"), { title, onClose: callback }), ,];
      let obj2 = {
        rowMode: UserRowModes.TOGGLE,
        onSelectedDestinationChange: tmp[1],
        originDestination: originDestinationId,
        insetEnd: null,
        disableGradient: true,
        disableStickySections: true,
      };
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      const sum = tmp5.bottom + require("native").space.PX_8;
      obj2.insetEnd = sum + require("native").space.PX_96;
      items1[1] = closure_11(require("SearchableDestinationList"), obj2);
      items1[2] = closure_11(closure_14, {
        count: first.length,
        isSending: tmp3,
        onSend: function handleSendForwards(arg0) {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      });
      obj.children = items1;
      return closure_12(height, obj);
    };
let closure_15 = tmp5;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default tmp5;
export const GuildEventShareModal = tmp3;
export const GameShareModal = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameShareModal(content) {
      const cResult = require("c").c(3);
      content = content.content;
      _require = content;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1128).intl;
        let stringResult = intl.string(tmp(1128).t["59CWHK"]);
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
                  const obj5 = {
                    channel: entry,
                    content: "",
                    entry,
                    whenReady: false,
                    doNotNotifyOnError: true,
                    location: constants2.ICYMI,
                  };
                  c5 = 2;
                  c6 = 1;
                  const obj6 = { value: entry(17778).sendMessageWithEmbed(obj5), done: false };
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
                const intl = entry(1128).intl;
                const string = intl.string;
                let t = entry(1128).t;
                if (closure_129_1) {
                  let stringResult = string(t.BC5vfD);
                } else {
                  stringResult = string(t.F8FvUy);
                }
                const obj8 = { text: stringResult };
                t = ToastActionCreatorsDefault.open("FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", obj8);
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
        obj2.forwardToChannel = function () {
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
    }
  : function GameShareModal(content) {
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
                const obj6 = {
                  channel: entry,
                  content: "",
                  entry,
                  whenReady: false,
                  doNotNotifyOnError: true,
                  location: constants2.ICYMI,
                };
                c5 = 2;
                c6 = 1;
                const obj7 = { value: entry(17778).sendMessageWithEmbed(obj6), done: false };
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
              const intl = entry(1128).intl;
              const string = intl.string;
              let t = entry(1128).t;
              if (closure_129_0) {
                let stringResult = string(t.BC5vfD);
              } else {
                stringResult = string(t.F8FvUy);
              }
              const obj8 = { text: stringResult };
              t = ToastActionCreatorsDefault.open("FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", obj8);
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
      obj.forwardToChannel = function () {
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
    };
