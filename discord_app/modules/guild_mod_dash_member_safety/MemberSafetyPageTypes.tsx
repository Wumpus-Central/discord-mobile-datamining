// === Module 16408: SUBMITTED ===

// Module 16408 (SUBMITTED)
import set from "set" /* 2 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4302 */;

const obj = { ALL_MEMBERS: "ALL_MEMBERS" };
const SUBMITTED = MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.SUBMITTED;
obj.PENDING = SUBMITTED;
obj[SUBMITTED] = "PENDING";
const REJECTED = MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.REJECTED;
obj.REJECTED = REJECTED;
obj[REJECTED] = "REJECTED";
const APPROVED = MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.APPROVED;
obj.APPROVED = APPROVED;
obj[APPROVED] = "APPROVED";
const result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPageTypes.tsx");

export const MemberSafetyPageTab = obj;