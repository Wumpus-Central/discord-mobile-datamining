// === Module 12912: BlockedDomainModalActionCreators ===

// Module 12912 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12913, dependencyMap.paths), "blocked-domain", { url });
  }
};