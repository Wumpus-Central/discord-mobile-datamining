// === Module 13941: previewSharedClientTheme ===

// Module 13941 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13942, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
}