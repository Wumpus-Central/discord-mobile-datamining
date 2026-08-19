// === Module 15969: getTrackFriendsListViewedData ===

// Module 15969 (getTrackFriendsListViewedData)
import obj132 from "obj132" /* 2 */;
import hasFlag from "hasFlag" /* 1403 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import setStoredContacts from "setStoredContacts" /* 11852 */;
import _uploadContacts from "_uploadContacts" /* 11853 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 15970 */;
import initialize from "initialize" /* 5410 */;
import recountRelationshipTypes from "recountRelationshipTypes" /* 5406 */;
import set from "set" /* 5221 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import ME from "ME" /* 676 */;

const useContactSyncStore = setStoredContacts.useContactSyncStore;
({ PlatformTypes: closure_8, FriendDiscoveryFlags: c9 } = ME);
const result = obj132.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx");

export default function getTrackFriendsListViewedData() {
  localAccount = localAccount.getLocalAccount(constants.CONTACTS);
  const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  let obj = hasFlag;
  const hasFlagResult = obj.hasFlag(setting, constants2.FIND_BY_PHONE);
  suggestionCount = suggestionCount.getSuggestionCount();
  obj = { num_friends: store2.getFriendCount() };
  const merged = Object.assign(getFriendStatusCountsDefault());
  obj.num_outgoing_requests = store2.getOutgoingCount();
  obj.num_incoming_requests = store2.getPendingCount();
  obj.num_game_friends = store.getGameFriendCount();
  obj.num_game_outgoing_requests = store.getPendingOutgoingCount();
  obj.num_game_incoming_requests = store.getPendingIncomingCount();
  obj.num_suggestions = suggestionCount;
  obj.was_dismissed = useContactSyncStore.getState().upsellCTADismissed;
  const hasFlagResult1 = hasFlag.hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj.contact_sync_is_enabled = _uploadContacts.isContactSyncEnabled(localAccount);
  obj.is_discoverable_email = hasFlagResult1;
  obj.is_discoverable_phone = hasFlagResult;
  return obj;
};