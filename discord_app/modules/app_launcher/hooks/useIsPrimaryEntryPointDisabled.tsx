// === Module 11829: useIsPrimaryEntryPointDisabled ===

// Module 11829 (useIsPrimaryEntryPointDisabled)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 8512 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 10876 */;
import getPlatformDefault from "getPlatform" /* 11716 */;
import useActivityShelfItem from "useActivityShelfItem" /* 11733 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPrimaryEntryPointDisabled(arg0) {
  let stringResult3 = dependencyMap;
  const cResult = c.c(13);
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
          if (!tmpResult4.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmpResult4 = ActivitiesInTextUtils;
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
          if (!tmpResult5.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmpResult5 = ActivitiesInTextUtils;
        }
      }
    }
  }
  let tmp9 = flag;
  if (activityAction !== useActivityShelfItem.ActivityAction.LEAVE) {
    const tmp11 = application instanceof ApplicationRecord ? application.embeddedActivityConfig : application.embedded_activity_config;
    if (cResult[0] === channel) {
      if (cResult[1] === flag) {
        if (cResult[2] === tmp11) {
          if (cResult[3] === embeddedActivityLaunchability) {
            tmp9 = cResult[5];
          }
        }
      }
    }
    const tmp13 = getPlatformDefault;
    const tmpResult6 = PlatformUtils;
    if (flag) {
      if (embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CHANNEL_CONTENT_GATED) {
        const _Symbol3 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const stringResult = intl3.string(util.t.pKLV22);
          cResult[6] = stringResult;
        }
      }
    }
    if (null != tmp11) {
      const supported_platforms = tmp11.supported_platforms;
      if (!supported_platforms.includes(tmp13Result)) {
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult1 = intl.string(util.t.z2YTgJ);
          cResult[7] = stringResult1;
          let tmp16 = stringResult1;
        } else {
          tmp16 = cResult[7];
        }
        let flag2 = false;
      }
      cResult[0] = channel;
      cResult[1] = flag2;
      cResult[2] = tmp11;
      cResult[3] = embeddedActivityLaunchability;
      cResult[4] = tmp16;
      cResult[5] = flag2;
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    flag2 = flag;
    if (isThreadResult) {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult2 = intl2.string(util.t.ddSR3v);
        cResult[8] = stringResult2;
        let tmp20 = stringResult2;
      } else {
        tmp20 = cResult[8];
      }
      flag2 = true;
      tmp16 = tmp20;
    }
    tmp13Result = tmp13(PlatformUtils.getOS());
  }
  let tmp29 = tmp9;
  if (tmp9) {
    tmp29 = null == tmp10;
  }
  if (!tmp29) {
    if (cResult[10] === tmp9) {
      if (cResult[11] === tmp10) {
        let tmp33 = cResult[12];
      }
      return tmp33;
    }
    const obj2 = { disabled: tmp9, reason: tmp10 };
    cResult[10] = tmp9;
    cResult[11] = tmp10;
    cResult[12] = obj2;
    tmp33 = obj2;
  } else {
    const _Symbol4 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = util.intl;
      stringResult3 = intl4.string(util.t.f41E1g);
      cResult[9] = stringResult3;
    }
  }
  const tmpResult = getEmbeddedActivityLaunchability;
}) : (function useIsPrimaryEntryPointDisabled(arg0) {
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
});