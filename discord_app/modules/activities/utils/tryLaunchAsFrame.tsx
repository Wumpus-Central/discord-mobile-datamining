// === Module 11393: tryLaunchAsFrame ===

// Module 11393 (tryLaunchAsFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10766 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11353 */;
import openFrameInAppChannelDefault from "openFrameInAppChannel" /* 11394 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;

require = fn;
const MAIN_SURFACE = fn(6776).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(channelId) {
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
};