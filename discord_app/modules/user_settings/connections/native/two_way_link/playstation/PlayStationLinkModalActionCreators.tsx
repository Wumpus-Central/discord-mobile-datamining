// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx
import set from "../../../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../../../_runtime/02010_asyncRequireImpl.js";
import _modDef4689 from "../../../../../../actions/ModalActionCreators.tsx";

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef4689;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9268, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4689.popWithKey(c3);
  }
};