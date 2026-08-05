// discord_app/modules/content_inventory/ContentInventoryPlatformActionCreators.native.tsx
const result = require("set").fileFinishedImporting("modules/content_inventory/ContentInventoryPlatformActionCreators.native.tsx");

export const showUserProfile = function showUserProfile(arg0) {
  require("../user_profile/native/showUserProfileActionSheet.tsx")(arg0);
};