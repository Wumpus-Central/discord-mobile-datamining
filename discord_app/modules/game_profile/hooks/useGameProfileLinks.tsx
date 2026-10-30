// === Module 9571: useGameProfileLinks ===

// Module 9571 (useGameProfileLinks)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import GameProfileMobileStoreLinkUtils from "GameProfileMobileStoreLinkUtils" /* 9373 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileLinks.tsx");

export function useGameProfileLinks(game) {
  const items = [game];
  return noop.useMemo(() => {
    const websites = game.websites;
    const found = websites.filter((category) => {
      category = category.category;
      const GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = game(9323).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
      let hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
      if (hasItem) {
        const MOBILE_STORE_WEBSITE_CATEGORIES = game(9373).MOBILE_STORE_WEBSITE_CATEGORIES;
        hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
      }
      return hasItem;
    });
    const values = Object.values(GameProfileMobileStoreLinkUtils.MOBILE_STORES);
    const mapped = values.map((item) => closure_0(dependencyMap[2]).getMobileStoreLink(game, item));
    const found1 = mapped.filter(GlobalUtils.isNotNullish);
    const sorted = found.sort((category, category2) => {
      const prop = game(9323).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
      const index = prop.indexOf(category.category);
      const prop1 = game(9323).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
      return index - prop1.indexOf(category2.category);
    });
    return sorted.concat(found1);
  }, items);
}