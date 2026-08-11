// discord_app/modules/favorites/FavoritesDismissibleContent.tsx
import _slicedToArray from "_slicedToArray";
import withContent from "withContent";
import closure_5 from "withContent";
import { ContentDismissActionType } from "ContentDismissActionType";
import { DismissibleContent } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { useSelectedDismissibleContent } from "../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import { canShowTimeRecurringContent } from "../dismissible_content/useGetDismissibleContent.tsx";
import { useFavoritesGuildConfig } from "FavoritesGuildExperiment.tsx";

let c3;
let c4;
const require = arg1;
({ isContentShown: c3, useIsContentShown: c4 } = withContent);
let items = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_NEW_BADGE, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
let items1 = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
let items2 = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const result = require("ContentDismissActionType").fileFinishedImporting("modules/favorites/FavoritesDismissibleContent.tsx");

export const FAVORITES_GUILD_DISMISSIBLE_CONTENT = items;
export const useFavoritesIntroPopoverDismissibleContent = function useFavoritesIntroPopoverDismissibleContent(arg0) {
  let tmp10;
  let tmp11;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let obj = useFavoritesGuildConfig;
  const isFreemium = obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium;
  let tmpResult = tmp(6024);
  if (tmp3) {
    if (flag) {
      if (tmp4) {
        const items = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
      }
      [tmp10, tmp11] = callback(tmp6([]), 2);
      tmpResult = tmp(6024);
      if (tmp10 === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
        const items1 = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
        let items2 = items1;
      } else {
        items2 = [];
      }
      obj = { shouldShowPopover: null, markPopoverAsDismissed: null };
      obj[0] = callback(tmpResult.useSelectedDismissibleContent(items2, undefined, true), 1)[0] === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
      obj[1] = tmp11;
      return obj;
    }
  }
};
export const useFavoritesMenuItemPopoverDismissibleContent = function useFavoritesMenuItemPopoverDismissibleContent(hasItem) {
  let tmp11;
  let tmp12;
  let obj = useFavoritesGuildConfig;
  const isFreemium = obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium;
  let tmpResult = tmp(6025);
  let first = callback(tmpResult.useDangerouslyPeekDismissibleContents(items1), 1)[0];
  if (first == null) {
    first = null;
  }
  tmpResult = tmp(6024);
  if (tmp3) {
    if (hasItem) {
      if (first === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM) {
        const items = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
      }
      obj = { shouldShowPopover: null, markPopoverAsDismissed: null };
      [tmp11, tmp12] = callback(tmp7([]), 2);
      obj[0] = tmp11 === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
      obj[1] = tmp12;
      return obj;
    }
  }
};
export const useIsFavoritesMenuItemPopoverPending = function useIsFavoritesMenuItemPopoverPending() {
  return callback(canShowTimeRecurringContent.useDangerouslyPeekDismissibleContents(items2), 1)[0] === DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
};
export const isFavoritesIntroPopoverShown = function isFavoritesIntroPopoverShown() {
  return callback2(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && callback2(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
};
export const useIsFavoritesIntroPopoverShown = function useIsFavoritesIntroPopoverShown() {
  return callback3(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && callback3(DismissibleContent.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
};
export const useFavoritesBetaTagDismissibleContent = function useFavoritesBetaTagDismissibleContent(arg0) {
  let require;
  let tmp10;
  let obj = useFavoritesGuildConfig;
  const isFreemium = obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium;
  useSelectedDismissibleContent;
  if (tmp3) {
    if (arg0) {
      const items = [tmp(1377).DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
    }
    [tmp10, require] = callback(tmp5([]), 2);
    const tmp11 = tmp10 === tmp(1377).DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
    const dependencyMap = tmp11;
    obj = { shouldShowBetaTag: null, dismissBetaTag: null };
    obj[0] = tmp11;
    obj[1] = function dismissBetaTag() {
      if (closure_1) {
        callback(outer1_6.TAKE_ACTION);
      }
    };
    return obj;
  }
};