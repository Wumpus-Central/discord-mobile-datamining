// === Module 14267: openConjureAppChannelSheet ===

// Module 14267 (openConjureAppChannelSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const ConjureAppChannelSheet = "ConjureAppChannelSheet";
const ConjureAppChannelMembersSheet = "ConjureAppChannelMembersSheet";
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/openConjureAppChannelSheet.tsx");

export default function openConjureAppChannelSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14269, dependencyMap.paths), ConjureAppChannelSheet, { channelId });
};
export function closeConjureAppChannelSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjureAppChannelSheet);
}
export function closeConjureAppChannelMembersSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjureAppChannelMembersSheet);
}
export function openConjureAppChannelMembersSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14268, dependencyMap.paths), ConjureAppChannelMembersSheet, { channelId: id });
}