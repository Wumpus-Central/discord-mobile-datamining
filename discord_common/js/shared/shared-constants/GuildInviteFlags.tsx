// discord_common/js/shared/shared-constants/GuildInviteFlags.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const obj = { ALL: new Set([1, 2, 4, 16]) };
const set = new Set([1, 2, 4, 16]);
const result = obj132.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx");

export const GuildInviteFlags = { IS_GUEST_INVITE: 1, [1]: "IS_GUEST_INVITE", IS_VIEWED: 2, [2]: "IS_VIEWED", IS_ENHANCED: 4, [4]: "IS_ENHANCED", IS_APPLICATION_BYPASS: 8, [8]: "IS_APPLICATION_BYPASS", HAS_TARGET_USERS_JOB_STATUS: 16, [16]: "HAS_TARGET_USERS_JOB_STATUS", ASSIGNABLE_FLAGS_MASK: 9, [9]: "ASSIGNABLE_FLAGS_MASK" };
export const GuildInviteFlagsSets = obj;