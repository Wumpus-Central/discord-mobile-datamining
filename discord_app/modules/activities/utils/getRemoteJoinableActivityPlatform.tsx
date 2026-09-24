// === Module 12101: getRemoteJoinableActivityPlatform ===

// Module 12101 (getRemoteJoinableActivityPlatform)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import ActivityFlagUtils from "ActivityFlagUtils" /* 9715 */;
import ConnectedAppsStore from "ConnectedAppsStore" /* 7441 */;
import SessionsStore from "SessionsStore" /* 4847 */;

require = fn;
const Constants = fn(1074);
({ ActivityFlags: closure_4, ActivityGamePlatforms: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getRemoteJoinableActivityPlatform.tsx");

export const getRemoteJoinableActivityPlatform = function getRemoteJoinableActivityPlatform(presenceActivity) {
  if (null == presenceActivity) {
    return null;
  } else {
    const application_id = presenceActivity.application_id;
    if (null != application_id) {
      let num = presenceActivity.flags;
      if (num == null) {
        num = 0;
      }
      if (obj5.hasFlag(num, constants.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
        const remoteApplicationActivity = SessionsStore.getRemoteApplicationActivity(application_id);
        let tmp4 = null;
        if (null != remoteApplicationActivity) {
          tmp4 = null;
          if (!tmp11Result.isContextlessEmbeddedActivity(remoteApplicationActivity)) {
            if (null == remoteApplicationActivity.application_id) {
              let num2 = remoteApplicationActivity.flags;
              if (num2 == null) {
                num2 = 0;
              }
              let tmp9 = null;
              if (tmp11Result4.hasFlag(num2, constants.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
                let platform1 = remoteApplicationActivity.platform;
                if (platform1 == null) {
                  platform1 = null;
                }
                tmp9 = platform1;
              }
              tmp4 = tmp9;
              tmp11Result4 = FlagUtils;
            } else {
              tmp4 = null;
              if (!ConnectedAppsStore.isConnected(remoteApplicationActivity.application_id)) {
                const platform = remoteApplicationActivity.platform;
                if (tmp11Result5.isAndroid()) {
                  let isIOSResult = platform === constants2.ANDROID;
                } else {
                  isIOSResult = utils_PlatformUtils.isIOS();
                  if (isIOSResult) {
                    isIOSResult = platform === constants2.IOS;
                  }
                  const tmp11Result6 = utils_PlatformUtils;
                }
                tmp4 = null;
                tmp11Result5 = utils_PlatformUtils;
              }
            }
          }
          tmp11Result = ActivityFlagUtils;
        }
        return tmp4;
      }
      obj5 = FlagUtils;
    }
    return null;
  }
};