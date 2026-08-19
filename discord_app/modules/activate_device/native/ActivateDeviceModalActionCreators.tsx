// === Module 13333: ? ===

// Module 13333
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = obj132.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    const obj = { userCode };
    obj.pushLazy(asyncRequireImpl(13334, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    _modDef5260.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};