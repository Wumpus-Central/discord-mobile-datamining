// discord_common/js/shared/shared-constants/ThreadSortOrder.tsx
import set from "../../../../_runtime/00002_set.js";

const obj = { ALL: null };
let set = new Set([0, 1]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ThreadSortOrder.tsx");

export const ThreadSortOrder = { LATEST_ACTIVITY: 0, [0]: "LATEST_ACTIVITY", CREATION_DATE: 1, [1]: "CREATION_DATE" };
export const ThreadSortOrderSets = obj;
