// === Module 9844: useInappropriateConversationSafetyToolsWarningForChannel ===

// Module 9844 (useInappropriateConversationSafetyToolsWarningForChannel)
import react from "react" /* 576 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 9803 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 9805 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 9806 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  const obj = react;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "safety-tools-button" };
    let num = 0;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = SelfModInappropriateConversationExperiment;
  const isEligibleForInappropriateConversationWarning = tmpResult.useIsEligibleForInappropriateConversationWarning(first);
  const tmpResult3 = useSafetyAlertsSettingOrDefault;
  const safetyAlertsSettingOrDefault = tmpResult3.useSafetyAlertsSettingOrDefault();
  const tmpResult4 = useInappropriateConversationWarningsForChannel;
  const inappropriateConversationWarningsForChannel = tmpResult4.useInappropriateConversationWarningsForChannel(arg0);
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      let first1;
      let tmp7;
      if (cResult[1] !== inappropriateConversationWarningsForChannel) {
        let tmp10;
        const _Symbol = Symbol;
        const _Symbol2 = Symbol;
        const forResult = Symbol.for("react.early_return_sentinel");
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(dismiss_timestamp) {
            return null != dismiss_timestamp.dismiss_timestamp;
          };
          cResult[4] = fn;
          tmp10 = fn;
        } else {
          tmp10 = cResult[4];
        }
        const found = inappropriateConversationWarningsForChannel.filter(tmp10);
        let tmp11;
        let sorted;
        if (0 !== found.length) {
          let tmp13;
          const _Symbol3 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function _(type, type2) {
              let num;
              if (type.type > type2.type) {
                num = 1;
              } else {
                num = -1;
              }
              return num;
            };
            cResult[5] = fn2;
            tmp13 = fn2;
          } else {
            tmp13 = cResult[5];
          }
          sorted = found.sort(tmp13);
          tmp11 = forResult;
        }
        cResult[1] = inappropriateConversationWarningsForChannel;
        cResult[2] = sorted;
        cResult[3] = tmp11;
        first1 = tmp11;
        tmp7 = sorted;
      } else {
        tmp7 = cResult[2];
        first1 = cResult[3];
      }
      const _Symbol4 = Symbol;
      if (first1 === Symbol.for("react.early_return_sentinel")) {
        first1 = tmp7[0];
      }
      return first1;
    }
  }
}) : ((arg0) => {
  const obj = SelfModInappropriateConversationExperiment;
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj2 = useSafetyAlertsSettingOrDefault;
  const safetyAlertsSettingOrDefault = obj2.useSafetyAlertsSettingOrDefault();
  const obj3 = useInappropriateConversationWarningsForChannel;
  const inappropriateConversationWarningsForChannel = obj3.useInappropriateConversationWarningsForChannel(arg0);
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      const found = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp);
      let num = 0;
      if (0 !== found.length) {
        return found.sort((type, type2) => {
          let num;
          if (type.type > type2.type) {
            num = 1;
          } else {
            num = -1;
          }
          return num;
        })[0];
      }
    }
  }
});
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = tmp2;