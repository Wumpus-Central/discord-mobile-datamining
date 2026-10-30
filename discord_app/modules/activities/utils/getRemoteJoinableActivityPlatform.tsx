// discord_app/modules/activities/utils/getRemoteJoinableActivityPlatform.tsx
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import ActivityGamePlatforms from "../../../../discord_common/js/shared/shared-constants/ActivityGamePlatforms.tsx";
import ActivityFlagUtils from "ActivityFlagUtils.tsx";
import ConnectedAppsStore from "../../../stores/ConnectedAppsStore.tsx";
import SessionsStore from "../../../stores/SessionsStore.tsx";

require = fn;
const ActivityFlags = fn(1072).ActivityFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getRemoteJoinableActivityPlatform.tsx");

export function getRemoteJoinableActivityPlatform(presenceActivity) {
  if (null == presenceActivity) {
    return null;
  } else {
    const application_id = presenceActivity.application_id;
    if (null != application_id) {
      let num = presenceActivity.flags;
      if (num == null) {
        num = 0;
      }
      if (obj5.hasFlag(num, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
        const remoteApplicationActivity = SessionsStore.getRemoteApplicationActivity(application_id);
        let tmp4 = null;
        if (null != remoteApplicationActivity) {
          tmp4 = null;
          if (!tmp8Result.isContextlessEmbeddedActivity(remoteApplicationActivity)) {
            if (null == remoteApplicationActivity.application_id) {
              let num2 = remoteApplicationActivity.flags;
              if (num2 == null) {
                num2 = 0;
              }
              let tmp6 = null;
              if (tmp8Result4.hasFlag(num2, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) {
                let platform1 = remoteApplicationActivity.platform;
                if (platform1 == null) {
                  platform1 = null;
                }
                tmp6 = platform1;
              }
              tmp4 = tmp6;
              tmp8Result4 = FlagUtils;
            } else {
              tmp4 = null;
              if (!ConnectedAppsStore.isConnected(remoteApplicationActivity.application_id)) {
                const platform = remoteApplicationActivity.platform;
                if (tmp8Result5.isAndroid()) {
                  platform === ActivityGamePlatforms.ActivityGamePlatforms.ANDROID;
                } else {
                  utils_PlatformUtils.isIOS() && platform === ActivityGamePlatforms.ActivityGamePlatforms.IOS;
                  const tmp8Result6 = utils_PlatformUtils;
                }
                tmp4 = null;
                tmp8Result5 = utils_PlatformUtils;
              }
            }
          }
          tmp8Result = ActivityFlagUtils;
        }
        return tmp4;
      }
      obj5 = FlagUtils;
    }
    return null;
  }
}
