// === Module 11514: handleTapPreviewSharedClientTheme ===

// Module 11514 (handleTapPreviewSharedClientTheme)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11515, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};