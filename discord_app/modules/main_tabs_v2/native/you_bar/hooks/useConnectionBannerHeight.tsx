// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import ConnectionIndicatorExperimentDefault from "../../ConnectionIndicatorExperiment.tsx";
import ConnectivityIndicatorStateStore from "../../../../connectivity/native/ConnectivityIndicatorStateStore.tsx";

require = fn;
const constants = fn(13686).ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = fn(15098).CONNECTION_BANNER_HEIGHT;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = function useConnectionBannerHeight() {
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
