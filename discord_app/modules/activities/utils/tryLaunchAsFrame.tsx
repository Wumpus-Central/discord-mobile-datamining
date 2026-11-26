// === Module 10101: tryLaunchAsFrame ===

// Module 10101 (tryLaunchAsFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5687 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9996 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10086 */;
import openFrameInAppChannelDefault from "openFrameInAppChannel" /* 10102 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;

require = fn;
const MAIN_SURFACE = fn(6937).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export function tryLaunchAsFrame(channelId) {
  ({ applicationId, application } = channelId);
  if (application === undefined) {
    application = ApplicationStore.getApplication(applicationId);
  }
  ({ launch, analyticsContext, preferAppChannel } = channelId);
  if (preferAppChannel === undefined) {
    preferAppChannel = false;
  }
  const frameSurfaces = getFrameSurfaces.getFrameSurfaces(application);
  const hasItem = frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
  if (!frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL)) {
    let flag = hasItem;
    if (flag) {
      const obj2 = { applicationId, surface: MAIN_SURFACE, launch, analyticsContext };
      FramesActionCreatorsDefault.launchFrame(obj2);
      flag = true;
    }
  } else {
    const obj4 = { applicationId, channelId: channelId.channelId, launch, analyticsContext };
    openFrameInAppChannelDefault(obj4);
    flag = true;
  }
  return flag;
}