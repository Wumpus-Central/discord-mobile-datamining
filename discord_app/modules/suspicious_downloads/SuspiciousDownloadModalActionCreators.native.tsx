// === Module 12702: SuspiciousDownloadModalActionCreators ===

// Module 12702 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12703, dependencyMap.paths), "suspicious-download", { href });
  }
};