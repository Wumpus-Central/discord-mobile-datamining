// === Module 11294: useIsPinotChannelLabelVisible ===

// Module 11294 (useIsPinotChannelLabelVisible)
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable" /* 11295 */;
import PinotExperiment from "PinotExperiment" /* 11296 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/useIsPinotChannelLabelVisible.tsx");

export function useIsPinotChannelLabelVisible(stateFromStores, mobile_channel_header_label) {
  const pinotPromotableChannelId = useIsChannelPinotPromotable.usePinotPromotableChannelId(stateFromStores, mobile_channel_header_label);
  let tmp2 = null;
  if (null != pinotPromotableChannelId) {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    tmp2 = guild_id;
  }
  return null != pinotPromotableChannelId && PinotExperiment.useIsPinotMemberNoticeEnabled(tmp2, mobile_channel_header_label);
}