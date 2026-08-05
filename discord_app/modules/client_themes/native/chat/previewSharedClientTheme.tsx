// discord_app/modules/client_themes/native/chat/previewSharedClientTheme.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(11266, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};