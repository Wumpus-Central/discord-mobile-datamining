// === Module 14994: BlockedDomainModalActionCreators ===

// Module 14994 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14995, dependencyMap.paths), "blocked-domain", { url });
  }
};