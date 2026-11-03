// === Module 11462: usePinotMemberCoachmark ===

// Module 11462 (usePinotMemberCoachmark)
import dismissible_content from "dismissible_content" /* 4974 */;
import useIsPinotMemberCoachmarkEligible from "useIsPinotMemberCoachmarkEligible" /* 11463 */;
import PinotMemberNoticeActionCreators from "PinotMemberNoticeActionCreators" /* 11466 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/usePinotMemberCoachmark.tsx");

export function usePinotMemberCoachmark(channel, mobile_member_coachmark) {
  const isPinotMemberCoachmarkEligible = pinotPromotableChannelId(11463).useIsPinotMemberCoachmarkEligible(channel, mobile_member_coachmark);
  let obj = pinotPromotableChannelId(11463);
  pinotPromotableChannelId = pinotPromotableChannelId(11458).usePinotPromotableChannelId(channel, mobile_member_coachmark);
  const obj2 = pinotPromotableChannelId(11458);
  if (isPinotMemberCoachmarkEligible) {
    items = [tmp(4974).DismissibleContent.PINOT_MEMBER_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = _slicedToArray(pinotPromotableChannelId(7693).useSelectedDismissibleContent(items1, { bypassAutoDismiss: true }), 2);
  dependencyMap = tmp6;
  const items2 = [tmp5[1], pinotPromotableChannelId];
  const obj4 = { visible: null, markAsDismissed: null };
  const callback = noop.useCallback((arg0) => {
    closure_1(arg0);
    if (null != pinotPromotableChannelId) {
      PinotMemberNoticeActionCreators.ackPinotMemberNotice(tmp2);
    }
  }, items2);
  obj4.visible = tmp5[0] === pinotPromotableChannelId(4974).DismissibleContent.PINOT_MEMBER_COACHMARK;
  obj4.markAsDismissed = callback;
  return obj4;
}
export function useIsPinotMemberCoachmarkPending(guild_id, mobile_member_coachmark) {
  let isPinotMemberCoachmarkEligible = useIsPinotMemberCoachmarkEligible.useIsPinotMemberCoachmarkEligible(guild_id, mobile_member_coachmark);
  if (isPinotMemberCoachmarkEligible) {
    isPinotMemberCoachmarkEligible = !obj2.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.PINOT_MEMBER_COACHMARK);
  }
  return isPinotMemberCoachmarkEligible;
}