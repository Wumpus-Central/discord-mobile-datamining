// discord_app/modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx
import ME from "ME";
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";

let c3;
let c4;
({ AnalyticEvents: c3, ComponentActions: c4 } = ME);
let result = require("AppStoreOverlayFooter").fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx");

export const openAppStoreOverlayBottomSheet = function openAppStoreOverlayBottomSheet(appId) {
  const _require = arg1;
  appId = appId.appId;
  let obj = appId(4310);
  obj = {
    metadata: appId,
    onOpen() {
      callback(outer1_3.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId);
    },
    onDismiss(arg0) {
      const result = callback(outer1_2[5]).clearAppStoreOverlayOpen();
      callback(outer1_3.QUEST_APP_STORE_OVERLAY_CLOSED, appId, arg0);
      const ComponentDispatch = callback(outer1_2[4]).ComponentDispatch;
      ComponentDispatch.dispatch(outer1_4.QUEST_APP_STORE_OVERLAY_FINISHED);
    },
    onInstallPress(closure_4, arg1) {
      const result = callback(outer1_2[5]).setAppStoreOverlayOpen({
        trackOverlayEvent(arg0, arg1) {
          return callback(arg0, closure_1, arg1);
        }
      });
    }
  };
  obj.openLazy(_asyncRequireImpl(10550, dependencyMap.paths), "QuestAppStoreOverlayBottomSheet", obj);
};