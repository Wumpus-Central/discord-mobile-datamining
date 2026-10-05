// === Module 16526: MemberSafetyPageTypes ===

// Module 16526 (MemberSafetyPageTypes)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4702 */;
import size from "module_2" /* 2 */;

let APPROVED;
let REJECTED;
let SUBMITTED;
const obj = { ALL_MEMBERS: "ALL_MEMBERS", PENDING: SUBMITTED, REJECTED, APPROVED };
SUBMITTED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
obj[SUBMITTED] = "PENDING";
REJECTED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
obj[REJECTED] = "REJECTED";
APPROVED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED;
obj[APPROVED] = "APPROVED";
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPageTypes.tsx");

export const MemberSafetyPageTab = obj;