// === Module 18187: GuildRoleSubscriptionsActionCreatorExtras ===

// Module 18187 (GuildRoleSubscriptionsActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15491 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18177 */;

require = fn;
const GuildRoleSubscriptionsConstants = fn(15469);
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: hasOwnProperty, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: metroRequire } = GuildRoleSubscriptionsConstants);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  RoleTierEditStore.resetImperatively();
  GuildRoleSubscriptionListingEditStateUtilsAll.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  const obj3 = {};
  const obj2 = ModalActionCreatorsDefault;
  const merged = Object.assign(arg0);
  obj3.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(asyncRequireImpl(18188, dependencyMap.paths), obj3, hasOwnProperty);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  RoleTierEditStore.resetImperatively();
  GuildRoleSubscriptionListingEditStateUtilsAll.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18220, dependencyMap.paths), { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID }, timestampProducer);
};