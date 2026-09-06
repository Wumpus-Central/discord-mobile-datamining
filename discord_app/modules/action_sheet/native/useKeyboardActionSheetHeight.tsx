// === Module 11356: useKeyboardActionSheetHeight ===

// Module 11356 (useKeyboardActionSheetHeight)
import useWindowDimensions from "useWindowDimensions" /* 1477 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1611 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5579 */;
import NavigatorConstants from "NavigatorConstants" /* 5682 */;
import size from "module_2" /* 2 */;

const useWindowDimensionsDefault = useWindowDimensions;
const useSafeAreaInsetsDefault = useSafeAreaInsets;
const useCustomKeyboardHeightDefault = useCustomKeyboardHeight;

const result = size.fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp2 = useSafeAreaInsetsDefault();
  const tmp3 = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const maximum = Math.max(0, tmp3.height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - tmp2.top);
  let minimum = Math.min(useCustomKeyboardHeightDefault(), maximum);
  if (minimum >= maximum) {
    const _Math = Math;
    minimum = Math.max(0, maximum - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE);
  }
  return { minimum, maximum };
};
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = useSafeAreaInsets.getSafeAreaInsets();
  const windowDimensions = useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true });
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const maximum = Math.max(0, windowDimensions.height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top);
  let minimum = Math.min(customKeyboardHeight, maximum);
  if (minimum >= maximum) {
    const _Math = Math;
    minimum = Math.max(0, maximum - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE);
  }
  return { minimum, maximum };
};