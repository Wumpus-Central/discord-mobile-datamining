// === Module 13185: restartVibegrationsAppFrames ===

// Module 13185 (restartVibegrationsAppFrames)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9561 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9570 */;
import FramesStore from "FramesStore" /* 9312 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/restartVibegrationsAppFrames.tsx");

export default function restartVibegrationsAppFrames(applicationId) {
  closure_0 = applicationId;
  if (null != applicationId) {
    const items = [];
    HermesBuiltin.arraySpread(FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10006 of found) {
      let surface = item10006.surface;
      let mainFrame = FramesStore.getMainFrame();
      let id;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      let obj = FramesNativeManagerDefault;
      let leaveFrameResult = obj.leaveFrame(item10006.id);
      let obj2 = FramesActionCreatorsDefault;
      let obj3 = { applicationId: arg0, surface: null };
      obj3.surface = surface;
      let launchFrameResult = obj2.launchFrame(obj3);
      let catchPromise = launchFrameResult.catch(() => {

      });
      if (id !== item10006.id) {
        let tmp7Result = FramesActionCreatorsDefault;
        let demoteMainFrameResult = tmp7Result.demoteMainFrame(item10006.id);
      }
      continue;
    }
  }
};