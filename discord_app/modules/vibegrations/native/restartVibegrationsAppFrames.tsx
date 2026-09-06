// discord_app/modules/vibegrations/native/restartVibegrationsAppFrames.tsx
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import FramesNativeManagerDefault from "../../frames/native/FramesNativeManager.tsx";
import FramesStore from "../../frames/FramesStore.tsx";

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
      let catchPromise = launchFrameResult.catch(() => {});
      continue;
    }
  }
}
