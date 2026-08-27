// === Module 5515: set ===

// Module 5515 (set)
import set from "set" /* 2 */;

const obj = { VISIBLE: null };
let set = new Set([1, 3]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildProfileVisibility.tsx");

export const GuildProfileVisibility = { NOT_SPECIFIED: 0, [0]: "NOT_SPECIFIED", PUBLIC: 1, [1]: "PUBLIC", RESTRICTED: 2, [2]: "RESTRICTED", PUBLIC_WITH_RECRUITMENT: 3, [3]: "PUBLIC_WITH_RECRUITMENT" };
export const GuildProfileVisibilitySets = obj;