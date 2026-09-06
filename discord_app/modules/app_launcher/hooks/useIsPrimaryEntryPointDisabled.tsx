// discord_app/modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx
import getPlatformDefault from "../../activities/utils/getPlatform.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default function useIsPrimaryEntryPointDisabled(arg0) {
  ({ context, application, activityAction } = arg0);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const items = [PermissionStore];
  const stateFromStores = channel(504).useStateFromStores(items, () =>
    PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel),
  );
  const obj = channel(504);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = channel(9582).useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (channel(12057).ActivityAction.LEAVE !== activityAction) {
    if (tmp2(12057).ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        let isGuildVoiceResult;
        if (channel != null) {
          isGuildVoiceResult = channel.isGuildVoice();
        }
        if (isGuildVoiceResult) {
          flag = false;
          if (embeddedActivityLaunchability !== tmp2(9582).EmbeddedActivityLaunchability.CAN_LAUNCH) {
            flag = true;
          }
        } else {
          let tmp2Result = tmp2(9546);
          flag = false;
          if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
        }
      }
    } else {
      flag = false;
      if (tmp2(12057).ActivityAction.JOIN === activityAction) {
        let isGuildVoiceResult1;
        if (channel != null) {
          isGuildVoiceResult1 = channel.isGuildVoice();
        }
        if (isGuildVoiceResult1) {
          flag = !stateFromStores;
        } else {
          tmp2Result = tmp2(9546);
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
  if (activityAction !== channel(12057).ActivityAction.LEAVE) {
    const tmp10 =
      application instanceof ApplicationRecord
        ? application.embeddedActivityConfig
        : application.embedded_activity_config;
    getPlatformDefault;
    tmp2(1115);
    if (null != tmp10) {
      const supported_platforms = tmp10.supported_platforms;
      if (!supported_platforms.includes(tmp14)) {
        const intl = tmp2(1114).intl;
        reason = intl.string(tmp2(1114).t.z2YTgJ);
        disabled = false;
      }
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    disabled = flag;
    if (isThreadResult) {
      const intl2 = tmp2(1114).intl;
      reason = intl2.string(tmp2(1114).t.ddSR3v);
      disabled = true;
    }
  }
  let tmp16 = disabled;
  if (disabled) {
    tmp16 = null == reason;
  }
  if (tmp16) {
    const intl3 = tmp2(1114).intl;
    reason = intl3.string(tmp2(1114).t.f41E1g);
  }
  return { disabled, reason };
}
