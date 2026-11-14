// discord_app/modules/conjure/app_channel/native/openConjureAppChannelSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/02121_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ConjureAppChannelSheet = "ConjureAppChannelSheet";
const ConjureAppChannelMembersSheet = "ConjureAppChannelMembersSheet";
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/openConjureAppChannelSheet.tsx");

export default function openConjureAppChannelSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15651, dependencyMap.paths), ConjureAppChannelSheet, {
    channelId,
  });
}
export function closeConjureAppChannelSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjureAppChannelSheet);
}
export function closeConjureAppChannelMembersSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjureAppChannelMembersSheet);
}
export function openConjureAppChannelMembersSheet(id) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(15650, dependencyMap.paths),
    ConjureAppChannelMembersSheet,
    { channelId: id },
  );
}
