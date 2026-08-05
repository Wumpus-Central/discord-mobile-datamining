// discord_app/modules/content_inventory/ContentInventoryPlatformActionCreators.native.tsx
import { showUserProfileActionSheet } from "../user_profile/native/showUserProfileActionSheet.tsx";
const result = require("set").fileFinishedImporting("modules/content_inventory/ContentInventoryPlatformActionCreators.native.tsx");

export const showUserProfile = function showUserProfile(arg0) {
  showUserProfileActionSheet(arg0);
};