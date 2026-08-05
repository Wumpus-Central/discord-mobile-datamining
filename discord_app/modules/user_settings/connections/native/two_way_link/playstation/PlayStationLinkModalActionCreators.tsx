// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../../../actions/ModalActionCreators.tsx";
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = ModalActionCreators;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl /* asyncRequireImpl */(10473, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    ModalActionCreators.popWithKey(c3);
  }
};