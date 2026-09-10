// === Module 13018: BlockedDomainModalActionCreators ===

// Module 13018 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    const obj = { url };
    obj.openLazy(asyncRequireImpl(13019, dependencyMap.paths), "blocked-domain", obj);
  }
};