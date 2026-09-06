// discord_app/modules/game_community_upsell/native/GameCommunityConfig.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import LocalAppDetectionTypes from "../../local_app_detection/LocalAppDetectionTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const DETECTABLE_GAME_TO_APPLICATION_ID_MAP = {
  [LocalAppDetectionTypes.DetectableAppNames.MINECRAFT]: "1402418491272986635",
  [LocalAppDetectionTypes.DetectableAppNames.FORTNITE]: "1402418703554842694",
  [LocalAppDetectionTypes.DetectableAppNames.GENSHIN]: "762434991303950386",
  [LocalAppDetectionTypes.DetectableAppNames.PUBG_MOBILE]: "1474086506955014275",
  [LocalAppDetectionTypes.DetectableAppNames.CALL_OF_DUTY_MOBILE]: "1474087680169082943",
  [LocalAppDetectionTypes.DetectableAppNames.CLASH_OF_CLANS]: "1441990808399253575",
  [LocalAppDetectionTypes.DetectableAppNames.MOBILE_LEGENDS_BANG_BANG]: "1441992389232165056",
  [LocalAppDetectionTypes.DetectableAppNames.GARENA_FREE_FIRE]: "1407144801089880165",
  [LocalAppDetectionTypes.DetectableAppNames.POKEMON_GO]: "1474100461203357870",
  [LocalAppDetectionTypes.DetectableAppNames.POKEMON_TCG_POCKET]: "1474100935126028351",
  [LocalAppDetectionTypes.DetectableAppNames.CLASH_ROYALE]: "1420796862369239162",
  [LocalAppDetectionTypes.DetectableAppNames.AMONG_US]: "1402418440685486130",
  [LocalAppDetectionTypes.DetectableAppNames.MONOPOLY_GO]: "1474101904765227169",
  [LocalAppDetectionTypes.DetectableAppNames.BRAWL_STARS]: "1474102260807106581",
  [LocalAppDetectionTypes.DetectableAppNames.BRAWLHALLA]: "356944273133928458",
  [LocalAppDetectionTypes.DetectableAppNames.WUTHERING_WAVES]: "1247227126416146462",
};
const result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityConfig.tsx");

export { DETECTABLE_GAME_TO_APPLICATION_ID_MAP };
export const getGameIdsForDetectedGames = function getGameIdsForDetectedGames(result) {
  const entries = Object.entries(result);
  const found = entries.filter((item) => {
    [, tmp] = item;
    return tmp;
  });
  const mapped = found.map((item) => {
    [tmp] = item;
    return DETECTABLE_GAME_TO_APPLICATION_ID_MAP[tmp];
  });
  return mapped.filter(GlobalUtils.isNotNullish);
};
