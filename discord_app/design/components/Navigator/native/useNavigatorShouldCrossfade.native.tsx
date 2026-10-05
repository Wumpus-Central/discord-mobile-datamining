// discord_app/design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import react3 from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(3);
      const context = react.useContext(react3.AccessibilityPreferencesContext);
      const prefersCrossfades = context.prefersCrossfades;
      const enabled = context.reducedMotion.enabled;
      if (cResult[0] === prefersCrossfades) {
        let tmp5;
        if (cResult[1] === enabled) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      let tmp6 = prefersCrossfades;
      const tmpResult = PlatformUtils;
      if (tmpResult.isAndroid()) {
        tmp6 = enabled;
      }
      cResult[0] = prefersCrossfades;
      cResult[1] = enabled;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : () => {
      const context = react.useContext(react3.AccessibilityPreferencesContext);
      let prefersCrossfades = context.prefersCrossfades;
      const enabled = context.reducedMotion.enabled;
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        prefersCrossfades = enabled;
      }
      return prefersCrossfades;
    };
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = tmp2;
