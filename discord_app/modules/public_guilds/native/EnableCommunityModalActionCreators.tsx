// === Module 17158: ? ===

// Module 17158
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = set.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    _modDef4676.pushLazy(asyncRequireImpl(17159, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    _modDef4676.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};