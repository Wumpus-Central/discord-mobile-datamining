// === Module 16790: getTrackFriendsListViewedData ===

// Module 16790 (getTrackFriendsListViewedData)
import FlagUtils from "FlagUtils" /* 1384 */;
import UserSettings from "UserSettings" /* 1935 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 12709 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12710 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 16791 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7676 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7672 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5295 */;
import RelationshipStore from "RelationshipStore" /* 4222 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const useContactSyncStore = ContactSyncPersistedStore.useContactSyncStore;
({ PlatformTypes: closure_8, FriendDiscoveryFlags: closure_9 } = Constants);
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx");

export default function getTrackFriendsListViewedData() {
  const localAccount = ConnectedAccountsStore.getLocalAccount(constants.CONTACTS);
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  let obj = FlagUtils;
  const hasFlagResult = obj.hasFlag(setting, constants2.FIND_BY_PHONE);
  const suggestionCount = FriendSuggestionStore.getSuggestionCount();
  obj = { num_friends: RelationshipStore.getFriendCount() };
  const merged = Object.assign(getFriendStatusCountsDefault());
  obj.num_outgoing_requests = RelationshipStore.getOutgoingCount();
  obj.num_incoming_requests = RelationshipStore.getPendingCount();
  obj.num_game_friends = GameRelationshipStore.getGameFriendCount();
  obj.num_game_outgoing_requests = GameRelationshipStore.getPendingOutgoingCount();
  obj.num_game_incoming_requests = GameRelationshipStore.getPendingIncomingCount();
  obj.num_suggestions = suggestionCount;
  obj.was_dismissed = useContactSyncStore.getState().upsellCTADismissed;
  const hasFlagResult1 = FlagUtils.hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj.contact_sync_is_enabled = ContactSyncUtils.isContactSyncEnabled(localAccount);
  obj.is_discoverable_email = hasFlagResult1;
  obj.is_discoverable_phone = hasFlagResult;
  return obj;
};