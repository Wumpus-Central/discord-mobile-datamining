const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4461);
  obj = { type: BOOKMARK };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(10093, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};