// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import apexExperimentDefault from "../../ConnectionIndicatorExperiment.tsx";
import closure_3 from "../../../../connectivity/native/ConnectivityIndicatorStateStore.tsx";
import { ConnectivityIndicatorState as closure_4 } from "../../../../connectivity/native/ConnectivityIndicatorStateStore.tsx";
import { CONNECTION_BANNER_HEIGHT } from "../YouBarConstants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = function useConnectionBannerHeight() {
  const config = apexExperimentDefault.useConfig({ location: "useConnectionBannerHeight" });
  ({ timeoutMs, hidden } = config);
  initialize;
  [][0] = closure_3;
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