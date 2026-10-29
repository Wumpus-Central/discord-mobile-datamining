// discord_app/modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import TextField from "../../../../../design/components/TextField/native/TextField.native.tsx";
import FriendsUtils from "../../../../../utils/FriendsUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Keyboard: metroRequire } = get_ActivityIndicator);
const Constants = fn(1084);
({ PLACEHOLDER_TAG: closure_7, AnalyticEvents: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5005);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  textInputContainer: { alignSelf: "stretch" },
  placeholderText: null,
  inputAccessoryText: null,
  redesignInputAccessoryText: null,
  inputHeaderText: null,
  redesignGrow: null,
  errorStateText: null,
  friendMessageContainer: null,
  messageLabel: null,
  messageFooterText: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 16,
};
obj2.placeholderText = { color: nativeDefault.colors.TEXT_MUTED };
let obj4 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.inputAccessoryText = { fontSize: 12, lineHeight: 16, marginVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
let obj5 = { fontSize: 12, lineHeight: 16, marginVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
obj2.redesignInputAccessoryText = { marginBottom: nativeDefault.space.PX_8 };
obj2.inputHeaderText = { marginTop: 0 };
let obj6 = { marginBottom: nativeDefault.space.PX_8 };
obj2.redesignGrow = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
let obj7 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj2.errorStateText = { color: nativeDefault.unsafe_rawColors.RED_400, marginVertical: 4 };
let obj8 = { color: nativeDefault.unsafe_rawColors.RED_400, marginVertical: 4 };
obj2.friendMessageContainer = { alignSelf: "stretch", marginTop: nativeDefault.space.PX_16 };
let obj9 = { alignSelf: "stretch", marginTop: nativeDefault.space.PX_16 };
obj2.messageLabel = { marginBottom: nativeDefault.space.PX_4 };
let obj10 = { marginBottom: nativeDefault.space.PX_4 };
obj2.messageFooterText = { marginTop: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj2);
const constants = {
  SUCCESS: 0,
  [0]: "SUCCESS",
  ERROR: 1,
  [1]: "ERROR",
  LOADING: 2,
  [2]: "LOADING",
  NONE: 3,
  [3]: "NONE",
};
const constants2 = { DISCORD_TAG: "DISCORD_TAG", MESSAGE: "MESSAGE" };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ErrorMessage(errorMessage) {
      const cResult = c.c(6);
      errorMessage = errorMessage.errorMessage;
      const tmp4 = closure_12();
      if (cResult[0] === tmp4.errorStateText) {
        if (cResult[1] === tmp4.inputAccessoryText) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === errorMessage) {
          if (cResult[4] === tmp5) {
            let tmp6 = cResult[5];
          }
          return tmp6;
        }
        const obj2 = {
          variant: "text-xs/medium",
          color: "text-feedback-critical",
          style: tmp5,
          children: errorMessage,
        };
        const tmp8 = React6(Text_Text.Text, obj2);
        cResult[3] = errorMessage;
        cResult[4] = tmp5;
        cResult[5] = tmp8;
        tmp6 = tmp8;
      }
      const items = [,];
      ({ inputAccessoryText: arr[0], errorStateText: arr[1] } = tmp4);
      cResult[0] = tmp4.errorStateText;
      cResult[1] = tmp4.inputAccessoryText;
      cResult[2] = items;
      tmp5 = items;
    }
  : function ErrorMessage(children) {
      const obj = {
        variant: "text-xs/medium",
        color: "text-feedback-critical",
        style: null,
        children: children.errorMessage,
      };
      const items = [,];
      ({ inputAccessoryText: arr[0], errorStateText: arr[1] } = closure_12());
      obj.style = items;
      return React6(Text_Text.Text, obj);
    };
function AddFriendByIdInput(arg0) {
  ({ validationState, headerText } = arg0);
  ({ textState, onChangeText, onSelectionChange, onKeyPress, onSubmitEditing, onFocus, autoFocus } = arg0);
  if (headerText === undefined) {
    const intl = util.intl;
    headerText = intl.string(util.t.YegTF2).toUpperCase();
    const str = intl.string(util.t.YegTF2);
  }
  ({ headerTextStyle, ref } = arg0);
  const tmp3 = closure_12();
  let message;
  if (validationState.status === constants.ERROR) {
    if (validationState.field === constants2.DISCORD_TAG) {
      message = validationState.message;
    }
  }
  const obj = { style: tmp3.textInputContainer, children: null };
  const obj2 = { style: null, variant: "text-sm/semibold", color: "text-muted", children: headerText };
  const items = [, ,];
  ({ redesignInputAccessoryText: arr[0], inputHeaderText: arr[1] } = tmp3);
  items[2] = headerTextStyle;
  obj2.style = items;
  const items1 = [React6(Text_Text.Text, obj2), ,];
  const obj3 = {
    ref,
    value: textState.validatedText,
    accessibilityLabel: null,
    accessibilityHint: null,
    placeholder: null,
    placeholderTextColor: null,
    onChange: null,
    onSelectionChange: null,
    onKeyPress: null,
    onSubmitEditing: null,
    autoCapitalize: "none",
    returnKeyType: "send",
    keyboardType: "twitter",
    autoCorrect: false,
    blurOnSubmit: true,
    maxLength: 37,
    autoFocus: null,
    onFocus: null,
    status: null,
  };
  const intl2 = util.intl;
  obj3.accessibilityLabel = intl2.string(util.t.qRaqel);
  let a11yMessage;
  if (validationState.status === constants.ERROR) {
    a11yMessage = validationState.a11yMessage;
  }
  obj3.accessibilityHint = a11yMessage;
  const intl3 = util.intl;
  obj3.placeholder = intl3.string(util.t.qRaqel);
  obj3.placeholderTextColor = tmp3.placeholderText.color;
  obj3.onChange = onChangeText;
  obj3.onSelectionChange = onSelectionChange;
  obj3.onKeyPress = onKeyPress;
  obj3.onSubmitEditing = onSubmitEditing;
  obj3.autoFocus = autoFocus;
  obj3.onFocus = onFocus;
  let str2;
  if (null != message) {
    str2 = "error";
  }
  obj3.status = str2;
  items1[1] = React6(TextField.TextField, obj3);
  let tmp9Result = null;
  if (null != message) {
    const obj4 = { errorMessage: message };
    tmp9Result = React6(closure_15, obj4);
  }
  items1[2] = tmp9Result;
  obj.children = items1;
  return v65535(hasOwnProperty, obj);
}
ReactCompilerGating = fn(558);
let obj11 = { marginTop: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (ref) => {
      const cResult = sourcePage(576).c(73);
      ({ style, onFocus, autoFocusInput, headerText, headerTextStyle, sourcePage } = ref);
      const tmp4 = closure_12();
      ref = noop.useRef(0);
      dependencyMap = noop.useRef("");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          const obj = { validatedText: "", hint: null };
          const intl = sourcePage(1125).intl;
          obj.hint = intl.string(sourcePage(1125).t["6p7Mhh"]);
          return obj;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp7 = first1(noop.useState(first), 2);
      first1 = tmp7[0];
      noop = tmp7[1];
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { status: constants.NONE };
        cResult[1] = obj3;
        let tmp9 = obj3;
      } else {
        tmp9 = cResult[1];
      }
      const tmp6Result = first1(noop.useState(tmp9), 2);
      const first2 = tmp6Result[0];
      closure_6 = tmp6Result[1];
      const tmp6Result2 = first1(noop.useState(""), 2);
      const first3 = tmp6Result2[0];
      closure_8 = tmp6Result2[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        function handleOnKeyPress(nativeEvent) {
          closure_2.current = nativeEvent.nativeEvent.key;
        }
        cResult[2] = handleOnKeyPress;
        let tmp15 = handleOnKeyPress;
      } else {
        tmp15 = cResult[2];
      }
      if (cResult[3] === first2.field) {
        if (cResult[4] === first2.status) {
          let tmp16 = cResult[5];
        }
        if (cResult[6] === first2.field) {
          if (cResult[7] === first2.status) {
            let tmp17 = cResult[8];
          }
          const _Symbol = Symbol;
          class Y {
            constructor(arg0) {
              tmp = closure_8(ref.replace(/\n/g, ""));
              tmp3 = closure_5.status === closure_13.ERROR;
              tmp2 = closure_13;
              if (tmp3) {
                tmp4 = closure_14;
                tmp3 = closure_5.field === closure_14.MESSAGE;
              }
              if (tmp3) {
                tmp5 = closure_6;
                obj = { status: null };
                obj.status = tmp2.NONE;
                tmp6 = closure_6(obj);
              }
              return;
            }
          }
          if (tmp18 === Symbol.for("react.memo_cache_sentinel")) {
            function handleSelectionChange(nativeEvent) {
              const start = nativeEvent.nativeEvent.selection.start;
              if (start !== ref.current) {
                ref.current = start;
              }
            }
            class Y {
              constructor(arg0) {
                tmp = closure_8(ref.replace(/\n/g, ""));
                tmp3 = closure_5.status === closure_13.ERROR;
                tmp2 = closure_13;
                if (tmp3) {
                  tmp4 = closure_14;
                  tmp3 = closure_5.field === closure_14.MESSAGE;
                }
                if (tmp3) {
                  tmp5 = closure_6;
                  obj = { status: null };
                  obj.status = tmp2.NONE;
                  tmp6 = closure_6(obj);
                }
                return;
              }
            }
            let tmp19 = handleSelectionChange;
          } else {
            tmp19 = cResult[9];
          }
          if (cResult[10] === first3) {
            if (cResult[11] === first1.validatedText) {
              let tmp20 = cResult[12];
            }
            if (cResult[13] !== sourcePage) {
              function ee() {
                AnalyticsUtilsDefault.track(closure_2_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Id",
                  source_page: sourcePage,
                });
              }
              const items = [];
              class Y {
                constructor(arg0) {
                  tmp = closure_8(ref.replace(/\n/g, ""));
                  tmp3 = closure_5.status === closure_13.ERROR;
                  tmp2 = closure_13;
                  if (tmp3) {
                    tmp4 = closure_14;
                    tmp3 = closure_5.field === closure_14.MESSAGE;
                  }
                  if (tmp3) {
                    tmp5 = closure_6;
                    obj = { status: null };
                    obj.status = tmp2.NONE;
                    tmp6 = closure_6(obj);
                  }
                  return;
                }
              }
              cResult[13] = sourcePage;
              cResult[14] = ee;
              cResult[15] = items;
            }
            class Y {
              constructor(arg0) {
                tmp = closure_8(ref.replace(/\n/g, ""));
                tmp3 = closure_5.status === closure_13.ERROR;
                tmp2 = closure_13;
                if (tmp3) {
                  tmp4 = closure_14;
                  tmp3 = closure_5.field === closure_14.MESSAGE;
                }
                if (tmp3) {
                  tmp5 = closure_6;
                  obj = { status: null };
                  obj.status = tmp2.NONE;
                  tmp6 = closure_6(obj);
                }
                return;
              }
            }
            if (cResult[16] === first2.a11yMessage) {
              if (cResult[19] !== first2) {
                const items1 = [first2];
                class Y {
                  constructor(arg0) {
                    tmp = closure_8(ref.replace(/\n/g, ""));
                    tmp3 = closure_5.status === closure_13.ERROR;
                    tmp2 = closure_13;
                    if (tmp3) {
                      tmp4 = closure_14;
                      tmp3 = closure_5.field === closure_14.MESSAGE;
                    }
                    if (tmp3) {
                      tmp5 = closure_6;
                      obj = { status: null };
                      obj.status = tmp2.NONE;
                      tmp6 = closure_6(obj);
                    }
                    return;
                  }
                }
                cResult[19] = first2;
                cResult[20] = items1;
              }
              class Y {
                constructor(arg0) {
                  tmp = closure_8(ref.replace(/\n/g, ""));
                  tmp3 = closure_5.status === closure_13.ERROR;
                  tmp2 = closure_13;
                  if (tmp3) {
                    tmp4 = closure_14;
                    tmp3 = closure_5.field === closure_14.MESSAGE;
                  }
                  if (tmp3) {
                    tmp5 = closure_6;
                    obj = { status: null };
                    obj.status = tmp2.NONE;
                    tmp6 = closure_6(obj);
                  }
                  return;
                }
              }
              if (cResult[21] !== first1.validatedText) {
                let trimmed = first1.validatedText.trim();
                class Y {
                  constructor(arg0) {
                    tmp = closure_8(ref.replace(/\n/g, ""));
                    tmp3 = closure_5.status === closure_13.ERROR;
                    tmp2 = closure_13;
                    if (tmp3) {
                      tmp4 = closure_14;
                      tmp3 = closure_5.field === closure_14.MESSAGE;
                    }
                    if (tmp3) {
                      tmp5 = closure_6;
                      obj = { status: null };
                      obj.status = tmp2.NONE;
                      tmp6 = closure_6(obj);
                    }
                    return;
                  }
                }
                cResult[21] = first1.validatedText;
                cResult[22] = trimmed;
              }
              if (cResult[23] === style) {
                if (cResult[24] === tmp4.container) {
                  let tmp28 = cResult[25];
                }
                if (cResult[26] === autoFocusInput) {
                  if (cResult[27] === tmp16) {
                    if (cResult[28] === tmp20) {
                      if (cResult[29] === headerText) {
                        if (cResult[30] === headerTextStyle) {
                          if (cResult[31] === onFocus) {
                            if (cResult[32] === ref) {
                              if (cResult[33] === first1) {
                                if (cResult[34] === first2) {
                                  let tmp29 = cResult[35];
                                }
                                if (cResult[36] === headerTextStyle) {
                                  if (cResult[37] === tmp4.inputHeaderText) {
                                    if (cResult[38] === tmp4.messageLabel) {
                                      let tmp33 = cResult[39];
                                    }
                                    const _Symbol2 = Symbol;
                                    class Y {
                                      constructor(arg0) {
                                        tmp = closure_8(ref.replace(/\n/g, ""));
                                        tmp3 = closure_5.status === closure_13.ERROR;
                                        tmp2 = closure_13;
                                        if (tmp3) {
                                          tmp4 = closure_14;
                                          tmp3 = closure_5.field === closure_14.MESSAGE;
                                        }
                                        if (tmp3) {
                                          tmp5 = closure_6;
                                          obj = { status: null };
                                          obj.status = tmp2.NONE;
                                          tmp6 = closure_6(obj);
                                        }
                                        return;
                                      }
                                    }
                                    if (tmp35 === Symbol.for("react.memo_cache_sentinel")) {
                                      const string = sourcePage(1125).intl.string;
                                      class Y {
                                        constructor(arg0) {
                                          tmp = closure_8(ref.replace(/\n/g, ""));
                                          tmp3 = closure_5.status === closure_13.ERROR;
                                          tmp2 = closure_13;
                                          if (tmp3) {
                                            tmp4 = closure_14;
                                            tmp3 = closure_5.field === closure_14.MESSAGE;
                                          }
                                          if (tmp3) {
                                            tmp5 = closure_6;
                                            obj = { status: null };
                                            obj.status = tmp2.NONE;
                                            tmp6 = closure_6(obj);
                                          }
                                          return;
                                        }
                                      }
                                      cResult[40] = tmp37;
                                      let tmp36 = tmp37;
                                    } else {
                                      tmp36 = cResult[40];
                                    }
                                    if (cResult[41] !== tmp33) {
                                      let obj4 = {
                                        style: null,
                                        variant: "text-sm/semibold",
                                        color: "text-muted",
                                        children: null,
                                      };
                                      class Y {
                                        constructor(arg0) {
                                          tmp = closure_8(ref.replace(/\n/g, ""));
                                          tmp3 = closure_5.status === closure_13.ERROR;
                                          tmp2 = closure_13;
                                          if (tmp3) {
                                            tmp4 = closure_14;
                                            tmp3 = closure_5.field === closure_14.MESSAGE;
                                          }
                                          if (tmp3) {
                                            tmp5 = closure_6;
                                            obj = { status: null };
                                            obj.status = tmp2.NONE;
                                            tmp6 = closure_6(obj);
                                          }
                                          return;
                                        }
                                      }
                                      obj4.children = tmp36;
                                      const tmp40 = closure_9(sourcePage(5271).Text, obj4);
                                      cResult[41] = tmp33;
                                      cResult[42] = tmp40;
                                      let tmp38 = tmp40;
                                    } else {
                                      tmp38 = cResult[42];
                                    }
                                    if (first2.field === constants2.MESSAGE) {
                                      class Y {
                                        constructor(arg0) {
                                          tmp = closure_8(ref.replace(/\n/g, ""));
                                          tmp3 = closure_5.status === closure_13.ERROR;
                                          tmp2 = closure_13;
                                          if (tmp3) {
                                            tmp4 = closure_14;
                                            tmp3 = closure_5.field === closure_14.MESSAGE;
                                          }
                                          if (tmp3) {
                                            tmp5 = closure_6;
                                            obj = { status: null };
                                            obj.status = tmp2.NONE;
                                            tmp6 = closure_6(obj);
                                          }
                                          return;
                                        }
                                      }
                                    }
                                    if (cResult[43] === first3) {
                                      if (cResult[44] === tmp17) {
                                        if (cResult[45] === tmp20) {
                                          if (cResult[46] === tmp42) {
                                            let tmp44 = cResult[47];
                                          }
                                          if (cResult[48] === tmp4.messageFooterText) {
                                            if (cResult[49] === first2.field) {
                                              if (cResult[50] === first2.message) {
                                                if (cResult[51] === first2.status) {
                                                  if (cResult[53] === tmp4.friendMessageContainer) {
                                                    if (cResult[54] === tmp38) {
                                                      if (cResult[55] === tmp44) {
                                                        if (cResult[56] === tmp47) {
                                                          let tmp53 = cResult[57];
                                                        }
                                                        if (cResult[58] === tmp28) {
                                                          if (cResult[59] === tmp29) {
                                                            if (cResult[60] === tmp53) {
                                                              let tmp56 = cResult[61];
                                                            }
                                                            if (cResult[62] !== tmp4.redesignGrow) {
                                                              class Y {
                                                                constructor(arg0) {
                                                                  tmp = closure_8(ref.replace(/\n/g, ""));
                                                                  tmp3 = closure_5.status === closure_13.ERROR;
                                                                  tmp2 = closure_13;
                                                                  if (tmp3) {
                                                                    tmp4 = closure_14;
                                                                    tmp3 = closure_5.field === closure_14.MESSAGE;
                                                                  }
                                                                  if (tmp3) {
                                                                    tmp5 = closure_6;
                                                                    obj = { status: null };
                                                                    obj.status = tmp2.NONE;
                                                                    tmp6 = closure_6(obj);
                                                                  }
                                                                  return;
                                                                }
                                                              }
                                                              tmp62[0] = tmp4.redesignGrow;
                                                              const tmp63 = closure_9(first2, tmp62);
                                                              cResult[62] = tmp4.redesignGrow;
                                                              cResult[63] = tmp63;
                                                              let tmp59 = tmp63;
                                                            } else {
                                                              tmp59 = cResult[63];
                                                            }
                                                            class Y {
                                                              constructor(arg0) {
                                                                tmp = closure_8(ref.replace(/\n/g, ""));
                                                                tmp3 = closure_5.status === closure_13.ERROR;
                                                                tmp2 = closure_13;
                                                                if (tmp3) {
                                                                  tmp4 = closure_14;
                                                                  tmp3 = closure_5.field === closure_14.MESSAGE;
                                                                }
                                                                if (tmp3) {
                                                                  tmp5 = closure_6;
                                                                  obj = { status: null };
                                                                  obj.status = tmp2.NONE;
                                                                  tmp6 = closure_6(obj);
                                                                }
                                                                return;
                                                              }
                                                            }
                                                            if (
                                                              cResult[64] === Symbol.for("react.memo_cache_sentinel")
                                                            ) {
                                                              const string2 = sourcePage(1125).intl.string;
                                                              class Y {
                                                                constructor(arg0) {
                                                                  tmp = closure_8(ref.replace(/\n/g, ""));
                                                                  tmp3 = closure_5.status === closure_13.ERROR;
                                                                  tmp2 = closure_13;
                                                                  if (tmp3) {
                                                                    tmp4 = closure_14;
                                                                    tmp3 = closure_5.field === closure_14.MESSAGE;
                                                                  }
                                                                  if (tmp3) {
                                                                    tmp5 = closure_6;
                                                                    obj = { status: null };
                                                                    obj.status = tmp2.NONE;
                                                                    tmp6 = closure_6(obj);
                                                                  }
                                                                  return;
                                                                }
                                                              }
                                                              cResult[64] = tmp65;
                                                              let tmp64 = tmp65;
                                                            } else {
                                                              tmp64 = cResult[64];
                                                            }
                                                            if (cResult[65] === tmp20) {
                                                              if (cResult[66] === tmp66) {
                                                                if (cResult[67] === tmp68) {
                                                                  let tmp69 = cResult[68];
                                                                }
                                                                if (cResult[69] === tmp56) {
                                                                  if (cResult[70] === tmp59) {
                                                                    if (cResult[71] === tmp69) {
                                                                      let tmp72 = cResult[72];
                                                                    }
                                                                    return tmp72;
                                                                  }
                                                                }
                                                                class Y {
                                                                  constructor(arg0) {
                                                                    tmp = closure_8(ref.replace(/\n/g, ""));
                                                                    tmp3 = closure_5.status === closure_13.ERROR;
                                                                    tmp2 = closure_13;
                                                                    if (tmp3) {
                                                                      tmp4 = closure_14;
                                                                      tmp3 = closure_5.field === closure_14.MESSAGE;
                                                                    }
                                                                    if (tmp3) {
                                                                      tmp5 = closure_6;
                                                                      obj = { status: null };
                                                                      obj.status = tmp2.NONE;
                                                                      tmp6 = closure_6(obj);
                                                                    }
                                                                    return;
                                                                  }
                                                                }
                                                                let obj5 = { children: null };
                                                                const items2 = [tmp56, tmp59, tmp69];
                                                                obj5.children = items2;
                                                                const tmp74 = closure_10(closure_11, obj5);
                                                                cResult[69] = tmp56;
                                                                cResult[70] = tmp59;
                                                                cResult[71] = tmp69;
                                                                cResult[72] = tmp74;
                                                                tmp72 = tmp74;
                                                              }
                                                            }
                                                            let obj6 = {
                                                              size: "lg",
                                                              text: tmp64,
                                                              disabled: tmp27 <= 0,
                                                              onPress: tmp20,
                                                              loading: first2.status === constants.LOADING,
                                                              grow: false,
                                                            };
                                                            const tmp71 = closure_9(sourcePage(5281).Button, obj6);
                                                            cResult[65] = tmp20;
                                                            cResult[66] = tmp27 <= 0;
                                                            cResult[67] = first2.status === constants.LOADING;
                                                            cResult[68] = tmp71;
                                                            tmp69 = tmp71;
                                                          }
                                                        }
                                                        class Y {
                                                          constructor(arg0) {
                                                            tmp = closure_8(ref.replace(/\n/g, ""));
                                                            tmp3 = closure_5.status === closure_13.ERROR;
                                                            tmp2 = closure_13;
                                                            if (tmp3) {
                                                              tmp4 = closure_14;
                                                              tmp3 = closure_5.field === closure_14.MESSAGE;
                                                            }
                                                            if (tmp3) {
                                                              tmp5 = closure_6;
                                                              obj = { status: null };
                                                              obj.status = tmp2.NONE;
                                                              tmp6 = closure_6(obj);
                                                            }
                                                            return;
                                                          }
                                                        }
                                                        const obj7 = { style: tmp28, children: null };
                                                        const items3 = [tmp29, tmp53];
                                                        obj7.children = items3;
                                                        const tmp58 = closure_10(first2, obj7);
                                                        cResult[58] = tmp28;
                                                        cResult[59] = tmp29;
                                                        cResult[60] = tmp53;
                                                        cResult[61] = tmp58;
                                                        tmp56 = tmp58;
                                                      }
                                                    }
                                                  }
                                                  class Y {
                                                    constructor(arg0) {
                                                      tmp = closure_8(ref.replace(/\n/g, ""));
                                                      tmp3 = closure_5.status === closure_13.ERROR;
                                                      tmp2 = closure_13;
                                                      if (tmp3) {
                                                        tmp4 = closure_14;
                                                        tmp3 = closure_5.field === closure_14.MESSAGE;
                                                      }
                                                      if (tmp3) {
                                                        tmp5 = closure_6;
                                                        obj = { status: null };
                                                        obj.status = tmp2.NONE;
                                                        tmp6 = closure_6(obj);
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  const obj8 = { style: tmp32, children: null };
                                                  const items4 = [tmp38, tmp44, cResult[52]];
                                                  obj8.children = items4;
                                                  const tmp55 = closure_10(first2, obj8);
                                                  cResult[53] = tmp4.friendMessageContainer;
                                                  cResult[54] = tmp38;
                                                  cResult[55] = tmp44;
                                                  cResult[56] = cResult[52];
                                                  cResult[57] = tmp55;
                                                  tmp53 = tmp55;
                                                }
                                              }
                                            }
                                          }
                                          class Y {
                                            constructor(arg0) {
                                              tmp = closure_8(ref.replace(/\n/g, ""));
                                              tmp3 = closure_5.status === closure_13.ERROR;
                                              tmp2 = closure_13;
                                              if (tmp3) {
                                                tmp4 = closure_14;
                                                tmp3 = closure_5.field === closure_14.MESSAGE;
                                              }
                                              if (tmp3) {
                                                tmp5 = closure_6;
                                                obj = { status: null };
                                                obj.status = tmp2.NONE;
                                                tmp6 = closure_6(obj);
                                              }
                                              return;
                                            }
                                          }
                                          if (first2.status !== constants.ERROR) {
                                            const obj9 = {
                                              style: null,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: null,
                                            };
                                            class Y {
                                              constructor(arg0) {
                                                tmp = closure_8(ref.replace(/\n/g, ""));
                                                tmp3 = closure_5.status === closure_13.ERROR;
                                                tmp2 = closure_13;
                                                if (tmp3) {
                                                  tmp4 = closure_14;
                                                  tmp3 = closure_5.field === closure_14.MESSAGE;
                                                }
                                                if (tmp3) {
                                                  tmp5 = closure_6;
                                                  obj = { status: null };
                                                  obj.status = tmp2.NONE;
                                                  tmp6 = closure_6(obj);
                                                }
                                                return;
                                              }
                                            }
                                            let intl = sourcePage(1125).intl;
                                            obj9.children = intl.string(sourcePage(1125).t.UtfQNw);
                                            let tmp49 = closure_9(sourcePage(5271).Text, obj9);
                                            cResult[48] = tmp4.messageFooterText;
                                            cResult[49] = first2.field;
                                            cResult[50] = first2.message;
                                            cResult[51] = first2.status;
                                            cResult[52] = tmp49;
                                          }
                                          const obj10 = { errorMessage: first2.message };
                                          tmp49 = closure_9(closure_15, obj10);
                                        }
                                      }
                                    }
                                    const obj11 = {
                                      returnKeyType: "done",
                                      submitBehavior: "submit",
                                      value: first3,
                                      maxLength: 120,
                                      onSubmitEditing: tmp20,
                                      onChange: tmp17,
                                      status: undefined,
                                    };
                                    const tmp46 = closure_9(sourcePage(7240).TextArea, obj11);
                                    cResult[43] = first3;
                                    cResult[44] = tmp17;
                                    cResult[45] = tmp20;
                                    cResult[46] = undefined;
                                    cResult[47] = tmp46;
                                    tmp44 = tmp46;
                                  }
                                }
                                class Y {
                                  constructor(arg0) {
                                    tmp = closure_8(ref.replace(/\n/g, ""));
                                    tmp3 = closure_5.status === closure_13.ERROR;
                                    tmp2 = closure_13;
                                    if (tmp3) {
                                      tmp4 = closure_14;
                                      tmp3 = closure_5.field === closure_14.MESSAGE;
                                    }
                                    if (tmp3) {
                                      tmp5 = closure_6;
                                      obj = { status: null };
                                      obj.status = tmp2.NONE;
                                      tmp6 = closure_6(obj);
                                    }
                                    return;
                                  }
                                }
                                ({ messageLabel: tmp34[0], inputHeaderText: tmp34[1] } = tmp4);
                                tmp34[2] = headerTextStyle;
                                cResult[36] = headerTextStyle;
                                cResult[37] = tmp4.inputHeaderText;
                                cResult[38] = tmp4.messageLabel;
                                cResult[39] = tmp34;
                                tmp33 = tmp34;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                class Y {
                  constructor(arg0) {
                    tmp = closure_8(ref.replace(/\n/g, ""));
                    tmp3 = closure_5.status === closure_13.ERROR;
                    tmp2 = closure_13;
                    if (tmp3) {
                      tmp4 = closure_14;
                      tmp3 = closure_5.field === closure_14.MESSAGE;
                    }
                    if (tmp3) {
                      tmp5 = closure_6;
                      obj = { status: null };
                      obj.status = tmp2.NONE;
                      tmp6 = closure_6(obj);
                    }
                    return;
                  }
                }
                const obj12 = {
                  textState: first1,
                  onChangeText: tmp16,
                  onSelectionChange: tmp19,
                  onKeyPress: tmp15,
                  onSubmitEditing: tmp20,
                  onFocus,
                  validationState: first2,
                  autoFocus: autoFocusInput,
                  headerText,
                  headerTextStyle,
                  ref,
                };
                const tmp31 = closure_9(AddFriendByIdInput, obj12);
                cResult[26] = autoFocusInput;
                cResult[27] = tmp16;
                cResult[28] = tmp20;
                cResult[29] = headerText;
                cResult[30] = headerTextStyle;
                cResult[31] = onFocus;
                cResult[32] = ref;
                cResult[33] = first1;
                cResult[34] = first2;
                cResult[35] = tmp31;
                tmp29 = tmp31;
              }
              const items5 = [tmp4.container, style];
              cResult[23] = style;
              cResult[24] = tmp4.container;
              cResult[25] = items5;
              tmp28 = items5;
            }
            function se() {
              let tmp2 = first2.status === constants.ERROR;
              if (tmp2) {
                tmp2 = null != first2.a11yMessage;
              }
              if (tmp2) {
                const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(first2.a11yMessage);
              }
            }
            cResult[16] = first2.a11yMessage;
            cResult[17] = first2.status;
            cResult[18] = se;
          }
          function handleSubmitEditing() {
            const trimmed = first1.validatedText.trim();
            let substr = trimmed;
            const trimmed1 = first3.trim();
            if (trimmed.length <= 0) {
              let obj2 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: null };
              let intl = sourcePage(1125).intl;
              obj2.message = intl.string(sourcePage(1125).t.mxnceg);
              closure_6(obj2);
            } else {
              const hasItem = trimmed.includes("#");
              let startsWithResult = !hasItem;
              if (!hasItem) {
                startsWithResult = trimmed.startsWith("@");
              }
              let tmp2 = trimmed;
              if (startsWithResult) {
                substr = trimmed.substring(1);
                tmp2 = substr;
              }
              const validateDiscordTagResult = sourcePage(7479).validateDiscordTag(tmp2);
              if (null != validateDiscordTagResult) {
                let obj3 = {
                  status: constants.ERROR,
                  field: constants2.DISCORD_TAG,
                  message: validateDiscordTagResult,
                };
                closure_6(obj3);
              } else {
                let obj4 = { status: constants.LOADING };
                closure_6(obj4);
                const obj6 = {
                  discordTag: tmp2,
                  context: { location: "Search - Add Friend Search" },
                  errorUxConfig: sourcePage(7474).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED,
                  note: null,
                };
                let tmp9;
                if (trimmed1.length > 0) {
                  tmp9 = trimmed1;
                }
                obj6.note = tmp9;
                const obj5 = ref(7474);
                ref(7474)
                  .sendRequest(obj6)
                  .then(
                    () => {
                      const obj = { validatedText: "", hint: null };
                      const intl = util.intl;
                      obj.hint = intl.string(util.t["6p7Mhh"]);
                      closure_4(obj);
                      closure_8("");
                      const obj2 = { status: constants.SUCCESS, message: null };
                      const intl2 = util.intl;
                      obj2.message = intl2.format(util.t.Rtl1Ep, { discordTag: substr });
                      closure_6(obj2);
                      const result = ToastUtils.presentAddedFriendToast();
                      timestampProducer.dismiss();
                    },
                    (body) => {
                      let note;
                      if (body != null) {
                        body = body.body;
                        if (body != null) {
                          note = body.note;
                        }
                      }
                      if (null != note) {
                        const obj2 = {
                          status: constants.ERROR,
                          field: constants2.MESSAGE,
                          message: null,
                          a11yMessage: null,
                        };
                        const intl = util.intl;
                        obj2.message = intl.string(util.t.ckHwck);
                        const intl2 = util.intl;
                        obj2.a11yMessage = intl2.string(util.t.ckHwck);
                        let obj3 = obj2;
                      } else {
                        obj3 = {
                          status: constants.ERROR,
                          field: constants2.DISCORD_TAG,
                          message: null,
                          a11yMessage: null,
                        };
                        let num;
                        if (body != null) {
                          const body2 = body.body;
                          if (body2 != null) {
                            num = body2.code;
                          }
                        }
                        if (num == null) {
                          num = -1;
                        }
                        obj3.message = FriendsUtils.humanizeAbortCode(num, substr);
                        let num2;
                        if (body != null) {
                          const body3 = body.body;
                          if (body3 != null) {
                            num2 = body3.code;
                          }
                        }
                        if (num2 == null) {
                          num2 = -1;
                        }
                        obj3.a11yMessage = FriendsUtils.humanizeAbortCodeForA11y(num2, substr);
                      }
                      closure_6(obj3);
                    },
                  );
                const sendRequestResult = ref(7474).sendRequest(obj6);
              }
              let obj = sourcePage(7479);
            }
          }
          cResult[10] = first3;
          cResult[11] = first1.validatedText;
          cResult[12] = handleSubmitEditing;
          tmp20 = handleSubmitEditing;
        }
        class Y {
          constructor(arg0) {
            tmp = closure_8(ref.replace(/\n/g, ""));
            tmp3 = closure_5.status === closure_13.ERROR;
            tmp2 = closure_13;
            if (tmp3) {
              tmp4 = closure_14;
              tmp3 = closure_5.field === closure_14.MESSAGE;
            }
            if (tmp3) {
              tmp5 = closure_6;
              obj = { status: null };
              obj.status = tmp2.NONE;
              tmp6 = closure_6(obj);
            }
            return;
          }
        }
        cResult[6] = first2.field;
        cResult[7] = first2.status;
        cResult[8] = Y;
        tmp17 = Y;
      }
      class W {
        constructor(arg0) {
          tmp = closure_4;
          if (ref.length <= 0) {
            obj1 = { validatedText: "", hint: null };
            tmp5 = closure_0;
            tmp6 = closure_2;
            intl = closure_0(closure_2[7]).intl;
            obj1.hint = intl.string(closure_0(closure_2[7]).t["6p7Mhh"]);
            obj = obj1;
          } else {
            str = "#";
            tmp2 = closure_3;
            num = 2;
            arr = closure_3(ref.split("#"), 2)[1];
            tmp3 = null;
            str2 = "";
            if (null != arr) {
              num2 = 0;
              tmp4 = PLACEHOLDER_TAG;
              if (null != arr) {
                num3 = 1;
                num2 = arr.length + 1;
              }
              str2 = ref + PLACEHOLDER_TAG.slice(num2);
            }
            obj = { validatedText: null, hint: null };
            obj.validatedText = ref;
            obj.hint = str2;
          }
          tmpResult = tmp(obj);
          tmp9 = closure_5.status === closure_13.ERROR;
          tmp8 = closure_13;
          if (tmp9) {
            tmp10 = closure_14;
            tmp9 = closure_5.field === closure_14.DISCORD_TAG;
          }
          if (tmp9) {
            tmp11 = closure_6;
            obj4 = { status: null };
            obj4.status = tmp8.NONE;
            tmp12 = closure_6(obj4);
          }
          return;
        }
      }
      cResult[3] = first2.field;
      cResult[4] = first2.status;
      cResult[5] = W;
      tmp16 = W;
      let obj = sourcePage(576);
    }
  : (arg0) => {
      ({ headerTextStyle, sourcePage } = arg0);
      let textState;
      noop = undefined;
      function handleSubmitEditing() {
        const trimmed = first.validatedText.trim();
        let substr = trimmed;
        const trimmed1 = first2.trim();
        if (trimmed.length <= 0) {
          let obj2 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: null };
          let intl = sourcePage(1125).intl;
          obj2.message = intl.string(sourcePage(1125).t.mxnceg);
          closure_6(obj2);
        } else {
          const hasItem = trimmed.includes("#");
          let startsWithResult = !hasItem;
          if (!hasItem) {
            startsWithResult = trimmed.startsWith("@");
          }
          let tmp2 = trimmed;
          if (startsWithResult) {
            substr = trimmed.substring(1);
            tmp2 = substr;
          }
          const validateDiscordTagResult = sourcePage(7479).validateDiscordTag(tmp2);
          if (null != validateDiscordTagResult) {
            let obj3 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: validateDiscordTagResult };
            closure_6(obj3);
          } else {
            let obj4 = { status: constants.LOADING };
            closure_6(obj4);
            const obj6 = {
              discordTag: tmp2,
              context: { location: "Search - Add Friend Search" },
              errorUxConfig: sourcePage(7474).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED,
              note: null,
            };
            let tmp9;
            if (trimmed1.length > 0) {
              tmp9 = trimmed1;
            }
            obj6.note = tmp9;
            const obj5 = ref(7474);
            ref(7474)
              .sendRequest(obj6)
              .then(
                () => {
                  const obj = { validatedText: "", hint: null };
                  const intl = util.intl;
                  obj.hint = intl.string(util.t["6p7Mhh"]);
                  closure_4(obj);
                  closure_8("");
                  const obj2 = { status: constants.SUCCESS, message: null };
                  const intl2 = util.intl;
                  obj2.message = intl2.format(util.t.Rtl1Ep, { discordTag: substr });
                  closure_6(obj2);
                  const result = ToastUtils.presentAddedFriendToast();
                  timestampProducer.dismiss();
                },
                (body) => {
                  let note;
                  if (body != null) {
                    body = body.body;
                    if (body != null) {
                      note = body.note;
                    }
                  }
                  if (null != note) {
                    const obj2 = {
                      status: constants.ERROR,
                      field: constants2.MESSAGE,
                      message: null,
                      a11yMessage: null,
                    };
                    const intl = util.intl;
                    obj2.message = intl.string(util.t.ckHwck);
                    const intl2 = util.intl;
                    obj2.a11yMessage = intl2.string(util.t.ckHwck);
                    let obj3 = obj2;
                  } else {
                    obj3 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: null, a11yMessage: null };
                    let num;
                    if (body != null) {
                      const body2 = body.body;
                      if (body2 != null) {
                        num = body2.code;
                      }
                    }
                    if (num == null) {
                      num = -1;
                    }
                    obj3.message = FriendsUtils.humanizeAbortCode(num, substr);
                    let num2;
                    if (body != null) {
                      const body3 = body.body;
                      if (body3 != null) {
                        num2 = body3.code;
                      }
                    }
                    if (num2 == null) {
                      num2 = -1;
                    }
                    obj3.a11yMessage = FriendsUtils.humanizeAbortCodeForA11y(num2, substr);
                  }
                  closure_6(obj3);
                },
              );
            const sendRequestResult = ref(7474).sendRequest(obj6);
          }
          let obj = sourcePage(7479);
        }
      }
      ({ style, onFocus, autoFocusInput, headerText, ref } = arg0);
      const tmp = closure_12();
      ref = noop.useRef(0);
      dependencyMap = noop.useRef("");
      let tmp2 = textState(
        noop.useState(() => {
          const obj = { validatedText: "", hint: null };
          const intl = sourcePage(1125).intl;
          obj.hint = intl.string(sourcePage(1125).t["6p7Mhh"]);
          return obj;
        }),
        2,
      );
      textState = tmp2[0];
      noop = tmp2[1];
      const tmp5 = textState(noop.useState({ status: constants.NONE }), 2);
      const first1 = tmp5[0];
      closure_6 = tmp5[1];
      const tmp7 = textState(noop.useState(""), 2);
      const first2 = tmp7[0];
      closure_8 = tmp7[1];
      const items = [first1];
      const items1 = [first1];
      const callback = noop.useCallback((validatedText) => {
        if (validatedText.length <= 0) {
          const obj2 = { validatedText: "", hint: null };
          const intl = util.intl;
          obj2.hint = intl.string(util.t["6p7Mhh"]);
          let obj = obj2;
        } else {
          const arr = _slicedToArray(validatedText.split("#"), 2)[1];
          let str2 = "";
          if (null != arr) {
            let num2 = 0;
            if (null != arr) {
              num2 = arr.length + 1;
            }
            str2 = validatedText + React5.slice(num2);
          }
          obj = { validatedText, hint: str2 };
        }
        closure_4(obj);
        let tmp9 = first1.status === constants.ERROR;
        if (tmp9) {
          tmp9 = first1.field === constants2.DISCORD_TAG;
        }
        if (tmp9) {
          const obj3 = { status: constants.NONE };
          closure_6(obj3);
        }
      }, items);
      const items2 = [sourcePage];
      const callback1 = noop.useCallback((str) => {
        closure_8(str.replace(/\n/g, ""));
        let tmp3 = first1.status === constants.ERROR;
        if (tmp3) {
          tmp3 = first1.field === constants2.MESSAGE;
        }
        if (tmp3) {
          const obj = { status: constants.NONE };
          closure_6(obj);
        }
      }, items1);
      const effect = noop.useEffect(() => {
        AnalyticsUtilsDefault.track(closure_2_8.FRIEND_ADD_VIEWED, { friend_add_type: "Id", source_page: sourcePage });
      }, items2);
      const items3 = [first1];
      const effect1 = noop.useEffect(() => {
        let tmp2 = first1.status === constants.ERROR;
        if (tmp2) {
          tmp2 = null != first1.a11yMessage;
        }
        if (tmp2) {
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(first1.a11yMessage);
        }
      }, items3);
      let obj2 = { style: null, children: null };
      const items4 = [tmp.container, style];
      obj2.style = items4;
      const items5 = [
        closure_9(AddFriendByIdInput, {
          textState,
          onChangeText: callback,
          onSelectionChange: function handleSelectionChange(nativeEvent) {
            const start = nativeEvent.nativeEvent.selection.start;
            if (start !== ref.current) {
              ref.current = start;
            }
          },
          onKeyPress: function handleOnKeyPress(nativeEvent) {
            closure_2.current = nativeEvent.nativeEvent.key;
          },
          onSubmitEditing: handleSubmitEditing,
          onFocus,
          validationState: first1,
          autoFocus: autoFocusInput,
          headerText,
          headerTextStyle,
          ref,
        }),
      ];
      let obj4 = { style: tmp.friendMessageContainer, children: null };
      let obj5 = { style: null, variant: "text-sm/semibold", color: "text-muted", children: null };
      const items6 = [, ,];
      ({ messageLabel: arr7[0], inputHeaderText: arr7[1] } = tmp);
      items6[2] = headerTextStyle;
      obj5.style = items6;
      let intl = sourcePage(1125).intl;
      obj5.children = intl.string(sourcePage(1125).t.Yi6Mpu);
      const items7 = [closure_9(sourcePage(5271).Text, obj5), ,];
      let obj6 = {
        returnKeyType: "done",
        submitBehavior: "submit",
        value: first2,
        maxLength: 120,
        onSubmitEditing: handleSubmitEditing,
        onChange: callback1,
        status: null,
      };
      let str2;
      if (first1.field === constants2.MESSAGE) {
        if (first1.status === constants.ERROR) {
          str2 = "error";
        }
      }
      obj6.status = str2;
      items7[1] = closure_9(sourcePage(7240).TextArea, obj6);
      if (first1.status === constants.ERROR) {
        if (first1.field === constants2.MESSAGE) {
          const obj7 = { errorMessage: first1.message };
          let tmp16Result = closure_9(closure_15, obj7);
        }
        const obj8 = { children: null };
        items7[2] = tmp16Result;
        obj4.children = items7;
        items5[1] = closure_10(tmp15, obj4);
        obj2.children = items5;
        const items8 = [closure_10(tmp15, obj2), ,];
        const obj9 = { style: tmp.redesignGrow };
        items8[1] = closure_9(tmp15, obj9);
        const obj10 = { size: "lg", text: null, disabled: null, onPress: null, loading: null, grow: false };
        const intl3 = sourcePage(1125).intl;
        obj10.text = intl3.string(sourcePage(1125).t["PMsq/b"]);
        obj10.disabled = str.trim().length <= 0;
        obj10.onPress = handleSubmitEditing;
        obj10.loading = first1.status === constants.LOADING;
        items8[2] = closure_9(sourcePage(5281).Button, obj10);
        obj8.children = items8;
        return closure_10(closure_11, obj8);
      }
      const obj11 = { style: tmp.messageFooterText, variant: "text-xs/medium", color: "text-muted", children: null };
      let intl2 = sourcePage(1125).intl;
      obj11.children = intl2.string(sourcePage(1125).t.UtfQNw);
      tmp16Result = closure_9(sourcePage(5271).Text, obj11);
      let obj = { status: constants.NONE };
      let obj3 = {
        textState,
        onChangeText: callback,
        onSelectionChange: function handleSelectionChange(nativeEvent) {
          const start = nativeEvent.nativeEvent.selection.start;
          if (start !== ref.current) {
            ref.current = start;
          }
        },
        onKeyPress: function handleOnKeyPress(nativeEvent) {
          closure_2.current = nativeEvent.nativeEvent.key;
        },
        onSubmitEditing: handleSubmitEditing,
        onFocus,
        validationState: first1,
        autoFocus: autoFocusInput,
        headerText,
        headerTextStyle,
        ref,
      };
      str = textState.validatedText;
    };
