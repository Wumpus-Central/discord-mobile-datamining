// discord_app/modules/interactions/interactionCallbackErrorReason.tsx
import addApplication from "addApplication";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { prototype } from "../errors/InteractionCallbackError.tsx";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/interactions/interactionCallbackErrorReason.tsx");

export const interactionCallbackErrorReason = function interactionCallbackErrorReason(reason, applicationId) {
  if (prototype.ReasonCodes.TIMEOUT === reason) {
    application = application.getApplication(applicationId);
    if (null != application) {
      const intl11 = getSystemLocale.intl;
      const obj = { applicationName: null };
      obj[0] = application.name;
      let formatToPlainStringResult = intl11.formatToPlainString(getSystemLocale.t.u2D2Uj, obj);
    } else {
      const intl10 = getSystemLocale.intl;
      formatToPlainStringResult = intl10.string(getSystemLocale.t["vGU8+r"]);
    }
    return formatToPlainStringResult;
  } else if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT === reason) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.GyzcrS);
  } else {
    if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL !== reason) {
      if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS !== reason) {
        if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL !== reason) {
          if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD !== reason) {
            if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE !== reason) {
              if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK !== reason) {
                if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE === reason) {
                  const intl6 = getSystemLocale.intl;
                  return intl6.string(getSystemLocale.t["4WuFRE"]);
                } else if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE === reason) {
                  const intl5 = getSystemLocale.intl;
                  return intl5.string(getSystemLocale.t.RvkXdb);
                } else {
                  if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED !== reason) {
                    if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED !== reason) {
                      if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY === reason) {
                        const intl3 = getSystemLocale.intl;
                        return intl3.string(getSystemLocale.t.WjNAAA);
                      } else if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE === reason) {
                        const intl2 = getSystemLocale.intl;
                        return intl2.string(getSystemLocale.t.PtobXW);
                      } else if (tmp(4568).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION === reason) {
                        const intl = getSystemLocale.intl;
                        return intl.string(getSystemLocale.t.PrHIM5);
                      }
                    }
                  }
                  const intl4 = getSystemLocale.intl;
                  return intl4.string(getSystemLocale.t.uGDCcw);
                }
              }
            }
          }
        }
        const intl7 = getSystemLocale.intl;
        return intl7.string(getSystemLocale.t.j29zCr);
      }
    }
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.hHGrWz);
  }
};