// === Module 11326: useIsPinotMemberCoachmarkEligible ===

// Module 11326 (useIsPinotMemberCoachmarkEligible)
import PinotExperiment from "PinotExperiment" /* 9055 */;
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable" /* 11321 */;
import useCanMessageInPinotChannel from "useCanMessageInPinotChannel" /* 11324 */;
import PinotMemberSettingState from "PinotMemberSettingState" /* 11327 */;
import size from "module_2" /* 2 */;

let c2 = true;
const result = size.fileFinishedImporting("modules/pinot/useIsPinotMemberCoachmarkEligible.tsx");

export const PINOT_MEMBER_COACHMARK_SHOWS_FOR_OPTED_OUT = true;
export function useIsPinotMemberCoachmarkEligible(guild_id, mobile_member_coachmark) {
  const pinotPromotableChannelId = useIsChannelPinotPromotable.usePinotPromotableChannelId(guild_id, mobile_member_coachmark);
  let tmp4 = null;
  if (null != pinotPromotableChannelId) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    tmp4 = guild_id;
  }
  const isPinotMemberNoticeEnabled = PinotExperiment.useIsPinotMemberNoticeEnabled(tmp4, mobile_member_coachmark);
  const isPinotMemberEnabledWithoutExposure = PinotExperiment.useIsPinotMemberEnabledWithoutExposure(mobile_member_coachmark);
  const tmpResult = PinotExperiment;
  const pinotMemberSettingState = PinotMemberSettingState.usePinotMemberSettingState();
  ({ optedOut, locked } = pinotMemberSettingState);
  const tmpResult3 = PinotMemberSettingState;
  const tmpResult4 = useCanMessageInPinotChannel;
  return null != pinotPromotableChannelId && useCanMessageInPinotChannel.useCanMessageInPinotChannel(guild_id) && isPinotMemberNoticeEnabled && isPinotMemberEnabledWithoutExposure && !locked && c2;
}