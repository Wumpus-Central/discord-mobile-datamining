// discord_app/modules/activate_device/native/ActivateDeviceModalActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    const obj = { userCode };
    obj.pushLazy(asyncRequireImpl(13874, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  },
};
