// discord_app/design/components/TextField/native/useTextField.native.tsx
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("design/components/TextField/native/useTextField.native.tsx");

export const useTextFieldState = function useTextFieldState(onClear) {
  ({ value, onChange } = onClear);
  onClear = onClear.onClear;
  let obj = callback;
  let str = first;
  if (first == null) {
    str = onClear.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp = callback(callback.useState(str), 2);
  callback = tmp[1];
  if (first == null) {
    first = tmp[0];
  }
  const items = [onChange];
  callback = obj.useCallback((arg0) => {
    obj(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items);
  const items1 = [callback, onClear];
  obj = {
    value: first,
    setTextValue: callback,
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
export const useTextField = function useTextField(onClear, ref) {
  onChange = onClear;
  let obj = callback1;
  ref = callback1.useRef(null);
  onClear = ref;
  const items = [ref, onClear.onClear];
  obj = {};
  const callback = callback1.useCallback(() => {
    const current = onClear.current;
    if (current != null) {
      current.clear();
    }
    onClear = onChange.onClear;
    if (onClear != null) {
      onClear();
    }
    const result = onChange(onClear[2]).setAccessibilityFocus({ ref: onClear });
  }, items);
  const merged = Object.assign(onClear);
  obj.onClear = callback;
  onChange = undefined;
  onClear = undefined;
  obj = undefined;
  callback1 = undefined;
  ({ value, onChange } = obj);
  onClear = obj.onClear;
  let str = first;
  if (first == null) {
    str = obj.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp4 = obj(callback1.useState(str), 2);
  obj = tmp4[1];
  if (first == null) {
    first = tmp4[0];
  }
  const items1 = [onChange];
  callback1 = obj.useCallback((arg0) => {
    obj(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items1);
  const items2 = [callback1, onClear];
  obj = {
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
  const items3 = [ref, obj];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
    blur() {
      const current = closure_1.current;
      if (current != null) {
        current.blur();
      }
    },
    focus() {
      const current = closure_1.current;
      if (current != null) {
        current.focus();
      }
    },
    isFocused() {
      const current = closure_1.current;
      let isFocusedResult;
      if (current != null) {
        isFocusedResult = current.isFocused();
      }
      return true === isFocusedResult;
    },
    getText() {
      return closure_2.value;
    },
    setText(arg0) {
      if ("" === arg0) {
        closure_2.clear();
      } else {
        const current = closure_1.current;
        if (current != null) {
          obj = { text: null };
          obj[0] = arg0;
          current.setNativeProps(obj);
        }
        closure_2.setTextValue(arg0);
      }
    },
    measure(arg0) {
      const current = closure_1.current;
      if (current != null) {
        current.measure(arg0);
      }
    },
    measureInWindow(arg0) {
      const current = closure_1.current;
      if (current != null) {
        current.measureInWindow(arg0);
      }
    },
    measureLayout(arg0, arg1, arg2) {
      const current = closure_1.current;
      if (current != null) {
        current.measureLayout(arg0, arg1, arg2);
      }
    }
  }), items3);
  obj1 = { innerRef: ref, state: obj, inputProps: null };
  const obj2 = {};
  const merged1 = Object.assign(onClear);
  obj2.onChange = undefined;
  obj2.onChangeText = obj.setTextValue;
  obj2.editable = !onClear.isDisabled;
  const isDisabled = onClear.isDisabled;
  let focusable = !isDisabled;
  if (!isDisabled) {
    focusable = onClear.focusable;
  }
  obj2.focusable = focusable;
  obj2["aria-disabled"] = onClear.isDisabled;
  obj1[2] = obj2;
  return obj1;
};