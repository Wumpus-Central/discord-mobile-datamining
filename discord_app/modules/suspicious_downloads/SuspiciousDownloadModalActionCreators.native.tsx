// === Module 11334: SuspiciousDownloadModalActionCreators ===

// Module 11334 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11335, dependencyMap.paths), "suspicious-download", { href });
  }
};