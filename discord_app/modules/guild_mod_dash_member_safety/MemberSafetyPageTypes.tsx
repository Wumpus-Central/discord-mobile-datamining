// discord_app/modules/guild_mod_dash_member_safety/MemberSafetyPageTypes.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import MAX_RESULTS_PER_PAGE from "../guild_member_verification/MemberVerificationTypes.tsx";

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
const result = obj132.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPageTypes.tsx");

export const MemberSafetyPageTab = obj;