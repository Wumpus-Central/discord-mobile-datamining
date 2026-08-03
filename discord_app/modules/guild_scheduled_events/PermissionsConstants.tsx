import { Permissions } from "ME";
import importAllResult from "fromString";
import importAllResult1 from "fromString";

const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
const combineResult = require("fromString").combine(VIEW_CHANNEL, Permissions.CONNECT);
const combineResult1 = require("fromString").combine(VIEW_CHANNEL, require("Permissions").MODERATE_STAGE_CHANNEL_PERMISSIONS);
const result = require("Permissions").fileFinishedImporting("modules/guild_scheduled_events/PermissionsConstants.tsx");

export const CREATE_GUILD_EVENT_CORE_PERMISSIONS = VIEW_CHANNEL;
export const CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS = combineResult1;