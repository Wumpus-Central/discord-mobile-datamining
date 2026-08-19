// discord_app/modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    const obj = { url };
    obj.openLazy(asyncRequireImpl(12419, dependencyMap.paths), "blocked-domain", obj);
  }
};