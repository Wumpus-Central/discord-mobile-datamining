// discord_app/modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export const useIsSwipeToMemberListEnabled = function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = require("../../../../user_settings/defs/native/ChatGestureSettings.tsx") /* useSwipeToReplySettingValue */.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === require("../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabled = function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = require("../../../../user_settings/defs/native/ChatGestureSettings.tsx") /* useSwipeToReplySettingValue */.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === require("../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};