// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import RoleTierEditStore from "native/RoleTierEditStore.tsx";
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: hasOwnProperty, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: metroRequire } =
  GuildRoleSubscriptionsConstants);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx",
);
const NEW_LISTING_EDIT_STATE_ID_export = "NEW_LISTING_EDIT_STATE_ID";

export { NEW_LISTING_EDIT_STATE_ID_export as NEW_LISTING_EDIT_STATE_ID };
export const openTierCreationModal = function openTierCreationModal(arg0) {
  RoleTierEditStore.resetImperatively();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj2 = { editStateId: NEW_LISTING_EDIT_STATE_ID };
  ModalActionCreatorsDefault;
  const tmp4 = asyncRequire(17981, dependencyMap.paths);
  const merged = Object.assign(arg0);
  pushLazy(tmp4, obj2, hasOwnProperty);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  RoleTierEditStore.resetImperatively();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  obj2.pushLazy(asyncRequire(18013, dependencyMap.paths), obj3, metroRequire);
};
