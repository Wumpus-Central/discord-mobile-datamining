// discord_app/modules/pinot/useIsPinotChannelLabelVisible.tsx
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable.tsx";
import PinotExperiment from "PinotExperiment.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/pinot/useIsPinotChannelLabelVisible.tsx");

export const useIsPinotChannelLabelVisible = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsPinotChannelLabelVisible(guild_id, arg1) {
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
    }
  : function useIsPinotChannelLabelVisible(guild_id, arg1) {
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
    };
