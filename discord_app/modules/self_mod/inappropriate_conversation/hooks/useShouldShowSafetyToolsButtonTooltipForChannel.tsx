// discord_app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import ChannelSafetyWarningsStore from "../../ChannelSafetyWarningsStore.tsx";
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel.tsx";
import useInappropriateConversationSafetyToolsWarningForChannel from "useInappropriateConversationSafetyToolsWarningForChannel.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const InappropriateConversationUtils = tmp(11397);
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const HOUR = DurationsDefault.Millis.HOUR;
let closure_4 = 12 * DurationsDefault.Millis.HOUR;
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx",
);

export const useSafetyToolsButtonTooltipForChannel = function useSafetyToolsButtonTooltipForChannel(channelId) {
  const inappropriateConversationSafetyToolsWarningForChannel =
    useInappropriateConversationSafetyToolsWarningForChannel.useInappropriateConversationSafetyToolsWarningForChannel(
      channelId,
    );
  const inappropriateConversationWarningsForChannel =
    useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId);
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    if (!obj3.useShouldShowInitialSafetyToolsButtonTooltip(channelId)) {
      if (!tmpResult.shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel)) {
        const someResult = inappropriateConversationWarningsForChannel.some(
          (type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
        );
        const found = inappropriateConversationWarningsForChannel.filter(
          (dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp,
        );
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
              const found1 = inappropriateConversationWarningsForChannel.filter(
                (dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp,
              );
              let findLastResult = found1.findLast(
                (type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
              );
              if (findLastResult == null) {
                findLastResult = found1.findLast(
                  (type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
                );
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
};
