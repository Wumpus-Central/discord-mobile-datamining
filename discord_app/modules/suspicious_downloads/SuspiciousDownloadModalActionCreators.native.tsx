// discord_app/modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx
import set from "../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting(
  "modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx",
);

export default {
  show(href) {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { href };
    obj.openLazy(asyncRequireImpl(13032, dependencyMap.paths), "suspicious-download", obj);
  },
};
