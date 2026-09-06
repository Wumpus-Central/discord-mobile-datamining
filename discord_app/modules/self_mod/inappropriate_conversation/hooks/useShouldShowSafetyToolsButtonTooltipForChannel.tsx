// === Module 11394: useShouldShowSafetyToolsButtonTooltipForChannel ===

// Module 11394 (useShouldShowSafetyToolsButtonTooltipForChannel)
import DurationsDefault from "Durations" /* 1090 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10915 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10972 */;
import useInappropriateConversationSafetyToolsWarningForChannel from "useInappropriateConversationSafetyToolsWarningForChannel" /* 11395 */;
import useShouldShowInitialSafetyToolsButtonTooltip from "useShouldShowInitialSafetyToolsButtonTooltip" /* 11396 */;
import InappropriateConversationUtils from "InappropriateConversationUtils" /* 11397 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const HOUR = DurationsDefault.Millis.HOUR;
let closure_4 = 12 * DurationsDefault.Millis.HOUR;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx");

export const useSafetyToolsButtonTooltipForChannel = function useSafetyToolsButtonTooltipForChannel(channelId) {
  const inappropriateConversationSafetyToolsWarningForChannel = useInappropriateConversationSafetyToolsWarningForChannel.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const inappropriateConversationWarningsForChannel = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId);
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    if (!obj3.useShouldShowInitialSafetyToolsButtonTooltip(channelId)) {
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
};