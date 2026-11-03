// === Module 13841: previewSharedClientTheme ===

// Module 13841 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13842, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
}