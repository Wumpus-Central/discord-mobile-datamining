// === Module 10404: useShouldShowSafetyToolsButtonTooltipForChannel ===

// Module 10404 (useShouldShowSafetyToolsButtonTooltipForChannel)
import c from "c" /* 576 */;
import DurationsDefault from "Durations" /* 1102 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10266 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10366 */;
import useInappropriateConversationSafetyToolsWarningForChannel from "useInappropriateConversationSafetyToolsWarningForChannel" /* 10405 */;
import useShouldShowInitialSafetyToolsButtonTooltip from "useShouldShowInitialSafetyToolsButtonTooltip" /* 10406 */;
import InappropriateConversationUtils from "InappropriateConversationUtils" /* 10407 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const HOUR = DurationsDefault.Millis.HOUR;
let closure_4 = 12 * DurationsDefault.Millis.HOUR;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx");

export const useSafetyToolsButtonTooltipForChannel = ReactCompilerGating.isReactCompilerEnabled() ? (function useSafetyToolsButtonTooltipForChannel(arg0) {
  const cResult = c.c(3);
  const inappropriateConversationSafetyToolsWarningForChannel = useInappropriateConversationSafetyToolsWarningForChannel.useInappropriateConversationSafetyToolsWarningForChannel(arg0);
  const inappropriateConversationWarningsForChannel = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0);
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    if (!obj4.useShouldShowInitialSafetyToolsButtonTooltip(arg0)) {
      if (!tmpResult.shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel)) {
        const someResult = inappropriateConversationWarningsForChannel.some((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
        const found = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp);
        const sorted = found.sort((dismiss_timestamp, dismiss_timestamp2) => {
          let num = 1;
          if (dismiss_timestamp2.dismiss_timestamp < dismiss_timestamp.dismiss_timestamp) {
            num = -1;
          }
          return num;
        });
        if (sorted.length >= 1) {
          const dismiss_timestamp = sorted[0].dismiss_timestamp;
          let flag = someResult;
          if (someResult === undefined) {
            flag = false;
          }
          if (null == dismiss_timestamp) {
            {
              if (cResult[0] !== inappropriateConversationWarningsForChannel) {
                const _Symbol = Symbol;
                if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
                  const fn = function _(dismiss_timestamp) {
                    return null == dismiss_timestamp.dismiss_timestamp;
                  };
                  cResult[2] = fn;
                  let tmp18 = fn;
                } else {
                  tmp18 = cResult[2];
                }
                const found1 = inappropriateConversationWarningsForChannel.filter(tmp18);
                let findLastResult = found1.findLast((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
                if (findLastResult == null) {
                  findLastResult = found1.findLast((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
                }
                cResult[0] = inappropriateConversationWarningsForChannel;
                cResult[1] = findLastResult;
                let tmp16 = findLastResult;
              } else {
                tmp16 = cResult[1];
              }
              return tmp16;
            }
          } else {
            let time1 = globalThis;
            const _Date = Date;
            const date = new Date(dismiss_timestamp);
            let time = date.getTime();
            time = time + (flag ? HOUR : closure_4);
            const date1 = new time1.Date();
            time1 = date1.getTime();
          }
        }
      }
      tmpResult = InappropriateConversationUtils;
    }
  }
  obj4 = useShouldShowInitialSafetyToolsButtonTooltip;
}) : (function useSafetyToolsButtonTooltipForChannel(arg0) {
  const inappropriateConversationSafetyToolsWarningForChannel = useInappropriateConversationSafetyToolsWarningForChannel.useInappropriateConversationSafetyToolsWarningForChannel(arg0);
  const inappropriateConversationWarningsForChannel = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0);
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    if (!obj3.useShouldShowInitialSafetyToolsButtonTooltip(arg0)) {
      if (!tmpResult.shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel)) {
        const someResult = inappropriateConversationWarningsForChannel.some((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
        const found = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp);
        const sorted = found.sort((dismiss_timestamp, dismiss_timestamp2) => {
          let num = 1;
          if (dismiss_timestamp2.dismiss_timestamp < dismiss_timestamp.dismiss_timestamp) {
            num = -1;
          }
          return num;
        });
        if (sorted.length >= 1) {
          const dismiss_timestamp = sorted[0].dismiss_timestamp;
          let flag = someResult;
          if (someResult === undefined) {
            flag = false;
          }
          if (null == dismiss_timestamp) {
            {
              const found1 = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
              let findLastResult = found1.findLast((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
              if (findLastResult == null) {
                findLastResult = found1.findLast((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
              }
              return findLastResult;
            }
          } else {
            let time1 = globalThis;
            const _Date = Date;
            const date = new Date(dismiss_timestamp);
            let time = date.getTime();
            time = time + (flag ? HOUR : closure_4);
            const date1 = new time1.Date();
            time1 = date1.getTime();
          }
        }
      }
      tmpResult = InappropriateConversationUtils;
    }
  }
  obj3 = useShouldShowInitialSafetyToolsButtonTooltip;
});