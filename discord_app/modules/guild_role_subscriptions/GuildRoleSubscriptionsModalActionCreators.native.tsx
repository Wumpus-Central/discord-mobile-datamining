// === Module 17751: GuildRoleSubscriptionsModalActionCreators ===

// Module 17751 (GuildRoleSubscriptionsModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import GuildRoleSubscriptionBenefitEditorModalStateStore from "GuildRoleSubscriptionBenefitEditorModalStateStore" /* 17752 */;

require = fn;
const GuildRoleSubscriptionBenefitEditorModal = "GuildRoleSubscriptionBenefitEditorModal";
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx");

export const showCreateBenefitModal = function showCreateBenefitModal(arg0) {
  ({ guildId, listingId, type, onSave } = arg0);
  GuildRoleSubscriptionBenefitEditorModalStateStore.resetImperatively();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17753, dependencyMap.paths), { benefitType: type, guildId, onSave, listingId }, GuildRoleSubscriptionBenefitEditorModal);
};
export const showEditBenefitModal = function showEditBenefitModal(benefit) {
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = GuildRoleSubscriptionBenefitEditorModalStateStore.initializeImperatively(benefit);
  const obj = { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId };
  obj.pushLazy(asyncRequireImpl(17753, dependencyMap.paths), obj, GuildRoleSubscriptionBenefitEditorModal);
};
export const showEditEmojisModal = function showEditEmojisModal(initialTierEmojiIds) {
  initialTierEmojiIds = initialTierEmojiIds.initialTierEmojiIds;
  ({ guildId, subscriptionRoleId, listingId, onSave } = initialTierEmojiIds);
  const obj = { guildId, subscriptionRoleId, initialTierEmojiIds: null, listingId: null, onSave: null };
  if (initialTierEmojiIds == null) {
    const _Set = Set;
    initialTierEmojiIds = new Set();
  }
  obj.initialTierEmojiIds = initialTierEmojiIds;
  obj.listingId = listingId;
  obj.onSave = onSave;
  obj.pushLazy(asyncRequireImpl(17759, dependencyMap.paths), obj, "GuildRoleSubscriptionEmojiEditorModal");
};