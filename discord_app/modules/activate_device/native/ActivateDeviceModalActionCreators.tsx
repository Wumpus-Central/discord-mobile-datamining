// === Module 13948: ActivateDeviceModalActionCreators ===

// Module 13948 (ActivateDeviceModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import size from "module_2" /* 2 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    const obj = { userCode };
    obj.pushLazy(asyncRequireImpl(13949, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};