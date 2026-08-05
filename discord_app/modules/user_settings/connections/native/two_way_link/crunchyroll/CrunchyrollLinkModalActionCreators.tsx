// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../../../actions/ModalActionCreators.tsx";
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = ModalActionCreators;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(10484, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    ModalActionCreators.popWithKey(c3);
  }
};