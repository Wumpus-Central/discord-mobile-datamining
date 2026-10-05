// discord_app/modules/conjure/shared/useConjureWindowFocused.native.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

require = fn;
const AppStates = fn(1085).AppStates;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/useConjureWindowFocused.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AppStateStore];
        const fn = function s() {
          return state.getState() === constants.ACTIVE;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [AppStateStore];
      return initialize.useStateFromStores(items, () => state.getState() === constants.ACTIVE);
    };
