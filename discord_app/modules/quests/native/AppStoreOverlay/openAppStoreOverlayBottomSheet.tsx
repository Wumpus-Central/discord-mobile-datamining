// === Module 10730: openAppStoreOverlayBottomSheet ===

// Module 10730 (openAppStoreOverlayBottomSheet)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

({ AnalyticEvents: c3, ComponentActions: c4 } = ME);
let result = set.fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx");

export const openAppStoreOverlayBottomSheet = function openAppStoreOverlayBottomSheet(appId) {
  const _require = arg1;
  appId = appId.appId;
  let obj = appId(4411);
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
    onInstallPress(first, arg1) {
      const result = callback(closure_1_2[6]).setAppStoreOverlayOpen({
        trackOverlayEvent(arg0, arg1) {
          return callback(arg0, closure_1, callback(closure_1_2[4]).AppStoreOverlayVariant.CUSTOM, arg1);
        }
      });
    }
  };
  obj.openLazy(_require(2009)(10731, dependencyMap.paths), "QuestAppStoreOverlayBottomSheet", obj);
};