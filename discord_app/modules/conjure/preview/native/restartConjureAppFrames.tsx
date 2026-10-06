// === Module 9010: restartConjureAppFrames ===

// Module 9010 (restartConjureAppFrames)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9011 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9019 */;
import FramesStore from "FramesStore" /* 9000 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/preview/native/restartConjureAppFrames.tsx");

export default function restartConjureAppFrames(applicationId) {
  let closure_0 = applicationId;
  if (null != applicationId) {
    const items = [];
    HermesBuiltin.arraySpread(items, FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10006 of found) {
      let surface = item10006.surface;
      let mainFrame = FramesStore.getMainFrame();
      let id1;
      if (mainFrame != null) {
        id1 = mainFrame.id;
      }
      let id = item10006.id;
      let obj = FramesNativeManagerDefault;
      let leaveFrameResult = obj.leaveFrame(item10006.id);
      let obj2 = FramesActionCreatorsDefault;
      let obj3 = { applicationId, surface };
      let launchFrameResult = obj2.launchFrame(obj3);
      let catchPromise = launchFrameResult.catch(() => {

      });
      if (id1 !== id) {
        let tmp8Result = FramesActionCreatorsDefault;
        let demoteMainFrameResult = tmp8Result.demoteMainFrame(item10006.id);
      }
      continue;
    }
  }
};