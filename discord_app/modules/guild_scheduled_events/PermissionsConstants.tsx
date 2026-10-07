// discord_app/modules/guild_scheduled_events/PermissionsConstants.tsx
import Constants from "../../Constants.tsx";
import StageChannelPermissions from "../stage_channels/StageChannelPermissions.tsx";
import "BigFlagUtils";
import BigFlagUtils from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Permissions = Constants.Permissions;
const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
const combineResult = BigFlagUtils.combine(VIEW_CHANNEL, Permissions.CONNECT);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/PermissionsConstants.tsx");

export const CREATE_GUILD_EVENT_CORE_PERMISSIONS = VIEW_CHANNEL;
export const CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS = BigFlagUtils.combine(
  VIEW_CHANNEL,
  StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS,
);
