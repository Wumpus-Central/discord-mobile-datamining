import { Permissions } from "ME";
import importAllResult from "fromString";
import importAllResult1 from "fromString";
import importAllResult2 from "fromString";
import importAllResult3 from "fromString";
import importAllResult4 from "fromString";
import set from "set";

const combineResult = require("fromString").combine(Permissions.MANAGE_CHANNELS, Permissions.MUTE_MEMBERS, Permissions.MOVE_MEMBERS);
const items = [, , ];
({ SPEAK: arr[0], REQUEST_TO_SPEAK: arr[1], USE_VAD: arr[2] } = Permissions);
let set = new Set(items);
const combineResult1 = require("fromString").combine(Permissions.MANAGE_CHANNELS, Permissions.MANAGE_ROLES);
const combineResult2 = require("fromString").combine(combineResult, Permissions.MANAGE_ROLES);
const combineResult3 = require("fromString").combine(Permissions.CONNECT, Permissions.VIEW_CHANNEL);
const result = set.fileFinishedImporting("modules/stage_channels/StageChannelPermissions.tsx");

export const MODERATE_STAGE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_STAGE_CHANNEL_PERMISSIONS = combineResult1;
export const STAGE_CHANNEL_DISABLED_PERMISSIONS = set;
export const UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS = combineResult2;
export const JOIN_VOCAL_CHANNEL_PERMISSIONS = combineResult3;
export const LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST = require("fromString").combine(combineResult3, Permissions.READ_MESSAGE_HISTORY, Permissions.REQUEST_TO_SPEAK, Permissions.SPEAK, Permissions.USE_VAD);