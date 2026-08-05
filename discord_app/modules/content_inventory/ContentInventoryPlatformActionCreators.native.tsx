import { showUserProfileActionSheet } from "../user_profile/native/showUserProfileActionSheet.tsx";
// discord_app/modules/content_inventory/ContentInventoryPlatformActionCreators.native.tsx
const result = require("set").fileFinishedImporting("modules/content_inventory/ContentInventoryPlatformActionCreators.native.tsx");

export const showUserProfile = function showUserProfile(arg0) {
  showUserProfileActionSheet(arg0);
};