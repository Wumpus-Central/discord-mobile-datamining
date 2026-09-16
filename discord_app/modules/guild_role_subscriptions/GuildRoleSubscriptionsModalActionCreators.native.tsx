// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx
import asyncRequireImpl from "../../../_runtime/01897_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import GuildRoleSubscriptionBenefitEditorModalStateStore from "native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx";

require = fn;
const GuildRoleSubscriptionBenefitEditorModal = "GuildRoleSubscriptionBenefitEditorModal";
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx",
);

export const showCreateBenefitModal = function showCreateBenefitModal(arg0) {
  ({ guildId, listingId, type, onSave } = arg0);
  GuildRoleSubscriptionBenefitEditorModalStateStore.resetImperatively();
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(17964, dependencyMap.paths),
    { benefitType: type, guildId, onSave, listingId },
    GuildRoleSubscriptionBenefitEditorModal,
  );
};
export const showEditBenefitModal = function showEditBenefitModal(benefit) {
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = GuildRoleSubscriptionBenefitEditorModalStateStore.initializeImperatively(benefit);
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(17964, dependencyMap.paths),
    { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId },
    GuildRoleSubscriptionBenefitEditorModal,
  );
};
export const showEditEmojisModal = function showEditEmojisModal(initialTierEmojiIds) {
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
  obj.pushLazy(asyncRequireImpl(17970, dependencyMap.paths), obj2, "GuildRoleSubscriptionEmojiEditorModal");
};
