// discord_app/actions/native/BoostingActionCreators.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = size.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  const obj = { guildId };
  obj.pushLazy(asyncRequireImpl(5435, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(5435, dependencyMap.paths),
    { guildId, guildBoostSlots, intent, onResult },
    PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY,
  );
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  ModalActionCreatorsDefault.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
