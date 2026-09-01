// discord_app/modules/changelog/ChangelogConstants.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/changelog/ChangelogConstants.tsx");

export const CHANGELOG_MODAL_KEY = "CHANGELOG_MODAL";
export const SYSTEM_UPDATES_USER_ID = "1232523165893132288";
export const CHANGELOG_URL = "https://discord.com/category/product";
export const ChangelogPlatforms = { DESKTOP: 0, [0]: "DESKTOP", MOBILE: 1, [1]: "MOBILE" };
export const AssetType = { YOUTUBE_VIDEO_ID: 0, [0]: "YOUTUBE_VIDEO_ID", IMAGE: 1, [1]: "IMAGE" };
export const ChangelogLoadState = {
  NOT_LOADED: 0,
  [0]: "NOT_LOADED",
  LOADED_SUCCESS: 1,
  [1]: "LOADED_SUCCESS",
  LOADED_FAILURE: 2,
  [2]: "LOADED_FAILURE",
};
export const ChangeLogTemplate = { SPECIAL: "special", STANDARD: "standard" };
