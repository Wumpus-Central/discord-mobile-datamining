// === Module 16010: ActivateDeviceModalActionCreators ===

// Module 16010 (ActivateDeviceModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16011, dependencyMap.paths), { userCode }, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};