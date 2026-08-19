// discord_app/modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import hasFlag from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import explicitContentFromProto from "../../../user_settings/UserSettings.tsx";
import setStoredContacts from "../../../contact_sync/native/ContactSyncPersistedStore.tsx";
import _uploadContacts from "../../../contact_sync/native/ContactSyncUtils.tsx";
import getFriendStatusCountsDefault from "../../../friends/getFriendStatusCounts.tsx";
import initialize from "../../../friend_suggestions/FriendSuggestionStore.tsx";
import recountRelationshipTypes from "../../../game_relationships/GameRelationshipStore.tsx";
import set from "../../../../stores/ConnectedAccountsStore.tsx";
import markAllUserIdListsStale from "../../../../stores/RelationshipStore.tsx";
import ME from "../../../../Constants.tsx";

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