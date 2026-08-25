// === Module 5258: openApplyBoostModal ===

// Module 5258 (openApplyBoostModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

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