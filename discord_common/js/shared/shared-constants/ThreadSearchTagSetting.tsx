// discord_common/js/shared/shared-constants/ThreadSearchTagSetting.tsx
import set from "../../../../_runtime/00002_set.js";

const obj = { ALL: null };
let set = new Set(["match_all", "match_some"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ThreadSearchTagSetting.tsx");

export const ThreadSearchTagSetting = { MATCH_ALL: "match_all", MATCH_SOME: "match_some" };
export const ThreadSearchTagSettingSets = obj;