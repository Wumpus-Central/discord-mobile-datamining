// discord_app/modules/content_inventory/ContentInventoryPlatformActionCreators.native.tsx
import showUserProfileActionSheetDefault from "../user_profile/native/showUserProfileActionSheet.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/content_inventory/ContentInventoryPlatformActionCreators.native.tsx",
);

export const showUserProfile = function showUserProfile(showUserProfileResult) {
  showUserProfileActionSheetDefault(showUserProfileResult);
};
