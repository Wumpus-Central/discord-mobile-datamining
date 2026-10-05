// === Module 6450: PhoneOrEmailInput ===

// Module 6450 (PhoneOrEmailInput)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 6451 */;
import useStableCallbackDefault from "useStableCallback" /* 6452 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, onChange;

let closure_3 = ["onChange", "alpha2", "countryCode", "onPressCountrySelector", "forceMode"];
let _slicedToArray = _slicedToArray_mod;
let _objectWithoutProperties = _objectWithoutProperties_mod;
let react = react_mod;
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((onChange, arg1) => {
  let alpha2;
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_5;
  let countryCode;
  let forceMode;
  let onPressCountrySelector;
  let ref;
  let tmp15;
  let tmp16;
  let tmp24;
  let tmp4;
  let tmp8;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(27);
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
    tmp9 = tmp12;
    tmp8 = onPressCountrySelector;
    class L {
      constructor(cResult) {
        closure_3(cResult);
        let str = "";
        const obj = PhoneOrEmailUtils;
        if (obj.shouldShowCountryCodeSelector(closure_1, cResult)) {
          str = closure_0;
        }
        if (closure_2 != null) {
          closure_2(cResult, str);
        }
      }
    }
    tmp4 = alpha2;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
    dependencyMap = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  closure_3 = ref(react.useState(""), 2)[1];
  ref(react.useState(""), 2);
  ref = react.useRef(null);
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
        }
      };
    };
    const items = [];
    cResult[7] = fn;
    cResult[8] = items;
    tmp16 = items;
    tmp15 = fn;
  } else {
    tmp15 = cResult[7];
    tmp16 = cResult[8];
  }
  const imperativeHandle = react.useImperativeHandle(arg1, tmp15, tmp16);
  require("PhoneOrEmailUtils");
  if (cResult[9] === countryCode) {
    if (cResult[10] === forceMode) {
      let tmp20;
      if (cResult[11] === tmp7) {
        tmp20 = cResult[12];
      }
      const tmp22 = useStableCallbackDefault(tmp20);
      _objectWithoutProperties = tmp22;
      if (cResult[13] !== tmp22) {
        class W {
          constructor() {
            const current = ref.current;
            let str;
            if (current != null) {
              str = current.getText();
            }
            if (str == null) {
              str = "";
            }
            closure_5(str);
          }
        }
        cResult[13] = tmp22;
        cResult[14] = W;
      } else {
        class W {
          constructor() {
            const current = ref.current;
            let str;
            if (current != null) {
              str = current.getText();
            }
            if (str == null) {
              str = "";
            }
            closure_5(str);
          }
        }
      }
      if (cResult[15] === countryCode) {
        let tmp28;
        class W {
          constructor() {
            const current = ref.current;
            let str;
            if (current != null) {
              str = current.getText();
            }
            if (str == null) {
              str = "";
            }
            closure_5(str);
          }
        }
        const effect = react.useEffect(W, tmp24);
        let combined;
        if (tmp19) {
          class W {
            constructor() {
              const current = ref.current;
              let str;
              if (current != null) {
                str = current.getText();
              }
              if (str == null) {
                str = "";
              }
              closure_5(str);
            }
          }
          const _HermesInternal = HermesInternal;
          let str = " ";
          combined = "" + tmp4 + " " + countryCode;
        }
        if (combined == null) {
          class W {
            constructor() {
              const current = ref.current;
              let str;
              if (current != null) {
                str = current.getText();
              }
              if (str == null) {
                str = "";
              }
              closure_5(str);
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor() {
              const current = ref.current;
              let str;
              if (current != null) {
                str = current.getText();
              }
              if (str == null) {
                str = "";
              }
              closure_5(str);
            }
          }
          const stringResult = obj3.string(require("intl").t.GwAW3k);
          cResult[18] = stringResult;
          tmp28 = stringResult;
        } else {
          class W {
            constructor() {
              const current = ref.current;
              let str;
              if (current != null) {
                str = current.getText();
              }
              if (str == null) {
                str = "";
              }
              closure_5(str);
            }
          }
        }
        if (cResult[19] === tmp8) {
          class W {
            constructor() {
              const current = ref.current;
              let str;
              if (current != null) {
                str = current.getText();
              }
              if (str == null) {
                str = "";
              }
              closure_5(str);
            }
          }
          if (cResult[22] === combined) {
            class W {
              constructor() {
                const current = ref.current;
                let str;
                if (current != null) {
                  str = current.getText();
                }
                if (str == null) {
                  str = "";
                }
                closure_5(str);
              }
            }
          }
          const SplitTextInput = tmp(6454).SplitTextInput;
          const merged = Object.assign(tmp9);
          const tmp36 = <SplitTextInput ref={ref} onChange={tmp20} leadingText={combined} leadingPressableProps={tmp30} />;
          cResult[22] = combined;
          cResult[23] = tmp20;
          cResult[24] = tmp30;
          cResult[25] = tmp9;
          cResult[26] = tmp36;
        }
        const obj5 = { onPress: tmp8, accessibilityRole: "button", accessibilityLabel: combined, accessibilityHint: tmp28 };
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
    constructor(cResult) {
      closure_3(cResult);
      let str = "";
      const obj = PhoneOrEmailUtils;
      if (obj.shouldShowCountryCodeSelector(closure_1, cResult)) {
        str = closure_0;
      }
      if (closure_2 != null) {
        closure_2(cResult, str);
      }
    }
  }
  cResult[9] = countryCode;
  cResult[10] = forceMode;
  cResult[11] = tmp7;
  cResult[12] = L;
  tmp20 = L;
}) : ((onChange, arg1) => {
  let _undefined;
  let alpha2;
  let c4;
  let closure_6;
  let countryCode;
  let tmp3;
  onChange = onChange.onChange;
  ({ alpha2, countryCode } = onChange);
  const onPressCountrySelector = onChange.onPressCountrySelector;
  const forceMode = onChange.forceMode;
  const merged = Object.assign(onChange, Object.assign({ onChange: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0 }));
  _slicedToArray = undefined;
  react = undefined;
  let obj = react;
  [tmp3, c4] = _slicedToArray(react.useState(""), 2);
  const tmp2 = _slicedToArray(react.useState(""), 2);
  const ref = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({
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
    }
  }), []);
  const items = [countryCode, forceMode, onChange];
  const obj2 = onChange(onPressCountrySelector[6]);
  const result = obj2.shouldShowCountryCodeSelector(forceMode, tmp3);
  const callback = react.useCallback((cResult) => {
    _undefined(cResult);
    let str = "";
    const obj = PhoneOrEmailUtils;
    if (obj.shouldShowCountryCodeSelector(forceMode, cResult)) {
      str = countryCode;
    }
    if (onChange != null) {
      onChange(cResult, str);
    }
  }, items);
  const tmp10 = countryCode(onPressCountrySelector[7])(callback);
  react = tmp10;
  const items1 = [countryCode, tmp10];
  const effect = react.useEffect(() => {
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
  const tmp6 = onChange;
  const tmp7 = onPressCountrySelector;
  if (result) {
    if (alpha2 == null) {
      alpha2 = "";
    }
    const _HermesInternal = HermesInternal;
    let str = " ";
    combined = "" + alpha2 + " " + countryCode;
  }
  const items2 = [combined, onPressCountrySelector];
  const memo = obj.useMemo(() => {
    let intl;
    let str;
    const obj = { onPress: onPressCountrySelector, accessibilityRole: "button", accessibilityLabel: str, accessibilityHint: intl.string(intl2.t.GwAW3k) };
    str = combined;
    if (combined == null) {
      str = "";
    }
    intl = intl2.intl;
    return obj;
  }, items2);
  const obj3 = { ref, onChange: callback, leadingText: combined, leadingPressableProps: memo };
  const SplitTextInput = tmp6(tmp7[9]).SplitTextInput;
  const merged1 = Object.assign(merged);
  return combined(SplitTextInput, obj3);
}));
let result = size.fileFinishedImporting("modules/phone/native/PhoneOrEmailInput.tsx");

export default forwardRefResult;