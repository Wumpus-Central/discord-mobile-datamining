// discord_app/modules/activate_device/native/ActivateDeviceModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4723 from "../../../actions/ModalActionCreators.tsx";

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = set.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = _modDef4723;
    obj = { userCode };
    obj.pushLazy(asyncRequireImpl(13613, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    _modDef4723.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};