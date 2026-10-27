// discord_app/modules/frames/native/restartFrames.tsx
import leaveFrame from "../leaveFrame.tsx";
import FramesActionCreatorsDefault from "../FramesActionCreators.native.tsx";
import FramesStore from "../FramesStore.tsx";

require = fn;
function restartFrame(item10016) {
  let launch;
  if (isLaunched(item10016)) {
    launch = item10016.data.launch;
  }
  let invite;
  if (isLaunched(item10016)) {
    invite = item10016.data.invite;
  }
  const mainFrame = FramesStore.getMainFrame();
  let id;
  if (mainFrame != null) {
    id = mainFrame.id;
  }
  leaveFrame.leaveFrame(item10016.id);
  const obj3 = { applicationId: item10016.applicationId, surface: item10016.surface, launch, invite };
  FramesActionCreatorsDefault.launchFrame({
    applicationId: item10016.applicationId,
    surface: item10016.surface,
    launch,
    invite,
  }).catch(() => {});
  if (id !== item10016.id) {
    FramesActionCreatorsDefault.demoteMainFrame(item10016.id);
    const tmp8Result = FramesActionCreatorsDefault;
  }
  const launchFrameResult = FramesActionCreatorsDefault.launchFrame({
    applicationId: item10016.applicationId,
    surface: item10016.surface,
    launch,
    invite,
  });
}
const isLaunched = fn(6777).isLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/restartFrames.tsx");

export { restartFrame };
export const restartAppFrames = function restartAppFrames(application_id) {
  closure_0 = application_id;
  if (null != application_id) {
    const items = [];
    HermesBuiltin.arraySpread(FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10016 of found) {
      let tmp8 = restartFrame(item10016);
      continue;
    }
  }
};
