// === Module 8571: PermissionsConstants ===

// Module 8571 (PermissionsConstants)
import Constants from "Constants" /* 1085 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2073 */;
import "BigFlagUtils";
import BigFlagUtils from "BigFlagUtils" /* 1097 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
const combineResult = BigFlagUtils.combine(VIEW_CHANNEL, Permissions.CONNECT);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/PermissionsConstants.tsx");

export const CREATE_GUILD_EVENT_CORE_PERMISSIONS = VIEW_CHANNEL;
export const CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS = BigFlagUtils.combine(VIEW_CHANNEL, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);