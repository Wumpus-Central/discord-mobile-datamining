// discord_app/actions/native/BoostingActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../ModalActionCreators.tsx";

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = set.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = _modDef5260;
  obj = { guildId };
  obj.pushLazy(asyncRequireImpl(6711, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  _modDef5260.pushLazy(asyncRequireImpl(6711, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  _modDef5260.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};