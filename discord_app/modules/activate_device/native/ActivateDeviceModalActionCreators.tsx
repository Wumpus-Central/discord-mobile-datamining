// === Module 14965: ActivateDeviceModalActionCreators ===

// Module 14965 (ActivateDeviceModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14966, dependencyMap.paths), { userCode }, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};