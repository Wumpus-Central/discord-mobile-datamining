// discord_app/modules/people/PeopleListTracking.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const FriendsListItemActionType = {
  ROW_CLICKED: "row_clicked",
  MESSAGE_CLICKED: "message_clicked",
  VIDEO_CALL_CLICKED: "video_call_clicked",
  VOICE_CALL_CLICKED: "voice_call_clicked",
  REMOVE_FRIEND_CLICKED: "remove_friend_clicked",
  CONTEXT_MENU_INTERACTED: "context_menu_interacted",
};
const result = size.fileFinishedImporting("modules/people/PeopleListTracking.tsx");

export { FriendsListItemActionType };
export const trackFriendsListItemClicked = function trackFriendsListItemClicked(arg0) {
  ({ targetUserId, tab } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, {
    target_user_id: targetUserId,
    tab,
    action_type: obj.ROW_CLICKED,
  });
};
export const trackFriendsListItemMessageClicked = function trackFriendsListItemMessageClicked(arg0) {
  ({ targetUserId, tab } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, {
    target_user_id: targetUserId,
    tab,
    action_type: obj.MESSAGE_CLICKED,
  });
};
export const trackFriendsListItemVideoCallClicked = function trackFriendsListItemVideoCallClicked(arg0) {
  ({ targetUserId, tab } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, {
    target_user_id: targetUserId,
    tab,
    action_type: obj.VIDEO_CALL_CLICKED,
  });
};
export const trackFriendsListItemVoiceCallClicked = function trackFriendsListItemVoiceCallClicked(arg0) {
  ({ targetUserId, tab } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, {
    target_user_id: targetUserId,
    tab,
    action_type: obj.VOICE_CALL_CLICKED,
  });
};
export const trackFriendsListItemRemoveFriendClicked = function trackFriendsListItemRemoveFriendClicked(arg0) {
  ({ targetUserId, tab } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, {
    target_user_id: targetUserId,
    tab,
    action_type: obj.REMOVE_FRIEND_CLICKED,
  });
};
export const trackFriendsListItemContextMenuInteracted = function trackFriendsListItemContextMenuInteracted(arg0) {
  ({ targetUserId, tab } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, {
    target_user_id: targetUserId,
    tab,
    action_type: obj.CONTEXT_MENU_INTERACTED,
  });
};
export const trackViewFriendRequestNote = function trackViewFriendRequestNote(arg0) {
  ({ analyticsLocation, noteLength } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.FRIEND_REQUEST_NOTE_VIEWED, {
    location: analyticsLocation,
    note_length: noteLength,
  });
};
