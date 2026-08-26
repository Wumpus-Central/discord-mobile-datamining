// === Module 11736: useCustomKeyboardBottomSheetConfig ===

// Module 11736 (useCustomKeyboardBottomSheetConfig)
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx");

export default function useCustomKeyboardBottomSheetConfig(forceMaxHeight) {
  let flag = forceMaxHeight.forceMaxHeight;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = forceMaxHeight.enablePanDownToClose;
  if (flag2 === undefined) {
    flag2 = false;
  }
  importDefault = undefined;
  let minimum;
  let maximum;
  const tmp2 = importDefault(minimum[6])({ ignoreKeyboard: true });
  importDefault = tmp2;
  let tmp3 = importDefault(minimum[7])();
  minimum = tmp3.minimum;
  maximum = tmp3.maximum;
  let items = [flag, maximum, minimum];
  ({ initialPosition, animateOnMount } = importDefault(minimum[8])(() => {
    let obj = { initialPosition: styles.height - minimum, animateOnMount: false };
    let tmp3 = obj;
    if (!obj2.isAndroid()) {
      tmp3 = obj;
      if (!closure_1_4.useReducedMotion) {
        let tmpResult = tmp(tmp2[3]);
        if (0 === tmpResult.getSystemKeyboardHeight()) {
          tmpResult = tmp(tmp2[4]);
          const keyboardTypePrevious = tmpResult.getKeyboardTypePrevious();
          if (keyboardTypePrevious === tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
            obj = { animateOnMount: true };
          }
        }
        tmp3 = obj;
      }
    }
    return tmp3;
  }));
  let obj = { animateOnMount, enablePanDownToClose: flag2, accessible: null, contentHeight: null, containerHeight: null, enableDynamicSizing: false, initialPosition: null, keyboardBehavior: "extend", android_keyboardInputMode: null, snapPoints: null };
  const memo = maximum.useMemo(() => {
    if (flag) {
      const items = [maximum, maximum];
      let items1 = items;
    } else {
      items1 = [minimum, maximum];
    }
    return items1;
  }, items);
  const tmp = minimum;
  const tmp4 = importDefault(minimum[8])(() => {
    let obj = { initialPosition: styles.height - minimum, animateOnMount: false };
    let tmp3 = obj;
    if (!obj2.isAndroid()) {
      tmp3 = obj;
      if (!closure_1_4.useReducedMotion) {
        let tmpResult = tmp(tmp2[3]);
        if (0 === tmpResult.getSystemKeyboardHeight()) {
          tmpResult = tmp(tmp2[4]);
          const keyboardTypePrevious = tmpResult.getKeyboardTypePrevious();
          if (keyboardTypePrevious === tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
            obj = { animateOnMount: true };
          }
        }
        tmp3 = obj;
      }
    }
    return tmp3;
  });
  const tmp6 = flag;
  const obj2 = flag(minimum[2]);
  obj[2] = flag(minimum[2]).isAndroid() && undefined;
  obj[3] = maximum;
  obj[4] = tmp2.height;
  obj[6] = initialPosition;
  let str;
  if (tmp6(tmp[9]).IS_SYSTEM_KEYBOARD_EXTERNAL) {
    str = "adjustResize";
  }
  obj[8] = str;
  obj[9] = memo;
  return obj;
};