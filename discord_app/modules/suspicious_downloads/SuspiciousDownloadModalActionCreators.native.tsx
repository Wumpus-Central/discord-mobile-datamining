// === Module 12742: ? ===

// Module 12742
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { href };
    obj.openLazy(asyncRequireImpl(12743, dependencyMap.paths), "suspicious-download", obj);
  }
};