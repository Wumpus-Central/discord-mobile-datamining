// discord_app/modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    const obj = { href };
    obj.openLazy(asyncRequireImpl(12417, dependencyMap.paths), "suspicious-download", obj);
  }
};