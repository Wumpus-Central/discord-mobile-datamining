// discord_app/modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";

({ AnalyticEvents: c3, ComponentActions: c4 } = ME);
let result = set.fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx");

export const openAppStoreOverlayBottomSheet = function openAppStoreOverlayBottomSheet(appId) {
  const _require = arg1;
  appId = appId.appId;
  let obj = appId(4342);
  obj = {
    metadata: appId,
    onOpen() {
      callback(closure_1_3.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId);
    },
    onDismiss(arg0) {
      const result = callback(closure_1_2[5]).clearAppStoreOverlayOpen();
      callback(closure_1_3.QUEST_APP_STORE_OVERLAY_CLOSED, appId, arg0);
      const ComponentDispatch = callback(closure_1_2[4]).ComponentDispatch;
      ComponentDispatch.dispatch(closure_1_4.QUEST_APP_STORE_OVERLAY_FINISHED);
    },
    onInstallPress(closure_4, arg1) {
      const result = callback(closure_1_2[5]).setAppStoreOverlayOpen({
        trackOverlayEvent(arg0, arg1) {
          return callback(arg0, closure_1, arg1);
        }
      });
    }
  };
  obj.openLazy(_asyncRequireImpl(10696, dependencyMap.paths), "QuestAppStoreOverlayBottomSheet", obj);
};