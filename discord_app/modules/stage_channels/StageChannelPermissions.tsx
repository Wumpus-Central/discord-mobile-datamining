// === Module 1394: Permissions ===

// Module 1394 (Permissions)
import ME from "ME" /* 673 */;
import importAllResult from "fromString" /* 503 */;
import set from "set" /* 2 */;

const Permissions = ME.Permissions;
const combineResult = importAllResult.combine(Permissions.MANAGE_CHANNELS, Permissions.MUTE_MEMBERS, Permissions.MOVE_MEMBERS);
const items = [, , ];
({ SPEAK: arr[0], REQUEST_TO_SPEAK: arr[1], USE_VAD: arr[2] } = Permissions);
const importAllResult1 = importAllResult;
let set = new Set(items);
const combineResult1 = importAllResult.combine(Permissions.MANAGE_CHANNELS, Permissions.MANAGE_ROLES);
const importAllResult2 = importAllResult;
const combineResult2 = importAllResult.combine(combineResult, Permissions.MANAGE_ROLES);
const combineResult3 = importAllResult.combine(Permissions.CONNECT, Permissions.VIEW_CHANNEL);
const importAllResult3 = importAllResult;
const importAllResult4 = importAllResult;
const result = set.fileFinishedImporting("modules/stage_channels/StageChannelPermissions.tsx");

export const MODERATE_STAGE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_STAGE_CHANNEL_PERMISSIONS = combineResult1;
export const STAGE_CHANNEL_DISABLED_PERMISSIONS = set;
export const UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS = combineResult2;
export const JOIN_VOCAL_CHANNEL_PERMISSIONS = combineResult3;
export const LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST = importAllResult.combine(combineResult3, Permissions.READ_MESSAGE_HISTORY, Permissions.REQUEST_TO_SPEAK, Permissions.SPEAK, Permissions.USE_VAD);