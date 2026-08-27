// === Module 17236: NEW_LISTING_EDIT_STATE_ID ===

// Module 17236 (NEW_LISTING_EDIT_STATE_ID)
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;
import getRoleEmojisAll from "getRoleEmojis" /* 14771 */;
import closure_4 from "usePriceTiers" /* 17226 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 14749 */;

require = arg1;
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: c5, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_6 } = MAX_SUBSCRIPTION_TIERS);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  closure_4.resetImperatively();
  let obj = getRoleEmojisAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = _modDef4676;
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(asyncRequireImpl(17237, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  closure_4.resetImperatively();
  let obj = getRoleEmojisAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  _modDef4676.pushLazy(asyncRequireImpl(17269, dependencyMap.paths), obj, closure_6);
};