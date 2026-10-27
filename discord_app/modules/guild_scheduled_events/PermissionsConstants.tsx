// === Module 8943: PermissionsConstants ===

// Module 8943 (PermissionsConstants)
import Constants from "Constants" /* 1084 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4832 */;
import "BigFlagUtils";
import BigFlagUtils from "BigFlagUtils" /* 1096 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
const combineResult = BigFlagUtils.combine(VIEW_CHANNEL, Permissions.CONNECT);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/PermissionsConstants.tsx");

export const CREATE_GUILD_EVENT_CORE_PERMISSIONS = VIEW_CHANNEL;
export const CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS = BigFlagUtils.combine(VIEW_CHANNEL, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);