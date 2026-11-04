// === Module 20235: GuildRoleSubscriptionsModalActionCreators ===

// Module 20235 (GuildRoleSubscriptionsModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import GuildRoleSubscriptionBenefitEditorModalStateStore from "GuildRoleSubscriptionBenefitEditorModalStateStore" /* 20236 */;

require = fn;
const GuildRoleSubscriptionBenefitEditorModal = "GuildRoleSubscriptionBenefitEditorModal";
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx");

export function showCreateBenefitModal(arg0) {
  ({ guildId, listingId, type, onSave } = arg0);
  GuildRoleSubscriptionBenefitEditorModalStateStore.resetImperatively();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(20237, dependencyMap.paths), { benefitType: type, guildId, onSave, listingId }, GuildRoleSubscriptionBenefitEditorModal);
}
export function showEditBenefitModal(benefit) {
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = GuildRoleSubscriptionBenefitEditorModalStateStore.initializeImperatively(benefit);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(20237, dependencyMap.paths), { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId }, GuildRoleSubscriptionBenefitEditorModal);
}
export function showEditEmojisModal(initialTierEmojiIds) {
  initialTierEmojiIds = initialTierEmojiIds.initialTierEmojiIds;
  ({ guildId, subscriptionRoleId, listingId, onSave } = initialTierEmojiIds);
  const obj2 = { guildId, subscriptionRoleId, initialTierEmojiIds: null, listingId: null, onSave: null };
  const obj = ModalActionCreatorsDefault;
  if (initialTierEmojiIds == null) {
    const _Set = Set;
    initialTierEmojiIds = new Set();
  }
  obj2.initialTierEmojiIds = initialTierEmojiIds;
  obj2.listingId = listingId;
  obj2.onSave = onSave;
  obj.pushLazy(asyncRequireImpl(20242, dependencyMap.paths), obj2, "GuildRoleSubscriptionEmojiEditorModal");
}