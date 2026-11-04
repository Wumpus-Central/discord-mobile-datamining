// === Module 19107: getTrackFriendsListViewedData ===

// Module 19107 (getTrackFriendsListViewedData)
import FlagUtils from "FlagUtils" /* 1398 */;
import UserSettings from "UserSettings" /* 4966 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 14462 */;
import ContactSyncUtils from "ContactSyncUtils" /* 14463 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 19108 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7944 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7940 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6707 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const useContactSyncStore = ContactSyncPersistedStore.useContactSyncStore;
({ PlatformTypes: closure_8, FriendDiscoveryFlags: closure_9 } = Constants);
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx");

export default function getTrackFriendsListViewedData() {
  const localAccount = ConnectedAccountsStore.getLocalAccount(constants.CONTACTS);
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  const hasFlagResult = FlagUtils.hasFlag(setting, constants2.FIND_BY_PHONE);
  const suggestionCount = FriendSuggestionStore.getSuggestionCount();
  const obj3 = { num_friends: RelationshipStore.getFriendCount() };
  const merged = Object.assign(getFriendStatusCountsDefault());
  obj3.num_outgoing_requests = RelationshipStore.getOutgoingCount();
  obj3.num_incoming_requests = RelationshipStore.getPendingCount();
  obj3.num_game_friends = GameRelationshipStore.getGameFriendCount();
  obj3.num_game_outgoing_requests = GameRelationshipStore.getPendingOutgoingCount();
  obj3.num_game_incoming_requests = GameRelationshipStore.getPendingIncomingCount();
  obj3.num_suggestions = suggestionCount;
  obj3.was_dismissed = useContactSyncStore.getState().upsellCTADismissed;
  const hasFlagResult1 = FlagUtils.hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj3.contact_sync_is_enabled = ContactSyncUtils.isContactSyncEnabled(localAccount);
  obj3.is_discoverable_email = hasFlagResult1;
  obj3.is_discoverable_phone = hasFlagResult;
  return obj3;
};