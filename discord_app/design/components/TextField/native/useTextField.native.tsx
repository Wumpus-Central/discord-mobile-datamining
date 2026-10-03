// === Module 6101: useTextField ===

// Module 6101 (useTextField)
import c from "c" /* 576 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5779 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClear) => {
  const cResult = c.c(10);
  ({ value, onChange } = onClear);
  onClear = onClear.onClear;
  let str = first;
  if (first == null) {
    str = onClear.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp3 = _slicedToArray(noop.useState(str), 2);
  closure_2 = tmp3[1];
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
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  closure_3 = tmp5;
  if (cResult[2] === onClear) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === first) {
            let tmp7 = cResult[9];
          }
          return tmp7;
        }
      }
    }
    const obj2 = { value: first, setTextValue: tmp5, clear: tmp6, hasValue: tmp4 };
    cResult[5] = tmp6;
    cResult[6] = tmp4;
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
  ({ value, onChange } = onClear);
  onClear = onClear.onClear;
  let str = first;
  if (first == null) {
    str = onClear.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp = _slicedToArray(noop.useState(str), 2);
  closure_2 = tmp[1];
  if (first == null) {
    first = tmp[0];
  }
  const items = [onChange];
  const setTextValue = noop.useCallback((arg0) => {
    closure_2(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items);
  const items1 = [setTextValue, onClear];
  return {
    value: first,
    setTextValue,
    clear: noop.useCallback(() => {
      callback("");
      if (onClear != null) {
        onClear();
      }
    }, items1),
    hasValue: first.length > 0
  };
});
let closure_4 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TextField/native/useTextField.native.tsx");

export const useTextFieldState = tmp2;
export const useTextField = ReactCompilerGating.isReactCompilerEnabled() ? ((onClear, arg1) => {
  _require = onClear;
  const cResult = require("c").c(17);
  ref = noop.useRef(null);
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
      const result = setAccessibilityFocus.setAccessibilityFocus({ ref });
    };
    cResult[0] = onClear.onClear;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    if (cResult[3] === onClear) {
      let tmp4 = cResult[4];
    }
    const tmp7 = closure_4(tmp4);
    closure_2 = tmp7;
    if (cResult[5] !== tmp7) {
      const fn2 = function b() {
        return {
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
      };
      const items = [ref, tmp7];
      cResult[5] = tmp7;
      cResult[6] = fn2;
      cResult[7] = items;
      let tmp9 = items;
      let tmp8 = fn2;
    } else {
      tmp8 = cResult[6];
      tmp9 = cResult[7];
    }
    const imperativeHandle = noop.useImperativeHandle(arg1, tmp8, tmp9);
    const disabled = onClear.disabled;
    let focusable = !tmp12;
    if (!(undefined !== disabled && disabled)) {
      focusable = onClear.focusable;
    }
    if (cResult[8] === (undefined !== disabled && disabled)) {
      if (cResult[9] === onClear) {
        if (cResult[10] === tmp7.setTextValue) {
          if (cResult[11] === tmp13) {
            if (cResult[12] === focusable) {
              let tmp14 = cResult[13];
            }
            if (cResult[14] === tmp7) {
              if (cResult[15] === tmp14) {
                let tmp18 = cResult[16];
              }
              return tmp18;
            }
            const obj3 = { innerRef: ref, state: tmp7, inputProps: tmp14 };
            cResult[14] = tmp7;
            cResult[15] = tmp14;
            cResult[16] = obj3;
            tmp18 = obj3;
          }
        }
      }
    }
    const obj4 = {};
    const merged = Object.assign(onClear);
    obj4.onChange = undefined;
    obj4.onChangeText = tmp7.setTextValue;
    obj4.editable = !(undefined !== disabled && disabled);
    obj4.focusable = focusable;
    obj4["aria-disabled"] = undefined !== disabled && disabled;
    cResult[8] = undefined !== disabled && disabled;
    cResult[9] = onClear;
    cResult[10] = tmp7.setTextValue;
    cResult[11] = !(undefined !== disabled && disabled);
    cResult[12] = focusable;
    cResult[13] = obj4;
    tmp14 = obj4;
  }
  const obj5 = {};
  const merged1 = Object.assign(onClear);
  obj5.onClear = tmp3;
  cResult[2] = tmp3;
  cResult[3] = onClear;
  cResult[4] = obj5;
  tmp4 = obj5;
  let obj = require("c");
}) : ((onClear, arg1) => {
  const ref = noop.useRef(null);
  const items = [ref, onClear.onClear];
  let obj = {};
  const callback = noop.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.clear();
    }
    onClear = onClear.onClear;
    if (onClear != null) {
      onClear();
    }
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref });
  }, items);
  const merged = Object.assign(onClear);
  obj.onClear = callback;
  const tmp4 = closure_4(obj);
  closure_2 = tmp4;
  const items1 = [ref, tmp4];
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
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
  }), items1);
  const disabled = onClear.disabled;
  const obj2 = { innerRef: ref, state: tmp4, inputProps: null };
  const obj3 = {};
  const merged1 = Object.assign(onClear);
  obj3.onChange = undefined;
  obj3.onChangeText = tmp4.setTextValue;
  obj3.editable = !(undefined !== disabled && disabled);
  let focusable = !tmp6;
  if (!(undefined !== disabled && disabled)) {
    focusable = onClear.focusable;
  }
  obj3.focusable = focusable;
  obj3["aria-disabled"] = undefined !== disabled && disabled;
  obj2.inputProps = obj3;
  return obj2;
});