// === Module 12952: BlockedDomainModalActionCreators ===

// Module 12952 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    const obj = { url };
    obj.openLazy(asyncRequireImpl(12953, dependencyMap.paths), "blocked-domain", obj);
  }
};