// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx
import asyncRequireImpl from "../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4723 from "../../actions/ModalActionCreators.tsx";
import getRoleEmojisAll from "edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import closure_4 from "native/RoleTierEditStore.tsx";
import MAX_SUBSCRIPTION_TIERS from "GuildRoleSubscriptionsConstants.tsx";

require = arg1;
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: c5, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_6 } =
  MAX_SUBSCRIPTION_TIERS);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx",
);

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  closure_4.resetImperatively();
  let obj = getRoleEmojisAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = _modDef4723;
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(asyncRequireImpl(17560, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  closure_4.resetImperatively();
  let obj = getRoleEmojisAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  _modDef4723.pushLazy(asyncRequireImpl(17592, dependencyMap.paths), obj, closure_6);
};
