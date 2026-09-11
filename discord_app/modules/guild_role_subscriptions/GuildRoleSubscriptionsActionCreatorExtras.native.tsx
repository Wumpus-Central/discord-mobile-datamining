// === Module 17825: GuildRoleSubscriptionsActionCreatorExtras ===

// Module 17825 (GuildRoleSubscriptionsActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15288 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17815 */;

require = fn;
const GuildRoleSubscriptionsConstants = fn(15266);
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: hasOwnProperty, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: metroRequire } = GuildRoleSubscriptionsConstants);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  RoleTierEditStore.resetImperatively();
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = ModalActionCreatorsDefault;
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(asyncRequireImpl(17826, dependencyMap.paths), obj, hasOwnProperty);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  RoleTierEditStore.resetImperatively();
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17858, dependencyMap.paths), obj, timestampProducer);
};