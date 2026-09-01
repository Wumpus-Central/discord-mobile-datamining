// === Module 10993: useKeyboardActionSheetHeight ===

// Module 10993 (useKeyboardActionSheetHeight)
import set from "set" /* 2 */;
import useWindowDimensions from "useWindowDimensions" /* 1493 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1628 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import NAV_BAR_HEIGHT from "NAV_BAR_HEIGHT" /* 5492 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5597 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5597 */;

const result = set.fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp2 = useSafeAreaInsetsDefault();
  const tmp3 = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const maximum = Math.max(0, tmp3.height - NAV_BAR_HEIGHT.NAV_BAR_HEIGHT_MULTILINE - tmp2.top);
  let minimum = Math.min(useCustomKeyboardHeightDefault(), maximum);
  if (minimum >= maximum) {
    const _Math = Math;
    minimum = Math.max(0, maximum - NAV_BAR_HEIGHT.NAV_BAR_HEIGHT_MULTILINE);
  }
  return { minimum, maximum };
};
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = useSafeAreaInsets.getSafeAreaInsets();
  const obj = useSafeAreaInsets;
  const tmp = require;
  const windowDimensions = useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true });
  const obj2 = useWindowDimensions;
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const maximum = Math.max(0, windowDimensions.height - NAV_BAR_HEIGHT.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top);
  let minimum = Math.min(customKeyboardHeight, maximum);
  if (minimum >= maximum) {
    const _Math = Math;
    minimum = Math.max(0, maximum - NAV_BAR_HEIGHT.NAV_BAR_HEIGHT_MULTILINE);
  }
  return { minimum, maximum };
};