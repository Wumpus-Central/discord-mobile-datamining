// discord_app/modules/premium/native/utils/openGiftModal.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  require("../../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9950, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};