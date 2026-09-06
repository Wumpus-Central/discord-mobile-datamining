// === Module 11500: openAppStoreOverlayBottomSheet ===

// Module 11500 (openAppStoreOverlayBottomSheet)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

({ AnalyticEvents: c3, ComponentActions: c4 } = ME);
let result = set.fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx");

export const openAppStoreOverlayBottomSheet = function openAppStoreOverlayBottomSheet(appId) {
  const _require = arg1;
  appId = appId.appId;
  let obj = appId(4527);
  obj = {
    metadata: appId,
    onOpen() {
      callback(closure_1_3.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, callback(closure_1_2[4]).AppStoreOverlayVariant.CUSTOM);
    },
    onDismiss(arg0) {
      const result = callback(closure_1_2[6]).clearAppStoreOverlayOpen();
      callback(closure_1_3.QUEST_APP_STORE_OVERLAY_CLOSED, appId, callback(closure_1_2[4]).AppStoreOverlayVariant.CUSTOM, arg0);
      const ComponentDispatch = callback(closure_1_2[5]).ComponentDispatch;
      ComponentDispatch.dispatch(closure_1_4.QUEST_APP_STORE_OVERLAY_FINISHED);
    },
    onInstallPress(arg0) {
      closure_2 = arg0;
      const result = callback(closure_1_2[6]).setAppStoreOverlayOpen({
        trackOverlayEvent(arg0, arg1) {
          return callback(arg0, closure_1, callback(table[4]).AppStoreOverlayVariant.CUSTOM, arg1, table);
        }
      });
    }
  };
  obj.openLazy(_require(1896)(11501, dependencyMap.paths), "QuestAppStoreOverlayBottomSheet", obj);
};