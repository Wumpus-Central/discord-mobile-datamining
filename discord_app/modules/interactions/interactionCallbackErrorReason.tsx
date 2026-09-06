// === Module 4787: interactionCallbackErrorReason ===

// Module 4787 (interactionCallbackErrorReason)
import util from "util" /* 1114 */;
import InteractionCallbackErrorDefault from "InteractionCallbackError" /* 4789 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interactions/interactionCallbackErrorReason.tsx");

export const interactionCallbackErrorReason = function interactionCallbackErrorReason(reason, applicationId) {
  if (InteractionCallbackErrorDefault.ReasonCodes.TIMEOUT === reason) {
    const application = ApplicationStore.getApplication(applicationId);
    if (null != application) {
      const intl11 = util.intl;
      const obj = { applicationName: application.name };
      let formatToPlainStringResult = intl11.formatToPlainString(util.t.u2D2Uj, obj);
    } else {
      const intl10 = util.intl;
      formatToPlainStringResult = intl10.string(util.t["vGU8+r"]);
    }
    return formatToPlainStringResult;
  } else if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT === reason) {
    const intl9 = util.intl;
    return intl9.string(util.t.GyzcrS);
  } else {
    if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL !== reason) {
      if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS !== reason) {
        if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL !== reason) {
          if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD !== reason) {
            if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE !== reason) {
              if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK !== reason) {
                if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE === reason) {
                  const intl6 = util.intl;
                  return intl6.string(util.t["4WuFRE"]);
                } else if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE === reason) {
                  const intl5 = util.intl;
                  return intl5.string(util.t.RvkXdb);
                } else {
                  if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED !== reason) {
                    if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED !== reason) {
                      if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY === reason) {
                        const intl3 = util.intl;
                        return intl3.string(util.t.WjNAAA);
                      } else if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE === reason) {
                        const intl2 = util.intl;
                        return intl2.string(util.t.PtobXW);
                      } else if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION === reason) {
                        const intl = util.intl;
                        return intl.string(util.t.PrHIM5);
                      }
                    }
                  }
                  const intl4 = util.intl;
                  return intl4.string(util.t.uGDCcw);
                }
              }
            }
          }
        }
        const intl7 = util.intl;
        return intl7.string(util.t.j29zCr);
      }
    }
    const intl8 = util.intl;
    return intl8.string(util.t.hHGrWz);
  }
};