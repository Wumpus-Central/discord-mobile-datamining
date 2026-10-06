// === Module 10935: openAppStoreOverlayBottomSheet ===

// Module 10935 (openAppStoreOverlayBottomSheet)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import AnalyticsActions from "AnalyticsActions" /* 7215 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 10932 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_1, importDefault;

let c3;
let closure_4;
({ AnalyticEvents: c3, ComponentActions: closure_4 } = Constants);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx");

export const openAppStoreOverlayBottomSheet = function openAppStoreOverlayBottomSheet(appId, arg1, onOverlaySurfaceClick, trackOverlayCarouselScroll) {
  let closure_0;
  _require = arg1;
  importDefault = onOverlaySurfaceClick;
  appId = appId.appId;
  let obj = require("ActionSheetActionCreators");
  const obj2 = {
    metadata: appId,
    trackOverlayCarouselScroll,
    onOverlaySurfaceClick,
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
      let closure_2 = arg0;
      const obj = {
        trackOverlayEvent(arg0, arg1) {
          return closure_0(arg0, closure_1, closure_2_0(appId[4]).AppStoreOverlayVariant.CUSTOM, arg1, closure_2);
        }
      };
      const result = AppStoreOverlayTelemetryManager.setAppStoreOverlayOpen(obj);
    }
  };
  obj.openLazy(require("asyncRequire")(appId[2], appId.paths), "QuestAppStoreOverlayBottomSheet", obj2);
};