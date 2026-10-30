// discord_app/modules/pinot/useIsPinotChannelLabelVisible.tsx
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable.tsx";
import PinotExperiment from "PinotExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/pinot/useIsPinotChannelLabelVisible.tsx");

export function useIsPinotChannelLabelVisible(stateFromStores, mobile_channel_header_label) {
  const pinotPromotableChannelId = useIsChannelPinotPromotable.usePinotPromotableChannelId(
    stateFromStores,
    mobile_channel_header_label,
  );
  let tmp2 = null;
  if (null != pinotPromotableChannelId) {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    tmp2 = guild_id;
  }
  return (
    null != pinotPromotableChannelId && PinotExperiment.useIsPinotMemberNoticeEnabled(tmp2, mobile_channel_header_label)
  );
}
