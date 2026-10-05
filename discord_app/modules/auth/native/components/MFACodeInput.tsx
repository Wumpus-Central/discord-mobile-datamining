// === Module 14576: MFACodeInput ===

// Module 14576 (MFACodeInput)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import shared from "shared" /* 4729 */;
import Text_Text from "Text/Text" /* 4886 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let appState, error;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let unpackModuleId;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const AppStates = Constants.AppStates;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let obj = { inputContainer: { marginTop: 20, flexDirection: "row", justifyContent: "center", alignSelf: "stretch" }, input: { flex: 1, maxWidth: 336, flexDirection: "row", alignSelf: "stretch" }, status: { flex: 1, maxHeight: 20, alignItems: "center", marginTop: 8 }, error: obj2, minHeightGuard: { minHeight: 20 } };
obj2 = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_12 = createStyles.createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((appState, arg1) => {
  let closure_4;
  let style;
  let tmp10;
  let tmp = appState;
  let tmp2 = error;
  let obj = appState(error[9]);
  const cResult = obj.c(40);
  appState = appState.appState;
  const handleSubmit = appState.handleSubmit;
  ({ style, error } = appState);
  const showActivityIndicator = appState.showActivityIndicator;
  const resetLoginOnClose = appState.resetLoginOnClose;
  react = tmp4;
  const tmp5 = closure_12();
  error = tmp5;
  const tmpResult = tmp(tmp2[10]);
  const theme = tmpResult.useThemeContext().theme;
  let obj3 = react;
  const tmp6 = showActivityIndicator(react.useState(""), 2);
  const first = tmp6[0];
  let closure_8 = tmp6[1];
  const tmp8 = showActivityIndicator(react.useState(null), 2);
  const first1 = tmp8[0];
  let closure_10 = tmp8[1];
  if (cResult[0] !== first1) {
    const fn = function v() {
      let obj = ClipboardUtils;
      const string = obj.getString();
      string.then((result) => {
        const trimmed = result.trim();
        let tmp = trimmed !== first1;
        if (tmp) {
          let isMatch = 6 === trimmed.length;
          if (isMatch) {
            const obj = /^\d+$/;
            isMatch = obj.test(trimmed);
          }
          if (!isMatch) {
            let isMatch1 = 8 === trimmed.length;
            if (isMatch1) {
              const obj2 = /^[a-z0-9]+$/i;
              isMatch1 = obj2.test(trimmed);
            }
            isMatch = isMatch1;
          }
          tmp = isMatch;
        }
        if (tmp) {
          closure_1_8(trimmed);
          closure_1_10(trimmed);
        }
      });
    };
    cResult[0] = first1;
    cResult[1] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
  }
  let closure_11 = tmp10;
  if (cResult[2] === first) {
    if (cResult[3] === tmp10) {
      let tmp11;
      if (cResult[4] === (undefined === resetLoginOnClose || resetLoginOnClose)) {
        tmp11 = cResult[5];
      }
      handleSubmit(tmp2[13])(tmp11);
      if (cResult[6] === appState) {
        let tmp14;
        let tmp15;
        if (cResult[7] === tmp10) {
          tmp14 = cResult[8];
          tmp15 = cResult[9];
        }
        const effect = obj3.useEffect(tmp14, tmp15);
        if (cResult[10] === first) {
          let tmp17;
          let tmp18;
          let tmp22;
          if (cResult[11] === handleSubmit) {
            tmp17 = cResult[12];
            tmp18 = cResult[13];
          }
          const effect1 = obj3.useEffect(tmp17, tmp18);
          class P {
            constructor() {
              let isMatch = 6 === first.length;
              if (isMatch) {
                const obj = /^\d+$/;
                isMatch = obj.test(first);
              }
              if (!isMatch) {
                isMatch = 8 === first.length;
              }
              if (isMatch) {
                handleSubmit(first);
              }
            }
          }
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class W {
              constructor() {
                return {
                  clear() {
                    closure_1_8("");
                  }
                };
              }
            }
            const items = [];
            class P {
              constructor() {
                let isMatch = 6 === first.length;
                if (isMatch) {
                  const obj = /^\d+$/;
                  isMatch = obj.test(first);
                }
                if (!isMatch) {
                  isMatch = 8 === first.length;
                }
                if (isMatch) {
                  handleSubmit(first);
                }
              }
            }
            cResult[15] = items;
            tmp22 = items;
          } else {
            class W {
              constructor() {
                return {
                  clear() {
                    closure_1_8("");
                  }
                };
              }
            }
            tmp22 = cResult[15];
          }
          const imperativeHandle = obj3.useImperativeHandle(arg1, W, tmp22);
          if (cResult[16] === error) {
            class W {
              constructor() {
                return {
                  clear() {
                    closure_1_8("");
                  }
                };
              }
            }
          }
          class Y {
            constructor() {
              if (showActivityIndicator) {
                const obj2 = shared;
                const isThemeDarkResult = obj2.isThemeDark(theme);
                const unsafe_rawColors = nativeDefault.unsafe_rawColors;
                const obj3 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500 };
                return React4(hasOwnProperty, obj3);
              } else {
                let tmp3 = null;
                if (null != error) {
                  const obj = { style: error.error, variant: "text-md/medium", children: tmp2 };
                  tmp3 = React4(Text_Text.Text, obj);
                }
                return tmp3;
              }
            }
          }
          cResult[16] = error;
          cResult[17] = showActivityIndicator;
          cResult[18] = tmp5.error;
          cResult[19] = theme;
          cResult[20] = Y;
        }
        class P {
          constructor() {
            let isMatch = 6 === first.length;
            if (isMatch) {
              const obj = /^\d+$/;
              isMatch = obj.test(first);
            }
            if (!isMatch) {
              isMatch = 8 === first.length;
            }
            if (isMatch) {
              handleSubmit(first);
            }
          }
        }
        const items1 = [first, handleSubmit];
        cResult[10] = first;
        cResult[12] = P;
        cResult[13] = items1;
        tmp18 = items1;
        tmp17 = P;
      }
      const fn3 = function k() {
        if (appState === AppStates.ACTIVE) {
          closure_11();
        }
      };
      const items2 = [appState, tmp10];
      cResult[6] = appState;
      cResult[7] = tmp10;
      cResult[8] = fn3;
      cResult[9] = items2;
      tmp15 = items2;
      tmp14 = fn3;
    }
  }
  const fn2 = function z() {
    const tmp = closure_11();
    return () => {
      if (first.isAuthenticated()) {
        const obj2 = appState(error[11]);
        const string = obj2.getString();
        string.then((result) => {
          const tmp2 = "" !== closure_1_7 && tmp === result;
          if (tmp2) {
            const obj = appState(error[11]);
            obj.copy("");
          }
        });
      } else {
        let obj = handleSubmit(error[12]);
        if (closure_1_4) {
          obj.loginReset();
        } else {
          obj.loginStatusReset();
        }
      }
    };
  };
  cResult[2] = first;
  cResult[3] = tmp10;
  cResult[4] = undefined === resetLoginOnClose || resetLoginOnClose;
  cResult[5] = fn2;
  tmp11 = fn2;
}) : ((appState, arg1) => {
  let closure_4;
  let intl;
  let items3;
  let resetLoginOnClose;
  let showActivityIndicator;
  let style;
  let tmp17Result;
  appState = appState.appState;
  const handleSubmit = appState.handleSubmit;
  ({ error, resetLoginOnClose } = appState);
  ({ style, showActivityIndicator } = appState);
  if (resetLoginOnClose === undefined) {
    resetLoginOnClose = true;
  }
  let value;
  react = undefined;
  let tmp = closure_12();
  let tmp2 = appState;
  let obj = appState(resetLoginOnClose[10]);
  const theme = obj.useThemeContext().theme;
  const tmp4 = value(react.useState(""), 2);
  value = tmp4[0];
  react = tmp6;
  const tmp7 = value(react.useState(null), 2);
  const first1 = tmp7[0];
  let closure_6 = tmp7[1];
  const items = [first1];
  const callback = react.useCallback(() => {
    let obj = ClipboardUtils;
    const string = obj.getString();
    string.then((result) => {
      const trimmed = result.trim();
      let tmp = trimmed !== first1;
      if (tmp) {
        let isMatch = 6 === trimmed.length;
        if (isMatch) {
          const obj = /^\d+$/;
          isMatch = obj.test(trimmed);
        }
        if (!isMatch) {
          let isMatch1 = 8 === trimmed.length;
          if (isMatch1) {
            const obj2 = /^[a-z0-9]+$/i;
            isMatch1 = obj2.test(trimmed);
          }
          isMatch = isMatch1;
        }
        tmp = isMatch;
      }
      if (tmp) {
        closure_1_4(trimmed);
        closure_1_6(trimmed);
      }
    });
  }, items);
  handleSubmit(resetLoginOnClose[13])(() => {
    const tmp = callback();
    return () => {
      if (callback.isAuthenticated()) {
        const obj2 = appState(resetLoginOnClose[11]);
        const string = obj2.getString();
        string.then((result) => {
          const tmp2 = "" !== closure_1_3 && tmp === result;
          if (tmp2) {
            const obj = appState(resetLoginOnClose[11]);
            obj.copy("");
          }
        });
      } else {
        let obj = handleSubmit(resetLoginOnClose[12]);
        if (closure_1_2) {
          obj.loginReset();
        } else {
          obj.loginStatusReset();
        }
      }
    };
  });
  const items1 = [appState, callback];
  const effect = react.useEffect(() => {
    if (appState === AppStates.ACTIVE) {
      callback();
    }
  }, items1);
  const items2 = [value, handleSubmit];
  const effect1 = react.useEffect(() => {
    let isMatch = 6 === first.length;
    if (isMatch) {
      const obj = /^\d+$/;
      isMatch = obj.test(first);
    }
    if (!isMatch) {
      isMatch = 8 === first.length;
    }
    if (isMatch) {
      handleSubmit(first);
    }
  }, items2);
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({
    clear() {
      closure_1_4("");
    }
  }), []);
  let obj2 = { autoFocus: true, style: items3, textStyle: tmp.input, value, autoCapitalize: "none", maxLength: 8, textContentType: "oneTimeCode", onChangeText: tmp6, accessibilityLabel: intl.string(appState(resetLoginOnClose[15]).t.yO4lAM) };
  items3 = [tmp.inputContainer, style];
  const tmp18 = handleSubmit(resetLoginOnClose[16]);
  intl = appState(resetLoginOnClose[15]).intl;
  const items4 = [closure_9(tmp18, obj2), ];
  const items5 = [tmp.status, ];
  const obj3 = { style: items5, children: tmp17Result };
  items5[1] = Boolean(error) && tmp.minHeightGuard;
  Boolean(error) && tmp.minHeightGuard;
  const tmp10 = handleSubmit;
  const tmp19 = closure_6;
  if (showActivityIndicator) {
    const tmp2Result = tmp2(resetLoginOnClose[10]);
    const isThemeDarkResult = tmp2Result.isThemeDark(theme);
    const unsafe_rawColors = tmp10(tmp3[7]).unsafe_rawColors;
    const obj4 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500 };
    tmp17Result = closure_9(first1, obj4);
  } else {
    tmp17Result = null;
    if (null != error) {
      const obj5 = { style: tmp.error, variant: "text-md/medium", children: error };
      tmp17Result = closure_9(tmp2(tmp3[14]).Text, obj5);
    }
  }
  const obj6 = { children: items4 };
  items4[1] = closure_9(tmp19, obj3);
  return closure_11(closure_10, obj6);
}));
const result = size.fileFinishedImporting("modules/auth/native/components/MFACodeInput.tsx");

export default forwardRefResult;