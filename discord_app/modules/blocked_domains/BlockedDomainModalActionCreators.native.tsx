// === Module 13528: BlockedDomainModalActionCreators ===

// Module 13528 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13529, dependencyMap.paths), "blocked-domain", { url });
  }
};