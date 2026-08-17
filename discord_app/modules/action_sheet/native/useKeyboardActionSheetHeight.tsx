// discord_app/modules/action_sheet/native/useKeyboardActionSheetHeight.tsx
import set from "../../../../_runtime/00002_set.js";
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsets from "../../safe_area/useSafeAreaInsets.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import useCustomKeyboardHeight from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import useCustomKeyboardHeightDefault from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import NAV_BAR_HEIGHT from "../../../design/components/Navigator/native/NavigatorConstants.native.tsx";

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