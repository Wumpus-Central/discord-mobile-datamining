// === Module 14531: openConjureAppChannelSheet ===

// Module 14531 (openConjureAppChannelSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const ConjureAppChannelSheet = "ConjureAppChannelSheet";
const ConjureAppChannelMembersSheet = "ConjureAppChannelMembersSheet";
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/openConjureAppChannelSheet.tsx");

export default function openConjureAppChannelSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14533, dependencyMap.paths), ConjureAppChannelSheet, { channelId });
};
export function closeConjureAppChannelSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjureAppChannelSheet);
}
export function closeConjureAppChannelMembersSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjureAppChannelMembersSheet);
}
export function openConjureAppChannelMembersSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14532, dependencyMap.paths), ConjureAppChannelMembersSheet, { channelId: id });
}