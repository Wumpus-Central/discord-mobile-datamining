// === Module 11775: SuspiciousDownloadModalActionCreators ===

// Module 11775 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11776, dependencyMap.paths), "suspicious-download", { href });
  }
};