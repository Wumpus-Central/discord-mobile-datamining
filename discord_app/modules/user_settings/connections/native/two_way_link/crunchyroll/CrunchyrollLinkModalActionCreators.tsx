// === Module 13782: CrunchyrollLinkModalActionCreators ===

// Module 13782 (CrunchyrollLinkModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13783, dependencyMap.paths), { locationStack }, c3);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};