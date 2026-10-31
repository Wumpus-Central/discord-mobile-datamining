// discord_app/actions/native/BoostingActionCreators.tsx
import asyncRequireImpl from "../../../_runtime/01994_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = size.fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export function openApplyBoostModal(guildId) {
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(6769, dependencyMap.paths),
    { guildId },
    PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY,
  );
}
export function openTransferModal(arg0) {
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(6769, dependencyMap.paths),
    { guildId, guildBoostSlots, intent, onResult },
    PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY,
  );
}
export function closeApplyBoostModal() {
  ModalActionCreatorsDefault.popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
}
