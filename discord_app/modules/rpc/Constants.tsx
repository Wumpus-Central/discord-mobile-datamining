// === Module 4347: RPC_SCOPE_CONFIG ===

// Module 4347 (RPC_SCOPE_CONFIG)
import set from "set" /* 2 */;

let obj = { USER_SETTINGS: "USER_SETTINGS", CHANGELOG: "CHANGELOG", LIBRARY: "LIBRARY", STORE_HOME: "STORE_HOME", STORE_LISTING: "STORE_LISTING", CHANNEL: "CHANNEL", GAME_SHOP: "GAME_SHOP", PICK_GUILD_SETTINGS: "PICK_GUILD_SETTINGS", QUEST_HOME: "QUEST_HOME", DISCOVERY_GAME_RESULTS: "DISCOVERY_GAME_RESULTS", OAUTH2: "OAUTH2", FEATURES: "FEATURES", SHOP: "SHOP", ACTIVITIES: "ACTIVITIES", QUEST_PREVIEW_TOOL: "QUEST_PREVIEW_TOOL", ONE_TIME_LOGIN: "ONE_TIME_LOGIN", PLAYGROUND: "PLAYGROUND" };
obj = { SETTINGS: "settings", CHANGELOG: "changelog", LIBRARY: "library", STORE: "store", INVITE: "invite", CHANNEL: "channel", GUILD_SETTINGS: "guild_settings", QUEST_HOME: "quest_home", DISCOVERY_GAME: "discovery_game", SHOP: "shop", ACTIVITIES: "activities", QUEST_PREVIEW_TOOL: "quest_preview_tool", PLAYGROUND: "playground" };
const result = set.fileFinishedImporting("modules/rpc/Constants.tsx");

export const RPC_SCOPE_CONFIG = { ANY: "$any", ALL: "$all" };
export const RPC_PRIVATE_SCOPE = "RPC_PRIVATE_SCOPE";
export const RPC_PRIVATE_LIMITED_SCOPE = "RPC_PRIVATE_LIMITED_SCOPE";
export const RPC_LOCAL_SCOPE = "RPC_LOCAL_SCOPE";
export const RPC_AUTHENTICATED_SCOPE = "RPC_AUTHENTICATED_SCOPE";
export const RPC_EMBEDDED_APP_SCOPE = "RPC_EMBEDDED_APP_SCOPE";
export const RPCDeepLinks = obj;
export const DynamicLinkType = obj;
export const getDynamicLinkType = function getDynamicLinkType(arg0) {
  if (obj.USER_SETTINGS === arg0) {
    return obj.SETTINGS;
  } else if (tmp.CHANGELOG === arg0) {
    return obj.CHANGELOG;
  } else if (tmp.LIBRARY === arg0) {
    return obj.LIBRARY;
  } else {
    if (tmp.STORE_HOME !== arg0) {
      if (tmp.STORE_LISTING !== arg0) {
        if (tmp.CHANNEL === arg0) {
          return obj.CHANNEL;
        } else if (tmp.PICK_GUILD_SETTINGS === arg0) {
          return obj.GUILD_SETTINGS;
        } else if (tmp.QUEST_HOME === arg0) {
          return obj.QUEST_HOME;
        } else if (tmp.QUEST_PREVIEW_TOOL === arg0) {
          return obj.QUEST_PREVIEW_TOOL;
        } else if (tmp.DISCOVERY_GAME_RESULTS === arg0) {
          return obj.DISCOVERY_GAME;
        } else if (tmp.SHOP === arg0) {
          return obj.SHOP;
        } else if (tmp.ACTIVITIES === arg0) {
          return obj.ACTIVITIES;
        } else if (tmp.PLAYGROUND === arg0) {
          return obj.PLAYGROUND;
        } else {
          return arg0;
        }
      }
    }
    return obj.STORE;
  }
};
export const DispatchErrorCodes = { APPLICATION_NOT_FOUND: 101, [101]: "APPLICATION_NOT_FOUND", DISK_LOW: 2022, [2022]: "DISK_LOW", DISK_PERMISSION_DENIED: 2025, [2025]: "DISK_PERMISSION_DENIED", POST_INSTALL_FAILED: 2025, [2025]: "POST_INSTALL_FAILED", REDISTRIBUTABLE_INSTALL_FAILED: 2026, [2026]: "REDISTRIBUTABLE_INSTALL_FAILED", APPLICATION_LOAD_FAILED: 2034, [2034]: "APPLICATION_LOAD_FAILED", DESERIALIZATION_FAILED: 2047, [2047]: "DESERIALIZATION_FAILED", INTERRUPTED: 2055, [2055]: "INTERRUPTED", MAX_REQUEST_RETRIES_EXCEEDED: 2058, [2058]: "MAX_REQUEST_RETRIES_EXCEEDED", AUTHENTICATION_FAILED: 2063, [2063]: "AUTHENTICATION_FAILED", IO_PERMISSION_DENIED: 2064, [2064]: "IO_PERMISSION_DENIED", NO_MANIFESTS: 2065, [2065]: "NO_MANIFESTS", POST_INSTALL_CANCELLED: 2066, [2066]: "POST_INSTALL_CANCELLED", API_ERROR: 2069, [2069]: "API_ERROR", FILE_NAME_TOO_LONG: 2072, [2072]: "FILE_NAME_TOO_LONG", NOT_ENTITLED: 2073, [2073]: "NOT_ENTITLED", APPLICATION_LOCK_FAILED: 2076, [2076]: "APPLICATION_LOCK_FAILED", NOT_DIRECTORY: 2077, [2077]: "NOT_DIRECTORY", INVALID_DRIVE: 2078, [2078]: "INVALID_DRIVE", DISK_FULL: 2080, [2080]: "DISK_FULL" };
export const TransportTypes = { IPC: "ipc", WEBSOCKET: "ws", HTTP: "http", POST_MESSAGE: "post_message" };