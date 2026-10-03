// === Module 11206: SuspiciousDownloadModalActionCreators ===

// Module 11206 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11207, dependencyMap.paths), "suspicious-download", { href });
  }
};