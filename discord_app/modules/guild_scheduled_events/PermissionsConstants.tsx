// discord_app/modules/guild_scheduled_events/PermissionsConstants.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import Permissions2 from "../stage_channels/StageChannelPermissions.tsx";
import importAllResult from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";

const Permissions = ME.Permissions;
const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
const combineResult = importAllResult.combine(VIEW_CHANNEL, Permissions.CONNECT);
const importAllResult1 = importAllResult;
const combineResult1 = importAllResult.combine(VIEW_CHANNEL, Permissions2.MODERATE_STAGE_CHANNEL_PERMISSIONS);
const result = set.fileFinishedImporting("modules/guild_scheduled_events/PermissionsConstants.tsx");

export const CREATE_GUILD_EVENT_CORE_PERMISSIONS = VIEW_CHANNEL;
export const CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS = combineResult1;
