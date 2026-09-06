// discord_app/modules/media_uploads/native/showUploadPreviewActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(10634, dependencyMap.paths),
    "UploadPreviewActionSheet",
    arg0,
  );
}
