// discord_app/modules/phone/native/PhoneOrEmailInput.tsx
import util from "../../../intl/index.native.tsx";
import useStableCallbackDefault from "../../../hooks/useStableCallback.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["onChange", "alpha2", "countryCode", "onPressCountrySelector", "forceMode"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/phone/native/PhoneOrEmailInput.tsx");

export default noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onChange, arg1) => {
        const cResult = require("c").c(27);
        if (cResult[0] !== onChange) {
          onChange = onChange.onChange;
          dependencyMap = onChange;
          ({ alpha2, countryCode } = onChange);
          _require = countryCode;
          ({ onPressCountrySelector, forceMode } = onChange);
          importDefault = forceMode;
          const tmp12 = _objectWithoutProperties(onChange, closure_3);
          cResult[0] = onChange;
          cResult[1] = alpha2;
          cResult[2] = countryCode;
          cResult[3] = forceMode;
          cResult[4] = onChange;
          cResult[5] = onPressCountrySelector;
          cResult[6] = tmp12;
          let tmp9 = tmp12;
          let tmp8 = onPressCountrySelector;
          class L {
            constructor(arg0) {
              tmp = closure_3(onChange);
              obj = closure_0(closure_2[6]);
              str = "";
              if (obj.shouldShowCountryCodeSelector(closure_1, onChange)) {
                str = closure_0;
              }
              if (closure_2 != null) {
                tmp2 = closure_2(onChange, str);
              }
              return;
            }
          }
          let tmp4 = alpha2;
        } else {
          tmp4 = cResult[1];
          _require = cResult[2];
          importDefault = cResult[3];
          dependencyMap = cResult[4];
          tmp8 = cResult[5];
          tmp9 = cResult[6];
        }
        const obj = require("c");
        closure_3 = ref(noop.useState(""), 2)[1];
        ref = noop.useRef(null);
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function p() {
            return {
              blur() {
                const current = ref.current;
                let blurResult;
                if (current != null) {
                  blurResult = current.blur();
                }
                return blurResult;
              },
              focus() {
                const current = ref.current;
                let focusResult;
                if (current != null) {
                  focusResult = current.focus();
                }
                return focusResult;
              },
              isFocused() {
                const current = ref.current;
                let flag;
                if (current != null) {
                  flag = current.isFocused();
                }
                if (flag == null) {
                  flag = false;
                }
                return flag;
              },
              setText(arg0) {
                closure_1_3(arg0);
                const current = ref.current;
                if (current != null) {
                  current.setText(arg0);
                }
              },
              getText() {
                const current = ref.current;
                let str;
                if (current != null) {
                  str = current.getText();
                }
                if (str == null) {
                  str = "";
                }
                return str;
              },
              measure(arg0) {
                const current = ref.current;
                let measureResult;
                if (current != null) {
                  measureResult = current.measure(arg0);
                }
                return measureResult;
              },
              measureInWindow(arg0) {
                const current = ref.current;
                let measureInWindowResult;
                if (current != null) {
                  measureInWindowResult = current.measureInWindow(arg0);
                }
                return measureInWindowResult;
              },
              measureLayout(arg0, arg1, arg2) {
                const current = ref.current;
                let measureLayoutResult;
                if (current != null) {
                  measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                }
                return measureLayoutResult;
              },
            };
          };
          const items = [];
          cResult[7] = fn;
          cResult[8] = items;
          let tmp16 = items;
          let tmp15 = fn;
        } else {
          tmp15 = cResult[7];
          tmp16 = cResult[8];
        }
        const imperativeHandle = noop.useImperativeHandle(arg1, tmp15, tmp16);
        require("PhoneOrEmailUtils");
        if (cResult[9] === countryCode) {
          if (cResult[10] === forceMode) {
            if (cResult[11] === tmp7) {
              let tmp20 = cResult[12];
            }
            const tmp22 = useStableCallbackDefault(tmp20);
            _objectWithoutProperties = tmp22;
            if (cResult[13] !== tmp22) {
              class W {
                constructor() {
                  current = closure_4.current;
                  str = undefined;
                  tmp = closure_5;
                  if (current != null) {
                    str = current.getText();
                  }
                  if (str == null) {
                    str = "";
                  }
                  tmpResult = tmp(str);
                  return;
                }
              }
              cResult[13] = tmp22;
              cResult[14] = W;
            } else {
              class W {
                constructor() {
                  current = closure_4.current;
                  str = undefined;
                  tmp = closure_5;
                  if (current != null) {
                    str = current.getText();
                  }
                  if (str == null) {
                    str = "";
                  }
                  tmpResult = tmp(str);
                  return;
                }
              }
            }
            if (cResult[15] === countryCode) {
              class W {
                constructor() {
                  current = closure_4.current;
                  str = undefined;
                  tmp = closure_5;
                  if (current != null) {
                    str = current.getText();
                  }
                  if (str == null) {
                    str = "";
                  }
                  tmpResult = tmp(str);
                  return;
                }
              }
              const effect = noop.useEffect(W, tmp24);
              let combined;
              if (tmp19) {
                class W {
                  constructor() {
                    current = closure_4.current;
                    str = undefined;
                    tmp = closure_5;
                    if (current != null) {
                      str = current.getText();
                    }
                    if (str == null) {
                      str = "";
                    }
                    tmpResult = tmp(str);
                    return;
                  }
                }
                const _HermesInternal = HermesInternal;
                combined = "" + tmp4 + " " + countryCode;
              }
              if (combined == null) {
                class W {
                  constructor() {
                    current = closure_4.current;
                    str = undefined;
                    tmp = closure_5;
                    if (current != null) {
                      str = current.getText();
                    }
                    if (str == null) {
                      str = "";
                    }
                    tmpResult = tmp(str);
                    return;
                  }
                }
              }
              const _Symbol = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                class W {
                  constructor() {
                    current = closure_4.current;
                    str = undefined;
                    tmp = closure_5;
                    if (current != null) {
                      str = current.getText();
                    }
                    if (str == null) {
                      str = "";
                    }
                    tmpResult = tmp(str);
                    return;
                  }
                }
                const stringResult = obj3.string(tmp(1126).t.GwAW3k);
                cResult[18] = stringResult;
                const tmp28 = stringResult;
              } else {
                class W {
                  constructor() {
                    current = closure_4.current;
                    str = undefined;
                    tmp = closure_5;
                    if (current != null) {
                      str = current.getText();
                    }
                    if (str == null) {
                      str = "";
                    }
                    tmpResult = tmp(str);
                    return;
                  }
                }
              }
              if (cResult[19] === tmp8) {
                class W {
                  constructor() {
                    current = closure_4.current;
                    str = undefined;
                    tmp = closure_5;
                    if (current != null) {
                      str = current.getText();
                    }
                    if (str == null) {
                      str = "";
                    }
                    tmpResult = tmp(str);
                    return;
                  }
                }
                if (cResult[22] === combined) {
                  class W {
                    constructor() {
                      current = closure_4.current;
                      str = undefined;
                      tmp = closure_5;
                      if (current != null) {
                        str = current.getText();
                      }
                      if (str == null) {
                        str = "";
                      }
                      tmpResult = tmp(str);
                      return;
                    }
                  }
                }
                const obj4 = {};
                const merged = Object.assign(tmp9);
                obj4.ref = ref;
                obj4.onChange = tmp20;
                obj4.leadingText = combined;
                obj4.leadingPressableProps = tmp30;
                const tmp36 = jsx(tmp(6461).SplitTextInput, {});
                cResult[22] = combined;
                cResult[23] = tmp20;
                cResult[24] = tmp30;
                cResult[25] = tmp9;
                cResult[26] = tmp36;
              }
              const obj5 = {
                onPress: tmp8,
                accessibilityRole: "button",
                accessibilityLabel: combined,
                accessibilityHint: tmp28,
              };
              cResult[19] = tmp8;
              cResult[20] = combined;
              cResult[21] = obj5;
            }
            const items1 = [countryCode, tmp22];
            cResult[15] = countryCode;
            cResult[16] = tmp22;
            cResult[17] = items1;
            tmp24 = items1;
          }
        }
        class L {
          constructor(arg0) {
            tmp = closure_3(onChange);
            obj = closure_0(closure_2[6]);
            str = "";
            if (obj.shouldShowCountryCodeSelector(closure_1, onChange)) {
              str = closure_0;
            }
            if (closure_2 != null) {
              tmp2 = closure_2(onChange, str);
            }
            return;
          }
        }
        cResult[9] = countryCode;
        cResult[10] = forceMode;
        cResult[11] = tmp7;
        cResult[12] = L;
        tmp20 = L;
        const tmp13 = ref(noop.useState(""), 2);
      }
    : (onChange, arg1) => {
        onChange = onChange.onChange;
        ({ alpha2, countryCode } = onChange);
        const onPressCountrySelector = onChange.onPressCountrySelector;
        const forceMode = onChange.forceMode;
        const merged = Object.assign(
          onChange,
          Object.assign({ onChange: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0 }),
        );
        _slicedToArray = undefined;
        noop = undefined;
        [tmp3, c4] = noop.useState("");
        const ref = noop.useRef(null);
        const imperativeHandle = noop.useImperativeHandle(
          arg1,
          () => ({
            blur() {
              const current = ref.current;
              let blurResult;
              if (current != null) {
                blurResult = current.blur();
              }
              return blurResult;
            },
            focus() {
              const current = ref.current;
              let focusResult;
              if (current != null) {
                focusResult = current.focus();
              }
              return focusResult;
            },
            isFocused() {
              const current = ref.current;
              let flag;
              if (current != null) {
                flag = current.isFocused();
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            },
            setText(arg0) {
              _undefined(arg0);
              const current = ref.current;
              if (current != null) {
                current.setText(arg0);
              }
            },
            getText() {
              const current = ref.current;
              let str;
              if (current != null) {
                str = current.getText();
              }
              if (str == null) {
                str = "";
              }
              return str;
            },
            measure(arg0) {
              const current = ref.current;
              let measureResult;
              if (current != null) {
                measureResult = current.measure(arg0);
              }
              return measureResult;
            },
            measureInWindow(arg0) {
              const current = ref.current;
              let measureInWindowResult;
              if (current != null) {
                measureInWindowResult = current.measureInWindow(arg0);
              }
              return measureInWindowResult;
            },
            measureLayout(arg0, arg1, arg2) {
              const current = ref.current;
              let measureLayoutResult;
              if (current != null) {
                measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
              }
              return measureLayoutResult;
            },
          }),
          [],
        );
        let obj = noop;
        const tmp2 = _slicedToArray(noop.useState(""), 2);
        const tmp6 = onChange;
        const tmp7 = onPressCountrySelector;
        const items = [countryCode, forceMode, onChange];
        const result = onChange(onPressCountrySelector[6]).shouldShowCountryCodeSelector(forceMode, tmp3);
        const callback = noop.useCallback((cResult) => {
          _undefined(cResult);
          let str = "";
          if (obj.shouldShowCountryCodeSelector(forceMode, cResult)) {
            str = countryCode;
          }
          if (onChange != null) {
            onChange(cResult, str);
          }
        }, items);
        const tmp10 = countryCode(onPressCountrySelector[7])(callback);
        noop = tmp10;
        const items1 = [countryCode, tmp10];
        const effect = noop.useEffect(() => {
          const current = ref.current;
          let str;
          if (current != null) {
            str = current.getText();
          }
          if (str == null) {
            str = "";
          }
          closure_6(str);
        }, items1);
        let combined;
        if (result) {
          if (alpha2 == null) {
            alpha2 = "";
          }
          const _HermesInternal = HermesInternal;
          combined = "" + alpha2 + " " + countryCode;
        }
        const items2 = [combined, onPressCountrySelector];
        const memo = obj.useMemo(() => {
          const obj = {
            onPress: onPressCountrySelector,
            accessibilityRole: "button",
            accessibilityLabel: null,
            accessibilityHint: null,
          };
          let str = combined;
          if (combined == null) {
            str = "";
          }
          obj.accessibilityLabel = str;
          const intl = util.intl;
          obj.accessibilityHint = intl.string(util.t.GwAW3k);
          return obj;
        }, items2);
        const obj3 = {};
        const merged1 = Object.assign(merged);
        obj3.ref = ref;
        obj3.onChange = callback;
        obj3.leadingText = combined;
        obj3.leadingPressableProps = memo;
        return combined(tmp6(tmp7[9]).SplitTextInput, obj3);
      },
);
