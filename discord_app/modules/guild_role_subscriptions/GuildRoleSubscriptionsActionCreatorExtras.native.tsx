// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx
import usePriceTiers from "usePriceTiers";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import { asyncRequireImpl } from "../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../actions/ModalActionCreators.tsx";

let c5;
let closure_6;
const require = arg1;
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: c5, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_6 } = MAX_SUBSCRIPTION_TIERS);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const result = require("getRoleEmojis").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  usePriceTiers.resetImperatively();
  let obj = importAll(14338);
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = ModalActionCreators;
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(asyncRequireImpl(16681, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  usePriceTiers.resetImperatively();
  let obj = importAll(14338);
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  ModalActionCreators.pushLazy(asyncRequireImpl(16713, dependencyMap.paths), obj, closure_6);
};