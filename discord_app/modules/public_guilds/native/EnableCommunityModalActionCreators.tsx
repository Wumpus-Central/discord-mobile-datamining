// === Module 17756: EnableCommunityModalActionCreators ===

// Module 17756 (EnableCommunityModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import size from "module_2" /* 2 */;

const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = size.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17757, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};