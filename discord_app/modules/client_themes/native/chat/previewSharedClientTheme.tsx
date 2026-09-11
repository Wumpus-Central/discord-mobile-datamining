// === Module 12039: previewSharedClientTheme ===

// Module 12039 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12040, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};