// === Module 10722: restartFrames ===

// Module 10722 (restartFrames)
import leaveFrame from "leaveFrame" /* 10723 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10724 */;
import FramesStore from "FramesStore" /* 6754 */;

require = fn;
function restartFrame(item10016) {
  let launch;
  if (isLaunched(item10016)) {
    launch = item10016.data.launch;
  }
  const mainFrame = FramesStore.getMainFrame();
  let id;
  if (mainFrame != null) {
    id = mainFrame.id;
  }
  leaveFrame.leaveFrame(item10016.id);
  const obj3 = { applicationId: item10016.applicationId, surface: item10016.surface, launch };
  FramesActionCreatorsDefault.launchFrame({ applicationId: item10016.applicationId, surface: item10016.surface, launch }).catch(() => {

  });
  if (id !== item10016.id) {
    FramesActionCreatorsDefault.demoteMainFrame(item10016.id);
    const tmp6Result = FramesActionCreatorsDefault;
  }
  const launchFrameResult = FramesActionCreatorsDefault.launchFrame({ applicationId: item10016.applicationId, surface: item10016.surface, launch });
}
const isLaunched = fn(6755).isLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/restartFrames.tsx");

export { restartFrame };
export const restartAppFrames = function restartAppFrames(c0) {
  closure_0 = c0;
  if (null != c0) {
    const items = [];
    HermesBuiltin.arraySpread(FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10016 of found) {
      let tmp8 = restartFrame(item10016);
      continue;
    }
  }
};