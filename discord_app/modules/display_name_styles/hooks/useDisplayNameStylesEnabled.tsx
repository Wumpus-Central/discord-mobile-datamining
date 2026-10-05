// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx
import react from "../../../../_runtime/00019_react.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import react3 from "../DisplayNameStylesContext.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useContext = react.useContext;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function n() {
          return AccessibilityStore.displayNameStylesEnabled;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const overrideSettings =
        tmpResult.useStateFromStores(tmp4, tmp5) || useContext(react3.DisplayNameStylesContext).overrideSettings;
      return overrideSettings;
    }
  : () => {
      const items = [AccessibilityStore];
      const obj = get_initialized;
      const overrideSettings =
        obj.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled) ||
        useContext(react3.DisplayNameStylesContext).overrideSettings;
      return overrideSettings;
    };
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = tmp2;
