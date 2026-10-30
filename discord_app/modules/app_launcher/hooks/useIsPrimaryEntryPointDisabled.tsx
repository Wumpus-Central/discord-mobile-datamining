// === Module 12296: useIsPrimaryEntryPointDisabled ===

// Module 12296 (useIsPrimaryEntryPointDisabled)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import getPlatformDefault from "getPlatform" /* 5677 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 8952 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 11710 */;
import useActivityShelfItem from "useActivityShelfItem" /* 12207 */;
import ApplicationRecord from "ApplicationRecord" /* 2017 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default function useIsPrimaryEntryPointDisabled(arg0) {
  ({ context, application, activityAction } = arg0);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = getEmbeddedActivityLaunchability.useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (useActivityShelfItem.ActivityAction.LEAVE !== activityAction) {
    if (useActivityShelfItem.ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        let isGuildVoiceResult;
        if (channel != null) {
          isGuildVoiceResult = channel.isGuildVoice();
        }
        if (isGuildVoiceResult) {
          flag = false;
          if (embeddedActivityLaunchability !== getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH) {
            flag = true;
          }
        } else {
          flag = false;
          if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmp2Result = ActivitiesInTextUtils;
        }
      }
    } else {
      flag = false;
      if (useActivityShelfItem.ActivityAction.JOIN === activityAction) {
        let isGuildVoiceResult1;
        if (channel != null) {
          isGuildVoiceResult1 = channel.isGuildVoice();
        }
        if (isGuildVoiceResult1) {
          flag = embeddedActivityLaunchability !== getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH;
        } else {
          flag = false;
          if (!tmp2Result3.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmp2Result3 = ActivitiesInTextUtils;
        }
      }
    }
  }
  let disabled = flag;
  let reason;
  if (activityAction !== useActivityShelfItem.ActivityAction.LEAVE) {
    const tmp9 = application instanceof ApplicationRecord ? application.embeddedActivityConfig : application.embedded_activity_config;
    const tmp11 = getPlatformDefault;
    const tmp2Result4 = PlatformUtils;
    if (flag) {
      if (embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CHANNEL_CONTENT_GATED) {
        const intl3 = util.intl;
        reason = intl3.string(util.t.pKLV22);
        disabled = flag;
      }
    }
    if (null != tmp9) {
      const supported_platforms = tmp9.supported_platforms;
      if (!supported_platforms.includes(tmp11Result)) {
        const intl = util.intl;
        reason = intl.string(util.t.z2YTgJ);
        disabled = false;
      }
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    disabled = flag;
    if (isThreadResult) {
      const intl2 = util.intl;
      reason = intl2.string(util.t.ddSR3v);
      disabled = true;
    }
    tmp11Result = tmp11(PlatformUtils.getOS());
  }
  let tmp14 = disabled;
  if (disabled) {
    tmp14 = null == reason;
  }
  if (tmp14) {
    const intl4 = util.intl;
    reason = intl4.string(util.t.f41E1g);
  }
  return { disabled, reason };
};