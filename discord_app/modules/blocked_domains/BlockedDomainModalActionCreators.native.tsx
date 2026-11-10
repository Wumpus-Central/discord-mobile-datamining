// === Module 15021: BlockedDomainModalActionCreators ===

// Module 15021 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15022, dependencyMap.paths), "blocked-domain", { url });
  }
};