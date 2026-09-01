// discord_app/modules/content_inventory/ContentInventoryPlatformActionCreators.native.tsx
import set from "../../../_runtime/00002_set.js";
import showUserProfileActionSheetDefault from "../user_profile/native/showUserProfileActionSheet.tsx";

const result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryPlatformActionCreators.native.tsx");

export const showUserProfile = function showUserProfile(arg0) {
  showUserProfileActionSheetDefault(arg0);
};
