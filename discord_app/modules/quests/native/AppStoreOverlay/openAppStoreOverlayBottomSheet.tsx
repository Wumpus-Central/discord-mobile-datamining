// discord_app/modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AppStoreOverlayTelemetryManager from "../AppStoreOverlayTelemetryManager.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ AnalyticEvents: c3, ComponentActions: closure_4 } = Constants);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx");

export const openAppStoreOverlayBottomSheet = function openAppStoreOverlayBottomSheet(appId, arg1) {
  _require = arg1;
  appId = appId.appId;
  appId(4527);
  const obj = {
    metadata: appId,
    onOpen() {
      closure_0(
        constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
        appId,
        AnalyticsActions.AppStoreOverlayVariant.CUSTOM,
      );
    },
    onDismiss(arg0) {
      const result = AppStoreOverlayTelemetryManager.clearAppStoreOverlayOpen();
      closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, arg0);
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
    },
    onInstallPress(arg0) {
      closure_1 = appId;
      closure_2 = arg0;
      const result = AppStoreOverlayTelemetryManager.setAppStoreOverlayOpen({
        trackOverlayEvent(arg0, arg1) {
          return closure_0(arg0, closure_1, closure_0(dependencyMap[4]).AppStoreOverlayVariant.CUSTOM, arg1, closure_2);
        },
      });
    },
  };
  obj.openLazy(require("asyncRequireImpl")(11501, dependencyMap.paths), "QuestAppStoreOverlayBottomSheet", obj);
};
