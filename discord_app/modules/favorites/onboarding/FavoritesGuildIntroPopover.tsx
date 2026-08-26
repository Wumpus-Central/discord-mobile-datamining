// === Module 9936: hasOfferedFavoritesGuildOnboarding ===

// Module 9936 (hasOfferedFavoritesGuildOnboarding)
import DismissibleContent from "DismissibleContent" /* 1377 */;
import useCanShowFavoritesGuildOnboardingDefault from "useCanShowFavoritesGuildOnboarding" /* 9937 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import withContent from "withContent" /* 1383 */;
import closure_7 from "withContent" /* 1383 */;
import closure_8 from "initializeFromUserSettings" /* 1394 */;
import { NOOP } from "ME" /* 676 */;
import keys from "keys" /* 644 */;

require = arg1;
let c4 = importAllResult;
({ isContentShown: c5, useIsContentShown: closure_6 } = withContent);
let closure_10 = keys.create(() => ({ shouldShowPopover: false, markPopoverAsDismissed: NOOP }));
let c11 = false;
const memoResult = importAllResult.memo(function FavoritesGuildIntroPopover() {
  const favoritesAccess = _require(9927).useFavoritesAccess("FavoritesGuildIntroPopover");
  ({ hasAccess, isFreemium } = favoritesAccess);
  const obj = _require(9927);
  const items = [closure_8];
  const stateFromStores = _require(589).useStateFromStores(items, () => false === obj.favoriteGuildVisibleSetting);
  const obj2 = _require(589);
  const tmp5 = useCanShowFavoritesGuildOnboardingDefault();
  _require(6197);
  if (hasAccess) {
    if (isFreemium) {
      if (!stateFromStores) {
        if (tmp5) {
          if (tmp6) {
            let items1 = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
          }
          const tmp10 = callback(tmp8(items1), 2);
          _require = tmp11;
          if (tmp10[0] === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
            const items2 = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
            let items3 = items2;
          } else {
            items3 = [];
          }
          const tmp12 = callback(tmp(6197).useSelectedDismissibleContent(items3, undefined, true), 1)[0] === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          importDefault = tmp12;
          const items4 = [tmp12];
          const effect = importAllResult.useEffect(() => {
            if (closure_1) {
              c11 = true;
            }
          }, items4);
          const items5 = [tmp12, tmp10[1]];
          const layoutEffect = importAllResult.useLayoutEffect(() => {
            closure_1_10.setState({ shouldShowPopover: closure_1, markPopoverAsDismissed: closure_0 });
          }, items5);
          const layoutEffect1 = importAllResult.useLayoutEffect(() => () => state.setState({ shouldShowPopover: false, markPopoverAsDismissed: closure_9 }), []);
          return null;
        }
      }
    }
  }
  items1 = [];
});
const result = require("set").fileFinishedImporting("modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx");

export default memoResult;
export function hasOfferedFavoritesGuildOnboarding() {
  return c11;
}
export function resetHasOfferedFavoritesGuildOnboarding() {
  c11 = false;
}
export const useFavoritesIntroPopover = function useFavoritesIntroPopover() {
  return { shouldShowPopover: callback5((shouldShowPopover) => shouldShowPopover.shouldShowPopover), markPopoverAsDismissed: callback5((markPopoverAsDismissed) => markPopoverAsDismissed.markPopoverAsDismissed) };
};
export const isFavoritesIntroPopoverShown = function isFavoritesIntroPopoverShown(hasAccess, isFreemium, arg2) {
  return callback2(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && callback2(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
};
export const useIsFavoritesIntroPopoverShown = function useIsFavoritesIntroPopoverShown() {
  return callback3(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && callback3(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
};