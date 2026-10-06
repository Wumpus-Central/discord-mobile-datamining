// discord_app/modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  show(url) {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { url };
    obj.openLazy(asyncRequire(12765, dependencyMap.paths), "blocked-domain", obj2);
  },
};
const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default obj;
