const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4461);
    obj = { userCode };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(13095, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4461).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};