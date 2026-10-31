// discord_app/modules/pinot/usePinotMemberCoachmark.tsx
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useIsPinotMemberCoachmarkEligible from "useIsPinotMemberCoachmarkEligible.tsx";
import PinotMemberNoticeActionCreators from "PinotMemberNoticeActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/usePinotMemberCoachmark.tsx");

export function usePinotMemberCoachmark(channel, mobile_member_coachmark) {
  const isPinotMemberCoachmarkEligible = pinotPromotableChannelId(11326).useIsPinotMemberCoachmarkEligible(
    channel,
    mobile_member_coachmark,
  );
  let obj = pinotPromotableChannelId(11326);
  pinotPromotableChannelId = pinotPromotableChannelId(11321).usePinotPromotableChannelId(
    channel,
    mobile_member_coachmark,
  );
  const obj2 = pinotPromotableChannelId(11321);
  if (isPinotMemberCoachmarkEligible) {
    const items = [tmp(4847).DismissibleContent.PINOT_MEMBER_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = _slicedToArray(
    pinotPromotableChannelId(7569).useSelectedDismissibleContent(items1, { bypassAutoDismiss: true }),
    2,
  );
  dependencyMap = tmp6;
  const items2 = [tmp5[1], pinotPromotableChannelId];
  const obj4 = { visible: null, markAsDismissed: null };
  const callback = noop.useCallback((arg0) => {
    closure_1(arg0);
    if (null != pinotPromotableChannelId) {
      PinotMemberNoticeActionCreators.ackPinotMemberNotice(tmp2);
    }
  }, items2);
  obj4.visible = tmp5[0] === pinotPromotableChannelId(4847).DismissibleContent.PINOT_MEMBER_COACHMARK;
  obj4.markAsDismissed = callback;
  return obj4;
}
export function useIsPinotMemberCoachmarkPending(guild_id, mobile_member_coachmark) {
  let isPinotMemberCoachmarkEligible = useIsPinotMemberCoachmarkEligible.useIsPinotMemberCoachmarkEligible(
    guild_id,
    mobile_member_coachmark,
  );
  if (isPinotMemberCoachmarkEligible) {
    isPinotMemberCoachmarkEligible = !obj2.useIsDismissibleContentDismissed_UNSAFE(
      dismissible_content.DismissibleContent.PINOT_MEMBER_COACHMARK,
    );
  }
  return isPinotMemberCoachmarkEligible;
}
