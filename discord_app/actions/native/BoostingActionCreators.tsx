// === Module 6903: BoostingActionCreators ===

// Module 6903 (BoostingActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = size.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export function openApplyBoostModal(guildId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(6904, dependencyMap.paths), { guildId }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
}
export function openTransferModal(arg0) {
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(6904, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
}
export function closeApplyBoostModal() {
  ModalActionCreatorsDefault.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
}