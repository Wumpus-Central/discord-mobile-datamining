// === Module 1965: StageChannelPermissions ===

// Module 1965 (StageChannelPermissions)
import Constants from "Constants" /* 1074 */;
import BigFlagUtils from "BigFlagUtils" /* 1086 */;
import "BigFlagUtils";
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.MANAGE_CHANNELS, Permissions.MUTE_MEMBERS, Permissions.MOVE_MEMBERS);
const items = [, , ];
({ SPEAK: arr[0], REQUEST_TO_SPEAK: arr[1], USE_VAD: arr[2] } = Permissions);
const combineResult1 = BigFlagUtils.combine(Permissions.MANAGE_CHANNELS, Permissions.MANAGE_ROLES);
const set = new Set(items);
const combineResult3 = BigFlagUtils.combine(Permissions.CONNECT, Permissions.VIEW_CHANNEL);
const combineResult2 = BigFlagUtils.combine(combineResult, Permissions.MANAGE_ROLES);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelPermissions.tsx");

export const MODERATE_STAGE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_STAGE_CHANNEL_PERMISSIONS = combineResult1;
export const STAGE_CHANNEL_DISABLED_PERMISSIONS = set;
export const UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS = combineResult2;
export const JOIN_VOCAL_CHANNEL_PERMISSIONS = combineResult3;
export const LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST = BigFlagUtils.combine(combineResult3, Permissions.READ_MESSAGE_HISTORY, Permissions.REQUEST_TO_SPEAK, Permissions.SPEAK, Permissions.USE_VAD);