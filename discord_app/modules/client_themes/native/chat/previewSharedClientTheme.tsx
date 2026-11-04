// === Module 13928: previewSharedClientTheme ===

// Module 13928 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13929, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
}