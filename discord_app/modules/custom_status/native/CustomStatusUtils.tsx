// discord_app/modules/custom_status/native/CustomStatusUtils.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = require("../../../actions/ModalActionCreators.tsx");
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9373, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};