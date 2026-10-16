// === Module 10962: restartConjureAppFrames ===

// Module 10962 (restartConjureAppFrames)
import leaveFrame from "leaveFrame" /* 10963 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10964 */;
import FramesStore from "FramesStore" /* 10950 */;

require = fn;
const isLaunched = fn(10934).isLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/native/restartConjureAppFrames.tsx");

export default function restartConjureAppFrames(applicationId) {
  closure_0 = applicationId;
  if (null != applicationId) {
    const items = [];
    HermesBuiltin.arraySpread(FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10007 of found) {
      let surface = item10007.surface;
      let launch;
      if (isLaunched(item10007)) {
        launch = item10007.data.launch;
      }
      let tmp6 = launch;
      let mainFrame = FramesStore.getMainFrame();
      let id;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      let obj = leaveFrame;
      let leaveFrameResult = obj.leaveFrame(item10007.id);
      let obj2 = FramesActionCreatorsDefault;
      let obj3 = { applicationId: arg0, surface: null, launch: null };
      obj3.surface = surface;
      obj3.launch = tmp6;
      let launchFrameResult = obj2.launchFrame(obj3);
      let catchPromise = launchFrameResult.catch(() => {

      });
      if (id !== item10007.id) {
        let tmp14Result = FramesActionCreatorsDefault;
        let demoteMainFrameResult = tmp14Result.demoteMainFrame(item10007.id);
      }
      continue;
    }
  }
};