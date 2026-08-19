// discord_app/modules/stage_channels/StageChannelPermissions.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import importAllResult from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";

const Permissions = ME.Permissions;
const combineResult = importAllResult.combine(Permissions.MANAGE_CHANNELS, Permissions.MUTE_MEMBERS, Permissions.MOVE_MEMBERS);
const items = [, , ];
({ SPEAK: arr[0], REQUEST_TO_SPEAK: arr[1], USE_VAD: arr[2] } = Permissions);
const importAllResult1 = importAllResult;
const combineResult1 = importAllResult.combine(Permissions.MANAGE_CHANNELS, Permissions.MANAGE_ROLES);
const set = new Set(items);
const importAllResult2 = importAllResult;
const combineResult2 = importAllResult.combine(combineResult, Permissions.MANAGE_ROLES);
const combineResult3 = importAllResult.combine(Permissions.CONNECT, Permissions.VIEW_CHANNEL);
const importAllResult3 = importAllResult;
const importAllResult4 = importAllResult;
const combineResult4 = importAllResult.combine(combineResult3, Permissions.READ_MESSAGE_HISTORY, Permissions.REQUEST_TO_SPEAK, Permissions.SPEAK, Permissions.USE_VAD);
const result = obj132.fileFinishedImporting("modules/stage_channels/StageChannelPermissions.tsx");

export const MODERATE_STAGE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_STAGE_CHANNEL_PERMISSIONS = combineResult1;
export const STAGE_CHANNEL_DISABLED_PERMISSIONS = set;
export const UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS = combineResult2;
export const JOIN_VOCAL_CHANNEL_PERMISSIONS = combineResult3;
export const LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST = combineResult4;