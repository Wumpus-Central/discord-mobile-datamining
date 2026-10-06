// discord_app/modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import getPlatformDefault from "../../activities/utils/getPlatform.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activityAction;
      let application;
      let channel;
      let context;
      let first;
      let tmp7;
      const obj = channel(576);
      const cResult = obj.c(9);
      ({ context, application, activityAction } = arg0);
      channel = undefined;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function o() {
          return PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel);
        };
        cResult[1] = channel;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      let id;
      const useEmbeddedActivityLaunchability = channel(9044).useEmbeddedActivityLaunchability;
      channel(9044);
      if (channel != null) {
        id = channel.id;
      }
      const embeddedActivityLaunchability = useEmbeddedActivityLaunchability(id);
      let flag = false;
      if (channel(11685).ActivityAction.LEAVE !== activityAction) {
        if (channel(11685).ActivityAction.START === activityAction) {
          flag = false;
          if (null != channel) {
            let isGuildVoiceResult;
            if (channel != null) {
              isGuildVoiceResult = channel.isGuildVoice();
            }
            if (isGuildVoiceResult) {
              flag = false;
              if (embeddedActivityLaunchability !== channel(9044).EmbeddedActivityLaunchability.CAN_LAUNCH) {
                flag = true;
              }
            } else {
              flag = false;
              const tmpResult6 = channel(9033);
              if (!tmpResult6.isActivitiesInTextEnabled(channel)) {
                flag = true;
              }
            }
          }
        } else {
          flag = false;
          if (channel(11685).ActivityAction.JOIN === activityAction) {
            let isGuildVoiceResult1;
            if (channel != null) {
              isGuildVoiceResult1 = channel.isGuildVoice();
            }
            if (isGuildVoiceResult1) {
              flag = !stateFromStores;
            } else {
              flag = false;
              const tmpResult7 = channel(9033);
              if (!tmpResult7.isActivitiesInTextEnabled(channel)) {
                flag = true;
              }
            }
          }
        }
      }
      let flag2 = flag;
      let tmp14;
      if (activityAction !== channel(11685).ActivityAction.LEAVE) {
        const tmp15 =
          application instanceof ApplicationRecord
            ? application.embeddedActivityConfig
            : application.embedded_activity_config;
        getPlatformDefault;
        channel(1369);
        if (null != tmp15) {
          const supported_platforms = tmp15.supported_platforms;
          if (!supported_platforms.includes(tmp19)) {
            let tmp20;
            const _Symbol = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(channel(1126).t.z2YTgJ);
              cResult[3] = stringResult;
              tmp20 = stringResult;
            } else {
              tmp20 = cResult[3];
            }
            tmp14 = tmp20;
            flag2 = false;
          }
        }
        let isThreadResult;
        if (channel != null) {
          isThreadResult = channel.isThread();
        }
        flag2 = flag;
        if (isThreadResult) {
          let tmp23;
          const _Symbol2 = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(channel(1126).t.ddSR3v);
            cResult[4] = stringResult1;
            tmp23 = stringResult1;
          } else {
            tmp23 = cResult[4];
          }
          flag2 = true;
          tmp14 = tmp23;
        }
      }
      const tmp25 = flag2 && null == tmp14;
      if (tmp25) {
        let tmp26;
        const _Symbol3 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(channel(1126).t.f41E1g);
          cResult[5] = stringResult2;
          tmp26 = stringResult2;
        } else {
          tmp26 = cResult[5];
        }
        tmp14 = tmp26;
      }
      if (cResult[6] === flag2) {
        let tmp28;
        if (cResult[7] === tmp14) {
          tmp28 = cResult[8];
        }
        return tmp28;
      }
      const obj2 = { disabled: flag2, reason: tmp14 };
      cResult[6] = flag2;
      cResult[7] = tmp14;
      cResult[8] = obj2;
      tmp28 = obj2;
    }
  : (arg0) => {
      let activityAction;
      let application;
      let context;
      ({ context, application, activityAction } = arg0);
      let channel;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      const items = [PermissionStore];
      const obj = channel(504);
      const stateFromStores = obj.useStateFromStores(items, () =>
        PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel),
      );
      let id;
      const useEmbeddedActivityLaunchability = channel(9044).useEmbeddedActivityLaunchability;
      channel(9044);
      if (channel != null) {
        id = channel.id;
      }
      const embeddedActivityLaunchability = useEmbeddedActivityLaunchability(id);
      let flag = false;
      if (channel(11685).ActivityAction.LEAVE !== activityAction) {
        if (channel(11685).ActivityAction.START === activityAction) {
          flag = false;
          if (null != channel) {
            let isGuildVoiceResult;
            if (channel != null) {
              isGuildVoiceResult = channel.isGuildVoice();
            }
            if (isGuildVoiceResult) {
              flag = false;
              if (embeddedActivityLaunchability !== channel(9044).EmbeddedActivityLaunchability.CAN_LAUNCH) {
                flag = true;
              }
            } else {
              flag = false;
              const tmp2Result = channel(9033);
              if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
                flag = true;
              }
            }
          }
        } else {
          flag = false;
          if (channel(11685).ActivityAction.JOIN === activityAction) {
            let isGuildVoiceResult1;
            if (channel != null) {
              isGuildVoiceResult1 = channel.isGuildVoice();
            }
            if (isGuildVoiceResult1) {
              flag = !stateFromStores;
            } else {
              flag = false;
              const tmp2Result3 = channel(9033);
              if (!tmp2Result3.isActivitiesInTextEnabled(channel)) {
                flag = true;
              }
            }
          }
        }
      }
      let disabled = flag;
      let reason;
      if (activityAction !== channel(11685).ActivityAction.LEAVE) {
        const tmp11 =
          application instanceof ApplicationRecord
            ? application.embeddedActivityConfig
            : application.embedded_activity_config;
        getPlatformDefault;
        channel(1369);
        if (null != tmp11) {
          const supported_platforms = tmp11.supported_platforms;
          if (!supported_platforms.includes(tmp15)) {
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
      const tmp17 = disabled && null == reason;
      if (tmp17) {
        const intl3 = tmp2(1126).intl;
        reason = intl3.string(tmp2(1126).t.f41E1g);
      }
      return { disabled, reason };
    };
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default tmp2;
