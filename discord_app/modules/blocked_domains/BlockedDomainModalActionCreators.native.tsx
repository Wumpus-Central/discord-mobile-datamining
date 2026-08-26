// === Module 12502: ? ===

// Module 12502
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const result = set.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { url };
    obj.openLazy(asyncRequireImpl(12503, dependencyMap.paths), "blocked-domain", obj);
  }
};