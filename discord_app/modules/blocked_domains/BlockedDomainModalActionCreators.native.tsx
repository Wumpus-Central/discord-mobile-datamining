// discord_app/modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx
import set from "../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { url };
    obj.openLazy(asyncRequireImpl(12419, dependencyMap.paths), "blocked-domain", obj);
  }
};