// === Module 13254: restartVibegrationsAppFrames ===

// Module 13254 (restartVibegrationsAppFrames)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9507 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9568 */;
import FramesStore from "FramesStore" /* 9510 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/restartVibegrationsAppFrames.tsx");

export default function restartVibegrationsAppFrames(applicationId) {
  closure_0 = applicationId;
  if (null != applicationId) {
    const items = [];
    HermesBuiltin.arraySpread(FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10003 of found) {
      let obj = FramesNativeManagerDefault;
      let leaveFrameResult = obj.leaveFrame(item10003.id);
      let obj2 = FramesActionCreatorsDefault;
      obj = { applicationId: arg0, surface: item10003.surface };
      let launchFrameResult = obj2.launchFrame(obj);
      let catchPromise = launchFrameResult.catch(() => {

      });
      continue;
    }
  }
};