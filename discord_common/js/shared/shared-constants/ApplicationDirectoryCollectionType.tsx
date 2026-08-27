// === Module 11612: set ===

// Module 11612 (set)
import set from "set" /* 2 */;

const obj = { ALL: null, APPLICATION_DIRECTORY: null, APP_LAUNCHER_IN_TEXT: null, APP_LAUNCHER_IN_VOICE_BANNER: null };
let set = new Set([1, 2, 3, 4, 5, 6, 7]);
obj[0] = set;
obj[1] = new Set([1, 2, 3]);
const set1 = new Set([1, 2, 3]);
obj[2] = new Set([4, 5, 6]);
const set2 = new Set([4, 5, 6]);
obj[3] = new Set([7]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ApplicationDirectoryCollectionType.tsx");

export const ApplicationDirectoryCollectionType = { LIST: 1, [1]: "LIST", LIST_WITH_IMAGE: 2, [2]: "LIST_WITH_IMAGE", GALLERY: 3, [3]: "GALLERY", EXPANDABLE_LIST: 4, [4]: "EXPANDABLE_LIST", BANNER_CARDS: 5, [5]: "BANNER_CARDS", SMALL_BANNER_CARDS: 6, [6]: "SMALL_BANNER_CARDS", BANNER_IMAGE: 7, [7]: "BANNER_IMAGE" };
export const ApplicationDirectoryCollectionTypeSets = obj;