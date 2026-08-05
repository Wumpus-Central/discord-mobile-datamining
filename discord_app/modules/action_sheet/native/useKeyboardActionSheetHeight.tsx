// discord_app/modules/action_sheet/native/useKeyboardActionSheetHeight.tsx
const result = require("useWindowDimensions").fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default function useKeyboardActionSheetHeight() {
  const tmp = require("../../safe_area/useSafeAreaInsets.native.tsx")();
  const minimum = require("../../keyboard/native/useCustomKeyboardHeight.tsx")();
  let maximum = require("../../screen/useWindowDimensions.native.tsx")({ ignoreKeyboard: true }).height - require("../../../design/components/Navigator/native/NavigatorConstants.native.tsx") /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - tmp.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = require("../../safe_area/useSafeAreaInsets.native.tsx") /* useSafeAreaInsets */.getSafeAreaInsets();
  const obj = require("../../safe_area/useSafeAreaInsets.native.tsx") /* useSafeAreaInsets */;
  const windowDimensions = require("../../screen/useWindowDimensions.native.tsx") /* useWindowDimensions */.getWindowDimensions({ ignoreKeyboard: true });
  const obj2 = require("../../screen/useWindowDimensions.native.tsx") /* useWindowDimensions */;
  const minimum = require("../../keyboard/native/useCustomKeyboardHeight.tsx") /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  let maximum = windowDimensions.height - require("../../../design/components/Navigator/native/NavigatorConstants.native.tsx") /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top;
  if (minimum >= maximum) {
    maximum = minimum;
  }
  return { minimum, maximum };
};