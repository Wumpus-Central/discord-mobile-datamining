// discord_common/js/shared/shared-constants/ApplicationDirectoryCollectionItemType.tsx
import set from "../../../../_runtime/00002_set.js";

const obj = { ALL: null };
let set = new Set([1, 2, 3]);
obj[0] = set;
const result = set.fileFinishedImporting(
  "../discord_common/js/shared/shared-constants/ApplicationDirectoryCollectionItemType.tsx",
);

export const ApplicationDirectoryCollectionItemType = {
  APPLICATION: 1,
  [1]: "APPLICATION",
  LINK: 2,
  [2]: "LINK",
  APPLICATION_BANNER: 3,
  [3]: "APPLICATION_BANNER",
};
export const ApplicationDirectoryCollectionItemTypeSets = obj;
