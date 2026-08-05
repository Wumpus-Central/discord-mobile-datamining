// discord_app/modules/saved_messages/native/showForLaterModal.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4490);
  obj = { type: BOOKMARK };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(8191, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};