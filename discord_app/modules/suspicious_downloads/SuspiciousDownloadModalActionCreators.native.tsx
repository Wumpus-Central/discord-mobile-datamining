// === Module 12946: SuspiciousDownloadModalActionCreators ===

// Module 12946 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    const obj = { href };
    obj.openLazy(asyncRequireImpl(12947, dependencyMap.paths), "suspicious-download", obj);
  }
};