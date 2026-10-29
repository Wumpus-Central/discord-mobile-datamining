// discord_app/modules/waterwheels/interest/native/InterestPickerCatalogs.tsx
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import GuildProfileConstants from "../../../guild_profile/GuildProfileConstants.tsx";
import GameCommunityConfig from "../../../game_community_upsell/native/GameCommunityConfig.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const HOISTED_SEARCH_GAME_IDS = GuildProfileConstants.HOISTED_SEARCH_GAME_IDS;
const dependencyMap = {
  popular() {
    return HOISTED_SEARCH_GAME_IDS;
  },
  trending() {
    return HOISTED_SEARCH_GAME_IDS;
  },
  mobile() {
    const values = Object.values(GameCommunityConfig.DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
    return values.filter(GlobalUtils.isNotNullish);
  },
};
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerCatalogs.tsx");

export const INTEREST_PICKER_CATALOG_VERSION = "2026-10-27-placeholder";
export function getInterestPickerCatalog(arg0) {
  const set = new Set(dependencyMap[arg0]());
  const substr = Array.from(new Set(dependencyMap[arg0]())).slice(0, 60);
  let tmp2 = null;
  if (0 !== substr.length) {
    tmp2 = substr;
  }
  return tmp2;
}
