const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(11155, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};