// === Module 11646: openAppStoreOverlayBottomSheet ===

// Module 11646 (openAppStoreOverlayBottomSheet)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import AnalyticsActions from "AnalyticsActions" /* 7826 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 11643 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ AnalyticEvents: c3, ComponentActions: closure_4 } = Constants);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx");

export const openAppStoreOverlayBottomSheet = function openAppStoreOverlayBottomSheet(appId, arg1, arg2) {
  _require = arg1;
  importDefault = arg2;
  appId = appId.appId;
  require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(appId[2], appId.paths), "QuestAppStoreOverlayBottomSheet", {
    metadata: appId,
    onOpen() {
      closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
    },
    onDismiss(arg0) {
      const result = AppStoreOverlayTelemetryManager.clearAppStoreOverlayOpen();
      closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, arg0);
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
    },
    onInstallPress(arg0) {
      if (closure_1 != null) {
        tmp(arg0);
      }
      closure_1 = appId;
      closure_2 = arg0;
      const result = AppStoreOverlayTelemetryManager.setAppStoreOverlayOpen({
        trackOverlayEvent(arg0, arg1) {
          return closure_0(arg0, closure_1, closure_0(appId[4]).AppStoreOverlayVariant.CUSTOM, arg1, closure_2);
        }
      });
    }
  });
};