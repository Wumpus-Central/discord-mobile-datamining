// discord_app/modules/client_themes/native/chat/previewSharedClientTheme.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  require("../../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11266, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};