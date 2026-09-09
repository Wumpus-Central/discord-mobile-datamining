// === Module 12976: SuspiciousDownloadModalActionCreators ===

// Module 12976 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    const obj = { href };
    obj.openLazy(asyncRequireImpl(12977, dependencyMap.paths), "suspicious-download", obj);
  }
};