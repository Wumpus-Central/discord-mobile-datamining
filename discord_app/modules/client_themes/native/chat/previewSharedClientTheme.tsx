// === Module 13427: previewSharedClientTheme ===

// Module 13427 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13428, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
}