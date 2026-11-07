// === Module 11858: Constants ===

// Module 11858 (Constants)
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
let CDN_HOST;
if (!GlobalUtils.isDiscordBackendDevelopment()) {
  const _window = window;
  CDN_HOST = window.GLOBAL_ENV.CDN_HOST;
}
let GAMES_DETECTABLE = Endpoints.GAMES_DETECTABLE;
if (null != CDN_HOST) {
  let _HermesInternal = HermesInternal;
  GAMES_DETECTABLE = "https://" + CDN_HOST + "/detectables/games.json";
}
let NON_GAMES_DETECTABLE = Endpoints.NON_GAMES_DETECTABLE;
if (null != CDN_HOST) {
  const _HermesInternal2 = HermesInternal;
  NON_GAMES_DETECTABLE = "https://" + CDN_HOST + "/detectables/non-games.json";
}
const result = size.fileFinishedImporting("modules/game_detection/Constants.tsx");

export const DETECTABLE_PAYLOAD_SCHEMA_VERSION = 1;
export function detectableGamesPayloadCdnUrl() {
  if (null != CDN_HOST) {
    const _HermesInternal = HermesInternal;
    let combined = "https://" + tmp + "/detectables/games-v1.json";
  } else {
    combined = GAMES_DETECTABLE;
  }
  return combined;
}
export function detectableNonGamesPayloadCdnUrl() {
  if (null != CDN_HOST) {
    const _HermesInternal = HermesInternal;
    let combined = "https://" + tmp + "/detectables/non-games-v1.json";
  } else {
    combined = NON_GAMES_DETECTABLE;
  }
  return combined;
}