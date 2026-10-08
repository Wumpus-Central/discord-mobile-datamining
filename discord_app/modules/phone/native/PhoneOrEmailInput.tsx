// discord_app/modules/phone/native/PhoneOrEmailInput.tsx
import util from "../../../intl/index.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["onChange", "alpha2", "countryCode", "onPressCountrySelector", "forceMode", "ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/phone/native/PhoneOrEmailInput.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PhoneOrEmailInput(onChange) {
  const cResult = require("c").c(28);
  if (cResult[0] !== onChange) {
    onChange = onChange.onChange;
    dependencyMap = onChange;
    ({ alpha2, countryCode } = onChange);
    _require = countryCode;
    ({ onPressCountrySelector, forceMode } = onChange);
    closure_1 = forceMode;
    const tmp13 = _objectWithoutProperties(onChange, closure_3);
    cResult[0] = onChange;
    cResult[1] = alpha2;
    cResult[2] = countryCode;
    cResult[3] = forceMode;
    cResult[4] = onChange;
    cResult[5] = onPressCountrySelector;
    cResult[6] = onChange.ref;
    class E {
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
    cResult[7] = tmp13;
    let tmp9 = ref;
    const tmp7 = onChange;
  } else {
    _require = cResult[2];
    closure_1 = cResult[3];
    dependencyMap = cResult[4];
    tmp9 = cResult[6];
  }
  const obj = require("c");
  const tmp = _require;
  closure_3 = ref1(noop.useState(""), 2)[1];
  const tmp14 = ref1(noop.useState(""), 2);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = { blur() { ... }, focus() { ... }, isFocused() { ... }, setText() { ... }, getText() { ... }, measure() { ... }, measureInWindow() { ... }, measureLayout() { ... } };
        return obj;
      }
    }
    const items = [];
    cResult[8] = S;
    cResult[9] = items;
    let tmp17 = items;
  } else {
    class S {
      constructor() {
        obj = { blur() { ... }, focus() { ... }, isFocused() { ... }, setText() { ... }, getText() { ... }, measure() { ... }, measureInWindow() { ... }, measureLayout() { ... } };
        return obj;
      }
    }
    tmp17 = cResult[9];
  }
  const imperativeHandle = noop.useImperativeHandle(tmp9, S, tmp17);
  tmp(6636);
  if (cResult[10] === countryCode) {
    class S {
      constructor() {
        obj = { blur() { ... }, focus() { ... }, isFocused() { ... }, setText() { ... }, getText() { ... }, measure() { ... }, measureInWindow() { ... }, measureLayout() { ... } };
        return obj;
      }
    }
  }
  class E {
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
  cResult[10] = countryCode;
  cResult[11] = forceMode;
  cResult[12] = tmp7;
  cResult[13] = E;
  ref1 = noop.useRef(null);
}) : (function PhoneOrEmailInput(onChange) {
  onChange = onChange.onChange;
  ({ alpha2, countryCode } = onChange);
  const onPressCountrySelector = onChange.onPressCountrySelector;
  const forceMode = onChange.forceMode;
  const merged = Object.assign(onChange, Object.assign({ onChange: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0, ref: 0 }));
  _slicedToArray = undefined;
  noop = undefined;
  [tmp3, c4] = noop.useState("");
  const ref = noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(onChange.ref, () => ({
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
    const obj = { onPress: onPressCountrySelector, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null };
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
});