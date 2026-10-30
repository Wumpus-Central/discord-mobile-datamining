// discord_app/modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx
import asyncRequireImpl from "../../../_runtime/01995_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx",
);

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11581, dependencyMap.paths), "suspicious-download", {
      href,
    });
  },
};
