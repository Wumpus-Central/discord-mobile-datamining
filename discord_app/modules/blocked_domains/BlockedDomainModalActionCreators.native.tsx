// === Module 13894: BlockedDomainModalActionCreators ===

// Module 13894 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13895, dependencyMap.paths), "blocked-domain", { url });
  }
};