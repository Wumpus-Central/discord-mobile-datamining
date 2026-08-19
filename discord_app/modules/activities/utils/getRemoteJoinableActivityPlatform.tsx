// discord_app/modules/activities/utils/getRemoteJoinableActivityPlatform.tsx
import PlatformTypes from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import hasFlag from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import computeActivityFlags from "ActivityFlagUtils.tsx";
import isConnected from "../../../stores/ConnectedAppsStore.tsx";
import handleUpdate from "../../../stores/SessionsStore.tsx";
import ME from "../../../Constants.tsx";

require = fn;
({ ActivityFlags: c4, ActivityGamePlatforms: c5 } = ME);
const result = require("obj132").fileFinishedImporting("modules/activities/utils/getRemoteJoinableActivityPlatform.tsx");

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
        remoteApplicationActivity = remoteApplicationActivity.getRemoteApplicationActivity(application_id);
        let tmp4 = null;
        if (null != remoteApplicationActivity) {
          let tmp11Result = computeActivityFlags;
          tmp4 = null;
          if (!tmp11Result.isContextlessEmbeddedActivity(remoteApplicationActivity)) {
            if (null == remoteApplicationActivity.application_id) {
              tmp11Result = hasFlag;
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
              if (!connected.isConnected(remoteApplicationActivity.application_id)) {
                platform = remoteApplicationActivity.platform;
                if (tmp11Result1.isAndroid()) {
                  let isIOSResult = platform === constants2.ANDROID;
                } else {
                  isIOSResult = PlatformTypes.isIOS();
                  if (isIOSResult) {
                    isIOSResult = platform === constants2.IOS;
                  }
                  const tmp11Result2 = PlatformTypes;
                }
                tmp4 = null;
                tmp11Result1 = PlatformTypes;
              }
            }
          }
        }
        return tmp4;
      }
      obj5 = hasFlag;
    }
    return null;
  }
};