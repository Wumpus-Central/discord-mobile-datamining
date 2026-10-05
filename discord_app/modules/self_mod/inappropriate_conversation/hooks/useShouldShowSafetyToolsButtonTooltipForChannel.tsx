// === Module 9830: useShouldShowSafetyToolsButtonTooltipForChannel ===

// Module 9830 (useShouldShowSafetyToolsButtonTooltipForChannel)
import react from "react" /* 576 */;
import DurationsDefault from "Durations" /* 1102 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 9786 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 9790 */;
import useInappropriateConversationSafetyToolsWarningForChannel from "useInappropriateConversationSafetyToolsWarningForChannel" /* 9831 */;
import useShouldShowInitialSafetyToolsButtonTooltip from "useShouldShowInitialSafetyToolsButtonTooltip" /* 9832 */;
import InappropriateConversationUtils from "InappropriateConversationUtils" /* 9833 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const HOUR = DurationsDefault.Millis.HOUR;
let closure_4 = 12 * DurationsDefault.Millis.HOUR;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = useInappropriateConversationSafetyToolsWarningForChannel;
  const inappropriateConversationSafetyToolsWarningForChannel = obj2.useInappropriateConversationSafetyToolsWarningForChannel(arg0);
  const obj3 = useInappropriateConversationWarningsForChannel;
  const inappropriateConversationWarningsForChannel = obj3.useInappropriateConversationWarningsForChannel(arg0);
  const obj4 = useShouldShowInitialSafetyToolsButtonTooltip;
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    if (!obj4.useShouldShowInitialSafetyToolsButtonTooltip(arg0)) {
      const tmpResult = InappropriateConversationUtils;
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
        let num = 1;
        if (sorted.length >= 1) {
          const dismiss_timestamp = sorted[0].dismiss_timestamp;
          let flag = someResult;
          if (someResult === undefined) {
            flag = false;
          }
          let flag2 = true;
          if (null != dismiss_timestamp) {
            const _Date = Date;
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const date = new Date(dismiss_timestamp);
            const sum = date.getTime() + (flag ? HOUR : closure_4);
            const date1 = new Date();
            flag2 = date1.getTime() >= sum;
          }
          if (flag2) {
            let tmp11;
            if (cResult[0] !== inappropriateConversationWarningsForChannel) {
              const _Symbol = Symbol;
              if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
                class T {
                  constructor(dismiss_timestamp) {
                    return null == dismiss_timestamp.dismiss_timestamp;
                  }
                }
                cResult[2] = T;
              } else {
                class T {
                  constructor(dismiss_timestamp) {
                    return null == dismiss_timestamp.dismiss_timestamp;
                  }
                }
              }
              const found1 = inappropriateConversationWarningsForChannel.filter(T);
              const findLastResult = found1.findLast((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
              if (findLastResult == null) {
                class T {
                  constructor(dismiss_timestamp) {
                    return null == dismiss_timestamp.dismiss_timestamp;
                  }
                }
              }
              cResult[0] = inappropriateConversationWarningsForChannel;
              cResult[1] = findLastResult;
              tmp11 = findLastResult;
            } else {
              class T {
                constructor(dismiss_timestamp) {
                  return null == dismiss_timestamp.dismiss_timestamp;
                }
              }
            }
            return tmp11;
          }
        }
      }
    }
  }
}) : (function(arg0) {
  const obj = useInappropriateConversationSafetyToolsWarningForChannel;
  const inappropriateConversationSafetyToolsWarningForChannel = obj.useInappropriateConversationSafetyToolsWarningForChannel(arg0);
  const obj2 = useInappropriateConversationWarningsForChannel;
  const inappropriateConversationWarningsForChannel = obj2.useInappropriateConversationWarningsForChannel(arg0);
  const obj3 = useShouldShowInitialSafetyToolsButtonTooltip;
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    if (!obj3.useShouldShowInitialSafetyToolsButtonTooltip(arg0)) {
      const tmpResult = InappropriateConversationUtils;
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
        let num = 1;
        if (sorted.length >= 1) {
          const dismiss_timestamp = sorted[0].dismiss_timestamp;
          let flag = someResult;
          if (someResult === undefined) {
            flag = false;
          }
          let flag2 = true;
          if (null != dismiss_timestamp) {
            const _Date = Date;
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const date = new Date(dismiss_timestamp);
            const sum = date.getTime() + (flag ? HOUR : closure_4);
            const date1 = new Date();
            flag2 = date1.getTime() >= sum;
          }
          if (flag2) {
            const found1 = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
            let findLastResult = found1.findLast((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
            if (findLastResult == null) {
              findLastResult = found1.findLast((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
            }
            return findLastResult;
          }
        }
      }
    }
  }
});
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx");

export const useSafetyToolsButtonTooltipForChannel = tmp2;