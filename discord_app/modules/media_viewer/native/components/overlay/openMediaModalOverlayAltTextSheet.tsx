// discord_app/modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx",
);

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(11536, dependencyMap.paths),
    "MediaModalOverlayAltTextSheet",
    { description: description.description },
  );
}
