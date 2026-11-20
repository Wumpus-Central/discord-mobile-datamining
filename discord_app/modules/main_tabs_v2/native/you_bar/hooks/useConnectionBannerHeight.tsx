// === Module 16358: useConnectionBannerHeight ===

// Module 16358 (useConnectionBannerHeight)
import initialize from "initialize" /* 504 */;
import ConnectionIndicatorExperimentDefault from "ConnectionIndicatorExperiment" /* 14843 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 14842 */;

require = fn;
const constants = fn(14842).ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = fn(16355).CONNECTION_BANNER_HEIGHT;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export function useConnectionBannerHeight() {
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
}