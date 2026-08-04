const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(9950, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};