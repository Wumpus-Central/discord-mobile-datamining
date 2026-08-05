// discord_app/modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx
import { useContactSyncStore } from "setStoredContacts";
import initialize from "initialize";
import recountRelationshipTypes from "recountRelationshipTypes";
import set from "set";
import upsertRelationship from "upsertRelationship";
import ME from "ME";

let c9;
let metroImportAll;
({ PlatformTypes: metroImportAll, FriendDiscoveryFlags: c9 } = ME);
const result = require("recountRelationshipTypes").fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx");

export default function getTrackFriendsListViewedData() {
  localAccount = localAccount.getLocalAccount(constants.CONTACTS);
  const FriendDiscoverySettings = require("../../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  let obj = require("../../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */;
  const hasFlagResult = obj.hasFlag(setting, constants2.FIND_BY_PHONE);
  const obj2 = require("../../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */;
  suggestionCount = suggestionCount.getSuggestionCount();
  obj = { num_friends: null };
  obj[0] = store2.getFriendCount();
  const merged = Object.assign(require("../../../friends/getFriendStatusCounts.tsx")());
  obj.num_outgoing_requests = store2.getOutgoingCount();
  obj.num_incoming_requests = store2.getPendingCount();
  obj.num_game_friends = store.getGameFriendCount();
  obj.num_game_outgoing_requests = store.getPendingOutgoingCount();
  obj.num_game_incoming_requests = store.getPendingIncomingCount();
  obj.num_suggestions = suggestionCount;
  obj.was_dismissed = useContactSyncStore.getState().upsellCTADismissed;
  const hasFlagResult1 = require("../../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */.hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj.contact_sync_is_enabled = require("../../../contact_sync/native/ContactSyncUtils.tsx") /* _uploadContacts */.isContactSyncEnabled(localAccount);
  obj.is_discoverable_email = hasFlagResult1;
  obj.is_discoverable_phone = hasFlagResult;
  return obj;
};