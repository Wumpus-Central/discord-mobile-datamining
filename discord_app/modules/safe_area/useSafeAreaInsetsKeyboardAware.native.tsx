// discord_app/modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import KeyboardTypes from "../keyboard/native/KeyboardTypes.tsx";
import useSystemKeyboardHeight from "../keyboard/native/useSystemKeyboardHeight.native.tsx";
import useKeyboardType from "../keyboard/native/useKeyboardType.tsx";
import useKeyboardDuration from "../keyboard/native/useKeyboardDuration.tsx";
import DeprecatedLayoutAnimation from "../animations/native/DeprecatedLayoutAnimation.tsx";
import useCustomKeyboardHeight from "../keyboard/native/useCustomKeyboardHeight.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import subscribeToKeyboardUIStore from "../keyboard/native/subscribeToKeyboardUIStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let disabled;
      let keyboardHeight;
      let tmp2;
      let obj = disabled(576);
      const cResult = obj.c(5);
      ({ keyboardHeight, disabled } = arg0);
      const ref = react.useRef(false);
      if (cResult[0] !== disabled) {
        const fn = function o() {
          const obj = useKeyboardDuration;
          const keyboardDuration = obj.getKeyboardDuration();
          if (ref.current) {
            if (0 !== keyboardDuration) {
              if (!disabled) {
                const tmpResult = DeprecatedLayoutAnimation;
                const result = tmpResult.DeprecatedLayoutAnimationKeyboard(keyboardDuration);
              }
            }
          }
          ref.current = true;
        };
        cResult[0] = disabled;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      if (cResult[2] === disabled) {
        let tmp3;
        if (cResult[3] === keyboardHeight) {
          tmp3 = cResult[4];
        }
        const effect = react.useEffect(tmp2, tmp3);
      }
      const items = [keyboardHeight, disabled];
      cResult[2] = disabled;
      cResult[3] = keyboardHeight;
      cResult[4] = items;
      tmp3 = items;
    }
  : (disabled) => {
      disabled = disabled.disabled;
      const keyboardHeight = disabled.keyboardHeight;
      const ref = react.useRef(false);
      const items = [keyboardHeight, disabled];
      const effect = react.useEffect(() => {
        const obj = useKeyboardDuration;
        const keyboardDuration = obj.getKeyboardDuration();
        if (ref.current) {
          if (0 !== keyboardDuration) {
            if (!disabled) {
              const tmpResult = DeprecatedLayoutAnimation;
              const result = tmpResult.DeprecatedLayoutAnimationKeyboard(keyboardDuration);
            }
          }
        }
        ref.current = true;
      }, items);
    };
let result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx");

export default function useSafeAreaInsetsKeyboardAware() {
  let c6;
  let isAndroidResult;
  let tmp8;
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
  let tmp = flag3;
  const tmp2 = flag2(flag3[7])();
  let obj2 = flag(flag3[8]);
  const appEntryKey = obj2.useAppEntryKey();
  const items = [appEntryKey, flag3, flag, flag2];
  callback = callback.useCallback(() => {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      if (!flag) {
        return 0;
      }
    }
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      if (!flag2) {
        return 0;
      }
    }
    const obj2 = { appEntryKey };
    const tmpResult4 = useSystemKeyboardHeight;
    let systemKeyboardHeight = tmpResult4.getSystemKeyboardHeight(obj2);
    if (0 === systemKeyboardHeight) {
      const tmpResult5 = useKeyboardType;
      const keyboardType = tmpResult5.getKeyboardType(appEntryKey);
      let num3 = 0;
      if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
        num3 = 0;
        if (flag3) {
          const tmpResult6 = useCustomKeyboardHeight;
          num3 = tmpResult6.getCustomKeyboardHeight(appEntryKey);
        }
      }
      systemKeyboardHeight = num3;
    }
    return systemKeyboardHeight;
  }, items);
  const ref = callback.useRef(callback());
  [tmp8, c6] = appEntryKey(callback.useState(ref.current), 2);
  const items1 = [callback, flag, flag2];
  appEntryKey(callback.useState(ref.current), 2);
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
  const obj3 = { keyboardHeight: tmp8, disabled: isAndroidResult };
  isAndroidResult = !flag;
  const tmp10 = c6;
  const tmp3 = flag;
  if (flag) {
    isAndroidResult = !flag4;
  }
  if (!isAndroidResult) {
    const tmp3Result = tmp3(tmp[9]);
    isAndroidResult = tmp3Result.isAndroid();
  }
  tmp10(obj3);
  let num = 0;
  if (flag4) {
    num = tmp8;
  }
  let insets = tmp2;
  if (tmp8 > 0) {
    const obj4 = { bottom: num };
    const merged = Object.assign(tmp2);
    insets = obj4;
  }
  return { insets };
}
