// === Module 11133: handleTapPreviewSharedClientTheme ===

// Module 11133 (handleTapPreviewSharedClientTheme)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11134, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};