// === Module 12888: previewSharedClientTheme ===

// Module 12888 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12889, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
}