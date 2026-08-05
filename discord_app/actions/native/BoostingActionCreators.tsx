// discord_app/actions/native/BoostingActionCreators.tsx
const PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY = "PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("actions/native/BoostingActionCreators.tsx");

export const openApplyBoostModal = function openApplyBoostModal(guildId) {
  let obj = require("../ModalActionCreators.tsx");
  obj = { guildId };
  obj.pushLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(5119, dependencyMap.paths), obj, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const openTransferModal = function openTransferModal(arg0) {
  let guildBoostSlots;
  let guildId;
  let intent;
  let onResult;
  ({ guildBoostSlots, guildId, intent, onResult } = arg0);
  require("../ModalActionCreators.tsx").pushLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(5119, dependencyMap.paths), { guildId, guildBoostSlots, intent, onResult }, PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};
export const closeApplyBoostModal = function closeApplyBoostModal() {
  require("../ModalActionCreators.tsx").popWithKey(PREMIUM_GUILD_SUBSCRIBE_MODAL_KEY);
};