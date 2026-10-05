// discord_app/modules/interactions/interactionCallbackErrorReason.tsx
import intl12 from "../../intl/index.native.tsx";
import InteractionCallbackErrorDefault from "../errors/InteractionCallbackError.tsx";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/interactions/interactionCallbackErrorReason.tsx");

export const interactionCallbackErrorReason = function interactionCallbackErrorReason(reason, applicationId) {
  if (InteractionCallbackErrorDefault.ReasonCodes.TIMEOUT === reason) {
    let formatToPlainStringResult;
    const application = ApplicationStore.getApplication(applicationId);
    if (null != application) {
      const intl11 = intl12.intl;
      const obj = { applicationName: application.name };
      formatToPlainStringResult = intl11.formatToPlainString(intl12.t.u2D2Uj, obj);
    } else {
      const intl10 = intl12.intl;
      formatToPlainStringResult = intl10.string(intl12.t["vGU8+r"]);
    }
    return formatToPlainStringResult;
  } else if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT === reason) {
    const intl9 = intl12.intl;
    return intl9.string(intl12.t.GyzcrS);
  } else {
    if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL !== reason) {
      if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS !== reason) {
        if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL !== reason) {
          if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD !== reason) {
            if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE !== reason) {
              if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK !== reason) {
                if (InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE === reason) {
                  const intl6 = intl12.intl;
                  return intl6.string(intl12.t["4WuFRE"]);
                } else if (
                  InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE === reason
                ) {
                  const intl5 = intl12.intl;
                  return intl5.string(intl12.t.RvkXdb);
                } else {
                  if (
                    InteractionCallbackErrorDefault.ReasonCodes
                      .ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED !== reason
                  ) {
                    if (
                      InteractionCallbackErrorDefault.ReasonCodes
                        .ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED !== reason
                    ) {
                      if (
                        InteractionCallbackErrorDefault.ReasonCodes
                          .ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY === reason
                      ) {
                        const intl3 = intl12.intl;
                        return intl3.string(intl12.t.WjNAAA);
                      } else if (
                        InteractionCallbackErrorDefault.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE === reason
                      ) {
                        const intl2 = intl12.intl;
                        return intl2.string(intl12.t.PtobXW);
                      } else if (
                        InteractionCallbackErrorDefault.ReasonCodes
                          .ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION === reason
                      ) {
                        const intl = intl12.intl;
                        return intl.string(intl12.t.PrHIM5);
                      }
                    }
                  }
                  const intl4 = intl12.intl;
                  return intl4.string(intl12.t.uGDCcw);
                }
              }
            }
          }
        }
        const intl7 = intl12.intl;
        return intl7.string(intl12.t.j29zCr);
      }
    }
    const intl8 = intl12.intl;
    return intl8.string(intl12.t.hHGrWz);
  }
};
