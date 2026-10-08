// discord_app/modules/auth/native/components/MFACodeInput.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../../design/shared.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const AppStates = fn(1085).AppStates;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  inputContainer: { marginTop: 20, flexDirection: "row", justifyContent: "center", alignSelf: "stretch" },
  input: { flex: 1, maxWidth: 336, flexDirection: "row", alignSelf: "stretch" },
  status: { flex: 1, maxHeight: 20, alignItems: "center", marginTop: 8 },
  error: { color: nativeDefault.unsafe_rawColors.RED_400 },
  minHeightGuard: { minHeight: 20 },
};
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.unsafe_rawColors.RED_400 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/MFACodeInput.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MFACodeInput(appState) {
      const cResult = appState(error[9]).c(40);
      appState = appState.appState;
      const handleSubmit = appState.handleSubmit;
      ({ style, error } = appState);
      const showActivityIndicator = appState.showActivityIndicator;
      let resetLoginOnClose = appState.resetLoginOnClose;
      let tmp4 = undefined === resetLoginOnClose;
      if (!tmp4) {
        tmp4 = resetLoginOnClose;
      }
      resetLoginOnClose = tmp4;
      const tmp5 = closure_12();
      error = tmp5;
      let obj = appState(error[9]);
      const theme = appState(error[10]).useThemeContext().theme;
      const tmp6 = showActivityIndicator(resetLoginOnClose.useState(""), 2);
      const first = tmp6[0];
      closure_8 = tmp6[1];
      const tmp8 = showActivityIndicator(resetLoginOnClose.useState(null), 2);
      const first1 = tmp8[0];
      closure_10 = tmp8[1];
      if (cResult[0] !== first1) {
        const fn = function h() {
          const string = ClipboardUtils.getString();
          string.then((result) => {
            const trimmed = result.trim();
            let tmp = trimmed !== first1;
            if (tmp) {
              let isMatch = 6 === trimmed.length;
              if (isMatch) {
                isMatch = /^\d+$/.test(trimmed);
                const obj = /^\d+$/;
              }
              if (!isMatch) {
                let isMatch1 = 8 === trimmed.length;
                if (isMatch1) {
                  isMatch1 = /^[a-z0-9]+$/i.test(trimmed);
                  const obj2 = /^[a-z0-9]+$/i;
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
        let tmp10 = fn;
      } else {
        tmp10 = cResult[1];
      }
      closure_11 = tmp10;
      if (cResult[2] === first) {
        if (cResult[3] === tmp10) {
          if (cResult[4] === tmp4) {
            let tmp11 = cResult[5];
          }
          handleSubmit(tmp2[13])(tmp11);
          if (cResult[6] === appState) {
            if (cResult[7] === tmp10) {
              let tmp14 = cResult[8];
              let tmp15 = cResult[9];
            }
            const effect = obj3.useEffect(tmp14, tmp15);
            if (cResult[10] === first) {
              if (cResult[11] === handleSubmit) {
                let tmp17 = cResult[12];
                let tmp18 = cResult[13];
              }
              const effect1 = obj3.useEffect(tmp17, tmp18);
              class P {
                constructor() {
                  arr = closure_7;
                  isMatch = 6 === closure_7.length;
                  if (isMatch) {
                    obj = /^\d+$/;
                    isMatch = obj.test(arr);
                  }
                  if (!isMatch) {
                    num = 8;
                    isMatch = 8 === arr.length;
                  }
                  if (isMatch) {
                    tmp2 = handleSubmit;
                    tmp3 = handleSubmit(arr);
                  }
                  return;
                }
              }
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                class W {
                  constructor() {
                    obj = {
                      clear() {
                        closure_1_8("");
                      },
                    };
                    return obj;
                  }
                }
                const items = [];
                class P {
                  constructor() {
                    arr = closure_7;
                    isMatch = 6 === closure_7.length;
                    if (isMatch) {
                      obj = /^\d+$/;
                      isMatch = obj.test(arr);
                    }
                    if (!isMatch) {
                      num = 8;
                      isMatch = 8 === arr.length;
                    }
                    if (isMatch) {
                      tmp2 = handleSubmit;
                      tmp3 = handleSubmit(arr);
                    }
                    return;
                  }
                }
                cResult[15] = items;
                let tmp22 = items;
              } else {
                class W {
                  constructor() {
                    obj = {
                      clear() {
                        closure_1_8("");
                      },
                    };
                    return obj;
                  }
                }
                tmp22 = cResult[15];
              }
              const imperativeHandle = obj3.useImperativeHandle(appState.ref, W, tmp22);
              if (cResult[16] === error) {
                class W {
                  constructor() {
                    obj = {
                      clear() {
                        closure_1_8("");
                      },
                    };
                    return obj;
                  }
                }
              }
              function renderStatus() {
                if (showActivityIndicator) {
                  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
                  const obj3 = {
                    color: shared.isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500,
                  };
                  return options(hasOwnProperty, obj3);
                } else {
                  let tmp2 = null;
                  if (null != error) {
                    const obj = { style: error.error, variant: "text-md/medium", children: tmp };
                    tmp2 = options(Text_Text.Text, obj);
                  }
                  return tmp2;
                }
              }
              cResult[16] = error;
              cResult[17] = showActivityIndicator;
              cResult[18] = tmp5.error;
              cResult[19] = theme;
              cResult[20] = renderStatus;
            }
            class P {
              constructor() {
                arr = closure_7;
                isMatch = 6 === closure_7.length;
                if (isMatch) {
                  obj = /^\d+$/;
                  isMatch = obj.test(arr);
                }
                if (!isMatch) {
                  num = 8;
                  isMatch = 8 === arr.length;
                }
                if (isMatch) {
                  tmp2 = handleSubmit;
                  tmp3 = handleSubmit(arr);
                }
                return;
              }
            }
            const items1 = [first, handleSubmit];
            cResult[10] = first;
            cResult[11] = handleSubmit;
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
        closure_11();
        return () => {
          if (first.isAuthenticated()) {
            const string = appState(error[11]).getString();
            string.then((result) => {
              let tmp2 = "" !== closure_1_7;
              if (tmp2) {
                tmp2 = tmp === result;
              }
              if (tmp2) {
                appState(error[11]).copy("");
                const obj = appState(error[11]);
              }
            });
            const obj2 = appState(error[11]);
          } else {
            let obj = handleSubmit(error[12]);
            if (resetLoginOnClose) {
              obj.loginReset();
            } else {
              obj.loginStatusReset();
            }
          }
        };
      };
      cResult[2] = first;
      cResult[3] = tmp10;
      cResult[4] = tmp4;
      cResult[5] = fn2;
      tmp11 = fn2;
      const tmpResult = appState(error[10]);
    }
  : function MFACodeInput(appState) {
      appState = appState.appState;
      const handleSubmit = appState.handleSubmit;
      ({ error, resetLoginOnClose } = appState);
      ({ style, showActivityIndicator } = appState);
      if (resetLoginOnClose === undefined) {
        resetLoginOnClose = true;
      }
      value = undefined;
      noop = undefined;
      let tmp = closure_12();
      const tmp4 = value(noop.useState(""), 2);
      value = tmp4[0];
      noop = tmp6;
      const tmp7 = value(noop.useState(null), 2);
      const first1 = tmp7[0];
      closure_6 = tmp7[1];
      const items = [first1];
      const callback = noop.useCallback(() => {
        const string = ClipboardUtils.getString();
        string.then((result) => {
          const trimmed = result.trim();
          let tmp = trimmed !== first1;
          if (tmp) {
            let isMatch = 6 === trimmed.length;
            if (isMatch) {
              isMatch = /^\d+$/.test(trimmed);
              const obj = /^\d+$/;
            }
            if (!isMatch) {
              let isMatch1 = 8 === trimmed.length;
              if (isMatch1) {
                isMatch1 = /^[a-z0-9]+$/i.test(trimmed);
                const obj2 = /^[a-z0-9]+$/i;
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
        callback();
        return () => {
          if (callback.isAuthenticated()) {
            const string = appState(resetLoginOnClose[11]).getString();
            string.then((result) => {
              let tmp2 = "" !== closure_1_3;
              if (tmp2) {
                tmp2 = tmp === result;
              }
              if (tmp2) {
                appState(resetLoginOnClose[11]).copy("");
                const obj = appState(resetLoginOnClose[11]);
              }
            });
            const obj2 = appState(resetLoginOnClose[11]);
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
      const effect = noop.useEffect(() => {
        if (appState === AppStates.ACTIVE) {
          callback();
        }
      }, items1);
      const items2 = [value, handleSubmit];
      const effect1 = noop.useEffect(() => {
        let isMatch = 6 === first.length;
        if (isMatch) {
          isMatch = /^\d+$/.test(first);
          const obj = /^\d+$/;
        }
        if (!isMatch) {
          isMatch = 8 === first.length;
        }
        if (isMatch) {
          handleSubmit(first);
        }
      }, items2);
      const imperativeHandle = noop.useImperativeHandle(
        appState.ref,
        () => ({
          clear() {
            closure_1_4("");
          },
        }),
        [],
      );
      let obj2 = {
        autoFocus: true,
        style: null,
        textStyle: tmp.input,
        value,
        autoCapitalize: "none",
        maxLength: 8,
        textContentType: "oneTimeCode",
        onChangeText: tmp4[1],
        accessibilityLabel: null,
      };
      const items3 = [tmp.inputContainer, style];
      obj2.style = items3;
      let obj = appState(resetLoginOnClose[10]);
      const tmp10 = handleSubmit;
      const intl = appState(resetLoginOnClose[15]).intl;
      obj2.accessibilityLabel = intl.string(appState(resetLoginOnClose[15]).t.yO4lAM);
      const items4 = [closure_9(handleSubmit(resetLoginOnClose[16]), obj2)];
      const items5 = [tmp.status];
      const tmp18 = handleSubmit(resetLoginOnClose[16]);
      const tmp19 = closure_6;
      const obj3 = { style: items5, children: null };
      items5[1] = Boolean(error) && tmp.minHeightGuard;
      if (showActivityIndicator) {
        const tmp2Result = tmp2(tmp3[10]);
        tmp10(tmp3[7]).unsafe_rawColors;
        const isThemeDarkResult = tmp2(tmp3[10]).isThemeDark(obj.useThemeContext().theme);
        const unsafe_rawColors = first1;
        const obj4 = {
          color: tmp2(tmp3[10]).isThemeDark(obj.useThemeContext().theme)
            ? unsafe_rawColors.WHITE
            : unsafe_rawColors.PRIMARY_500,
        };
        closure_9(first1, obj4);
        const tmp23 = tmp2(tmp3[10]).isThemeDark(obj.useThemeContext().theme)
          ? unsafe_rawColors.WHITE
          : unsafe_rawColors.PRIMARY_500;
      } else {
        let tmp17Result2 = null;
        if (null != error) {
          const obj5 = { style: tmp.error, variant: "text-md/medium", children: error };
          tmp17Result2 = closure_9(tmp2(tmp3[14]).Text, obj5);
        }
        const obj6 = { children: null };
        obj3.children = tmp17Result2;
        items4[1] = closure_9(tmp19, obj3);
        obj6.children = items4;
        return closure_11(closure_10, obj6);
      }
      const tmp20 = Boolean(error) && tmp.minHeightGuard;
    };
