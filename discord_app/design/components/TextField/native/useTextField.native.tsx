// === Module 6101: useTextField ===

// Module 6101 (useTextField)
import react2 from "react" /* 576 */;
import react_native from "react-native" /* 5779 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, onClear;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClear) => {
  let first;
  let onChange;
  let tmp5;
  let value;
  const obj = react2;
  const cResult = obj.c(10);
  ({ value, onChange } = onClear);
  onClear = onClear.onClear;
  let str = first;
  const useState = react.useState;
  if (first == null) {
    str = onClear.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp3 = _slicedToArray(useState(str), 2);
  let closure_2 = tmp3[1];
  if (first == null) {
    first = tmp3[0];
  }
  if (cResult[0] !== onChange) {
    const fn = function s(arg0) {
      closure_2(arg0);
      if (onChange != null) {
        onChange(arg0);
      }
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let closure_3 = tmp5;
  if (cResult[2] === onClear) {
    let tmp6;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      if (cResult[6] === first.length > 0) {
        if (cResult[7] === tmp5) {
          let tmp7;
          if (cResult[8] === first) {
            tmp7 = cResult[9];
          }
          return tmp7;
        }
      }
    }
    const obj2 = { value: first, setTextValue: tmp5, clear: tmp6, hasValue: first.length > 0 };
    cResult[5] = tmp6;
    cResult[6] = first.length > 0;
    cResult[7] = tmp5;
    cResult[8] = first;
    cResult[9] = obj2;
    tmp7 = obj2;
  }
  const fn2 = function h() {
    closure_3("");
    if (onClear != null) {
      onClear();
    }
  };
  cResult[2] = onClear;
  cResult[3] = tmp5;
  cResult[4] = fn2;
  tmp6 = fn2;
}) : ((onClear) => {
  let first;
  let onChange;
  let value;
  ({ value, onChange } = onClear);
  onClear = onClear.onClear;
  let str = first;
  const useState = react.useState;
  if (first == null) {
    str = onClear.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp = _slicedToArray(useState(str), 2);
  let closure_2 = tmp[1];
  if (first == null) {
    first = tmp[0];
  }
  const items = [onChange];
  const tmp2 = first.length > 0;
  const callback = react.useCallback((arg0) => {
    closure_2(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items);
  const items1 = [callback, onClear];
  const obj2 = {
    value: first,
    setTextValue: callback,
    clear: react.useCallback(() => {
      callback("");
      if (onClear != null) {
        onClear();
      }
    }, items1),
    hasValue: tmp2
  };
  return obj2;
});
let closure_4 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClear, arg1) => {
  let ref;
  let tmp3;
  _require = onClear;
  let obj = require("react");
  const cResult = obj.c(17);
  ref = react.useRef(null);
  if (cResult[0] !== onClear.onClear) {
    const fn = function l() {
      const current = ref.current;
      if (current != null) {
        current.clear();
      }
      onClear = onClear.onClear;
      if (onClear != null) {
        onClear();
      }
      const obj = react_native;
      const result = obj.setAccessibilityFocus({ ref });
    };
    cResult[0] = onClear.onClear;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    let tmp4;
    let tmp9;
    let tmp8;
    if (cResult[3] === onClear) {
      tmp4 = cResult[4];
    }
    const tmp7 = closure_4(tmp4);
    let closure_2 = tmp7;
    if (cResult[5] !== tmp7) {
      const fn2 = function b() {
        let obj = {
          blur() {
            const current = ref.current;
            if (current != null) {
              current.blur();
            }
          },
          focus() {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          },
          isFocused() {
            const current = ref.current;
            let isFocusedResult;
            if (current != null) {
              isFocusedResult = current.isFocused();
            }
            return true === isFocusedResult;
          },
          getText() {
            return closure_1_2.value;
          },
          setText(text) {
            if ("" === text) {
              closure_1_2.clear();
            } else {
              const current = ref.current;
              if (current != null) {
                const obj = { text };
                current.setNativeProps(obj);
              }
              closure_1_2.setTextValue(text);
            }
          },
          measure(arg0) {
            const current = ref.current;
            if (current != null) {
              current.measure(arg0);
            }
          },
          measureInWindow(arg0) {
            const current = ref.current;
            if (current != null) {
              current.measureInWindow(arg0);
            }
          },
          measureLayout(arg0, arg1, arg2) {
            const current = ref.current;
            if (current != null) {
              current.measureLayout(arg0, arg1, arg2);
            }
          }
        };
        return obj;
      };
      const items = [ref, tmp7];
      cResult[5] = tmp7;
      cResult[6] = fn2;
      cResult[7] = items;
      tmp9 = items;
      tmp8 = fn2;
    } else {
      tmp8 = cResult[6];
      tmp9 = cResult[7];
    }
    const imperativeHandle = react.useImperativeHandle(arg1, tmp8, tmp9);
    const disabled = onClear.disabled;
    if (cResult[8] === (undefined !== disabled && disabled)) {
      if (cResult[9] === onClear) {
        if (cResult[10] === tmp7.setTextValue) {
          if (cResult[11] === !(undefined !== disabled && disabled)) {
            let tmp15;
            if (cResult[12] === (!(undefined !== disabled && disabled) && onClear.focusable)) {
              tmp15 = cResult[13];
            }
            if (cResult[14] === tmp7) {
              let tmp19;
              if (cResult[15] === tmp15) {
                tmp19 = cResult[16];
              }
              return tmp19;
            }
            const obj3 = { innerRef: ref, state: tmp7, inputProps: tmp15 };
            cResult[14] = tmp7;
            cResult[15] = tmp15;
            cResult[16] = obj3;
            tmp19 = obj3;
          }
        }
      }
    }
    const obj4 = { onChange: undefined, onChangeText: tmp7.setTextValue, editable: !(undefined !== disabled && disabled), focusable: !(undefined !== disabled && disabled) && onClear.focusable, "aria-disabled": undefined !== disabled && disabled };
    const merged = Object.assign(onClear);
    cResult[8] = undefined !== disabled && disabled;
    cResult[9] = onClear;
    cResult[10] = tmp7.setTextValue;
    cResult[11] = !(undefined !== disabled && disabled);
    cResult[12] = !(undefined !== disabled && disabled) && onClear.focusable;
    cResult[13] = obj4;
    tmp15 = obj4;
  }
  const obj5 = { onClear: tmp3 };
  const merged1 = Object.assign(onClear);
  cResult[2] = tmp3;
  cResult[3] = onClear;
  cResult[4] = obj5;
  tmp4 = obj5;
}) : ((onClear, arg1) => {
  let callback;
  let obj3;
  const ref = react.useRef(null);
  const items = [ref, onClear.onClear];
  let obj = { onClear: callback };
  callback = react.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.clear();
    }
    onClear = onClear.onClear;
    if (onClear != null) {
      onClear();
    }
    const obj = react_native;
    const result = obj.setAccessibilityFocus({ ref });
  }, items);
  const merged = Object.assign(onClear);
  const tmp4 = closure_4(obj);
  let closure_2 = tmp4;
  const items1 = [ref, tmp4];
  const imperativeHandle = react.useImperativeHandle(arg1, () => {
    let obj = {
      blur() {
        const current = ref.current;
        if (current != null) {
          current.blur();
        }
      },
      focus() {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      },
      isFocused() {
        const current = ref.current;
        let isFocusedResult;
        if (current != null) {
          isFocusedResult = current.isFocused();
        }
        return true === isFocusedResult;
      },
      getText() {
        return closure_1_2.value;
      },
      setText(text) {
        if ("" === text) {
          closure_1_2.clear();
        } else {
          const current = ref.current;
          if (current != null) {
            const obj = { text };
            current.setNativeProps(obj);
          }
          closure_1_2.setTextValue(text);
        }
      },
      measure(arg0) {
        const current = ref.current;
        if (current != null) {
          current.measure(arg0);
        }
      },
      measureInWindow(arg0) {
        const current = ref.current;
        if (current != null) {
          current.measureInWindow(arg0);
        }
      },
      measureLayout(arg0, arg1, arg2) {
        const current = ref.current;
        if (current != null) {
          current.measureLayout(arg0, arg1, arg2);
        }
      }
    };
    return obj;
  }, items1);
  const disabled = onClear.disabled;
  const obj2 = { innerRef: ref, state: tmp4, inputProps: obj3 };
  obj3 = { onChange: undefined, onChangeText: tmp4.setTextValue, editable: !(undefined !== disabled && disabled), focusable: !(undefined !== disabled && disabled) && onClear.focusable, "aria-disabled": undefined !== disabled && disabled };
  const merged1 = Object.assign(onClear);
  return obj2;
});
let result = size.fileFinishedImporting("design/components/TextField/native/useTextField.native.tsx");

export const useTextFieldState = tmp2;
export const useTextField = tmp3;