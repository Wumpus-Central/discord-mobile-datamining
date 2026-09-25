// === Module 5741: actions/BoostingActionCreators ===

// Module 5741 (actions/BoostingActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = size.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(5742, dependencyMap.paths), { guildId }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(5742, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  ModalActionCreatorsDefault.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};