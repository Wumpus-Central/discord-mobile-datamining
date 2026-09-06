// discord_app/modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx
import preloaded_user_settings from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ChatGestureSettings from "../../../../user_settings/defs/native/ChatGestureSettings.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export const useIsSwipeToMemberListEnabled = function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = ChatGestureSettings.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabled = function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = ChatGestureSettings.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
