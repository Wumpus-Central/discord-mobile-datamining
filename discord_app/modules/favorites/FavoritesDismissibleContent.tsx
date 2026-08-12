// discord_app/modules/favorites/FavoritesDismissibleContent.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import withContent from "withContent";
import closure_7 from "withContent";
import { ContentDismissActionType } from "ContentDismissActionType";
import { DismissibleContent } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { useSelectedDismissibleContent } from "../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import { canShowTimeRecurringContent } from "../dismissible_content/useGetDismissibleContent.tsx";
import { useFavoritesGuildConfig } from "FavoritesGuildExperiment.tsx";
import { useFavoritesAccess } from "FavoritesHooks.tsx";
import { useCanShowFavoritesGuildOnboarding } from "hooks/useCanShowFavoritesGuildOnboarding.native.tsx";

let c5;
let closure_6;
const require = arg1;
({ isContentShown: c5, useIsContentShown: closure_6 } = withContent);
let items = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_NEW_BADGE, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
let items1 = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
let items2 = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const result = require("withContent").fileFinishedImporting("modules/favorites/FavoritesDismissibleContent.tsx");

export const FAVORITES_GUILD_DISMISSIBLE_CONTENT = items;
export const useFavoritesIntroPopoverDismissibleContent = function useFavoritesIntroPopoverDismissibleContent(arg0) {
  let tmp10;
  let tmp9;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let obj = useFavoritesGuildConfig;
  useSelectedDismissibleContent;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (flag) {
      if (tmp3) {
        const items = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
      }
      [tmp9, tmp10] = callback(tmp5([]), 2);
      const tmp7 = callback;
      const tmp8 = callback(tmp5([]), 2);
      if (tmp9 === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
        const items1 = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
        let items2 = items1;
      } else {
        items2 = [];
      }
      obj = { shouldShowPopover: null, markPopoverAsDismissed: null };
      obj[0] = tmp7(tmp(6063).useSelectedDismissibleContent(items2, undefined, true), 1)[0] === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
      obj[1] = tmp10;
      return obj;
    }
  }
};
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
  const tmp = callback(canShowTimeRecurringContent.useDangerouslyPeekDismissibleContents(items2), 1)[0] === DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  const tmp2 = callback(React.useState(tmp), 2);
  const first = tmp2[0];
  let tmp4 = tmp;
  if (tmp) {
    tmp4 = !first;
  }
  if (tmp4) {
    tmp2[1](true);
  }
  let tmp6 = tmp;
  if (!tmp) {
    tmp6 = first;
  }
  return tmp6;
};
export const isFavoritesIntroPopoverShown = function isFavoritesIntroPopoverShown() {
  return callback2(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && callback2(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
};
export const useIsFavoritesIntroPopoverShown = function useIsFavoritesIntroPopoverShown() {
  return callback3(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && callback3(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
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
        callback(outer1_8.TAKE_ACTION);
      }
    };
    return obj;
  }
};