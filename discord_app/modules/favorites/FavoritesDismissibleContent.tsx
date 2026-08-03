// === Module 10234: items1 ===

// Module 10234 (items1)
import _slicedToArray from "_slicedToArray";
import withContent from "withContent";
import closure_5 from "withContent";
import { ContentDismissActionType } from "ContentDismissActionType";

let c3;
let c4;
const require = arg1;
({ isContentShown: c3, useIsContentShown: c4 } = withContent);
let items = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
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
  let obj = require(10231) /* useFavoritesGuildConfig */;
  const isFreemium = obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium;
  let tmpResult = tmp(8451);
  if (tmp3) {
    if (flag) {
      if (tmp4) {
        const items = [tmp(1358).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
      }
      [tmp10, tmp11] = callback(tmp6([]), 2);
      tmpResult = tmp(8451);
      if (tmp10 === tmp(1358).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
        const items1 = [tmp(1358).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
        let items2 = items1;
      } else {
        items2 = [];
      }
      obj = { shouldShowPopover: null, markPopoverAsDismissed: null };
      obj[0] = callback(tmpResult.useSelectedDismissibleContent(items2, undefined, true), 1)[0] === tmp(1358).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
      obj[1] = tmp11;
      return obj;
    }
  }
};
export const useFavoritesMenuItemPopoverDismissibleContent = function useFavoritesMenuItemPopoverDismissibleContent(hasItem) {
  let tmp11;
  let tmp12;
  let obj = require(10231) /* useFavoritesGuildConfig */;
  const isFreemium = obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium;
  let tmpResult = tmp(8452);
  let first = callback(tmpResult.useDangerouslyPeekDismissibleContents(items1), 1)[0];
  if (first == null) {
    first = null;
  }
  tmpResult = tmp(8451);
  if (tmp3) {
    if (hasItem) {
      if (first === tmp(1358).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM) {
        const items = [tmp(1358).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
      }
      obj = { shouldShowPopover: null, markPopoverAsDismissed: null };
      [tmp11, tmp12] = callback(tmp7([]), 2);
      obj[0] = tmp11 === tmp(1358).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
      obj[1] = tmp12;
      return obj;
    }
  }
};
export const useIsFavoritesMenuItemPopoverPending = function useIsFavoritesMenuItemPopoverPending() {
  return callback(require(8452) /* canShowTimeRecurringContent */.useDangerouslyPeekDismissibleContents(items2), 1)[0] === require(1358) /* DismissibleContent */.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
};
export const isFavoritesIntroPopoverShown = function isFavoritesIntroPopoverShown() {
  return callback2(require(1358) /* DismissibleContent */.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && callback2(require(1358) /* DismissibleContent */.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
};
export const useIsFavoritesIntroPopoverShown = function useIsFavoritesIntroPopoverShown() {
  return callback3(require(1358) /* DismissibleContent */.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && callback3(require(1358) /* DismissibleContent */.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
};
export const useFavoritesBetaTagDismissibleContent = function useFavoritesBetaTagDismissibleContent(arg0) {
  let require;
  let tmp10;
  let obj = require(10231) /* useFavoritesGuildConfig */;
  const isFreemium = obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium;
  require(8451) /* useSelectedDismissibleContent */;
  if (tmp3) {
    if (arg0) {
      const items = [tmp(1358).DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
    }
    [tmp10, require] = callback(tmp5([]), 2);
    const tmp11 = tmp10 === tmp(1358).DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
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