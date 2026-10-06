// discord_app/modules/icymi/native/ICYMIShareModal.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import MessageConstants from "../../messages/MessageConstants.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import ShareEventUtils from "../../guild_scheduled_events/utils/ShareEventUtils.tsx";
import UserRowConstants from "../../main_tabs_v2/native/shared_components/user_list/UserRowConstants.tsx";
import SearchableDestinationListDefault from "../../share/native/SearchableDestinationList.tsx";
import useShareChatInputActions from "../../share/native/useShareChatInputActions.tsx";
import ShareChatInputDefault from "../../share/native/ShareChatInput.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c1, c2, c3, c5, c6, closure_3, content, event, title;

let closure_12;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
const View = react_native.View;
const AbortCodes = Constants.AbortCodes;
const UserRowModes = UserRowConstants.UserRowModes;
const MessageSendLocation = MessageConstants.MessageSendLocation;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerLeftContainer: obj2, headerRightContainer: obj3, footer: obj4 };
obj2 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingRight: nativeDefault.space.PX_16 };
obj4 = {
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
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (event) => {
      const obj = react2;
      const cResult = obj.c(9);
      event = event.event;
      if (cResult[0] === event.guild_id) {
        let tmp4;
        let tmp7;
        let tmp9;
        if (cResult[1] === event.id) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t["7TVSLK"]);
          cResult[3] = stringResult;
          tmp7 = stringResult;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== event.channel_id) {
          let tmp11;
          if (null != event.channel_id) {
            tmp11 = { type: "channel", id: event.channel_id };
            const obj2 = { type: "channel", id: event.channel_id };
          }
          cResult[4] = event.channel_id;
          cResult[5] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp9) {
          let tmp12;
          if (cResult[7] === tmp4) {
            tmp12 = cResult[8];
          }
          return tmp12;
        }
        const obj3 = { title: tmp7, originDestinationId: tmp9, linkText: tmp4 };
        const tmp15 = unpackModuleId(closure_15, obj3);
        cResult[6] = tmp9;
        cResult[7] = tmp4;
        cResult[8] = tmp15;
        tmp12 = tmp15;
      }
      const obj4 = { guildId: event.guild_id, guildEventId: event.id };
      const tmpResult = ShareEventUtils;
      const result = tmpResult.SHARE_EVENT_DETAILS_LINK(obj4);
      cResult[0] = event.guild_id;
      cResult[1] = event.id;
      cResult[2] = result;
      tmp4 = result;
    }
  : (event) => {
      let intl;
      let result;
      let tmp4;
      event = event.event;
      const obj3 = { title: intl.string(intl3.t["7TVSLK"]), originDestinationId: tmp4, linkText: result };
      const obj = ShareEventUtils;
      const obj2 = { guildId: event.guild_id, guildEventId: event.id };
      result = obj.SHARE_EVENT_DETAILS_LINK(obj2);
      intl = intl3.intl;
      tmp4 = undefined;
      if (null != event.channel_id) {
        tmp4 = { type: "channel", id: event.channel_id };
        const obj4 = { type: "channel", id: event.channel_id };
      }
      return unpackModuleId(closure_15, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (content) => {
      let first;
      let tmp6;
      const tmp = content;
      let obj = content(576);
      const cResult = obj.c(3);
      content = content.content;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        let stringResult = intl.string(tmp(1126).t["59CWHK"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== content) {
        let obj2 = {
          title: first,
          linkText: "",
          forwardToChannel: function () {
            return closure_0(...arguments);
          },
        };
        let closure_0 = _asyncToGenerator(async (arg0) => {
          let obj6;
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c4;
            try {
              let entry;
              let closure_1;
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_2 = tmp;
                  entry = undefined;
                  closure_1 = undefined;
                  c4 = 1;
                  const obj4 = {
                    channel: entry,
                    content: "",
                    entry,
                    whenReady: false,
                    doNotNotifyOnError: true,
                    location: constants2.ICYMI,
                  };
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: obj6.sendMessageWithEmbed(obj4), done: false };
                  obj6 = entry(dependencyMap[15]);
                  return obj5;
                }
              } else {
                if (1 === c5) {
                  let stringResult;
                  c4 = 0;
                  entry = closure_3;
                  const tmp9 =
                    null != entry.body && entry.body.code === constants.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
                  closure_1 = tmp9;
                  const open = ToastActionCreatorsDefault.open;
                  const intl = entry(dependencyMap[14]).intl;
                  const string = intl.string;
                  const t = entry(dependencyMap[14]).t;
                  if (closure_1) {
                    stringResult = string(t.BC5vfD);
                  } else {
                    stringResult = string(t.F8FvUy);
                  }
                  const obj7 = { key: "FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", content: stringResult };
                  open(obj7);
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c4 = 0;
                }
                c6 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp27) {
              closure_3 = tmp27;
              if (0 === c4) {
                c6 = 3;
                throw tmp27;
              } else {
                c5 = 1;
              }
            }
          }
        });
        const tmp10 = closure_11(closure_15, obj2);
        cResult[1] = content;
        cResult[2] = tmp10;
        tmp6 = tmp10;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : (content) => {
      let intl;
      content = content.content;
      let obj = {
        title: intl.string(content(1126).t["59CWHK"]),
        linkText: "",
        forwardToChannel: function () {
          return closure_0(...arguments);
        },
      };
      intl = content(1126).intl;
      let closure_0 = _asyncToGenerator(async (arg0) => {
        let obj3;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c4;
          try {
            let closure_1;
            let entry;
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
                let closure_2 = tmp;
                closure_1 = tmp4;
                entry = undefined;
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
                const obj6 = { value: obj3.sendMessageWithEmbed(obj5), done: false };
                obj3 = entry(dependencyMap[15]);
                return obj6;
              }
            } else {
              if (1 === c5) {
                let stringResult;
                c4 = 0;
                closure_1 = closure_3;
                const tmp9 =
                  null != closure_1.body &&
                  closure_1.body.code === constants.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
                entry = tmp9;
                const open = ToastActionCreatorsDefault.open;
                const intl = entry(dependencyMap[14]).intl;
                const string = intl.string;
                const t = entry(dependencyMap[14]).t;
                if (entry) {
                  stringResult = string(t.BC5vfD);
                } else {
                  stringResult = string(t.F8FvUy);
                }
                const obj7 = { key: "FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", content: stringResult };
                open(obj7);
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c4 = 0;
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp32) {
            closure_3 = tmp32;
            if (0 === c4) {
              c6 = 3;
              throw tmp32;
            } else {
              c5 = 1;
            }
          }
        }
      });
      return closure_11(closure_15, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let count;
      let first1;
      let handleMessageBlur;
      let handleMessageFocus;
      let handlePressEmoji;
      let handleSelectionChange;
      let isSending;
      let items;
      let onSend;
      let textInputRef;
      const obj = react2;
      const cResult = obj.c(29);
      ({ count, isSending, onSend } = arg0);
      const tmp4 = closure_13();
      const tmp5 = _slicedToArray(react.useState(""), 2);
      const first = tmp5[0];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { includeKeyboardHeight: true };
        cResult[0] = obj2;
        first1 = obj2;
      } else {
        first1 = cResult[0];
      }
      const insets = useSafeAreaInsetsKeyboardAwareDefault(first1).insets;
      const tmpResult = useShareChatInputActions;
      const shareChatInputActions = tmpResult.useShareChatInputActions(tmp7);
      ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } =
        shareChatInputActions);
      if (cResult[1] === first) {
        let tmp11;
        let tmp12;
        let tmp15;
        if (cResult[2] === onSend) {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== count) {
          let stringResult;
          if (count <= 1) {
            const intl2 = intl3.intl;
            stringResult = intl2.string(intl3.t.TXNS7S);
          } else {
            const intl = intl3.intl;
            const obj3 = { count };
            stringResult = intl.formatToPlainString(intl3.t.jWtYUm, obj3);
          }
          cResult[4] = count;
          cResult[5] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[5];
        }
        const sum = tmp4.footer.paddingVertical + insets.bottom;
        if (cResult[6] !== sum) {
          const obj4 = { paddingBottom: sum };
          cResult[6] = sum;
          cResult[7] = obj4;
          tmp15 = obj4;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] === tmp4.footer) {
          let tmp16;
          if (cResult[9] === tmp15) {
            tmp16 = cResult[10];
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
                        if (cResult[17] === first) {
                          let tmp18;
                          if (cResult[18] === textInputRef) {
                            tmp18 = cResult[19];
                          }
                          let tmp21;
                          if (!isSending) {
                            tmp21 = tmp11;
                          }
                          if (cResult[20] === isSending) {
                            if (cResult[21] === tmp12) {
                              if ((cResult[22] === 0) === count) {
                                let tmp22;
                                if (cResult[23] === tmp21) {
                                  tmp22 = cResult[24];
                                }
                                if (cResult[25] === tmp16) {
                                  if (cResult[26] === tmp22) {
                                    let tmp25;
                                    if (cResult[27] === tmp18) {
                                      tmp25 = cResult[28];
                                    }
                                    return tmp25;
                                  }
                                }
                                const obj5 = { style: tmp16, children: items };
                                items = [tmp18, tmp22];
                                const tmp28 = closure_12(View, obj5);
                                cResult[25] = tmp16;
                                cResult[26] = tmp22;
                                cResult[27] = tmp18;
                                cResult[28] = tmp28;
                                tmp25 = tmp28;
                              }
                            }
                          }
                          const obj6 = {
                            variant: "primary",
                            size: "md",
                            text: tmp12,
                            disabled: 0 === count,
                            onPress: tmp21,
                            loading: isSending,
                          };
                          const tmp24 = unpackModuleId(components_Button_Button.Button, obj6);
                          cResult[20] = isSending;
                          cResult[21] = tmp12;
                          cResult[22] = 0 === count;
                          cResult[23] = tmp21;
                          cResult[24] = tmp24;
                          tmp22 = tmp24;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj7 = {
              inputRef: textInputRef,
              text: first,
              onChange: tmp5[1],
              onSelectionChange: handleSelectionChange,
              onFocus: handleMessageFocus,
              onBlur: handleMessageBlur,
              onPressEmoji: handlePressEmoji,
              onSend: tmp11,
              disabled: isSending,
            };
            const tmp20 = unpackModuleId(ShareChatInputDefault, obj7);
            cResult[11] = handleMessageBlur;
            cResult[12] = handleMessageFocus;
            cResult[13] = handlePressEmoji;
            cResult[14] = handleSelectionChange;
            cResult[15] = tmp11;
            cResult[16] = isSending;
            cResult[17] = first;
            cResult[18] = textInputRef;
            cResult[19] = tmp20;
            tmp18 = tmp20;
          }
        }
        const items1 = [tmp4.footer, tmp15];
        cResult[8] = tmp4.footer;
        cResult[9] = tmp15;
        cResult[10] = items1;
        tmp16 = items1;
      }
      class I {
        constructor() {
          tmp = onSend(closure_1);
          return;
        }
      }
      cResult[1] = first;
      cResult[2] = onSend;
      cResult[3] = I;
      tmp11 = I;
    }
  : (arg0) => {
      let count;
      let handleMessageBlur;
      let handleMessageFocus;
      let handlePressEmoji;
      let handleSelectionChange;
      let isSending;
      let items2;
      let onSend;
      let stringResult;
      let textInputRef;
      let tmp17;
      ({ count, isSending, onSend } = arg0);
      const tmp = closure_13();
      let closure_1 = tmp;
      const tmp2 = _slicedToArray(react.useState(""), 2);
      const first = tmp2[0];
      const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
      const obj = useShareChatInputActions;
      const shareChatInputActions = obj.useShareChatInputActions(tmp4);
      const items = [first, onSend];
      ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } =
        shareChatInputActions);
      const callback = react.useCallback(() => {
        onSend(first);
      }, items);
      if (count <= 1) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t.TXNS7S);
      } else {
        const intl = intl3.intl;
        const obj2 = { count };
        stringResult = intl.formatToPlainString(intl3.t.jWtYUm, obj2);
      }
      const items1 = [tmp.footer, insets.bottom];
      let tmp14Result = null;
      if (0 !== count) {
        const obj3 = { style: tmp11, children: items2 };
        const obj4 = {
          inputRef: textInputRef,
          text: first,
          onChange: tmp2[1],
          onSelectionChange: handleSelectionChange,
          onFocus: handleMessageFocus,
          onBlur: handleMessageBlur,
          onPressEmoji: handlePressEmoji,
          onSend: callback,
          disabled: isSending,
        };
        items2 = [unpackModuleId(ShareChatInputDefault, obj4)];
        const obj5 = {
          variant: "primary",
          size: "md",
          text: stringResult,
          disabled: 0 === count,
          onPress: tmp17,
          loading: isSending,
        };
        tmp17 = undefined;
        const Button = components_Button_Button.Button;
        if (!isSending) {
          tmp17 = callback;
        }
        items2[1] = unpackModuleId(Button, obj5);
        tmp14Result = closure_12(View, obj3);
      }
      return tmp14Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (title) => {
      let first;
      let first1;
      let forwardToChannel;
      let linkText;
      let originDestinationId;
      let obj = title(forwardToChannel[12]);
      const cResult = obj.c(34);
      title = title.title;
      ({ originDestinationId, linkText } = title);
      forwardToChannel = title.forwardToChannel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      const tmp3 = first1(react.useState(first), 2);
      first1 = tmp3[0];
      [r10035, _asyncToGenerator] = first1(react.useState(false), 2);
      const tmp5 = first1(react.useState(false), 2);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            const arr = linkText(forwardToChannel[21]);
            arr.pop();
          }
        }
        let num2 = 1;
        cResult[1] = R;
      } else {
        class R {
          constructor() {
            const arr = linkText(forwardToChannel[21]);
            arr.pop();
          }
        }
      }
      if (cResult[2] === forwardToChannel) {
        class R {
          constructor() {
            const arr = linkText(forwardToChannel[21]);
            arr.pop();
          }
        }
      }
      let closure_0 = _asyncToGenerator(async (arg0) => {
        let closure_1;
        let v3;
        closure_0 = arg0;
        if (v3 === 2) {
          v3 = 3;
          const str = "Generator functions may not be called on executing generators";
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
                let closure_2 = tmp;
                const flag = true;
                v3(true);
                const tmp21 = globalThis;
                c3 = 1;
                v3 = 1;
                let obj4 = {
                  value: Promise.all(c3.map(closure_0(forwardToChannel[22]).getOrResolveChannelIdFromDestinationId)),
                  done: false,
                };
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
              const tmp10 = tmp2;
              const mapped = value.map((item) => channel.getChannel(item));
              const found = mapped.filter(closure_0(forwardToChannel[23]).isNotNullish);
              const item = found.forEach(
                (() => {
                  closure_0 = c4(function* (arg0) {
                    closure_0 = arg0;
                    if (c1 === 2) {
                      c1 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp2 === 3) {
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
                              let combined;
                              if (closure_0.trim().length > 0) {
                                const _HermesInternal = HermesInternal;
                                combined = "" + closure_0 + "\n\n" + closure_2_1;
                              }
                              const obj2 = tmp2(closure_3_2[24]);
                              const parsed = obj2.parse(closure_0, combined);
                              if (null == closure_2_2) {
                                const tmp7Result = tmp2(closure_3_2[25]);
                                const obj5 = { location: constants.ICYMI };
                                c2 = 1;
                                c1 = 1;
                                const obj6 = {
                                  value: tmp7Result.sendMessage(closure_0.id, parsed, false, obj5),
                                  done: false,
                                };
                                return obj6;
                              } else {
                                tmp10(closure_0);
                              }
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
                      } catch (tmp16) {
                        c1 = 3;
                        throw tmp16;
                      }
                    }
                  });
                  return function () {
                    return closure_0(...arguments);
                  };
                })(),
              );
              const arr3 = linkText(forwardToChannel[21]);
              arr3.pop();
              v3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp6) {
            v3 = 3;
            throw tmp6;
          }
        }
      });
      function handleSendForwards() {
        return closure_0(...arguments);
      }
      cResult[2] = forwardToChannel;
      cResult[3] = linkText;
      cResult[4] = first1;
      cResult[5] = handleSendForwards;
    }
  : (title) => {
      let _undefined;
      let c4;
      let items1;
      let num;
      let sum;
      let tmp12Result;
      let tmp4;
      title = title.title;
      ({ linkText: importDefault, forwardToChannel: dependencyMap } = title);
      let first;
      c4 = undefined;
      let obj = function _handleSendForwards2() {
        obj = _asyncToGenerator(async (arg0) => {
          let closure_1;
          let closure_0 = arg0;
          if (c4 === 2) {
            c4 = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
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
              let closure_2;
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
                  closure_2 = tmp;
                  const flag = true;
                  _undefined(true);
                  const tmp21 = globalThis;
                  c3 = 1;
                  c4 = 1;
                  let obj4 = {
                    value: Promise.all(first.map(closure_0(closure_2[22]).getOrResolveChannelIdFromDestinationId)),
                    done: false,
                  };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const mapped = value.map((item) => channel.getChannel(item));
                const found = mapped.filter(closure_0(closure_2[23]).isNotNullish);
                const item = found.forEach(
                  (() => {
                    closure_0 = c4(function* (arg0) {
                      closure_0 = arg0;
                      if (c1 === 2) {
                        c1 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp2 === 3) {
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
                                let combined;
                                if (closure_0.trim().length > 0) {
                                  const _HermesInternal = HermesInternal;
                                  combined = "" + closure_0 + "\n\n" + closure_2_1;
                                }
                                const obj2 = tmp2(closure_3_2[24]);
                                const parsed = obj2.parse(closure_0, combined);
                                if (null == closure_2_2) {
                                  const tmp7Result = tmp2(closure_3_2[25]);
                                  const obj5 = { location: constants.ICYMI };
                                  c2 = 1;
                                  c1 = 1;
                                  const obj6 = {
                                    value: tmp7Result.sendMessage(closure_0.id, parsed, false, obj5),
                                    done: false,
                                  };
                                  return obj6;
                                } else {
                                  tmp10(closure_0);
                                }
                              }
                              combined = closure_2_1;
                            }
                          } else if (arg0 === 1) {
                            c1 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c1 = 3;
                            obj = { value, done: true };
                            return obj;
                          }
                          c1 = 3;
                          return { value: "IconComponent", done: null };
                        } catch (tmp16) {
                          c1 = 3;
                          throw tmp16;
                        }
                      }
                    });
                    return function (arg0) {
                      return closure_0(...arguments);
                    };
                  })(),
                );
                const tmp16 = closure_2;
                const arr3 = tmp2(closure_2[21]);
                arr3.pop();
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp6) {
              c4 = 3;
              throw tmp6;
            }
          }
        });
        return obj(...arguments);
      };
      const originDestinationId = title.originDestinationId;
      const tmp = first(obj.useState([]), 2);
      first = tmp[0];
      const tmp2 = tmp[1];
      const length = first.length;
      [tmp4, c4] = first(obj.useState(false), 2);
      const tmp3 = first(obj.useState(false), 2);
      const callback = obj.useCallback(() => {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }, []);
      const tmp6 = closure_13();
      const rect = useSafeAreaInsetsDefault();
      let height = useWindowDimensionsDefault().height;
      const items = [rect.bottom, height];
      obj = {
        style: obj.useMemo(() => {
          height = "100%";
          obj = PlatformUtils;
          if (obj.isAndroid()) {
            height = height + rect.bottom;
          }
          return { height };
        }, items),
        children: items1,
      };
      const tmp10 = rect;
      let obj4 = {
        title,
        headerTitle() {
          obj = { title };
          return unpackModuleId(HeaderShared.GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: num + nativeDefault.space.PX_8,
        headerLeft: tmp12Result.getHeaderCloseButton(callback),
        headerLeftContainerStyle: null,
        headerRightContainerStyle: null,
      };
      const Header = title(6026).Header;
      let obj3 = title(1369);
      num = 0;
      const tmp12 = title;
      if (!obj3.isIOS()) {
        num = rect.top;
      }
      ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } =
        tmp6);
      tmp12Result = tmp12(6017);
      items1 = [closure_11(Header, obj4), ,];
      let obj5 = {
        rowMode: UserRowModes.TOGGLE,
        onSelectedDestinationChange: tmp2,
        originDestination: originDestinationId,
        insetEnd: sum + nativeDefault.space.PX_96,
        disableGradient: true,
        disableStickySections: true,
      };
      let tmp7Result = SearchableDestinationListDefault;
      sum = rect.bottom + nativeDefault.space.PX_8;
      items1[1] = closure_11(tmp7Result, obj5);
      let obj6 = {
        count: length,
        isSending: tmp4,
        onSend: function handleSendForwards(arg0) {
          return obj(...arguments);
        },
      };
      items1[2] = closure_11(closure_14, obj6);
      return closure_12(tmp10, obj);
    };
let closure_15 = tmp6;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default tmp6;
export const GuildEventShareModal = tmp4;
export const GameShareModal = tmp5;
