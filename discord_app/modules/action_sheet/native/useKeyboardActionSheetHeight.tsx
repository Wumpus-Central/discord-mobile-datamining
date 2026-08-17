// discord_app/modules/action_sheet/native/useKeyboardActionSheetHeight.tsx
import set from "set" /* 2 */;
import useWindowDimensions from "useWindowDimensions" /* 1494 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1629 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5444 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5444 */;
import NAV_BAR_HEIGHT from "NAV_BAR_HEIGHT" /* 6370 */;

const result = set.fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp = useSafeAreaInsetsDefault();
  const minimum = useCustomKeyboardHeightDefault();
  let maximum = useWindowDimensionsDefault({ ignoreKeyboard: true }).height - NAV_BAR_HEIGHT.NAV_BAR_HEIGHT_MULTILINE - tmp.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = useSafeAreaInsets.getSafeAreaInsets();
  const obj = useSafeAreaInsets;
  const windowDimensions = useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true });
  const obj2 = useWindowDimensions;
  const minimum = useCustomKeyboardHeight.getCustomKeyboardHeight();
  let maximum = windowDimensions.height - NAV_BAR_HEIGHT.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};