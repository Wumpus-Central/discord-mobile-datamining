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

let c9;
let metroImportAll;
const useContactSyncStore = ContactSyncPersistedStore.useContactSyncStore;
({ PlatformTypes: metroImportAll, FriendDiscoveryFlags: c9 } = Constants);
const result = size.fileFinishedImporting(
  "modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx",
);

export default function getTrackFriendsListViewedData() {
  let obj4;
  let upsellCTADismissed;
  const localAccount = ConnectedAccountsStore.getLocalAccount(metroImportAll.CONTACTS);
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  const obj = FlagUtils;
  const hasFlagResult = obj.hasFlag(setting, constants2.FIND_BY_PHONE);
  const obj2 = FlagUtils;
  const hasFlagResult1 = obj2.hasFlag(setting, constants2.FIND_BY_EMAIL);
  const suggestionCount = FriendSuggestionStore.getSuggestionCount();
  const obj3 = {
    num_friends: RelationshipStore.getFriendCount(),
    num_outgoing_requests: RelationshipStore.getOutgoingCount(),
    num_incoming_requests: RelationshipStore.getPendingCount(),
    num_game_friends: GameRelationshipStore.getGameFriendCount(),
    num_game_outgoing_requests: GameRelationshipStore.getPendingOutgoingCount(),
    num_game_incoming_requests: GameRelationshipStore.getPendingIncomingCount(),
    num_suggestions: suggestionCount,
    was_dismissed: upsellCTADismissed,
    contact_sync_is_enabled: obj4.isContactSyncEnabled(localAccount),
    is_discoverable_email: hasFlagResult1,
    is_discoverable_phone: hasFlagResult,
  };
  upsellCTADismissed = useContactSyncStore.getState().upsellCTADismissed;
  const merged = Object.assign(getFriendStatusCountsDefault());
  obj4 = ContactSyncUtils;
  return obj3;
}
