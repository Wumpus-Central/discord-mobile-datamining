// === Module 10607: useSafetyToolsButtonTooltipForChannel ===

// Module 10607 (useSafetyToolsButtonTooltipForChannel)
import obj132 from "obj132" /* 2 */;
import obj132Default from "obj132" /* 687 */;
import handleConnectionOpen from "handleConnectionOpen" /* 9921 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10574 */;
import useInappropriateConversationSafetyToolsWarningForChannel from "useInappropriateConversationSafetyToolsWarningForChannel" /* 10608 */;
import useShouldShowInitialSafetyToolsButtonTooltip from "useShouldShowInitialSafetyToolsButtonTooltip" /* 10609 */;
import getSafetyAlertsSettingOrDefault from "getSafetyAlertsSettingOrDefault" /* 10610 */;

const SafetyWarningTypes = handleConnectionOpen.SafetyWarningTypes;
const HOUR = obj132Default.Millis.HOUR;
let closure_4 = 12 * obj132Default.Millis.HOUR;
const result = obj132.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx");

export const useSafetyToolsButtonTooltipForChannel = function useSafetyToolsButtonTooltipForChannel(channelId) {
  const inappropriateConversationSafetyToolsWarningForChannel = useInappropriateConversationSafetyToolsWarningForChannel.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const inappropriateConversationWarningsForChannel = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId);
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    if (!obj3.useShouldShowInitialSafetyToolsButtonTooltip(channelId)) {
      if (!tmpResult.shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel)) {
        const someResult = inappropriateConversationWarningsForChannel.some((item, index) => item.type === closure_2.INAPPROPRIATE_CONVERSATION_TIER_1);
        const found = inappropriateConversationWarningsForChannel.filter((item, index) => null != item.dismiss_timestamp);
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
              const found1 = inappropriateConversationWarningsForChannel.filter((item, index) => null == item.dismiss_timestamp);
              let findLastResult = found1.findLast((type) => type.type === closure_2.INAPPROPRIATE_CONVERSATION_TIER_1);
              if (findLastResult == null) {
                findLastResult = found1.findLast((type) => type.type === closure_2.INAPPROPRIATE_CONVERSATION_TIER_2);
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
      tmpResult = getSafetyAlertsSettingOrDefault;
    }
  }
  obj3 = useShouldShowInitialSafetyToolsButtonTooltip;
};