// === Module 19890: GuildRoleSubscriptionsActionCreatorExtras ===

// Module 19890 (GuildRoleSubscriptionsActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 16507 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19881 */;

require = fn;
const GuildRoleSubscriptionsConstants = fn(16487);
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: hasOwnProperty, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_6 } = GuildRoleSubscriptionsConstants);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export function openTierCreationModal(arg0) {
  RoleTierEditStore.resetImperatively();
  GuildRoleSubscriptionListingEditStateUtilsAll.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  const obj3 = {};
  const obj2 = ModalActionCreatorsDefault;
  const merged = Object.assign(arg0);
  obj3.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(asyncRequireImpl(19891, dependencyMap.paths), obj3, hasOwnProperty);
}
export function openGroupSetupModal(guildId) {
  RoleTierEditStore.resetImperatively();
  GuildRoleSubscriptionListingEditStateUtilsAll.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(19922, dependencyMap.paths), { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID }, timestampProducer);
}