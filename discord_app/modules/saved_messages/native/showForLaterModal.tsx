// discord_app/modules/saved_messages/native/showForLaterModal.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = require("../../../actions/ModalActionCreators.tsx");
  obj = { type: BOOKMARK };
  obj.pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8191, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};