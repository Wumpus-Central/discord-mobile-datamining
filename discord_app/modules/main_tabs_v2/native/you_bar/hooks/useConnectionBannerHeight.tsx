// === Module 17325: useConnectionBannerHeight ===

// Module 17325 (useConnectionBannerHeight)
import initialize from "initialize" /* 504 */;
import ConnectionIndicatorExperimentDefault from "ConnectionIndicatorExperiment" /* 15821 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 15820 */;

require = fn;
const constants = fn(15820).ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = fn(17322).CONNECTION_BANNER_HEIGHT;
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