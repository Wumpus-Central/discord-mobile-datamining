// discord_app/modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import withContent from "withContent";
import closure_7 from "withContent";
import initializeFromUserSettings from "initializeFromUserSettings";
import { NOOP } from "ME";
import keys from "keys";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { DismissibleContent } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { useSelectedDismissibleContent } from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import { useFavoritesAccess } from "../FavoritesHooks.tsx";
import { useCanShowFavoritesGuildOnboarding } from "../hooks/useCanShowFavoritesGuildOnboarding.native.tsx";

let c5;
let closure_6;
let require = arg1;
let c4 = importAllResult;
({ isContentShown: c5, useIsContentShown: closure_6 } = withContent);
let closure_10 = keys.create(() => ({ shouldShowPopover: false, markPopoverAsDismissed: NOOP }));
let c11 = false;
const memoResult = importAllResult.memo(function FavoritesGuildIntroPopover() {
  let hasAccess;
  let isFreemium;
  const favoritesAccess = useFavoritesAccess.useFavoritesAccess("FavoritesGuildIntroPopover");
  ({ hasAccess, isFreemium } = favoritesAccess);
  const obj = useFavoritesAccess;
  const items = [initializeFromUserSettings];
  const stateFromStores = initialize.useStateFromStores(items, () => false === obj.favoriteGuildVisibleSetting);
  const obj2 = initialize;
  const tmp5 = useCanShowFavoritesGuildOnboarding();
  useSelectedDismissibleContent;
  if (hasAccess) {
    if (isFreemium) {
      if (!stateFromStores) {
        if (tmp5) {
          if (tmp6) {
            let items1 = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
          }
          const tmp10 = callback(tmp8(items1), 2);
          require = tmp11;
          if (tmp10[0] === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
            const items2 = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
            let items3 = items2;
          } else {
            items3 = [];
          }
          const tmp12 = callback(tmp(6086).useSelectedDismissibleContent(items3, undefined, true), 1)[0] === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          importDefault = tmp12;
          const items4 = [tmp12];
          const effect = importAllResult.useEffect(() => {
            if (closure_1) {
              const outer1_11 = true;
            }
          }, items4);
          const items5 = [tmp12, tmp10[1]];
          const layoutEffect = importAllResult.useLayoutEffect(() => {
            outer1_10.setState({ shouldShowPopover: closure_1, markPopoverAsDismissed: closure_0 });
          }, items5);
          const layoutEffect1 = importAllResult.useLayoutEffect(() => () => state.setState({ shouldShowPopover: false, markPopoverAsDismissed: closure_9 }), []);
          return null;
        }
      }
    }
  }
  items1 = [];
});
const result = require("withContent").fileFinishedImporting("modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx");

export default memoResult;
export function hasOfferedFavoritesGuildOnboarding() {
  return c11;
}
export function resetHasOfferedFavoritesGuildOnboarding() {
  let c11 = false;
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