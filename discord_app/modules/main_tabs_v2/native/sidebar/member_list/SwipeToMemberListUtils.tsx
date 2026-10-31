// === Module 11537: SwipeToMemberListUtils ===

// Module 11537 (SwipeToMemberListUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import hasSecondaryViewChatDefault from "hasSecondaryViewChat" /* 6877 */;
import ChatGestureSettings from "ChatGestureSettings" /* 11538 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = ChatGestureSettings.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
}
export function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = ChatGestureSettings.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
}
export function isSwipeToMemberListEnabledForChannel(id) {
  const swipeToReplySettingValue = ChatGestureSettings.getSwipeToReplySettingValue();
  let tmp3 = swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
  if (tmp3) {
    tmp3 = !hasSecondaryViewChatDefault(id);
  }
  return tmp3;
}