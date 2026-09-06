// === Module 16570: MemberSafetyPageTypes ===

// Module 16570 (MemberSafetyPageTypes)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4384 */;
import size from "module_2" /* 2 */;

const obj = { ALL_MEMBERS: "ALL_MEMBERS" };
const SUBMITTED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
obj.PENDING = SUBMITTED;
obj[SUBMITTED] = "PENDING";
const REJECTED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
obj.REJECTED = REJECTED;
obj[REJECTED] = "REJECTED";
const APPROVED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED;
obj.APPROVED = APPROVED;
obj[APPROVED] = "APPROVED";
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPageTypes.tsx");

export const MemberSafetyPageTab = obj;