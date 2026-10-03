// discord_app/modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import KeyboardTypes from "../keyboard/native/KeyboardTypes.tsx";
import useSystemKeyboardHeight from "../keyboard/native/useSystemKeyboardHeight.native.tsx";
import useKeyboardType from "../keyboard/native/useKeyboardType.tsx";
import useKeyboardDuration from "../keyboard/native/useKeyboardDuration.tsx";
import DeprecatedLayoutAnimation from "../animations/native/DeprecatedLayoutAnimation.tsx";
import useCustomKeyboardHeight from "../keyboard/native/useCustomKeyboardHeight.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import subscribeToKeyboardUIStore from "../keyboard/native/subscribeToKeyboardUIStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = disabled(576).c(5);
      ({ keyboardHeight, disabled } = arg0);
      noop.useRef(false);
      if (cResult[0] !== disabled) {
        const fn = function o() {
          const keyboardDuration = useKeyboardDuration.getKeyboardDuration();
          if (ref.current) {
            if (0 !== keyboardDuration) {
              if (!disabled) {
                const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimationKeyboard(keyboardDuration);
                const tmpResult = DeprecatedLayoutAnimation;
              }
            }
          }
          ref.current = true;
        };
        cResult[0] = disabled;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      if (cResult[2] === disabled) {
        if (cResult[3] === keyboardHeight) {
          let tmp3 = cResult[4];
        }
        const effect = noop.useEffect(tmp2, tmp3);
      }
      const items = [keyboardHeight, disabled];
      cResult[2] = disabled;
      cResult[3] = keyboardHeight;
      cResult[4] = items;
      tmp3 = items;
      let obj = disabled(576);
    }
  : (disabled) => {
      disabled = disabled.disabled;
      noop.useRef(false);
      const items = [disabled.keyboardHeight, disabled];
      const effect = noop.useEffect(() => {
        const keyboardDuration = useKeyboardDuration.getKeyboardDuration();
        if (ref.current) {
          if (0 !== keyboardDuration) {
            if (!disabled) {
              const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimationKeyboard(keyboardDuration);
              const tmpResult = DeprecatedLayoutAnimation;
            }
          }
        }
        ref.current = true;
      }, items);
    };
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
  const tmp2 = flag2(flag3[7])();
  const appEntryKey = flag(flag3[8]).useAppEntryKey();
  const items = [appEntryKey, flag3, flag, flag2];
  callback = callback.useCallback(() => {
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
  const ref = callback.useRef(callback());
  const obj2 = flag(flag3[8]);
  let tmp = flag3;
  const tmp3 = flag;
  [tmp8, c6] = appEntryKey(callback.useState(ref.current), 2);
  const items1 = [callback, flag, flag2];
  const effect = callback.useEffect(
    () =>
      subscribeToKeyboardUIStore(() => {
        const tmp = callback();
        if (ref.current !== tmp) {
          ref.current = tmp;
          closure_1_6(tmp);
        }
      }),
    items1,
  );
  const obj3 = { keyboardHeight: tmp8, disabled: null };
  let isAndroidResult = !flag;
  if (flag) {
    isAndroidResult = !flag4;
  }
  if (!isAndroidResult) {
    isAndroidResult = tmp3(tmp[9]).isAndroid();
    const tmp3Result = tmp3(tmp[9]);
  }
  obj3.disabled = isAndroidResult;
  c6(obj3);
  let num = 0;
  if (flag4) {
    num = tmp8;
  }
  let insets = tmp2;
  if (tmp8 > 0) {
    const obj4 = {};
    const merged = Object.assign(tmp2);
    obj4.bottom = num;
    insets = obj4;
  }
  return { insets };
}
