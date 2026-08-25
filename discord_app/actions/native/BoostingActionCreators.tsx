// discord_app/actions/native/BoostingActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4611 from "../ModalActionCreators.tsx";

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = set.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = _modDef4611;
  obj = { guildId };
  obj.pushLazy(asyncRequireImpl(5259, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  _modDef4611.pushLazy(asyncRequireImpl(5259, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  _modDef4611.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};