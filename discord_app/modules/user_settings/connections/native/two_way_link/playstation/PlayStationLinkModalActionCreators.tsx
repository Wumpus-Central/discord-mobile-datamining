// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx
import obj132 from "../../../../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../../../../actions/ModalActionCreators.tsx";

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = obj132.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    const obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9781, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef5260.popWithKey(c3);
  }
};