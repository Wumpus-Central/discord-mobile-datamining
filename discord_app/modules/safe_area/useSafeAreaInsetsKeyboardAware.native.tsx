// === Module 5737: useSafeAreaInsetsKeyboardAware ===

// Module 5737 (useSafeAreaInsetsKeyboardAware)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 2020 */;
import useKeyboardType from "useKeyboardType" /* 5327 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5738 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1495 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx");

export default function useSafeAreaInsetsKeyboardAware() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.isKeyboardAwareOnIOS;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = obj.isKeyboardAwareOnAndroid;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = obj.includeCustomKeyboardHeight;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let flag4 = obj.includeKeyboardHeight;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let tmp = flag2(flag3[3])();
  noop = tmp;
  const appEntryKey = flag(flag3[4]).useAppEntryKey();
  items = [appEntryKey, flag3, flag, flag2];
  const callback = noop.useCallback(() => {
    if (obj.isIOS()) {
      if (!flag) {
        return 0;
      }
    }
    obj = PlatformUtils;
    if (tmpResult.isAndroid()) {
      if (!flag2) {
        return 0;
      }
    }
    tmpResult = PlatformUtils;
    let systemKeyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight({ appEntryKey });
    if (0 === systemKeyboardHeight) {
      const keyboardType = useKeyboardType.getKeyboardType(appEntryKey);
      let num3 = 0;
      if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
        num3 = 0;
        if (flag3) {
          num3 = useCustomKeyboardHeight.getCustomKeyboardHeight(appEntryKey);
          const tmpResult6 = useCustomKeyboardHeight;
        }
      }
      systemKeyboardHeight = num3;
      const tmpResult5 = useKeyboardType;
    }
    return systemKeyboardHeight;
  }, items);
  const items1 = [callback, flag4];
  const callback1 = noop.useCallback(() => {
    const tmp = callback();
    let tmp2 = null;
    if (tmp > 0) {
      let num = 0;
      if (flag4) {
        num = tmp;
      }
      tmp2 = num;
    }
    return tmp2;
  }, items1);
  const ref = noop.useRef(callback1());
  const tmp6 = flag4(noop.useState(ref.current), 2);
  const first = tmp6[0];
  closure_10 = tmp6[1];
  const items2 = [callback1];
  const layoutEffect = noop.useLayoutEffect(() => {
    let tmp = callback1();
    if (ref.current !== tmp) {
      ref.current = tmp;
      closure_10(tmp);
    }
    return subscribeToKeyboardUIStore(function maybeUpdateKeyboardInset() {
      const tmp = callback1();
      if (ref.current !== tmp) {
        ref.current = tmp;
        closure_1_10(tmp);
      }
    });
  }, items2);
  const obj3 = { insets: null };
  const items3 = [tmp, first];
  obj3.insets = noop.useMemo(() => {
    if (null != first) {
      const obj = {};
      const merged = Object.assign(closure_4);
      obj.bottom = tmp;
      let tmp2 = obj;
    } else {
      tmp2 = closure_4;
    }
    return tmp2;
  }, items3);
  return obj3;
};