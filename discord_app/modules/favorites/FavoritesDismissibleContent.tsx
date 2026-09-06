// discord_app/modules/favorites/FavoritesDismissibleContent.tsx
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSelectedDismissibleContent from "../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import useGetDismissibleContent from "../dismissible_content/useGetDismissibleContent.tsx";
import FavoritesHooks from "FavoritesHooks.tsx";
import FavoritesGuildExperiment from "FavoritesGuildExperiment.tsx";
import FavoritesGuildIntroPopover from "onboarding/FavoritesGuildIntroPopover.tsx";
import useCanShowFavoritesGuildOnboardingDefault from "hooks/useCanShowFavoritesGuildOnboarding.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
let items = [
  fn(1943).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO,
  fn(1943).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
  fn(1943).DismissibleContent.FAVORITES_GUILD_NEW_BADGE,
  fn(1943).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS,
];
const items1 = [
  fn(1943).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO,
  fn(1943).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
];
const items2 = [fn(1943).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesDismissibleContent.tsx");

export const FAVORITES_GUILD_DISMISSIBLE_CONTENT = items;
export const useFavoritesMenuItemPopoverDismissibleContent = function useFavoritesMenuItemPopoverDismissibleContent(
  set,
) {
  let obj = FavoritesGuildExperiment;
  const isFavoritesGuildSelected = FavoritesHooks.useIsFavoritesGuildSelected();
  const tmp4 = useCanShowFavoritesGuildOnboardingDefault();
  let first = _slicedToArray(useGetDismissibleContent.useDangerouslyPeekDismissibleContents(items1), 1)[0];
  if (first == null) {
    first = null;
  }
  useSelectedDismissibleContent;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (set) {
      if (tmp4) {
        if (!isFavoritesGuildSelected) {
          if (first === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM) {
            let items = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
          }
          obj = { shouldShowPopover: null, markPopoverAsDismissed: null };
          [tmp11, tmp12] = _slicedToArray(tmp8(items), 2);
          obj.shouldShowPopover =
            tmp11 === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          obj.markPopoverAsDismissed = tmp12;
          return obj;
        }
      }
    }
  }
  items = [];
};
export const useShouldRenderFavoritesMenuItemPopover = function useShouldRenderFavoritesMenuItemPopover() {
  const tmp3 =
    _slicedToArray(useGetDismissibleContent.useDangerouslyPeekDismissibleContents(items2), 1)[0] ===
    dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  const tmp4 = _slicedToArray(noop.useState(tmp3), 2);
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
    tmp8 = !FavoritesGuildIntroPopover.hasOfferedFavoritesGuildOnboarding();
    const tmpResult = FavoritesGuildIntroPopover;
  }
  return tmp8;
};
export const useFavoritesBetaTagDismissibleContent = function useFavoritesBetaTagDismissibleContent(arg0) {
  let obj = FavoritesGuildExperiment;
  useSelectedDismissibleContent;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (arg0) {
      const items = [dismissible_content.DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
    }
    [tmp9, require] = _slicedToArray(tmp4([]), 2);
    const tmp10 = tmp9 === dismissible_content.DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
    closure_1 = tmp10;
    obj = {
      shouldShowBetaTag: tmp10,
      dismissBetaTag() {
        if (closure_1) {
          require(ContentDismissActionType.TAKE_ACTION);
        }
      },
    };
    return obj;
  }
};
