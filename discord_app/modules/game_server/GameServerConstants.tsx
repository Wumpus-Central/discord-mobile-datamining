// === Module 4769: GameServerConstants ===

// Module 4769 (GameServerConstants)
import UserStoreConstants from "UserStoreConstants" /* 1389 */;
import GameServerProviderType from "GameServerProviderType" /* 4770 */;
import size from "module_2" /* 2 */;

let obj3;
let obj4;
const obj = { SELECT_GAME: "select-game", SERVER_SETTINGS: "server-settings" };
const obj2 = { steps: { [obj.SELECT_GAME]: obj3, [obj.SERVER_SETTINGS]: obj4 } };
let str = "1425215263548117002";
obj3 = { onBack: { type: "close" }, onNext: { type: "go-to-step", step: obj.SERVER_SETTINGS } };
obj4 = { onBack: { type: "go-to-step", step: obj.SELECT_GAME }, onNext: { type: "save" } };
const Environments = UserStoreConstants.Environments;
if ("production" !== window.GLOBAL_ENV.PROJECT_ENV) {
  const _window = window;
  let str2 = "1415025086791942144";
  if ("staging" === window.GLOBAL_ENV.PROJECT_ENV) {
    str2 = "1415044199572832256";
  }
  str = str2;
}
let str4 = "1402418491272986635";
if ("production" !== window.GLOBAL_ENV.PROJECT_ENV) {
  const _window2 = window;
  let str5 = "1";
  if ("staging" === window.GLOBAL_ENV.PROJECT_ENV) {
    str5 = "356875570916753438";
  }
  str4 = str5;
}
let str7 = "1458530944955973852";
if ("production" !== window.GLOBAL_ENV.PROJECT_ENV) {
  const _window3 = window;
  let str8 = "2";
  if ("staging" === window.GLOBAL_ENV.PROJECT_ENV) {
    str8 = "1458563423670501376";
  }
  str7 = str8;
}
class NewGamesCoachmarkContent {
}
let str10 = "1497097140001046528";
if ("production" === window.GLOBAL_ENV.PROJECT_ENV) {
  str10 = "1497100850261131334";
}
NewGamesCoachmarkContent.FEATURED_PRODUCT_ID = str10;
let str11 = "1497095960202051584";
if ("production" === window.GLOBAL_ENV.PROJECT_ENV) {
  str11 = "1440133627899023452";
}
NewGamesCoachmarkContent.FEATURED_GAME_ID = str11;
NewGamesCoachmarkContent.FEATURED_GAME_NAME = "Windrose";
NewGamesCoachmarkContent.SECOND_GAME_NAME = "Factorio";
NewGamesCoachmarkContent.THIRD_GAME_NAME = "V Rising";
let str12 = "https://discord.shockbyte.com/support";
const SHOCKBYTE = GameServerProviderType.GameServerProviderType.SHOCKBYTE;
if (window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING) {
  str12 = "https://purple-prod.shockbyte.dev/support";
}
const obj5 = {};
obj5[SHOCKBYTE] = str12;
const result = size.fileFinishedImporting("modules/game_server/GameServerConstants.tsx");

export const GameServerSetupStep = obj;
export const GAME_SERVER_DEFAULT_STEP_CONFIG = obj2;
export const GAME_SERVER_SLIDE_PADDING = 24;
export const GAME_SERVER_SLIDE_WIDTH = 680;
export const GAME_SERVER_SLIDE_CONTENT_WIDTH = 632;
export const GAME_SERVER_MAX_INSTANCES = 10;
export const GAME_SERVER_SHOP_MAX_INSTANCES = 5;
export const GAME_SERVER_MAX_NAME_LENGTH = 32;
export const GAME_SERVER_MIN_DELAY_TIME_MS = 1000;
export const GAME_SERVER_COLLECTION_ID = str;
export const MINECRAFT_GAME_ID = str4;
export const HYTALE_GAME_ID = str7;
export { NewGamesCoachmarkContent };
export const GameServerGameProvider = { SHOCKBYTE: 0, [0]: "SHOCKBYTE" };
export const GAME_SERVER_SUPPORT_URLS = obj5;
export const GAME_SERVER_TOS = { [GameServerProviderType.GameServerProviderType.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" };
export const GAME_SERVER_SURVEY_URL = (arg0, arg1) => "https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=" + arg0 + "&guild_id=" + arg1;
export const GAME_SERVER_POWERUP_SKU_ID = "0";