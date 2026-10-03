// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import DisplayNameStylesContext from "../DisplayNameStylesContext.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useContext = _mod19.useContext;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
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
      let overrideSettings = initialize.useStateFromStores(tmp4, tmp5);
      if (!overrideSettings) {
        overrideSettings = useContext(DisplayNameStylesContext.DisplayNameStylesContext).overrideSettings;
      }
      return overrideSettings;
    }
  : () => {
      const items = [AccessibilityStore];
      let overrideSettings = initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
      if (!overrideSettings) {
        overrideSettings = useContext(DisplayNameStylesContext.DisplayNameStylesContext).overrideSettings;
      }
      return overrideSettings;
    };
