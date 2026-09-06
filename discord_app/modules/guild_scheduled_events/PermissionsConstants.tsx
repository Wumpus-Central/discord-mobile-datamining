// === Module 9672: VIEW_CHANNEL ===

// Module 9672 (VIEW_CHANNEL)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import Permissions2 from "Permissions" /* 1965 */;
import importAllResult from "fromString" /* 1086 */;

const Permissions = ME.Permissions;
const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
const combineResult = importAllResult.combine(VIEW_CHANNEL, Permissions.CONNECT);
const importAllResult1 = importAllResult;
const combineResult1 = importAllResult.combine(VIEW_CHANNEL, Permissions2.MODERATE_STAGE_CHANNEL_PERMISSIONS);
const result = set.fileFinishedImporting("modules/guild_scheduled_events/PermissionsConstants.tsx");

export const CREATE_GUILD_EVENT_CORE_PERMISSIONS = VIEW_CHANNEL;
export const CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS = combineResult1;