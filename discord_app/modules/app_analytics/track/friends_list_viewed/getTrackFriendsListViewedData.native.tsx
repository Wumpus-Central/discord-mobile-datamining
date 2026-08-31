// === Module 16294: getTrackFriendsListViewedData ===

// Module 16294 (getTrackFriendsListViewedData)
import set from "set" /* 2 */;
import hasFlag from "hasFlag" /* 1399 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4136 */;
import setStoredContacts from "setStoredContacts" /* 12184 */;
import _uploadContacts from "_uploadContacts" /* 12185 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 16295 */;
import closure_4 from "initialize" /* 7375 */;
import closure_5 from "recountRelationshipTypes" /* 7371 */;
import closure_6 from "set" /* 5193 */;
import closure_7 from "markAllUserIdListsStale" /* 4100 */;
import ME from "ME" /* 676 */;

const useContactSyncStore = setStoredContacts.useContactSyncStore;
({ PlatformTypes: closure_8, FriendDiscoveryFlags: c9 } = ME);
const result = set.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx");

export default function getTrackFriendsListViewedData() {
  localAccount = localAccount.getLocalAccount(constants.CONTACTS);
  const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  let obj = hasFlag;
  const hasFlagResult = obj.hasFlag(setting, constants2.FIND_BY_PHONE);
  const obj2 = hasFlag;
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