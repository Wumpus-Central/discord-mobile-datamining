// === Module 11866: tryLaunchAsFrame ===

// Module 11866 (tryLaunchAsFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5795 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11065 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11826 */;
import openFrameInAppChannelDefault from "openFrameInAppChannel" /* 11867 */;
import ApplicationStore from "ApplicationStore" /* 2167 */;

require = fn;
const MAIN_SURFACE = fn(6967).MAIN_SURFACE;
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