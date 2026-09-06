// discord_app/modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx
import FlagUtils from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import ContactSyncPersistedStore from "../../../contact_sync/native/ContactSyncPersistedStore.tsx";
import ContactSyncUtils from "../../../contact_sync/native/ContactSyncUtils.tsx";
import getFriendStatusCountsDefault from "../../../friends/getFriendStatusCounts.tsx";
import FriendSuggestionStore from "../../../friend_suggestions/FriendSuggestionStore.tsx";
import GameRelationshipStore from "../../../game_relationships/GameRelationshipStore.tsx";
import ConnectedAccountsStore from "../../../../stores/ConnectedAccountsStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useContactSyncStore = ContactSyncPersistedStore.useContactSyncStore;
({ PlatformTypes: closure_8, FriendDiscoveryFlags: closure_9 } = Constants);
const result = size.fileFinishedImporting(
  "modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx",
);

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
}
