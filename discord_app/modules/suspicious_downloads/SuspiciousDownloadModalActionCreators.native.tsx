// discord_app/modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx
import { asyncRequireImpl } from "../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = ACTION_SHEET_HEIGHT_HALF;
    obj = { href };
    obj.openLazy(asyncRequireImpl(12221, dependencyMap.paths), "suspicious-download", obj);
  }
};