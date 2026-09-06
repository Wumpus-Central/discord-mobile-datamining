// === Module 6614: useTextField ===

// Module 6614 (useTextField)
import setAccessibilityFocus from "setAccessibilityFocus" /* 4971 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TextField/native/useTextField.native.tsx");

export const useTextFieldState = function useTextFieldState(onClear) {
  ({ value, onChange } = onClear);
  onClear = onClear.onClear;
  let obj = noop;
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
  const setTextValue = obj.useCallback((arg0) => {
    obj(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items);
  const items1 = [setTextValue, onClear];
  obj = {
    value: first,
    setTextValue,
    clear: obj.useCallback(() => {
      callback1("");
      if (onClear != null) {
        onClear();
      }
    }, items1),
    hasValue: first.length > 0
  };
  return obj;
};
export const useTextField = function useTextField(onClear, arg1) {
  const ref = callback1.useRef(null);
  onClear = ref;
  const items = [ref, onClear.onClear];
  let state = {};
  const callback = callback1.useCallback(() => {
    const current = onClear.current;
    if (current != null) {
      current.clear();
    }
    onClear = onChange.onClear;
    if (onClear != null) {
      onClear();
    }
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref: onClear });
  }, items);
  const merged = Object.assign(onClear);
  state.onClear = callback;
  onChange = undefined;
  state = undefined;
  callback1 = undefined;
  ({ value, onChange } = state);
  onClear = state.onClear;
  let str = first;
  if (first == null) {
    str = state.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp4 = state(callback1.useState(str), 2);
  state = tmp4[1];
  if (first == null) {
    first = tmp4[0];
  }
  const items1 = [onChange];
  callback1 = state.useCallback((arg0) => {
    obj(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items1);
  const items2 = [callback1, onClear];
  state = {
    value: first,
    setTextValue: callback1,
    clear: state.useCallback(() => {
      callback1("");
      if (onClear != null) {
        onClear();
      }
    }, items2),
    hasValue: first.length > 0
  };
  const items3 = [ref, state];
  const imperativeHandle = state.useImperativeHandle(arg1, () => ({
    blur() {
      const current = onClear.current;
      if (current != null) {
        current.blur();
      }
    },
    focus() {
      const current = onClear.current;
      if (current != null) {
        current.focus();
      }
    },
    isFocused() {
      const current = onClear.current;
      let isFocusedResult;
      if (current != null) {
        isFocusedResult = current.isFocused();
      }
      return true === isFocusedResult;
    },
    getText() {
      return state.value;
    },
    setText(text) {
      if ("" === text) {
        state.clear();
      } else {
        const current = onClear.current;
        if (current != null) {
          const obj = { text };
          current.setNativeProps(obj);
        }
        state.setTextValue(text);
      }
    },
    measure(arg0) {
      const current = onClear.current;
      if (current != null) {
        current.measure(arg0);
      }
    },
    measureInWindow(arg0) {
      const current = onClear.current;
      if (current != null) {
        current.measureInWindow(arg0);
      }
    },
    measureLayout(arg0, arg1, arg2) {
      const current = onClear.current;
      if (current != null) {
        current.measureLayout(arg0, arg1, arg2);
      }
    }
  }), items3);
  const obj1 = { innerRef: ref, state, inputProps: null };
  const obj2 = {};
  const merged1 = Object.assign(onClear);
  obj2.onChange = undefined;
  obj2.onChangeText = state.setTextValue;
  obj2.editable = !onClear.isDisabled;
  const isDisabled = onClear.isDisabled;
  let focusable = !isDisabled;
  if (!isDisabled) {
    focusable = onClear.focusable;
  }
  obj2.focusable = focusable;
  obj2["aria-disabled"] = onClear.isDisabled;
  obj1.inputProps = obj2;
  return obj1;
};