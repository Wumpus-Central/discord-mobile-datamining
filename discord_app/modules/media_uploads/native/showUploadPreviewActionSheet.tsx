// === Module 10528: showUploadPreviewActionSheet ===

// Module 10528 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10529, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};