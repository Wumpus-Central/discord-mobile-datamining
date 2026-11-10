// === Module 11469: useIsPinotChannelLabelVisible ===

// Module 11469 (useIsPinotChannelLabelVisible)
import PinotExperiment from "PinotExperiment" /* 9141 */;
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable" /* 11470 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/useIsPinotChannelLabelVisible.tsx");

export function useIsPinotChannelLabelVisible(channel, mobile_channel_details_label) {
  const pinotPromotableChannelId = useIsChannelPinotPromotable.usePinotPromotableChannelId(channel, mobile_channel_details_label);
  let tmp2 = null;
  if (null != pinotPromotableChannelId) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp2 = guild_id;
  }
  return null != pinotPromotableChannelId && PinotExperiment.useIsPinotMemberNoticeEnabled(tmp2, mobile_channel_details_label);
}