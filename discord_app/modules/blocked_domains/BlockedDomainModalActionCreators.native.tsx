// === Module 12470: ? ===

// Module 12470
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;

const result = set.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { url };
    obj.openLazy(asyncRequireImpl(12471, dependencyMap.paths), "blocked-domain", obj);
  }
};