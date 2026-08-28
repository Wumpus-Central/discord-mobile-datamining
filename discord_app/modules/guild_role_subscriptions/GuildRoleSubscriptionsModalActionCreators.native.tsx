// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx
import asyncRequireImpl from "../../../_runtime/02010_asyncRequireImpl.js";
import _modDef4689 from "../../actions/ModalActionCreators.tsx";
import closure_3 from "native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx";

require = arg1;
const GuildRoleSubscriptionBenefitEditorModal = "GuildRoleSubscriptionBenefitEditorModal";
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx");

export const showCreateBenefitModal = function showCreateBenefitModal(arg0) {
  ({ guildId, listingId, type, onSave } = arg0);
  closure_3.resetImperatively();
  _modDef4689.pushLazy(asyncRequireImpl(17268, dependencyMap.paths), { benefitType: type, guildId, onSave, listingId }, GuildRoleSubscriptionBenefitEditorModal);
};
export const showEditBenefitModal = function showEditBenefitModal(benefit) {
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = closure_3.initializeImperatively(benefit);
  let obj = _modDef4689;
  obj = { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId };
  obj.pushLazy(asyncRequireImpl(17268, dependencyMap.paths), obj, GuildRoleSubscriptionBenefitEditorModal);
};
export const showEditEmojisModal = function showEditEmojisModal(initialTierEmojiIds) {
  initialTierEmojiIds = initialTierEmojiIds.initialTierEmojiIds;
  ({ guildId, subscriptionRoleId, listingId, onSave } = initialTierEmojiIds);
  let obj = _modDef4689;
  obj = { guildId, subscriptionRoleId, initialTierEmojiIds: null, listingId: null, onSave: null };
  if (initialTierEmojiIds == null) {
    const _Set = Set;
    initialTierEmojiIds = new Set();
  }
  obj[2] = initialTierEmojiIds;
  obj[3] = listingId;
  obj[4] = onSave;
  obj.pushLazy(asyncRequireImpl(17274, dependencyMap.paths), obj, "GuildRoleSubscriptionEmojiEditorModal");
};