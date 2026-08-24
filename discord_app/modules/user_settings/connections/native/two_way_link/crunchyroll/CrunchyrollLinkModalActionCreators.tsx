// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx
import set from "../../../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef5265 from "../../../../../../actions/ModalActionCreators.tsx";

let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef5265;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(9837, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef5265.popWithKey(c3);
  }
};