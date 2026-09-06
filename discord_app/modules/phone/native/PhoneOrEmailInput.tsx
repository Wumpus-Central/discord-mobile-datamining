// discord_app/modules/phone/native/PhoneOrEmailInput.tsx
import util from "../../../intl/index.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/phone/native/PhoneOrEmailInput.tsx");

export default noop.forwardRef((onChange, arg1) => {
  onChange = onChange.onChange;
  ({ alpha2, countryCode } = onChange);
  const onPressCountrySelector = onChange.onPressCountrySelector;
  const forceMode = onChange.forceMode;
  const merged = Object.assign(
    onChange,
    Object.assign({ onChange: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0 }),
  );
  noop = undefined;
  let obj = noop;
  [tmp3, c4] = forceMode(noop.useState(""), 2);
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
  const tmp2 = forceMode(noop.useState(""), 2);
  const tmp6 = onChange;
  const tmp7 = onPressCountrySelector;
  const items = [countryCode, forceMode, onChange];
  const result = onChange(onPressCountrySelector[3]).shouldShowCountryCodeSelector(forceMode, tmp3);
  const callback = noop.useCallback((value) => {
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
  obj = {};
  const merged1 = Object.assign(merged);
  obj.ref = ref;
  obj.onChange = callback;
  obj.leadingText = combined;
  obj.leadingPressableProps = memo;
  return ref(tmp6(tmp7[6]).SplitTextInput, obj);
});
