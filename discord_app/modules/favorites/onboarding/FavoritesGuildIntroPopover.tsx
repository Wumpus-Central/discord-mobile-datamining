// === Module 10238: FavoritesGuildIntroPopover ===

// Module 10238 (FavoritesGuildIntroPopover)
import dismissible_content from "dismissible_content" /* 1943 */;
import useCanShowFavoritesGuildOnboardingDefault from "useCanShowFavoritesGuildOnboarding" /* 10239 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 1949 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

require = fn;
let DismissibleContentShownStateStore = fn(1949);
({ isContentShown: hasOwnProperty, useIsContentShown: metroRequire } = DismissibleContentShownStateStore);
const NOOP = fn(1074).NOOP;
const module_560 = fn(560);
let closure_10 = module_560.create(() => ({ shouldShowPopover: false, markPopoverAsDismissed: NOOP }));
let c11 = false;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx");

export default noop.memo(function FavoritesGuildIntroPopover() {
  const favoritesAccess = require("FavoritesHooks").useFavoritesAccess("FavoritesGuildIntroPopover");
  ({ hasAccess, isFreemium } = favoritesAccess);
  const obj = require("FavoritesHooks");
  const items = [FavoriteStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => false === FavoriteStore.favoriteGuildVisibleSetting);
  const obj2 = require("initialize");
  const tmp5 = useCanShowFavoritesGuildOnboardingDefault();
  require("useSelectedDismissibleContent");
  if (hasAccess) {
    if (isFreemium) {
      if (!stateFromStores) {
        if (tmp5) {
          if (tmp6) {
            let items1 = [tmp(1943).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
          }
          const tmp10 = _slicedToArray(tmp8(items1), 2);
          _require = tmp11;
          if (tmp10[0] === tmp(1943).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
            const items2 = [tmp(1943).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
            let items3 = items2;
          } else {
            items3 = [];
          }
          const tmp12 = _slicedToArray(tmp(7388).useSelectedDismissibleContent(items3, undefined, true), 1)[0] === tmp(1943).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          importDefault = tmp12;
          const items4 = [tmp12];
          const effect = noop.useEffect(() => {
            if (closure_1) {
              c11 = true;
            }
          }, items4);
          const items5 = [tmp12, tmp10[1]];
          const layoutEffect = noop.useLayoutEffect(() => {
            state.setState({ shouldShowPopover, markPopoverAsDismissed });
          }, items5);
          const layoutEffect1 = noop.useLayoutEffect(() => () => state.setState({ shouldShowPopover: false, markPopoverAsDismissed }), []);
          return null;
        }
      }
    }
  }
  items1 = [];
});
export function hasOfferedFavoritesGuildOnboarding() {
  return c11;
}
export function resetHasOfferedFavoritesGuildOnboarding() {
  c11 = false;
}
export const useFavoritesIntroPopover = function useFavoritesIntroPopover() {
  return { shouldShowPopover: closure_10((shouldShowPopover) => shouldShowPopover.shouldShowPopover), markPopoverAsDismissed: closure_10((markPopoverAsDismissed) => markPopoverAsDismissed.markPopoverAsDismissed) };
};
export const isFavoritesIntroPopoverShown = function isFavoritesIntroPopoverShown() {
  return hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
};
export const useIsFavoritesIntroPopoverShown = function useIsFavoritesIntroPopoverShown() {
  return timestampProducer(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && timestampProducer(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
};