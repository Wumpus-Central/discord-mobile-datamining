// === Module 10695: openAppStoreOverlayBottomSheet ===

// Module 10695 (openAppStoreOverlayBottomSheet)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

({ AnalyticEvents: c3, ComponentActions: c4 } = ME);
let result = obj132.fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx");

export const openAppStoreOverlayBottomSheet = function openAppStoreOverlayBottomSheet(appId) {
  const _require = arg1;
  appId = appId.appId;
  appId(4342);
  const obj = {
    metadata: appId,
    onOpen() {
      callback(closure_1_3.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId);
    },
    onDismiss(arg0) {
      const result = callback(dependencyMap[5]).clearAppStoreOverlayOpen();
      callback(closure_1_3.QUEST_APP_STORE_OVERLAY_CLOSED, appId, arg0);
      const ComponentDispatch = callback(dependencyMap[4]).ComponentDispatch;
      ComponentDispatch.dispatch(closure_1_4.QUEST_APP_STORE_OVERLAY_FINISHED);
    },
    onInstallPress(closure_4, arg1) {
      const result = callback(dependencyMap[5]).setAppStoreOverlayOpen({
        trackOverlayEvent(arg0, arg1) {
          return callback(arg0, closure_1, arg1);
        }
      });
    }
  };
  obj.openLazy(_require(2007)(10696, dependencyMap.paths), "QuestAppStoreOverlayBottomSheet", obj);
};