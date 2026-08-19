// === Module 6710: openApplyBoostModal ===

// Module 6710 (openApplyBoostModal)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = obj132.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  const obj = { guildId };
  obj.pushLazy(asyncRequireImpl(6711, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  _modDef5260.pushLazy(asyncRequireImpl(6711, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  _modDef5260.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};