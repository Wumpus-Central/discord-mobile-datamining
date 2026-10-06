// === Module 11405: getRemoteJoinableActivityPlatform ===

// Module 11405 (getRemoteJoinableActivityPlatform)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import ActivityFlagUtils from "ActivityFlagUtils" /* 11136 */;
import ConnectedAppsStore from "ConnectedAppsStore" /* 6610 */;
import SessionsStore from "SessionsStore" /* 4914 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ ActivityFlags: closure_4, ActivityGamePlatforms: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getRemoteJoinableActivityPlatform.tsx");

export const getRemoteJoinableActivityPlatform = function getRemoteJoinableActivityPlatform(presenceActivity) {
  if (null == presenceActivity) {
    return null;
  } else {
    const application_id = presenceActivity.application_id;
    if (null != application_id) {
      let num = presenceActivity.flags;
      const hasFlag2 = FlagUtils.hasFlag;
      FlagUtils;
      if (num == null) {
        num = 0;
      }
      if (hasFlag2(num, constants.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
        const remoteApplicationActivity = SessionsStore.getRemoteApplicationActivity(application_id);
        let tmp4 = null;
        if (null != remoteApplicationActivity) {
          tmp4 = null;
          const tmp12Result = ActivityFlagUtils;
          if (!tmp12Result.isContextlessEmbeddedActivity(remoteApplicationActivity)) {
            if (null == remoteApplicationActivity.application_id) {
              let num2 = remoteApplicationActivity.flags;
              const hasFlag = FlagUtils.hasFlag;
              FlagUtils;
              if (num2 == null) {
                num2 = 0;
              }
              let tmp10 = null;
              if (hasFlag(num2, constants.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
                let platform1 = remoteApplicationActivity.platform;
                if (platform1 == null) {
                  platform1 = null;
                }
                tmp10 = platform1;
              }
              tmp4 = tmp10;
            } else {
              tmp4 = null;
              if (!ConnectedAppsStore.isConnected(remoteApplicationActivity.application_id)) {
                const platform = remoteApplicationActivity.platform;
                const tmp12Result5 = utils_PlatformUtils;
                if (!tmp12Result5.isAndroid()) {
                  const tmp12Result6 = utils_PlatformUtils;
                  tmp12Result6.isIOS() && platform === hasOwnProperty.IOS;
                }
                tmp4 = null;
              }
            }
          }
        }
        return tmp4;
      }
    }
    return null;
  }
};