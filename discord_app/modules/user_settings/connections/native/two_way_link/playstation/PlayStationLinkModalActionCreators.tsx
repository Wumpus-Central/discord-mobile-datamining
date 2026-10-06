// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx
import asyncRequire from "../../../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
let obj = {
  showModal(locationStack, platformType) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { locationStack, platformType };
    obj.pushLazy(asyncRequire(8797, dependencyMap.paths), obj2, USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY);
  },
};
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx",
);

export default obj;
