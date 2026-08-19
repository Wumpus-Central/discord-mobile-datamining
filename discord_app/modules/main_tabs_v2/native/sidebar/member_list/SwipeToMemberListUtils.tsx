// === Module 10667: useIsSwipeToMemberListEnabled ===

// Module 10667 (useIsSwipeToMemberListEnabled)
import obj132 from "obj132" /* 2 */;
import create from "create" /* 1306 */;
import useSwipeToReplySettingValue from "useSwipeToReplySettingValue" /* 10668 */;

const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export const useIsSwipeToMemberListEnabled = function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = useSwipeToReplySettingValue.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabled = function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = useSwipeToReplySettingValue.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};