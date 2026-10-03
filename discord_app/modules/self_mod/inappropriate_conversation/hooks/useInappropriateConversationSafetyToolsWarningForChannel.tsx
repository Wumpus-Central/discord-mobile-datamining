// discord_app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx
import c from "../../../../../_runtime/00576_c.js";
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel.tsx";
import SelfModInappropriateConversationExperiment from "../SelfModInappropriateConversationExperiment.tsx";
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx",
);

export const useInappropriateConversationSafetyToolsWarningForChannel = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "safety-tools-button" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const isEligibleForInappropriateConversationWarning =
        SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning(first);
      const tmpResult = SelfModInappropriateConversationExperiment;
      const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault();
      const tmpResult3 = useSafetyAlertsSettingOrDefault;
      const inappropriateConversationWarningsForChannel =
        useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0);
      if (isEligibleForInappropriateConversationWarning) {
        if (safetyAlertsSettingOrDefault) {
          if (cResult[1] !== inappropriateConversationWarningsForChannel) {
            const _Symbol = Symbol;
            const _Symbol2 = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const fn = function u(dismiss_timestamp) {
                return null != dismiss_timestamp.dismiss_timestamp;
              };
              cResult[4] = fn;
              let tmp10 = fn;
            } else {
              tmp10 = cResult[4];
            }
            const found = inappropriateConversationWarningsForChannel.filter(tmp10);
            if (0 === found.length) {
              cResult[1] = inappropriateConversationWarningsForChannel;
              cResult[2] = undefined;
              cResult[3] = undefined;
            } else {
              const _Symbol3 = Symbol;
              if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
                const fn2 = function _(type, type2) {
                  if (type.type > type2.type) {
                    let num = 1;
                  } else {
                    num = -1;
                  }
                  return num;
                };
                cResult[5] = fn2;
                let tmp11 = fn2;
              } else {
                tmp11 = cResult[5];
              }
              const sorted = found.sort(tmp11);
            }
            const forResult = Symbol.for("react.early_return_sentinel");
          } else {
            let first1 = cResult[3];
            const tmp7 = cResult[2];
          }
          const _Symbol4 = Symbol;
          if (first1 === Symbol.for("react.early_return_sentinel")) {
            first1 = tmp7[0];
          }
          return first1;
        }
      }
      const tmpResult4 = useInappropriateConversationWarningsForChannel;
    }
  : (arg0) => {
      const isEligibleForInappropriateConversationWarning =
        SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({
          location: "safety-tools-button",
        });
      const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault();
      const inappropriateConversationWarningsForChannel =
        useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0);
      if (isEligibleForInappropriateConversationWarning) {
        if (safetyAlertsSettingOrDefault) {
          const found = inappropriateConversationWarningsForChannel.filter(
            (dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp,
          );
          if (0 !== found.length) {
            return found.sort((type, type2) => {
              if (type.type > type2.type) {
                let num = 1;
              } else {
                num = -1;
              }
              return num;
            })[0];
          }
        }
      }
    };
