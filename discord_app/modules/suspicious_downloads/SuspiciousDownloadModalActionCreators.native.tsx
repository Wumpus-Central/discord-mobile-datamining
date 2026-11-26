// === Module 12071: SuspiciousDownloadModalActionCreators ===

// Module 12071 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12072, dependencyMap.paths), "suspicious-download", { href });
  }
};