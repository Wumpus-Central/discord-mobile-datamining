// === Module 4644: ROBLOX_PROTOCOL_URL ===

// Module 4644 (ROBLOX_PROTOCOL_URL)
import obj132 from "obj132" /* 2 */;

class ROBLOX_PROTOCOL_URL {
  constructor(arg0) {
    return "roblox://placeId=" + global;
  }
}
class ROBLOX_WEB_URL {
  constructor(arg0) {
    return "https://www.roblox.com/games/start?placeId=" + global;
  }
}
const result = obj132.fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgameTypes.tsx");

export const ROBLOX_APPLICATION_ID = "363445589247131668";
export const ROBLOX_GAME_ID = "363445589247131668";
export const RobloxMetadataKeys = { PLACE_ID: "placeId", ROBLOX_TIME_STARTED: "timeStarted" };
export const NativeRobloxSubgameKeys = { UNIVERSE_ID: "universeid", PLACE_ID: "placeid" };
export const ROBLOX_URL_SCHEME = "roblox";
export { ROBLOX_PROTOCOL_URL };
export { ROBLOX_WEB_URL };
export const ROBLOX_DEFERRED_WEB_URL = (closure_0) => {
  if (typeof ROBLOX_PROTOCOL_URL !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof ROBLOX_WEB_URL !== "function") {
    HermesBuiltin.throwTypeError();
  }
  return "https://ro.blox.com/Ebh5?af_dp=" + encodeURIComponent("roblox://placeId=" + closure_0) + "&af_web_dp=" + encodeURIComponent("https://www.roblox.com/games/start?placeId=" + closure_0);
};