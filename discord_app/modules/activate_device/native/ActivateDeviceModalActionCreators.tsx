// === Module 13426: ? ===

// Module 13426
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = set.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = _modDef4611;
    obj = { userCode };
    obj.pushLazy(asyncRequireImpl(13427, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    _modDef4611.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};