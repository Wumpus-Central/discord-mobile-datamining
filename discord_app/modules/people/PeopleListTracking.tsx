// === Module 12720: FriendsListItemActionType ===

// Module 12720 (FriendsListItemActionType)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;

const AnalyticEvents = ME.AnalyticEvents;
let obj = { ROW_CLICKED: "row_clicked", MESSAGE_CLICKED: "message_clicked", VIDEO_CALL_CLICKED: "video_call_clicked", VOICE_CALL_CLICKED: "voice_call_clicked", REMOVE_FRIEND_CLICKED: "remove_friend_clicked", CONTEXT_MENU_INTERACTED: "context_menu_interacted" };
const result = set.fileFinishedImporting("modules/people/PeopleListTracking.tsx");

export const FriendsListItemActionType = obj;
export const trackFriendsListItemClicked = function trackFriendsListItemClicked(arg0) {
  ({ targetUserId, tab } = arg0);
  obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.ROW_CLICKED });
};
export const trackFriendsListItemMessageClicked = function trackFriendsListItemMessageClicked(arg0) {
  ({ targetUserId, tab } = arg0);
  obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.MESSAGE_CLICKED });
};
export const trackFriendsListItemVideoCallClicked = function trackFriendsListItemVideoCallClicked(arg0) {
  ({ targetUserId, tab } = arg0);
  obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.VIDEO_CALL_CLICKED });
};
export const trackFriendsListItemVoiceCallClicked = function trackFriendsListItemVoiceCallClicked(arg0) {
  ({ targetUserId, tab } = arg0);
  obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.VOICE_CALL_CLICKED });
};
export const trackFriendsListItemRemoveFriendClicked = function trackFriendsListItemRemoveFriendClicked(arg0) {
  ({ targetUserId, tab } = arg0);
  obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.REMOVE_FRIEND_CLICKED });
};
export const trackFriendsListItemContextMenuInteracted = function trackFriendsListItemContextMenuInteracted(arg0) {
  ({ targetUserId, tab } = arg0);
  obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.CONTEXT_MENU_INTERACTED });
};
export const trackViewFriendRequestNote = function trackViewFriendRequestNote(arg0) {
  ({ analyticsLocation, noteLength } = arg0);
  expandEventPropertiesDefault.track(AnalyticEvents.FRIEND_REQUEST_NOTE_VIEWED, { location: analyticsLocation, note_length: noteLength });
};