// === Module 8599: ? ===

// Module 8599
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c4 = importAllResult;
const forwardRefResult = importAllResult.forwardRef((onChange, ref) => {
  onChange = onChange.onChange;
  ({ alpha2, countryCode } = onChange);
  const onPressCountrySelector = onChange.onPressCountrySelector;
  const forceMode = onChange.forceMode;
  const merged = Object.assign(onChange, Object.create(null));
  let obj = importAllResult;
  [tmp3, c4] = forceMode(undefined.useState(""), 2);
  ref = importAllResult.useRef(null);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    blur() {
      const current = closure_5.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = closure_5.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = closure_5.current;
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
      callback(arg0);
      const current = closure_5.current;
      if (current != null) {
        current.setText(arg0);
      }
    },
    getText() {
      const current = closure_5.current;
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
      const current = closure_5.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = closure_5.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = closure_5.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }), []);
  const tmp2 = forceMode(undefined.useState(""), 2);
  const tmp6 = onChange;
  const tmp7 = onPressCountrySelector;
  const items = [countryCode, forceMode, onChange];
  const result = onChange(onPressCountrySelector[3]).shouldShowCountryCodeSelector(forceMode, tmp3);
  const callback = importAllResult.useCallback((value) => {
    _undefined(value);
    let str = "";
    if (obj.shouldShowCountryCodeSelector(forceMode, value)) {
      str = countryCode;
    }
    if (onChange != null) {
      onChange(value, str);
    }
  }, items);
  const tmp10 = countryCode(onPressCountrySelector[4])(callback);
  closure_6 = tmp10;
  const items1 = [countryCode, tmp10];
  const effect = importAllResult.useEffect(() => {
    const current = ref.current;
    let str;
    if (current != null) {
      str = current.getText();
    }
    if (str == null) {
      str = "";
    }
    callback(str);
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
    const obj = { onPress: onPressCountrySelector, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null };
    let str = combined;
    if (combined == null) {
      str = "";
    }
    obj[2] = str;
    const intl = onChange(onPressCountrySelector[5]).intl;
    obj[3] = intl.string(onChange(onPressCountrySelector[5]).t.GwAW3k);
    return obj;
  }, items2);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.ref = ref;
  obj.onChange = callback;
  obj.leadingText = combined;
  obj.leadingPressableProps = memo;
  return ref(tmp6(tmp7[6]).SplitTextInput, obj);
});
let result = require("obj132").fileFinishedImporting("modules/phone/native/PhoneOrEmailInput.tsx");

export default forwardRefResult;