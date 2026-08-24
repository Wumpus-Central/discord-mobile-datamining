// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx
import set from "../../../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../../../../actions/ModalActionCreators.tsx";

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef5260;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(9751, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef5260.popWithKey(c3);
  }
};