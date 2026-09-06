// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import RoleTierEditStore from "native/RoleTierEditStore.tsx";

require = fn;
const GuildRoleSubscriptionsConstants = fn(15205);
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: hasOwnProperty, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: metroRequire } =
  GuildRoleSubscriptionsConstants);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx",
);

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  RoleTierEditStore.resetImperatively();
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = ModalActionCreatorsDefault;
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(asyncRequireImpl(17740, dependencyMap.paths), obj, hasOwnProperty);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  RoleTierEditStore.resetImperatively();
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17772, dependencyMap.paths), obj, timestampProducer);
};
