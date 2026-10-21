// === Module 11153: SwipeToMemberListUtils ===

// Module 11153 (SwipeToMemberListUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1211 */;
import hasSecondaryViewChatDefault from "hasSecondaryViewChat" /* 6785 */;
import ChatGestureSettings from "ChatGestureSettings" /* 11154 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export const useIsSwipeToMemberListEnabled = function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = ChatGestureSettings.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabled = function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = ChatGestureSettings.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabledForChannel = function isSwipeToMemberListEnabledForChannel(id) {
  const swipeToReplySettingValue = ChatGestureSettings.getSwipeToReplySettingValue();
  let tmp3 = swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
  if (tmp3) {
    tmp3 = !hasSecondaryViewChatDefault(id);
  }
  return tmp3;
};