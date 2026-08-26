// === Module 7984: set ===

// Module 7984 (set)
import set from "set" /* 2 */;

const obj = { ALL: null };
let set = new Set([1, 2, 4, 16]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx");

export const GuildInviteFlags = { IS_GUEST_INVITE: 1, [1]: "IS_GUEST_INVITE", IS_VIEWED: 2, [2]: "IS_VIEWED", IS_ENHANCED: 4, [4]: "IS_ENHANCED", IS_APPLICATION_BYPASS: 8, [8]: "IS_APPLICATION_BYPASS", HAS_TARGET_USERS_JOB_STATUS: 16, [16]: "HAS_TARGET_USERS_JOB_STATUS", ASSIGNABLE_FLAGS_MASK: 9, [9]: "ASSIGNABLE_FLAGS_MASK" };
export const GuildInviteFlagsSets = obj;