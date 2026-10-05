// discord_app/modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx",
);

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11152, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
}
