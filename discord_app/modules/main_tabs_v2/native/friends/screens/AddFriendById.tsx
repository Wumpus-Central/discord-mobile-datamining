// discord_app/modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TextField from "../../../../../design/components/TextField/native/TextField.native.tsx";
import FriendsUtils from "../../../../../utils/FriendsUtils.tsx";
import FriendRequestMessageExperimentDefault from "../../../../people/FriendRequestMessageExperiment.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Keyboard: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ PLACEHOLDER_TAG: closure_7, AnalyticEvents: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5091);
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
        const tmp8 = options(Text_Text.Text, obj2);
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
      return options(Text_Text.Text, obj);
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
  const items1 = [options(Text_Text.Text, obj2), ,];
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
  items1[1] = options(TextField.TextField, obj3);
  let tmp9Result = null;
  if (null != message) {
    const obj4 = { errorMessage: message };
    tmp9Result = options(closure_15, obj4);
  }
  items1[2] = tmp9Result;
  obj.children = items1;
  return collapsed(hasOwnProperty, obj);
}
ReactCompilerGating = fn(558);
let obj11 = { marginTop: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (ref) => {
      const cResult = sourcePage(576).c(65);
      ({ style, onFocus, autoFocusInput, headerText, headerTextStyle, sourcePage } = ref);
      const tmp4 = closure_12();
      importDefault = noop.useRef(0);
      dependencyMap = noop.useRef("");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          const obj = { validatedText: "", hint: null };
          const intl = sourcePage(1126).intl;
          obj.hint = intl.string(sourcePage(1126).t["6p7Mhh"]);
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
        let obj4 = { location: "AddFriendbyId" };
        cResult[2] = obj4;
        let tmp15 = obj4;
      } else {
        tmp15 = cResult[2];
      }
      let obj = sourcePage(576);
      const enabled = FriendRequestMessageExperimentDefault.useConfig(tmp15).enabled;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        function handleOnKeyPress(nativeEvent) {
          closure_2.current = nativeEvent.nativeEvent.key;
        }
        cResult[3] = handleOnKeyPress;
        let tmp16 = handleOnKeyPress;
      } else {
        tmp16 = cResult[3];
      }
      if (cResult[4] === first2.field) {
        if (cResult[5] === first2.status) {
          let tmp17 = cResult[6];
        }
        if (cResult[7] === first2.field) {
          if (cResult[8] === first2.status) {
            let tmp18 = cResult[9];
          }
          const _Symbol = Symbol;
          class Q {
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
          if (tmp19 === Symbol.for("react.memo_cache_sentinel")) {
            function handleSelectionChange(nativeEvent) {
              const start = nativeEvent.nativeEvent.selection.start;
              if (start !== ref.current) {
                ref.current = start;
              }
            }
            class Q {
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
            let tmp20 = handleSelectionChange;
          } else {
            tmp20 = cResult[10];
          }
          if (cResult[11] === first3) {
            if (cResult[12] === first1.validatedText) {
              let tmp21 = cResult[13];
            }
            if (cResult[14] !== sourcePage) {
              function se() {
                AnalyticsUtilsDefault.track(closure_2_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Id",
                  source_page: sourcePage,
                });
              }
              const items = [];
              class Q {
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
              cResult[14] = sourcePage;
              cResult[15] = items;
              cResult[16] = se;
            }
            class Q {
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
            if (cResult[17] === first2.a11yMessage) {
              if (cResult[20] !== first2) {
                const items1 = [first2];
                class Q {
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
                cResult[20] = first2;
                cResult[21] = items1;
              }
              class Q {
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
              if (cResult[22] !== first1.validatedText) {
                let trimmed = first1.validatedText.trim();
                class Q {
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
                cResult[22] = first1.validatedText;
                cResult[23] = trimmed;
              }
              if (cResult[24] === style) {
                if (cResult[25] === tmp4.container) {
                  let tmp29 = cResult[26];
                }
                if (cResult[27] === autoFocusInput) {
                  if (cResult[28] === tmp17) {
                    if (cResult[29] === tmp21) {
                      if (cResult[30] === headerText) {
                        if (cResult[31] === headerTextStyle) {
                          if (cResult[32] === onFocus) {
                            if (cResult[33] === ref) {
                              if (cResult[34] === first1) {
                                if (cResult[35] === first2) {
                                  let tmp30 = cResult[36];
                                }
                                if (cResult[37] === first3) {
                                  if (cResult[38] === enabled) {
                                    if (cResult[39] === tmp18) {
                                      if (cResult[40] === tmp21) {
                                        if (cResult[41] === headerTextStyle) {
                                          if (cResult[42] === tmp4.friendMessageContainer) {
                                            if (cResult[43] === tmp4.inputHeaderText) {
                                              if (cResult[44] === tmp4.messageFooterText) {
                                                if (cResult[45] === tmp4.messageLabel) {
                                                  if (cResult[46] === first2.field) {
                                                    if (cResult[47] === first2.message) {
                                                      if (cResult[48] === first2.status) {
                                                        let tmp33 = cResult[49];
                                                      }
                                                      if (cResult[50] === tmp29) {
                                                        if (cResult[51] === tmp30) {
                                                          if (cResult[52] === tmp33) {
                                                            let tmp45 = cResult[53];
                                                          }
                                                          if (cResult[54] !== tmp4.redesignGrow) {
                                                            class Q {
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
                                                            tmp51[0] = tmp4.redesignGrow;
                                                            const tmp52 = closure_9(first2, tmp51);
                                                            cResult[54] = tmp4.redesignGrow;
                                                            cResult[55] = tmp52;
                                                            let tmp48 = tmp52;
                                                          } else {
                                                            tmp48 = cResult[55];
                                                          }
                                                          class Q {
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
                                                          if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                                                            const string = sourcePage(1126).intl.string;
                                                            class Q {
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
                                                            cResult[56] = tmp54;
                                                            let tmp53 = tmp54;
                                                          } else {
                                                            tmp53 = cResult[56];
                                                          }
                                                          if (cResult[57] === tmp21) {
                                                            if (cResult[58] === tmp55) {
                                                              if (cResult[59] === tmp57) {
                                                                let tmp58 = cResult[60];
                                                              }
                                                              if (cResult[61] === tmp45) {
                                                                if (cResult[62] === tmp48) {
                                                                  if (cResult[63] === tmp58) {
                                                                    let tmp61 = cResult[64];
                                                                  }
                                                                  return tmp61;
                                                                }
                                                              }
                                                              class Q {
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
                                                              let obj6 = { children: null };
                                                              const items2 = [tmp45, tmp48, tmp58];
                                                              obj6.children = items2;
                                                              const tmp63 = closure_10(closure_11, obj6);
                                                              cResult[61] = tmp45;
                                                              cResult[62] = tmp48;
                                                              cResult[63] = tmp58;
                                                              cResult[64] = tmp63;
                                                              tmp61 = tmp63;
                                                            }
                                                          }
                                                          const obj7 = {
                                                            size: "lg",
                                                            text: tmp53,
                                                            disabled: tmp28 <= 0,
                                                            onPress: tmp21,
                                                            loading: first2.status === constants.LOADING,
                                                            grow: false,
                                                          };
                                                          const tmp60 = closure_9(sourcePage(5376).Button, obj7);
                                                          cResult[57] = tmp21;
                                                          cResult[58] = tmp28 <= 0;
                                                          cResult[59] = first2.status === constants.LOADING;
                                                          cResult[60] = tmp60;
                                                          tmp58 = tmp60;
                                                        }
                                                      }
                                                      class Q {
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
                                                      const obj8 = { style: tmp29, children: null };
                                                      const items3 = [tmp30, tmp33];
                                                      obj8.children = items3;
                                                      const tmp47 = closure_10(first2, obj8);
                                                      cResult[50] = tmp29;
                                                      cResult[51] = tmp30;
                                                      cResult[52] = tmp33;
                                                      cResult[53] = tmp47;
                                                      tmp45 = tmp47;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                class Q {
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
                                if (!enabled) {
                                  cResult[37] = first3;
                                  class Q {
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
                                  cResult[38] = enabled;
                                  cResult[39] = tmp18;
                                  cResult[40] = tmp21;
                                  cResult[41] = headerTextStyle;
                                  cResult[42] = tmp4.friendMessageContainer;
                                  cResult[43] = tmp4.inputHeaderText;
                                  cResult[44] = tmp4.messageFooterText;
                                  cResult[45] = tmp4.messageLabel;
                                  cResult[46] = first2.field;
                                  cResult[47] = first2.message;
                                  cResult[48] = first2.status;
                                  cResult[49] = enabled;
                                  tmp33 = enabled;
                                } else {
                                  const obj9 = { style: tmp4.friendMessageContainer, children: null };
                                  class Q {
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
                                  const obj10 = {
                                    style: null,
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: null,
                                  };
                                  const items4 = [, ,];
                                  ({ messageLabel: arr4[0], inputHeaderText: arr4[1] } = tmp4);
                                  items4[2] = headerTextStyle;
                                  obj10.style = items4;
                                  let intl = sourcePage(1126).intl;
                                  obj10.children = intl.string(sourcePage(1126).t.Yi6Mpu);
                                  const items5 = [closure_9(sourcePage(5087).Text, obj10), ,];
                                  const obj11 = {
                                    returnKeyType: "done",
                                    submitBehavior: "submit",
                                    value: first3,
                                    maxLength: 120,
                                    onSubmitEditing: tmp21,
                                    onChange: tmp18,
                                    status: null,
                                  };
                                  if (first2.field === constants2.MESSAGE) {
                                    class Q {
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
                                  obj11.status = undefined;
                                  items5[1] = tmp36(sourcePage(6770).TextArea, obj11);
                                  if (first2.status !== constants.ERROR) {
                                    const obj12 = {
                                      style: tmp4.messageFooterText,
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: null,
                                    };
                                    class Q {
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
                                    let intl2 = sourcePage(1126).intl;
                                    obj12.children = intl2.string(sourcePage(1126).t.UtfQNw);
                                    let tmp36Result = tmp36(tmp41, obj12);
                                    items5[2] = tmp36Result;
                                    obj9.children = items5;
                                    closure_10(tmp35, obj9);
                                  }
                                  const obj13 = { errorMessage: first2.message };
                                  tmp36Result = tmp36(closure_15, obj13);
                                  tmp35 = first2;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                class Q {
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
                const obj14 = {
                  textState: first1,
                  onChangeText: tmp17,
                  onSelectionChange: tmp20,
                  onKeyPress: tmp16,
                  onSubmitEditing: tmp21,
                  onFocus,
                  validationState: first2,
                  autoFocus: autoFocusInput,
                  headerText,
                  headerTextStyle,
                  ref,
                };
                const tmp32 = closure_9(AddFriendByIdInput, obj14);
                cResult[27] = autoFocusInput;
                cResult[28] = tmp17;
                cResult[29] = tmp21;
                cResult[30] = headerText;
                cResult[31] = headerTextStyle;
                cResult[32] = onFocus;
                cResult[33] = ref;
                cResult[34] = first1;
                cResult[35] = first2;
                cResult[36] = tmp32;
                tmp30 = tmp32;
              }
              const items6 = [tmp4.container, style];
              cResult[24] = style;
              cResult[25] = tmp4.container;
              cResult[26] = items6;
              tmp29 = items6;
            }
            function ne() {
              let tmp2 = first2.status === constants.ERROR;
              if (tmp2) {
                tmp2 = null != first2.a11yMessage;
              }
              if (tmp2) {
                const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(first2.a11yMessage);
              }
            }
            cResult[17] = first2.a11yMessage;
            cResult[18] = first2.status;
            cResult[19] = ne;
          }
          function handleSubmitEditing() {
            const trimmed = first1.validatedText.trim();
            let substr = trimmed;
            const trimmed1 = first3.trim();
            if (trimmed.length <= 0) {
              let obj2 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: null };
              let intl = sourcePage(1126).intl;
              obj2.message = intl.string(sourcePage(1126).t.mxnceg);
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
              const validateDiscordTagResult = sourcePage(7015).validateDiscordTag(tmp2);
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
                  errorUxConfig: sourcePage(7011).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED,
                  note: null,
                };
                let tmp9;
                if (trimmed1.length > 0) {
                  tmp9 = trimmed1;
                }
                obj6.note = tmp9;
                const obj5 = ref(7011);
                ref(7011)
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
                const sendRequestResult = ref(7011).sendRequest(obj6);
              }
              let obj = sourcePage(7015);
            }
          }
          cResult[11] = first3;
          cResult[12] = first1.validatedText;
          cResult[13] = handleSubmitEditing;
          tmp21 = handleSubmitEditing;
        }
        class Q {
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
        cResult[7] = first2.field;
        cResult[8] = first2.status;
        cResult[9] = Q;
        tmp18 = Q;
      }
      class Y {
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
      cResult[4] = first2.field;
      cResult[5] = first2.status;
      cResult[6] = Y;
      tmp17 = Y;
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
          let intl = sourcePage(1126).intl;
          obj2.message = intl.string(sourcePage(1126).t.mxnceg);
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
          const validateDiscordTagResult = sourcePage(7015).validateDiscordTag(tmp2);
          if (null != validateDiscordTagResult) {
            let obj3 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: validateDiscordTagResult };
            closure_6(obj3);
          } else {
            let obj4 = { status: constants.LOADING };
            closure_6(obj4);
            const obj6 = {
              discordTag: tmp2,
              context: { location: "Search - Add Friend Search" },
              errorUxConfig: sourcePage(7011).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED,
              note: null,
            };
            let tmp9;
            if (trimmed1.length > 0) {
              tmp9 = trimmed1;
            }
            obj6.note = tmp9;
            const obj5 = ref(7011);
            ref(7011)
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
            const sendRequestResult = ref(7011).sendRequest(obj6);
          }
          let obj = sourcePage(7015);
        }
      }
      ({ style, onFocus, autoFocusInput, headerText, ref } = arg0);
      const tmp = closure_12();
      importDefault = noop.useRef(0);
      dependencyMap = noop.useRef("");
      let tmp2 = textState(
        noop.useState(() => {
          const obj = { validatedText: "", hint: null };
          const intl = sourcePage(1126).intl;
          obj.hint = intl.string(sourcePage(1126).t["6p7Mhh"]);
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
      const enabled = FriendRequestMessageExperimentDefault.useConfig({ location: "AddFriendbyId" }).enabled;
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
      let obj3 = { style: null, children: null };
      const items4 = [tmp.container, style];
      obj3.style = items4;
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
      if (!enabled) {
        let obj5 = { children: null };
        items5[1] = enabled;
        obj3.children = items5;
        const items6 = [closure_10(tmp16, obj3), ,];
        let obj6 = { style: tmp.redesignGrow };
        items6[1] = closure_9(tmp16, obj6);
        const obj7 = { size: "lg", text: null, disabled: null, onPress: null, loading: null, grow: false };
        const intl3 = sourcePage(1126).intl;
        obj7.text = intl3.string(sourcePage(1126).t["PMsq/b"]);
        obj7.disabled = str.trim().length <= 0;
        obj7.onPress = handleSubmitEditing;
        obj7.loading = first1.status === constants.LOADING;
        items6[2] = closure_9(sourcePage(5376).Button, obj7);
        obj5.children = items6;
        return closure_10(closure_11, obj5);
      } else {
        const obj8 = { style: tmp.friendMessageContainer, children: null };
        const obj9 = { style: null, variant: "text-sm/semibold", color: "text-muted", children: null };
        const items7 = [, ,];
        ({ messageLabel: arr7[0], inputHeaderText: arr7[1] } = tmp);
        items7[2] = headerTextStyle;
        obj9.style = items7;
        let intl = sourcePage(1126).intl;
        obj9.children = intl.string(sourcePage(1126).t.Yi6Mpu);
        const items8 = [closure_9(sourcePage(5087).Text, obj9), ,];
        const obj10 = {
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
        obj10.status = str2;
        items8[1] = closure_9(sourcePage(6770).TextArea, obj10);
        if (first1.status !== constants.ERROR) {
          const obj11 = {
            style: tmp.messageFooterText,
            variant: "text-xs/medium",
            color: "text-muted",
            children: null,
          };
          let intl2 = sourcePage(1126).intl;
          obj11.children = intl2.string(sourcePage(1126).t.UtfQNw);
          let tmp17Result = closure_9(sourcePage(5087).Text, obj11);
          items8[2] = tmp17Result;
          obj8.children = items8;
          closure_10(tmp16, obj8);
        }
        const obj12 = { errorMessage: first1.message };
        tmp17Result = closure_9(closure_15, obj12);
      }
      let obj = { status: constants.NONE };
      let obj4 = {
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
