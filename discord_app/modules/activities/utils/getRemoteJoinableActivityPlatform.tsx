// discord_app/modules/activities/utils/getRemoteJoinableActivityPlatform.tsx
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import ActivityFlagUtils from "ActivityFlagUtils.tsx";
import ConnectedAppsStore from "../../../stores/ConnectedAppsStore.tsx";
import SessionsStore from "../../../stores/SessionsStore.tsx";

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
          let tmp11Result = ActivityFlagUtils;
          tmp4 = null;
          if (!tmp11Result.isContextlessEmbeddedActivity(remoteApplicationActivity)) {
            if (null == remoteApplicationActivity.application_id) {
              tmp11Result = FlagUtils;
              let num2 = remoteApplicationActivity.flags;
              if (num2 == null) {
                num2 = 0;
              }
              let tmp9 = null;
              if (tmp11Result.hasFlag(num2, constants.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
                let platform = remoteApplicationActivity.platform;
                if (platform == null) {
                  platform = null;
                }
                tmp9 = platform;
              }
              tmp4 = tmp9;
            } else {
              tmp4 = null;
              if (!ConnectedAppsStore.isConnected(remoteApplicationActivity.application_id)) {
                platform = remoteApplicationActivity.platform;
                if (tmp11Result1.isAndroid()) {
                  let isIOSResult = platform === constants2.ANDROID;
                } else {
                  isIOSResult = utils_PlatformUtils.isIOS();
                  if (isIOSResult) {
                    isIOSResult = platform === constants2.IOS;
                  }
                  const tmp11Result2 = utils_PlatformUtils;
                }
                tmp4 = null;
                tmp11Result1 = utils_PlatformUtils;
              }
            }
          }
        }
        return tmp4;
      }
      obj5 = FlagUtils;
    }
    return null;
  }
};
