import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
// discord_app/modules/activate_device/native/ActivateDeviceModalActionCreators.tsx
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = ModalActionCreators;
    obj = { userCode };
    obj.pushLazy(asyncRequireImpl /* asyncRequireImpl */(13128, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    ModalActionCreators.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};