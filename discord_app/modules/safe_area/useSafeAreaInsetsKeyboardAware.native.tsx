// === Module 5441: useSafeAreaInsetsKeyboardAware ===

// Module 5441 (useSafeAreaInsetsKeyboardAware)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1496 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx");

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
  importDefault = flag2;
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
  const tmp2 = importDefault(flag3[5])();
  const appEntryKey = flag(flag3[6]).useAppEntryKey();
  const items = [appEntryKey, flag3, flag, flag2];
  callback = callback.useCallback(() => {
    let obj = flag(flag3[7]);
    if (obj.isIOS()) {
      if (!flag) {
        return 0;
      }
    }
    let tmpResult = flag(flag3[7]);
    if (tmpResult.isAndroid()) {
      if (!closure_1) {
        return 0;
      }
    }
    tmpResult = flag(flag3[8]);
    obj = { appEntryKey };
    let systemKeyboardHeight = tmpResult.getSystemKeyboardHeight(obj);
    if (0 === systemKeyboardHeight) {
      const keyboardType = flag(flag3[9]).getKeyboardType(appEntryKey);
      let num3 = 0;
      if (keyboardType !== flag(flag3[10]).KeyboardTypes.SYSTEM) {
        num3 = 0;
        if (flag3) {
          num3 = flag(flag3[11]).getCustomKeyboardHeight(appEntryKey);
          const tmpResult2 = flag(flag3[11]);
        }
      }
      systemKeyboardHeight = num3;
      const tmpResult1 = flag(flag3[9]);
    }
    return systemKeyboardHeight;
  }, items);
  const ref = callback.useRef(callback());
  const obj2 = flag(flag3[6]);
  let tmp = flag3;
  const tmp3 = flag;
  [tmp8, c6] = appEntryKey(callback.useState(ref.current), 2);
  const items1 = [callback, flag, flag2];
  const effect = callback.useEffect(() => ref(() => {
    const tmp = callback();
    if (ref.current !== tmp) {
      ref.current = tmp;
      callback2(tmp);
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
  flag = isAndroidResult;
  importDefault = obj3.useRef(false);
  const items2 = [tmp8, isAndroidResult];
  const effect1 = obj3.useEffect(() => {
    const keyboardDuration = flag(flag3[3]).getKeyboardDuration();
    if (ref.current) {
      if (0 !== keyboardDuration) {
        if (!flag) {
          const result = flag(flag3[4]).DeprecatedLayoutAnimationKeyboard(keyboardDuration);
          const tmpResult = flag(flag3[4]);
        }
      }
    }
    ref.current = true;
    const obj = flag(flag3[3]);
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