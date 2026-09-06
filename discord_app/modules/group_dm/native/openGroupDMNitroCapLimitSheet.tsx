// discord_app/modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { location };
  obj.openLazy(asyncRequireImpl(11596, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj);
}
