// discord_app/modules/game_community_upsell/native/GameCommunityConfig.tsx
const obj = { [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.MINECRAFT]: "1402418491272986635", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.FORTNITE]: "1402418703554842694", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.GENSHIN]: "762434991303950386", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.PUBG_MOBILE]: "1474086506955014275", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.CALL_OF_DUTY_MOBILE]: "1474087680169082943", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.CLASH_OF_CLANS]: "1441990808399253575", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.MOBILE_LEGENDS_BANG_BANG]: "1441992389232165056", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.GARENA_FREE_FIRE]: "1407144801089880165", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.POKEMON_GO]: "1474100461203357870", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.POKEMON_TCG_POCKET]: "1474100935126028351", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.CLASH_ROYALE]: "1420796862369239162", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.AMONG_US]: "1402418440685486130", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.MONOPOLY_GO]: "1474101904765227169", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.BRAWL_STARS]: "1474102260807106581", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.BRAWLHALLA]: "356944273133928458", [require("../../local_app_detection/LocalAppDetectionTypes.tsx").DetectableAppNames.WUTHERING_WAVES]: "1247227126416146462" };
const result = require("set").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityConfig.tsx");

export const DETECTABLE_GAME_TO_APPLICATION_ID_MAP = obj;
export const getGameIdsForDetectedGames = function getGameIdsForDetectedGames(result) {
  const entries = Object.entries(result);
  const found = entries.filter((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return tmp;
  });
  const mapped = found.map((arg0) => {
    let tmp;
    [tmp, ] = arg0;
    return table[tmp];
  });
  return mapped.filter(require("../../../utils/GlobalUtils.tsx") /* isDiscordFrontendDevelopment */.isNotNullish);
};