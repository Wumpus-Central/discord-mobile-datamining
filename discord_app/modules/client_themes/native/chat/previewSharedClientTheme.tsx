// === Module 12940: previewSharedClientTheme ===

// Module 12940 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12941, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
}