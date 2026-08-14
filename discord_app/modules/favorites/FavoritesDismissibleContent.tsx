// discord_app/modules/favorites/FavoritesDismissibleContent.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";
import { DismissibleContent } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { useSelectedDismissibleContent } from "../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import { canShowTimeRecurringContent } from "../dismissible_content/useGetDismissibleContent.tsx";
import { useFavoritesGuildConfig } from "FavoritesGuildExperiment.tsx";
import { useFavoritesAccess } from "FavoritesHooks.tsx";
import { useCanShowFavoritesGuildOnboarding } from "hooks/useCanShowFavoritesGuildOnboarding.native.tsx";
import { hasOfferedFavoritesGuildOnboarding } from "onboarding/FavoritesGuildIntroPopover.tsx";

const require = arg1;
let items = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_NEW_BADGE, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
const items1 = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const items2 = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const result = require("ContentDismissActionType").fileFinishedImporting("modules/favorites/FavoritesDismissibleContent.tsx");

export const FAVORITES_GUILD_DISMISSIBLE_CONTENT = items;
export const useFavoritesMenuItemPopoverDismissibleContent = function useFavoritesMenuItemPopoverDismissibleContent(set) {
  let tmp11;
  let tmp12;
  let obj = useFavoritesGuildConfig;
  const isFavoritesGuildSelected = useFavoritesAccess.useIsFavoritesGuildSelected();
  const obj2 = useFavoritesAccess;
  const tmp4 = useCanShowFavoritesGuildOnboarding();
  let first = callback(canShowTimeRecurringContent.useDangerouslyPeekDismissibleContents(items1), 1)[0];
  if (first == null) {
    first = null;
  }
  useSelectedDismissibleContent;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (set) {
      if (tmp4) {
        if (!isFavoritesGuildSelected) {
          if (first === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM) {
            let items = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
          }
          obj = { shouldShowPopover: null, markPopoverAsDismissed: null };
          [tmp11, tmp12] = callback(tmp8(items), 2);
          obj[0] = tmp11 === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
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
  let require;
  let tmp9;
  let obj = useFavoritesGuildConfig;
  useSelectedDismissibleContent;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (arg0) {
      const items = [tmp(1377).DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
    }
    [tmp9, require] = callback(tmp4([]), 2);
    const tmp10 = tmp9 === tmp(1377).DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
    const importDefault = tmp10;
    obj = { shouldShowBetaTag: null, dismissBetaTag: null };
    obj[0] = tmp10;
    obj[1] = function dismissBetaTag() {
      if (closure_1) {
        callback(outer1_5.TAKE_ACTION);
      }
    };
    return obj;
  }
};