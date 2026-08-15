// discord_app/modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx
import { asyncRequireImpl } from "../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = ACTION_SHEET_HEIGHT_HALF;
    obj = { url };
    obj.openLazy(asyncRequireImpl(12419, dependencyMap.paths), "blocked-domain", obj);
  }
};