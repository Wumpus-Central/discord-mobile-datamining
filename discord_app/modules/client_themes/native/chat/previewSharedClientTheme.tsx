// === Module 11557: previewSharedClientTheme ===

// Module 11557 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11558, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};