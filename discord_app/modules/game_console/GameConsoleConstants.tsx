// === Module 9274: XBOX_URL_BASE ===

// Module 9274 (XBOX_URL_BASE)
import ME from "ME" /* 676 */;
import set2 from "set" /* 8578 */;
import set from "set" /* 2 */;

const items = [set2.OAuth2Scopes.VOICE, set2.OAuth2Scopes.DM_CHANNELS_READ, set2.OAuth2Scopes.GUILDS, set2.OAuth2Scopes.GUILDS_MEMBERS_READ, set2.OAuth2Scopes.IDENTIFY, set2.OAuth2Scopes.CONNECTIONS, set2.OAuth2Scopes.ACTIVITIES_READ];
const items1 = [set2.OAuth2Scopes.VOICE, set2.OAuth2Scopes.DM_CHANNELS_READ, set2.OAuth2Scopes.GUILDS, set2.OAuth2Scopes.GUILDS_MEMBERS_READ, set2.OAuth2Scopes.IDENTIFY, set2.OAuth2Scopes.CONNECTIONS];
let obj = { PLAYSTATION: "playstation", XBOX: "xbox" };
const items2 = [, ];
({ XBOX: arr3[0], PLAYSTATION: arr3[1] } = obj);
let set = new Set(items2);
const items3 = [, ];
({ XBOX: arr4[0], PS5: arr4[1] } = ME.ActivityGamePlatforms);
obj = { CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED: 270000, [270000]: "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", CONSOLE_DEVICE_UNAVAILABLE: 270001, [270001]: "CONSOLE_DEVICE_UNAVAILABLE", CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS: 270002, [270002]: "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", CONSOLE_DEVICE_COMMUNICATION_RESTRICTED: 270003, [270003]: "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", CONSOLE_DEVICE_INVALID_POWER_MODE: 270004, [270004]: "CONSOLE_DEVICE_INVALID_POWER_MODE", CONSOLE_DEVICE_ACCOUNT_LINK_ERROR: 270005, [270005]: "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", CONSOLE_DEVICE_MAX_MEMBERS_REACHED: 270006, [270006]: "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", CONSOLE_DEVICE_BAD_COMMAND: 270007, [270007]: "CONSOLE_DEVICE_BAD_COMMAND" };
const items4 = [obj.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED];
const set1 = new Set(items3);
const result = set.fileFinishedImporting("modules/game_console/GameConsoleConstants.tsx");

export const XBOX_URL_BASE = "xbox://communitylinking/donut/audio";
export const XBOX_IOS_APP_LINK = "https://apps.apple.com/us/app/xbox/id736179781";
export const XBOX_ANDROID_APP_LINK = "https://play.google.com/store/apps/details?id=com.microsoft.xboxone.smartglass";
export const XBOX_APP_WEB_LINK = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile";
export const XBOX_LINK_DEST_ORIGIN = "https://login.live.com";
export const XBOX_CLIENT_SCOPES = items;
export const PLAYSTATION_CLIENT_SCOPES = items1;
export const PLAYSTATION_LINK_DEST_ORIGIN = "https://my.account.sony.com";
export const XBOX_HANDOFF_SEARCH_PARAMS = (channelid) => {
  const nonce = channelid.nonce;
  const obj = { channelid: channelid.channelId, guildid: channelid.guildId, channelname: channelid.channelName, guildname: channelid.guildName, muted: String(channelid.muted), deafened: String(channelid.deafened) };
  if (null != nonce) {
    obj.nonce = nonce;
  }
  const uRLSearchParams = new URLSearchParams(obj);
  return uRLSearchParams;
};
export const GameConsoleTypes = obj;
export const GAME_CONSOLE_SESSIONS = set;
export const CONSOLE_VOICE_PLATFORMS = set1;
export const GameConsoleCommandResultErrorCodes = obj;
export const USER_ACTION_REQUIRED_ERROR_CODES = new Set(items4);
export const GAME_CONSOLE_ALERT_MODAL_LOCATION = "console error alert";