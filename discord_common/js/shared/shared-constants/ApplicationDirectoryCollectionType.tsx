// discord_common/js/shared/shared-constants/ApplicationDirectoryCollectionType.tsx
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  ALL: new Set([1, 2, 3, 4, 5, 6, 7]),
  APPLICATION_DIRECTORY: null,
  APP_LAUNCHER_IN_TEXT: null,
  APP_LAUNCHER_IN_VOICE_BANNER: null,
};
const set = new Set([1, 2, 3, 4, 5, 6, 7]);
obj.APPLICATION_DIRECTORY = new Set([1, 2, 3]);
const set1 = new Set([1, 2, 3]);
obj.APP_LAUNCHER_IN_TEXT = new Set([4, 5, 6]);
const set2 = new Set([4, 5, 6]);
obj.APP_LAUNCHER_IN_VOICE_BANNER = new Set([7]);
const result = size.fileFinishedImporting(
  "../discord_common/js/shared/shared-constants/ApplicationDirectoryCollectionType.tsx",
);

export const ApplicationDirectoryCollectionType = {
  LIST: 1,
  [1]: "LIST",
  LIST_WITH_IMAGE: 2,
  [2]: "LIST_WITH_IMAGE",
  GALLERY: 3,
  [3]: "GALLERY",
  EXPANDABLE_LIST: 4,
  [4]: "EXPANDABLE_LIST",
  BANNER_CARDS: 5,
  [5]: "BANNER_CARDS",
  SMALL_BANNER_CARDS: 6,
  [6]: "SMALL_BANNER_CARDS",
  BANNER_IMAGE: 7,
  [7]: "BANNER_IMAGE",
};
export const ApplicationDirectoryCollectionTypeSets = obj;
