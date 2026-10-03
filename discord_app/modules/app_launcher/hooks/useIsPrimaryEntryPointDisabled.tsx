// === Module 11767: useIsPrimaryEntryPointDisabled ===

// Module 11767 (useIsPrimaryEntryPointDisabled)
import getPlatformDefault from "getPlatform" /* 8933 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
import PermissionStore from "PermissionStore" /* 4509 */;

const require = fn;
const Permissions = fn(1096).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let stringResult2 = dependencyMap;
  const cResult = channel(576).c(9);
  ({ context, application, activityAction } = arg0);
  channel = undefined;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function o() {
      return PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(first, tmp7);
  const tmpResult = channel(504);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = channel(9011).useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (channel(11671).ActivityAction.LEAVE !== activityAction) {
    if (tmp(11671).ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        let isGuildVoiceResult;
        if (channel != null) {
          isGuildVoiceResult = channel.isGuildVoice();
        }
        if (isGuildVoiceResult) {
          flag = false;
          if (embeddedActivityLaunchability !== tmp(9011).EmbeddedActivityLaunchability.CAN_LAUNCH) {
            flag = true;
          }
        } else {
          flag = false;
          if (!tmpResult6.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmpResult6 = tmp(9000);
        }
      }
    } else {
      flag = false;
      if (tmp(11671).ActivityAction.JOIN === activityAction) {
        let isGuildVoiceResult1;
        if (channel != null) {
          isGuildVoiceResult1 = channel.isGuildVoice();
        }
        if (isGuildVoiceResult1) {
          flag = !stateFromStores;
        } else {
          flag = false;
          if (!tmpResult7.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmpResult7 = tmp(9000);
        }
      }
    }
  }
  let flag2 = flag;
  if (activityAction !== channel(11671).ActivityAction.LEAVE) {
    const tmp14 = application instanceof ApplicationRecord ? application.embeddedActivityConfig : application.embedded_activity_config;
    getPlatformDefault;
    tmp(1369);
    if (null != tmp14) {
      const supported_platforms = tmp14.supported_platforms;
      if (!supported_platforms.includes(tmp18)) {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.z2YTgJ);
          cResult[3] = stringResult;
        }
        flag2 = false;
      }
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    flag2 = flag;
    if (isThreadResult) {
      const _Symbol2 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.ddSR3v);
        cResult[4] = stringResult1;
      }
    }
  }
  let tmp25 = flag2;
  if (flag2) {
    tmp25 = null == tmp13;
  }
  if (!tmp25) {
    if (cResult[6] === flag2) {
      if (cResult[7] === tmp13) {
        let tmp28 = cResult[8];
      }
      return tmp28;
    }
    const obj2 = { disabled: flag2, reason: tmp13 };
    cResult[6] = flag2;
    cResult[7] = tmp13;
    cResult[8] = obj2;
    tmp28 = obj2;
  } else {
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      stringResult2 = intl3.string(tmp(1126).t.f41E1g);
      cResult[5] = stringResult2;
    }
  }
  const tmpResult5 = channel(9011);
}) : ((arg0) => {
  ({ context, application, activityAction } = arg0);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const items = [PermissionStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel));
  const obj = channel(504);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = channel(9011).useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (channel(11671).ActivityAction.LEAVE !== activityAction) {
    if (tmp2(11671).ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        let isGuildVoiceResult;
        if (channel != null) {
          isGuildVoiceResult = channel.isGuildVoice();
        }
        if (isGuildVoiceResult) {
          flag = false;
          if (embeddedActivityLaunchability !== tmp2(9011).EmbeddedActivityLaunchability.CAN_LAUNCH) {
            flag = true;
          }
        } else {
          flag = false;
          if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmp2Result = tmp2(9000);
        }
      }
    } else {
      flag = false;
      if (tmp2(11671).ActivityAction.JOIN === activityAction) {
        let isGuildVoiceResult1;
        if (channel != null) {
          isGuildVoiceResult1 = channel.isGuildVoice();
        }
        if (isGuildVoiceResult1) {
          flag = !stateFromStores;
        } else {
          flag = false;
          if (!tmp2Result3.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmp2Result3 = tmp2(9000);
        }
      }
    }
  }
  let disabled = flag;
  let reason;
  if (activityAction !== channel(11671).ActivityAction.LEAVE) {
    const tmp10 = application instanceof ApplicationRecord ? application.embeddedActivityConfig : application.embedded_activity_config;
    getPlatformDefault;
    tmp2(1369);
    if (null != tmp10) {
      const supported_platforms = tmp10.supported_platforms;
      if (!supported_platforms.includes(tmp14)) {
        const intl = tmp2(1126).intl;
        reason = intl.string(tmp2(1126).t.z2YTgJ);
        disabled = false;
      }
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    disabled = flag;
    if (isThreadResult) {
      const intl2 = tmp2(1126).intl;
      reason = intl2.string(tmp2(1126).t.ddSR3v);
      disabled = true;
    }
  }
  let tmp16 = disabled;
  if (disabled) {
    tmp16 = null == reason;
  }
  if (tmp16) {
    const intl3 = tmp2(1126).intl;
    reason = intl3.string(tmp2(1126).t.f41E1g);
  }
  return { disabled, reason };
});