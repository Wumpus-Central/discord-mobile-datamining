// discord_app/modules/pinot/useIsPinotChannelLabelVisible.tsx
import PinotExperiment from "PinotExperiment.tsx";
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/pinot/useIsPinotChannelLabelVisible.tsx");

export function useIsPinotChannelLabelVisible(channel, mobile_channel_details_label) {
  const pinotPromotableChannelId = useIsChannelPinotPromotable.usePinotPromotableChannelId(
    channel,
    mobile_channel_details_label,
  );
  let tmp2 = null;
  if (null != pinotPromotableChannelId) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp2 = guild_id;
  }
  return (
    null != pinotPromotableChannelId &&
    PinotExperiment.useIsPinotMemberNoticeEnabled(tmp2, mobile_channel_details_label)
  );
}
