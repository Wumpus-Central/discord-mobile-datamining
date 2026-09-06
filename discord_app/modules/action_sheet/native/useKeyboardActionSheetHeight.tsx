// discord_app/modules/action_sheet/native/useKeyboardActionSheetHeight.tsx
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsets from "../../safe_area/useSafeAreaInsets.native.tsx";
import useCustomKeyboardHeight from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import NavigatorConstants from "../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
export const getKeyboardActionSheetHeight = function getKeyboardActionSheetHeight() {
  const safeAreaInsets = useSafeAreaInsets.getSafeAreaInsets();
  const windowDimensions = useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true });
  const customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
  const maximum = Math.max(
    0,
    windowDimensions.height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top,
  );
  let minimum = Math.min(customKeyboardHeight, maximum);
  if (minimum >= maximum) {
    const _Math = Math;
    minimum = Math.max(0, maximum - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE);
  }
  return { minimum, maximum };
};
