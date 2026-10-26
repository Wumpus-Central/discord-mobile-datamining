// === Module 11029: GameOrganizationInviteConstants ===

// Module 11029 (GameOrganizationInviteConstants)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteConstants.tsx");

export const GAME_ORGANIZATION_JOIN_ACTION_SHEET_KEY = "GameOrganizationJoinActionSheet";
export const GAME_ORGANIZATION_INVITE_PICKER_ACTION_SHEET_KEY = "GameOrganizationInvitePickerActionSheet";
export const GAME_ORGANIZATION_INVITE_EXPIRY_DAYS = 7;
export const GameOrganizationInviteStates = { RESOLVING: "RESOLVING", RESOLVED: "RESOLVED", ERROR: "ERROR" };
export const GameOrganizationDisplayNouns = { GUILD: "GUILD" };
export const GameOrganizationInviteAcceptStatus = { JOINED: 1, [1]: "JOINED", FAILED: 2, [2]: "FAILED" };
export const GameOrganizationInviteAcceptFailureReason = { ALREADY_JOINED: 1, [1]: "ALREADY_JOINED", IN_ANOTHER_ORGANIZATION: 2, [2]: "IN_ANOTHER_ORGANIZATION", GUILD_FULL: 3, [3]: "GUILD_FULL", OTHER: 4, [4]: "OTHER" };
export const GameOrganizationLinkedGuildJoinStatus = { NEW_MEMBER: 1, [1]: "NEW_MEMBER", ALREADY_MEMBER: 2, [2]: "ALREADY_MEMBER", PENDING_VERIFICATION: 3, [3]: "PENDING_VERIFICATION", APPLICATION: 4, [4]: "APPLICATION", FAILED: 5, [5]: "FAILED" };