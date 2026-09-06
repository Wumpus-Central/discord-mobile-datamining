// === Module 6981: useSafeAreaInsetsKeyboardAware ===

// Module 6981 (useSafeAreaInsetsKeyboardAware)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1877 */;
import useKeyboardType from "useKeyboardType" /* 4427 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5579 */;
import useKeyboardDuration from "useKeyboardDuration" /* 5580 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5581 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1479 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx");

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
  let callback;
  c6 = undefined;
  const tmp2 = flag2(flag3[5])();
  const appEntryKey = flag(flag3[6]).useAppEntryKey();
  const items = [appEntryKey, flag3, flag, flag2];
  callback = callback.useCallback(() => {
    let obj = PlatformUtils;
    if (obj.isIOS()) {
      if (!flag) {
        return 0;
      }
    }
    let tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      if (!flag2) {
        return 0;
      }
    }
    tmpResult = useSystemKeyboardHeight;
    obj = { appEntryKey };
    let systemKeyboardHeight = tmpResult.getSystemKeyboardHeight(obj);
    if (0 === systemKeyboardHeight) {
      const keyboardType = useKeyboardType.getKeyboardType(appEntryKey);
      let num3 = 0;
      if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
        num3 = 0;
        if (flag3) {
          num3 = useCustomKeyboardHeight.getCustomKeyboardHeight(appEntryKey);
          const tmpResult2 = useCustomKeyboardHeight;
        }
      }
      systemKeyboardHeight = num3;
      const tmpResult1 = useKeyboardType;
    }
    return systemKeyboardHeight;
  }, items);
  const ref = callback.useRef(callback());
  const obj2 = flag(flag3[6]);
  let tmp = flag3;
  const tmp3 = flag;
  [tmp8, c6] = appEntryKey(callback.useState(ref.current), 2);
  const items1 = [callback, flag, flag2];
  const effect = callback.useEffect(() => subscribeToKeyboardUIStore(() => {
    const tmp = callback();
    if (ref.current !== tmp) {
      ref.current = tmp;
      closure_1_6(tmp);
    }
  }), items1);
  let isAndroidResult = !flag;
  if (flag) {
    isAndroidResult = !flag4;
  }
  if (!isAndroidResult) {
    isAndroidResult = tmp3(tmp[7]).isAndroid();
    const tmp3Result = tmp3(tmp[7]);
  }
  closure_129_0 = isAndroidResult;
  closure_129_1 = obj3.useRef(false);
  const items2 = [tmp8, isAndroidResult];
  const effect1 = obj3.useEffect(() => {
    const keyboardDuration = useKeyboardDuration.getKeyboardDuration();
    if (flag2.current) {
      if (0 !== keyboardDuration) {
        if (!flag) {
          const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimationKeyboard(keyboardDuration);
          const tmpResult = DeprecatedLayoutAnimation;
        }
      }
    }
    flag2.current = true;
  }, items2);
  let num = 0;
  if (flag4) {
    num = tmp8;
  }
  let insets = tmp2;
  if (tmp8 > 0) {
    obj = {};
    const merged = Object.assign(tmp2);
    obj.bottom = num;
    insets = obj;
  }
  return { insets };
};