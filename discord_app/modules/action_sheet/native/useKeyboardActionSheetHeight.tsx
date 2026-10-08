// discord_app/modules/action_sheet/native/useKeyboardActionSheetHeight.tsx
import c from "../../../../_runtime/00576_c.js";
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsets from "../../safe_area/useSafeAreaInsets.native.tsx";
import NavigatorConstants from "../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import useCustomKeyboardHeight from "../../keyboard/native/useCustomKeyboardHeight.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useWindowDimensionsDefault = useWindowDimensions;
const useSafeAreaInsetsDefault = useSafeAreaInsets;
const useCustomKeyboardHeightDefault = useCustomKeyboardHeight;

const result = size.fileFinishedImporting("modules/action_sheet/native/useKeyboardActionSheetHeight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useKeyboardActionSheetHeight() {
      const cResult = c.c(5);
      const tmp5 = useSafeAreaInsetsDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { ignoreKeyboard: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp7 = useWindowDimensionsDefault(first);
      const tmp8 = useCustomKeyboardHeightDefault();
      if (cResult[1] === tmp8) {
        if (cResult[2] === tmp5) {
          if (cResult[3] === tmp7) {
            let tmp9 = cResult[4];
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
    }
  : function useKeyboardActionSheetHeight() {
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
