// === Module 9990: items1 ===

// Module 9990 (items1)
import DismissibleContent from "DismissibleContent" /* 1377 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7366 */;
import canShowTimeRecurringContent from "canShowTimeRecurringContent" /* 7367 */;
import useFavoritesAccess from "useFavoritesAccess" /* 9979 */;
import useFavoritesGuildConfig from "useFavoritesGuildConfig" /* 9981 */;
import hasOfferedFavoritesGuildOnboarding from "hasOfferedFavoritesGuildOnboarding" /* 9988 */;
import useCanShowFavoritesGuildOnboardingDefault from "useCanShowFavoritesGuildOnboarding" /* 9989 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;

require = fn;
let items = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_NEW_BADGE, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
const items1 = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const items2 = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const result = require("obj132").fileFinishedImporting("modules/favorites/FavoritesDismissibleContent.tsx");

export const FAVORITES_GUILD_DISMISSIBLE_CONTENT = items;
export const useFavoritesMenuItemPopoverDismissibleContent = function useFavoritesMenuItemPopoverDismissibleContent(set) {
  let obj = useFavoritesGuildConfig;
  const isFavoritesGuildSelected = useFavoritesAccess.useIsFavoritesGuildSelected();
  const tmp4 = useCanShowFavoritesGuildOnboardingDefault();
  let first = callback(canShowTimeRecurringContent.useDangerouslyPeekDismissibleContents(items1), 1)[0];
  if (first == null) {
    first = null;
  }
  useSelectedDismissibleContent;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (set) {
      if (tmp4) {
        if (!isFavoritesGuildSelected) {
          if (first === DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM) {
            let items = [DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
          }
          obj = { shouldShowPopover: null, markPopoverAsDismissed: null };
          [tmp11, tmp12] = callback(tmp8(items), 2);
          obj[0] = tmp11 === DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          obj[1] = tmp12;
          return obj;
        }
      }
    }
  }
  items = [];
};
export const useShouldRenderFavoritesMenuItemPopover = function useShouldRenderFavoritesMenuItemPopover() {
  const tmp3 = callback(canShowTimeRecurringContent.useDangerouslyPeekDismissibleContents(items2), 1)[0] === DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  const tmp4 = callback(React.useState(tmp3), 2);
  const first = tmp4[0];
  let tmp6 = tmp3;
  if (tmp3) {
    tmp6 = !first;
  }
  if (tmp6) {
    tmp4[1](true);
  }
  let tmp8 = tmp3;
  if (!tmp3) {
    tmp8 = first;
  }
  if (tmp8) {
    tmp8 = !hasOfferedFavoritesGuildOnboarding.hasOfferedFavoritesGuildOnboarding();
    const tmpResult = hasOfferedFavoritesGuildOnboarding;
  }
  return tmp8;
};
export const useFavoritesBetaTagDismissibleContent = function useFavoritesBetaTagDismissibleContent(arg0) {
  let obj = useFavoritesGuildConfig;
  useSelectedDismissibleContent;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (arg0) {
      const items = [DismissibleContent.DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
    }
    [tmp9, require] = callback(tmp4([]), 2);
    const tmp10 = tmp9 === DismissibleContent.DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
    closure_1 = tmp10;
    obj = { shouldShowBetaTag: null, dismissBetaTag: null };
    obj[0] = tmp10;
    obj[1] = function dismissBetaTag() {
      if (closure_1) {
        callback(ContentDismissActionType.TAKE_ACTION);
      }
    };
    return obj;
  }
};