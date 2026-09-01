// discord_app/modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx
import getPlatformDefault from "../../activities/utils/getPlatform.tsx";
import closure_3 from "../../../records/ApplicationRecord.tsx";
import closure_4 from "../../../stores/PermissionStore.tsx";
import { Permissions } from "../../../../discord_common/js/shared/Constants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default function useIsPrimaryEntryPointDisabled(arg0) {
  ({ context, application, activityAction } = arg0);
  let channel;
  channel = undefined;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const items = [closure_4];
  const stateFromStores = channel(589).useStateFromStores(items, () =>
    closure_1_4.can(closure_1_5.USE_EMBEDDED_ACTIVITIES, channel),
  );
  const obj = channel(589);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = channel(9486).useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (channel(11629).ActivityAction.LEAVE !== activityAction) {
    if (tmp2(11629).ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        let isGuildVoiceResult;
        if (channel != null) {
          isGuildVoiceResult = channel.isGuildVoice();
        }
        if (isGuildVoiceResult) {
          flag = false;
          if (embeddedActivityLaunchability !== tmp2(9486).EmbeddedActivityLaunchability.CAN_LAUNCH) {
            flag = true;
          }
        } else {
          let tmp2Result = tmp2(8144);
          flag = false;
          if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
        }
      }
    } else {
      flag = false;
      if (tmp2(11629).ActivityAction.JOIN === activityAction) {
        let isGuildVoiceResult1;
        if (channel != null) {
          isGuildVoiceResult1 = channel.isGuildVoice();
        }
        if (isGuildVoiceResult1) {
          flag = !stateFromStores;
        } else {
          tmp2Result = tmp2(8144);
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
  if (activityAction !== channel(11629).ActivityAction.LEAVE) {
    const tmp10 =
      application instanceof closure_3 ? application.embeddedActivityConfig : application.embedded_activity_config;
    getPlatformDefault;
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
}
