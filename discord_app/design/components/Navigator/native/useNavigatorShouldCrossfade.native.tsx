// discord_app/design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AccessibilityPreferencesContext from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNavigatorShouldCrossfade() {
      const cResult = c.c(3);
      const context = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext);
      const prefersCrossfades = context.prefersCrossfades;
      const enabled = context.reducedMotion.enabled;
      if (cResult[0] === prefersCrossfades) {
        if (cResult[1] === enabled) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      let tmp6 = prefersCrossfades;
      if (tmpResult.isAndroid()) {
        tmp6 = enabled;
      }
      cResult[0] = prefersCrossfades;
      cResult[1] = enabled;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      tmpResult = PlatformUtils;
    }
  : function useNavigatorShouldCrossfade() {
      const context = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext);
      let enabled = context.prefersCrossfades;
      if (obj.isAndroid()) {
        enabled = context.reducedMotion.enabled;
      }
      return enabled;
    };
