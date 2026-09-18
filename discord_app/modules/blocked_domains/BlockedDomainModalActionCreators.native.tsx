// discord_app/modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx
import asyncRequireImpl from "../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13192, dependencyMap.paths), "blocked-domain", { url });
  },
};
