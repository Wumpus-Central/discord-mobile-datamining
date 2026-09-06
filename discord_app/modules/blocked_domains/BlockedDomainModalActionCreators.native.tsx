// === Module 12948: ? ===

// Module 12948
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { url };
    obj.openLazy(asyncRequireImpl(12949, dependencyMap.paths), "blocked-domain", obj);
  }
};