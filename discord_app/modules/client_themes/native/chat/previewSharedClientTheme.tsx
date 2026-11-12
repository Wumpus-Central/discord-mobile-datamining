// === Module 14442: previewSharedClientTheme ===

// Module 14442 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14443, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
}