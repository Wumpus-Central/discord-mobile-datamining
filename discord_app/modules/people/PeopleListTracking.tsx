import { AnalyticEvents } from "ME";

let obj = { ROW_CLICKED: "row_clicked", MESSAGE_CLICKED: "message_clicked", VIDEO_CALL_CLICKED: "video_call_clicked", VOICE_CALL_CLICKED: "voice_call_clicked", REMOVE_FRIEND_CLICKED: "remove_friend_clicked", CONTEXT_MENU_INTERACTED: "context_menu_interacted" };
const result = require("set").fileFinishedImporting("modules/people/PeopleListTracking.tsx");

export const FriendsListItemActionType = obj;
export const trackFriendsListItemClicked = function trackFriendsListItemClicked(arg0) {
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const obj = importDefault(698);
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.ROW_CLICKED });
};
export const trackFriendsListItemMessageClicked = function trackFriendsListItemMessageClicked(arg0) {
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const obj = importDefault(698);
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.MESSAGE_CLICKED });
};
export const trackFriendsListItemVideoCallClicked = function trackFriendsListItemVideoCallClicked(arg0) {
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const obj = importDefault(698);
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.VIDEO_CALL_CLICKED });
};
export const trackFriendsListItemVoiceCallClicked = function trackFriendsListItemVoiceCallClicked(arg0) {
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const obj = importDefault(698);
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.VOICE_CALL_CLICKED });
};
export const trackFriendsListItemRemoveFriendClicked = function trackFriendsListItemRemoveFriendClicked(arg0) {
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const obj = importDefault(698);
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.REMOVE_FRIEND_CLICKED });
};
export const trackFriendsListItemContextMenuInteracted = function trackFriendsListItemContextMenuInteracted(arg0) {
  let tab;
  let targetUserId;
  ({ targetUserId, tab } = arg0);
  const obj = importDefault(698);
  obj.track(AnalyticEvents.FRIENDS_LIST_ITEM_ACTION, { target_user_id: targetUserId, tab, action_type: obj.CONTEXT_MENU_INTERACTED });
};
export const trackViewFriendRequestNote = function trackViewFriendRequestNote(arg0) {
  let analyticsLocation;
  let noteLength;
  ({ analyticsLocation, noteLength } = arg0);
  importDefault(698).track(AnalyticEvents.FRIEND_REQUEST_NOTE_VIEWED, { location: analyticsLocation, note_length: noteLength });
};