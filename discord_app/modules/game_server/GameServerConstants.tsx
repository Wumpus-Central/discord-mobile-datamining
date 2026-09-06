// === Module 4451: str11 ===

// Module 4451 (str11)
import set from "set" /* 2 */;
import Environments from "Environments" /* 1383 */;
import GameServerProviderType from "GameServerProviderType" /* 4452 */;

let obj = { SELECT_GAME: "select-game", SERVER_SETTINGS: "server-settings" };
obj = { type: "go-to-step", step: obj.SERVER_SETTINGS };
obj = { type: "go-to-step", step: obj.SELECT_GAME };
let str = "1425215263548117002";
if ("production" !== window.GLOBAL_ENV.PROJECT_ENV) {
  const _window = window;
  let str2 = "1415025086791942144";
  if ("staging" === window.GLOBAL_ENV.PROJECT_ENV) {
    str2 = "1415044199572832256";
  }
  str = str2;
}
let str4 = "1486428380437020672";
if ("production" === window.GLOBAL_ENV.PROJECT_ENV) {
  str4 = "1361763069696675961";
}
let str5 = "1402418491272986635";
if ("production" !== window.GLOBAL_ENV.PROJECT_ENV) {
  const _window2 = window;
  let str6 = "1";
  if ("staging" === window.GLOBAL_ENV.PROJECT_ENV) {
    str6 = "356875570916753438";
  }
  str5 = str6;
}
let str8 = "1458530944955973852";
if ("production" !== window.GLOBAL_ENV.PROJECT_ENV) {
  const _window3 = window;
  let str9 = "2";
  if ("staging" === window.GLOBAL_ENV.PROJECT_ENV) {
    str9 = "1458563423670501376";
  }
  str8 = str9;
}
class NewGamesCoachmarkContent {
}
let str11 = "1497097140001046528";
if ("production" === window.GLOBAL_ENV.PROJECT_ENV) {
  str11 = "1497100850261131334";
}
NewGamesCoachmarkContent.FEATURED_PRODUCT_ID = str11;
let str12 = "1497095960202051584";
if ("production" === window.GLOBAL_ENV.PROJECT_ENV) {
  str12 = "1440133627899023452";
}
NewGamesCoachmarkContent.FEATURED_GAME_ID = str12;
NewGamesCoachmarkContent.FEATURED_GAME_NAME = "Windrose";
NewGamesCoachmarkContent.SECOND_GAME_NAME = "Factorio";
NewGamesCoachmarkContent.THIRD_GAME_NAME = "V Rising";
let str13 = "https://discord.shockbyte.com/support";
if (window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.Environments.STAGING) {
  str13 = "https://purple-prod.shockbyte.dev/support";
}
const obj1 = {};
obj1[GameServerProviderType.GameServerProviderType.SHOCKBYTE] = str13;
const result = set.fileFinishedImporting("modules/game_server/GameServerConstants.tsx");

export const GameServerSetupStep = obj;
export const GAME_SERVER_DEFAULT_STEP_CONFIG = { steps: { [obj.SELECT_GAME]: { onBack: { type: "close" }, onNext: obj }, [obj.SERVER_SETTINGS]: { onBack: obj, onNext: { type: "save" } } } };
export const GAME_SERVER_SLIDE_PADDING = 24;
export const GAME_SERVER_SLIDE_WIDTH = 680;
export const GAME_SERVER_SLIDE_CONTENT_WIDTH = 632;
export const GAME_SERVER_MAX_INSTANCES = 10;
export const GAME_SERVER_SHOP_MAX_INSTANCES = 5;
export const GAME_SERVER_MAX_NAME_LENGTH = 32;
export const GAME_SERVER_MIN_DELAY_TIME_MS = 1000;
export const GAME_SERVER_COLLECTION_ID = str;
export const RUNESCAPE_GAME_ID = str4;
export const MINECRAFT_GAME_ID = str5;
export const HYTALE_GAME_ID = str8;
export { NewGamesCoachmarkContent };
export const GameServerGameProvider = { SHOCKBYTE: 0, [0]: "SHOCKBYTE" };
export const GAME_SERVER_SUPPORT_URLS = obj1;
export const GAME_SERVER_TOS = { [GameServerProviderType.GameServerProviderType.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" };
export const GAME_SERVER_SURVEY_URL = (arg0, arg1) => "https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=" + arg0 + "&guild_id=" + arg1;
export const GAME_SERVER_POWERUP_SKU_ID = "0";