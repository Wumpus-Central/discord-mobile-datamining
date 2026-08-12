// discord_app/modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx
import createExecutable from "createExecutable";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "sum";
import { getPlatform } from "../../activities/utils/getPlatform.tsx";

const require = arg1;
const result = require("sum").fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default function useIsPrimaryEntryPointDisabled(arg0) {
  let activityAction;
  let application;
  let context;
  ({ context, application, activityAction } = arg0);
  let channel;
  channel = undefined;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const items = [getUncachedChannelPermissions];
  const stateFromStores = channel(589).useStateFromStores(items, () => outer1_4.can(outer1_5.USE_EMBEDDED_ACTIVITIES, channel));
  const obj = channel(589);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = channel(10695).useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (channel(11504).ActivityAction.LEAVE !== activityAction) {
    if (tmp2(11504).ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        let isGuildVoiceResult;
        if (channel != null) {
          isGuildVoiceResult = channel.isGuildVoice();
        }
        if (isGuildVoiceResult) {
          flag = false;
          if (embeddedActivityLaunchability !== tmp2(10695).EmbeddedActivityLaunchability.CAN_LAUNCH) {
            flag = true;
          }
        } else {
          let tmp2Result = tmp2(8381);
          flag = false;
          if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
        }
      }
    } else {
      flag = false;
      if (tmp2(11504).ActivityAction.JOIN === activityAction) {
        let isGuildVoiceResult1;
        if (channel != null) {
          isGuildVoiceResult1 = channel.isGuildVoice();
        }
        if (isGuildVoiceResult1) {
          flag = !stateFromStores;
        } else {
          tmp2Result = tmp2(8381);
          flag = false;
          if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
        }
      }
    }
  }
  let disabled = flag;
  let reason;
  if (activityAction !== channel(11504).ActivityAction.LEAVE) {
    const tmp10 = application instanceof createExecutable ? application.embeddedActivityConfig : application.embedded_activity_config;
    getPlatform;
    tmp2(500);
    if (null != tmp10) {
      const supported_platforms = tmp10.supported_platforms;
      if (!supported_platforms.includes(tmp14)) {
        const intl = tmp2(1236).intl;
        reason = intl.string(tmp2(1236).t.z2YTgJ);
        disabled = false;
      }
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    disabled = flag;
    if (isThreadResult) {
      const intl2 = tmp2(1236).intl;
      reason = intl2.string(tmp2(1236).t.ddSR3v);
      disabled = true;
    }
  }
  let tmp16 = disabled;
  if (disabled) {
    tmp16 = null == reason;
  }
  if (tmp16) {
    const intl3 = tmp2(1236).intl;
    reason = intl3.string(tmp2(1236).t.f41E1g);
  }
  return { disabled, reason };
};