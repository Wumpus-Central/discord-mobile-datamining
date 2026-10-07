// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import ConnectionIndicatorExperimentDefault from "../../ConnectionIndicatorExperiment.tsx";
import ConnectivityIndicatorStateStore from "../../../../connectivity/native/ConnectivityIndicatorStateStore.tsx";

require = fn;
const constants = fn(13513).ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = fn(14915).CONNECTION_BANNER_HEIGHT;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "useConnectionBannerHeight" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const config = ConnectionIndicatorExperimentDefault.useConfig(first);
      ({ timeoutMs, hidden } = config);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConnectivityIndicatorStateStore];
        const fn = function l() {
          return state.getState();
        };
        cResult[1] = items;
        cResult[2] = fn;
      }
      initialize;
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
      const config = ConnectionIndicatorExperimentDefault.useConfig({ location: "useConnectionBannerHeight" });
      ({ timeoutMs, hidden } = config);
      initialize;
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
