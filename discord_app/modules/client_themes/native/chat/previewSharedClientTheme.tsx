// === Module 11633: previewSharedClientTheme ===

// Module 11633 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11634, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};