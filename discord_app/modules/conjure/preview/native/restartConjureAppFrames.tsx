// === Module 11381: restartConjureAppFrames ===

// Module 11381 (restartConjureAppFrames)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10769 */;
import leaveFrame from "leaveFrame" /* 10811 */;
import FramesStore from "FramesStore" /* 10772 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/native/restartConjureAppFrames.tsx");

export default function restartConjureAppFrames(applicationId) {
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
      let obj = leaveFrame;
      let leaveFrameResult = obj.leaveFrame(item10006.id);
      let obj2 = FramesActionCreatorsDefault;
      let obj3 = { applicationId: arg0, surface: null };
      obj3.surface = surface;
      let launchFrameResult = obj2.launchFrame(obj3);
      let catchPromise = launchFrameResult.catch(() => {

      });
      if (id !== item10006.id) {
        let tmp10Result = FramesActionCreatorsDefault;
        let demoteMainFrameResult = tmp10Result.demoteMainFrame(item10006.id);
      }
      continue;
    }
  }
};