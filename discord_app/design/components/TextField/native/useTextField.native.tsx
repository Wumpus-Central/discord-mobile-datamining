// === Module 7561: useTextField ===

// Module 7561 (useTextField)
import util from "util" /* 1113 */;
import shared from "shared" /* 5250 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 6268 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function useTextFieldState(onClear) {
  ({ value, onChange } = onClear);
  onClear = onClear.onClear;
  let str = first1;
  if (first1 == null) {
    str = onClear.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp = _slicedToArray(isRevealed.useState(str), 2);
  _slicedToArray = tmp[1];
  [isRevealed] = isRevealed.useState(false);
  closure_4 = tmp4;
  let tmp5 = !isRevealed;
  if (isRevealed) {
    const disabled = onClear.disabled;
    let secureTextEntry = !disabled;
    if (!disabled) {
      secureTextEntry = onClear.revealable;
    }
    if (secureTextEntry) {
      secureTextEntry = onClear.secureTextEntry;
    }
    tmp5 = secureTextEntry;
  }
  if (!tmp5) {
    tmp4(false);
  }
  if (first1 == null) {
    first1 = tmp[0];
  }
  items = [onChange];
  const setTextValue = obj.useCallback((arg0) => {
    closure_2(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items);
  const items1 = [setTextValue, onClear];
  const items2 = [isRevealed];
  const callback1 = obj.useCallback(() => {
    callback("");
    if (onClear != null) {
      onClear();
    }
  }, items1);
  return {
    value: first1,
    setTextValue,
    clear: callback1,
    hasValue: first1.length > 0,
    isRevealed,
    toggleRevealed: isRevealed.useCallback(() => {
      closure_4(!first);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (first) {
        let stringResult = string(t.SHvAer);
      } else {
        stringResult = string(t.agstwg);
      }
      AccessibilityAnnouncer.announce(stringResult, "polite");
    }, items2)
  };
}
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TextField/native/useTextField.native.tsx");

export { useTextFieldState };
export function useTextField(merged, ref) {
  ref = noop.useRef(null);
  items = [ref, merged.onClear];
  let obj = {};
  const callback = noop.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.clear();
    }
    const onClear = merged.onClear;
    if (onClear != null) {
      onClear();
    }
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref });
  }, items);
  merged = Object.assign(merged);
  obj.onClear = callback;
  const tmp4 = useTextFieldState(obj);
  closure_2 = tmp4;
  const items1 = [ref, tmp4];
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
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
  const disabled = merged.disabled;
  const obj2 = { innerRef: ref, state: tmp4, inputProps: null };
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.onChange = undefined;
  obj3.onChangeText = tmp4.setTextValue;
  obj3.editable = !(undefined !== disabled && disabled);
  let focusable = !tmp6;
  if (!(undefined !== disabled && disabled)) {
    focusable = merged.focusable;
  }
  obj3.focusable = focusable;
  obj3["aria-disabled"] = undefined !== disabled && disabled;
  let tmp8 = merged.revealable && merged.secureTextEntry;
  if (tmp8) {
    const obj4 = { secureTextEntry: !tmp4.isRevealed };
    tmp8 = obj4;
  }
  const merged2 = Object.assign(tmp8);
  obj2.inputProps = obj3;
  return obj2;
}