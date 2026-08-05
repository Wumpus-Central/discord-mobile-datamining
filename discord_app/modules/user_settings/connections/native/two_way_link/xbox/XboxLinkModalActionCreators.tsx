import { asyncRequireImpl } from "../../../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../../../actions/ModalActionCreators.tsx";
// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = ModalActionCreators;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl /* asyncRequireImpl */(10408, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    ModalActionCreators.popWithKey(c3);
  }
};