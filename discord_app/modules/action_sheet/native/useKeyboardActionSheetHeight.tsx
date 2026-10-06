// === Module 9789: useKeyboardActionSheetHeight ===

// Module 9789 (useKeyboardActionSheetHeight)
import react from "react" /* 576 */;
import useWindowDimensions from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1618 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 6481 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useWindowDimensionsDefault = useWindowDimensions;
const useSafeAreaInsetsDefault = useSafeAreaInsets;
const useCustomKeyboardHeightDefault = useCustomKeyboardHeight;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(5);
  const tmp5 = useSafeAreaInsetsDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp7 = useWindowDimensionsDefault(first);
  const tmp8 = useCustomKeyboardHeightDefault();
  if (cResult[1] === tmp8) {
    if (cResult[2] === tmp5) {
      let tmp9;
      if (cResult[3] === tmp7) {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  }
  const bound = Math.max(0, tmp7.height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - tmp5.top);
  let bound1 = Math.min(tmp8, bound);
  if (bound1 >= bound) {
    const _Math = Math;
    bound1 = Math.max(0, bound - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE);
  }
  const obj3 = { minimum: bound1, maximum: bound };
  cResult[1] = tmp8;
  cResult[2] = tmp5;
  cResult[3] = tmp7;
  cResult[4] = obj3;
  tmp9 = obj3;
}) : (() => {
  const tmp2 = useSafeAreaInsetsDefault();
  const tmp3 = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const tmp4 = useCustomKeyboardHeightDefault();
  const maximum = Math.max(0, tmp3.height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - tmp2.top);
  let minimum = Math.min(tmp4, maximum);
  if (minimum >= maximum) {
    const _Math = Math;
    minimum = Math.max(0, maximum - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE);
  }
  return { minimum, maximum };
});
const result = size.fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default tmp2;
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const obj = useSafeAreaInsets;
  const safeAreaInsets = obj.getSafeAreaInsets();
  const obj2 = useWindowDimensions;
  const windowDimensions = obj2.getWindowDimensions({ ignoreKeyboard: true });
  const obj3 = useCustomKeyboardHeight;
  const customKeyboardHeight = obj3.getCustomKeyboardHeight();
  const maximum = Math.max(0, windowDimensions.height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top);
  let minimum = Math.min(customKeyboardHeight, maximum);
  if (minimum >= maximum) {
    const _Math = Math;
    minimum = Math.max(0, maximum - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE);
  }
  return { minimum, maximum };
};