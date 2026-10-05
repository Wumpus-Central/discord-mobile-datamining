// discord_app/actions/native/BoostingActionCreators.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = size.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId };
  obj.pushLazy(asyncRequire(5613, dependencyMap.paths), obj2, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(
    asyncRequire(5613, dependencyMap.paths),
    { guildId, guildBoostSlots, intent, onResult },
    PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY,
  );
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
