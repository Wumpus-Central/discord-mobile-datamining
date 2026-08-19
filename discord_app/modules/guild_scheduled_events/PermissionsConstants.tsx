// === Module 8838: VIEW_CHANNEL ===

// Module 8838 (VIEW_CHANNEL)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import Permissions2 from "Permissions" /* 1399 */;
import importAllResult from "fromString" /* 506 */;

const Permissions = ME.Permissions;
const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
const combineResult = importAllResult.combine(VIEW_CHANNEL, Permissions.CONNECT);
const importAllResult1 = importAllResult;
const combineResult1 = importAllResult.combine(VIEW_CHANNEL, Permissions2.MODERATE_STAGE_CHANNEL_PERMISSIONS);
const result = obj132.fileFinishedImporting("modules/guild_scheduled_events/PermissionsConstants.tsx");

export const CREATE_GUILD_EVENT_CORE_PERMISSIONS = VIEW_CHANNEL;
export const CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS = combineResult1;