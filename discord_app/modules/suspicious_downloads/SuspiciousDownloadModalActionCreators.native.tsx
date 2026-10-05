// discord_app/modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  show(href) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { href };
    obj.openLazy(asyncRequire(11207, dependencyMap.paths), "suspicious-download", obj2);
  },
};
const result = size.fileFinishedImporting(
  "modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx",
);

export default obj;
