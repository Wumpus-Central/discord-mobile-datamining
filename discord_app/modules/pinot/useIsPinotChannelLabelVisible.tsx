// === Module 11068: useIsPinotChannelLabelVisible ===

// Module 11068 (useIsPinotChannelLabelVisible)
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable" /* 11069 */;
import PinotExperiment from "PinotExperiment" /* 11070 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/useIsPinotChannelLabelVisible.tsx");

export const useIsPinotChannelLabelVisible = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotChannelLabelVisible(guild_id, arg1) {
  const pinotPromotableChannelId = useIsChannelPinotPromotable.usePinotPromotableChannelId(guild_id, arg1);
  let tmp2 = null;
  if (null != pinotPromotableChannelId) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    tmp2 = guild_id;
  }
  return null != pinotPromotableChannelId && PinotExperiment.useIsPinotMemberNoticeEnabled(tmp2, arg1);
}) : (function useIsPinotChannelLabelVisible(guild_id, arg1) {
  const pinotPromotableChannelId = useIsChannelPinotPromotable.usePinotPromotableChannelId(guild_id, arg1);
  let tmp2 = null;
  if (null != pinotPromotableChannelId) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    tmp2 = guild_id;
  }
  return null != pinotPromotableChannelId && PinotExperiment.useIsPinotMemberNoticeEnabled(tmp2, arg1);
});