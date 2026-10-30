// === Module 7084: useTextField ===

// Module 7084 (useTextField)
import setAccessibilityFocus from "setAccessibilityFocus" /* 6016 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TextField/native/useTextField.native.tsx");

export function useTextFieldState(onClear) {
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
    obj3(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items);
  const items1 = [setTextValue, onClear];
  return {
    value: first,
    setTextValue,
    clear: noop.useCallback(() => {
      callback1("");
      if (onClear != null) {
        onClear();
      }
    }, items1),
    hasValue: first.length > 0
  };
}
export function useTextField(merged, ref) {
  ref = callback1.useRef(null);
  const items = [ref, merged.onClear];
  const obj2 = {};
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
  merged = Object.assign(merged);
  obj2.onClear = callback;
  onChange = undefined;
  let obj3;
  callback1 = undefined;
  ({ value, onChange } = obj2);
  let onClear = obj2.onClear;
  let str = first;
  if (first == null) {
    str = obj2.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp4 = obj3(callback1.useState(str), 2);
  obj3 = tmp4[1];
  if (first == null) {
    first = tmp4[0];
  }
  const items1 = [onChange];
  callback1 = obj.useCallback((arg0) => {
    obj3(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items1);
  const items2 = [callback1, onClear];
  obj3 = {
    value: first,
    setTextValue: callback1,
    clear: obj.useCallback(() => {
      callback1("");
      if (onClear != null) {
        onClear();
      }
    }, items2),
    hasValue: first.length > 0
  };
  const items3 = [ref, obj3];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
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
      return obj3.value;
    },
    setText(text) {
      if ("" === text) {
        obj3.clear();
      } else {
        const current = onClear.current;
        if (current != null) {
          const obj = { text };
          current.setNativeProps(obj);
        }
        obj3.setTextValue(text);
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
  const disabled = merged.disabled;
  const obj4 = { innerRef: ref, state: obj3, inputProps: null };
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.onChange = undefined;
  obj5.onChangeText = obj3.setTextValue;
  obj5.editable = !(undefined !== disabled && disabled);
  let focusable = !tmp8;
  if (!(undefined !== disabled && disabled)) {
    focusable = merged.focusable;
  }
  obj5.focusable = focusable;
  obj5["aria-disabled"] = undefined !== disabled && disabled;
  obj4.inputProps = obj5;
  return obj4;
}