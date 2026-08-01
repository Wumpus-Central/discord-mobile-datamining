// === Module 1382: set ===

// Module 1382 (set)
import set from "set";

const obj = { ALL: null };
let set = new Set([0, 1, 2]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ForumLayout.tsx");

export const ForumLayout = { DEFAULT: 0, [0]: "DEFAULT", LIST: 1, [1]: "LIST", GRID: 2, [2]: "GRID" };
export const ForumLayoutSets = obj;