// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../../_runtime/00576_react.js";
import ConnectivityIndicatorStateStore2 from "../../../../connectivity/native/ConnectivityIndicatorStateStore.tsx";
import ConnectionIndicatorExperimentDefault from "../../ConnectionIndicatorExperiment.tsx";
import YouBarConstants from "../YouBarConstants.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const ConnectivityIndicatorStateStore = ConnectivityIndicatorStateStore2;

const constants = ConnectivityIndicatorStateStore2.ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = YouBarConstants.CONNECTION_BANNER_HEIGHT;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let hidden;
      let state;
      let timeoutMs;
      const obj = react;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "useConnectionBannerHeight" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const obj3 = ConnectionIndicatorExperimentDefault;
      const config = obj3.useConfig(first);
      ({ timeoutMs, hidden } = config);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConnectivityIndicatorStateStore];
        const fn = function l() {
          return state.getState();
        };
        cResult[1] = items;
        cResult[2] = fn;
      }
      get_initialized;
      let num4 = 0;
      if (null != timeoutMs) {
        num4 = 0;
        if (!hidden) {
          num4 = 0;
          if (tmp10 !== constants.HIDDEN) {
            num4 = CONNECTION_BANNER_HEIGHT;
          }
        }
      }
      return num4;
    }
  : () => {
      let hidden;
      let state;
      let timeoutMs;
      const obj = ConnectionIndicatorExperimentDefault;
      const config = obj.useConfig({ location: "useConnectionBannerHeight" });
      ({ timeoutMs, hidden } = config);
      get_initialized;
      [][0] = ConnectivityIndicatorStateStore;
      let num = 0;
      if (null != timeoutMs) {
        num = 0;
        if (!hidden) {
          num = 0;
          if (tmp3 !== constants.HIDDEN) {
            num = CONNECTION_BANNER_HEIGHT;
          }
        }
      }
      return num;
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = tmp2;
