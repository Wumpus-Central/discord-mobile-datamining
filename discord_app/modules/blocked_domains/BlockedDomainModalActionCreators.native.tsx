// === Module 15987: BlockedDomainModalActionCreators ===

// Module 15987 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15988, dependencyMap.paths), "blocked-domain", { url });
  }
};