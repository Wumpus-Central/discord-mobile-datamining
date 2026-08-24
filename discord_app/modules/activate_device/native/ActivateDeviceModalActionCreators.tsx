// discord_app/modules/activate_device/native/ActivateDeviceModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = set.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = _modDef5260;
    obj = { userCode };
    obj.pushLazy(asyncRequireImpl(13334, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    _modDef5260.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};