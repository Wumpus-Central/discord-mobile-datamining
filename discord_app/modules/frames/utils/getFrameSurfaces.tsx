// === Module 11360: getFrameSurfaces ===

// Module 11360 (getFrameSurfaces)
import Constants from "Constants" /* 1084 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2028 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5627 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6813 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9651 */;
import size from "module_2" /* 2 */;

function getFrameSurfaces(application) {
  const set = new Set();
  if (null != application) {
    if (obj5.isRealApplication(application)) {
      let result = EmbeddedSurfaceUtils.supportsEmbeddedSurface(application, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
      if (result) {
        result = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
        const tmp19Result2 = ApplicationFlagUtils;
      }
      if (result) {
        set.add(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
      }
      if ("conjureProjectId" in application) {
        if (null != application.conjureProjectId) {
          const items = [EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL];
          for (const item10039 of items) {
            let obj4 = EmbeddedSurfaceUtils;
            if (obj4.supportsEmbeddedSurface(arg0, item10039)) {
              let addResult1 = set.add(item10039);
            }
            continue;
          }
        }
      }
      return set;
    }
    obj5 = AppLauncherUtils;
  }
  return set;
}
const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/getFrameSurfaces.tsx");

export { getFrameSurfaces };
export const isFrameApp = function isFrameApp(application) {
  return getFrameSurfaces(application).size > 0;
};
export const canOpenFrame = function canOpenFrame(app) {
  const obj = getFrameSurfaces(app);
  let hasItem = obj.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
  if (!hasItem) {
    hasItem = obj.has(EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL);
  }
  return hasItem;
};