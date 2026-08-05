// discord_app/modules/activate_device/native/ActivateDeviceModalActionCreators.tsx
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = require("../../../actions/ModalActionCreators.tsx");
    obj = { userCode };
    obj.pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(13128, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    require("../../../actions/ModalActionCreators.tsx").popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};