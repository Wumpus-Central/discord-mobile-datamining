// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx
import asyncRequireImpl from "../../../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx",
);

export default {
  showModal(locationStack, platformType) {
    const obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9254, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(c3);
  },
};
