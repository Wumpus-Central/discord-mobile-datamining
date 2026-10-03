// === Module 8764: PlayStationLinkModalActionCreators ===

// Module 8764 (PlayStationLinkModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8765, dependencyMap.paths), { locationStack, platformType }, c3);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};