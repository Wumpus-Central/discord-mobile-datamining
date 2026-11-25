// === Module 14660: BlockedDomainModalActionCreators ===

// Module 14660 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14661, dependencyMap.paths), "blocked-domain", { url });
  }
};