// === Module 11256: useCustomKeyboardBottomSheetConfig ===

// Module 11256 (useCustomKeyboardBottomSheetConfig)
import noop from "noop" /* 19 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx");

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
  const tmp2 = importDefault(minimum[6])({ ignoreKeyboard: true });
  importDefault = tmp2;
  let tmp3 = importDefault(minimum[7])();
  minimum = tmp3.minimum;
  const maximum = tmp3.maximum;
  let items = [flag, maximum, minimum];
  ({ initialPosition, animateOnMount } = importDefault(minimum[8])(() => {
    let obj = { initialPosition: styles.height - minimum, animateOnMount: false };
    let tmp3 = obj;
    if (!obj2.isAndroid()) {
      tmp3 = obj;
      if (!closure_1_4.useReducedMotion) {
        let tmpResult = flag(minimum[3]);
        if (0 === tmpResult.getSystemKeyboardHeight()) {
          tmpResult = flag(minimum[4]);
          const keyboardTypePrevious = tmpResult.getKeyboardTypePrevious();
          if (keyboardTypePrevious === flag(minimum[5]).KeyboardTypes.SYSTEM) {
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
        let tmpResult = flag(minimum[3]);
        if (0 === tmpResult.getSystemKeyboardHeight()) {
          tmpResult = flag(minimum[4]);
          const keyboardTypePrevious = tmpResult.getKeyboardTypePrevious();
          if (keyboardTypePrevious === flag(minimum[5]).KeyboardTypes.SYSTEM) {
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