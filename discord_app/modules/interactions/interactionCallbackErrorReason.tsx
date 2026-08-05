// discord_app/modules/interactions/interactionCallbackErrorReason.tsx
import addApplication from "addApplication";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/interactions/interactionCallbackErrorReason.tsx");

export const interactionCallbackErrorReason = function interactionCallbackErrorReason(reason, applicationId) {
  if (importDefault(4509).ReasonCodes.TIMEOUT === reason) {
    application = application.getApplication(applicationId);
    if (null != application) {
      const intl11 = require(1236) /* getSystemLocale */.intl;
      const obj = { applicationName: null };
      obj[0] = application.name;
      let formatToPlainStringResult = intl11.formatToPlainString(require(1236) /* getSystemLocale */.t.u2D2Uj, obj);
    } else {
      const intl10 = require(1236) /* getSystemLocale */.intl;
      formatToPlainStringResult = intl10.string(require(1236) /* getSystemLocale */.t["vGU8+r"]);
    }
    return formatToPlainStringResult;
  } else if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT === reason) {
    const intl9 = require(1236) /* getSystemLocale */.intl;
    return intl9.string(require(1236) /* getSystemLocale */.t.GyzcrS);
  } else {
    if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL !== reason) {
      if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS !== reason) {
        if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL !== reason) {
          if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD !== reason) {
            if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE !== reason) {
              if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK !== reason) {
                if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE === reason) {
                  const intl6 = require(1236) /* getSystemLocale */.intl;
                  return intl6.string(require(1236) /* getSystemLocale */.t["4WuFRE"]);
                } else if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE === reason) {
                  const intl5 = require(1236) /* getSystemLocale */.intl;
                  return intl5.string(require(1236) /* getSystemLocale */.t.RvkXdb);
                } else {
                  if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED !== reason) {
                    if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED !== reason) {
                      if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY === reason) {
                        const intl3 = require(1236) /* getSystemLocale */.intl;
                        return intl3.string(require(1236) /* getSystemLocale */.t.WjNAAA);
                      } else if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE === reason) {
                        const intl2 = require(1236) /* getSystemLocale */.intl;
                        return intl2.string(require(1236) /* getSystemLocale */.t.PtobXW);
                      } else if (tmp(4509).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION === reason) {
                        const intl = require(1236) /* getSystemLocale */.intl;
                        return intl.string(require(1236) /* getSystemLocale */.t.PrHIM5);
                      }
                    }
                  }
                  const intl4 = require(1236) /* getSystemLocale */.intl;
                  return intl4.string(require(1236) /* getSystemLocale */.t.uGDCcw);
                }
              }
            }
          }
        }
        const intl7 = require(1236) /* getSystemLocale */.intl;
        return intl7.string(require(1236) /* getSystemLocale */.t.j29zCr);
      }
    }
    const intl8 = require(1236) /* getSystemLocale */.intl;
    return intl8.string(require(1236) /* getSystemLocale */.t.hHGrWz);
  }
};