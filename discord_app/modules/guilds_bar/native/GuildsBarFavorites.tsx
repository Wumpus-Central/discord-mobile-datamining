// discord_app/modules/guilds_bar/native/GuildsBarFavorites.tsx
import importAllResult from "FavoritesGuildCoachmarkIntro";
import { View } from "HomeDrawerFavoritesRowExpandedChildren";
import initializeFromUserSettings from "initializeFromUserSettings";
import { FAVORITES } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { StarIcon } from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { items1 } from "../../favorites/FavoritesDismissibleContent.tsx";
import { useFavoritesAccess } from "../../favorites/FavoritesHooks.tsx";
import { useFavoritesGuildUnreads } from "../../favorites/hooks/useFavoritesGuildUnreads.tsx";
import { useCanShowFavoritesGuildCoachmark } from "../../favorites/native/onboarding/useCanShowFavoritesGuildCoachmark.tsx";
import { HomeDrawerFavoritesRowExpandedChildren } from "../../home_drawer/native/HomeDrawerFavoritesRow.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { UnreadIndicator } from "GuildsBarAnimatedItemWrapper.tsx";
import { useGuildsBarBottomRightBadge } from "hooks/useGuildsBarBottomRightBadge.tsx";
import { transitionGuildsBarToGuildOrOpenSelectedChannel } from "utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";

let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannel(FAVORITES);
  }
};
let obj = { anchor: null };
obj = { position: "absolute", top: require("Themes").modules.mobile.GUILD_BAR_ITEM_MARGIN, left: 12, width: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarFavorites() {
  let badge;
  let badge2;
  let cutouts;
  let unread;
  const tmp3 = useIsMobileVisualRefreshExperimentEnabled("GuildsBarFavorites");
  let obj = UnreadIndicator /* UnreadIndicator */;
  let obj1 = useFavoritesAccess /* useFavoritesAccess */;
  const isFavoritesGuildSelected = obj1.useIsFavoritesGuildSelected();
  let obj2 = initialize /* initialize */;
  const items = [initializeFromUserSettings];
  const stateFromStores = obj2.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  ({ badge, unread } = useFavoritesGuildUnreads(stateFromStores));
  const tmp8 = useFavoritesGuildUnreads(stateFromStores);
  ({ badge: badge2, cutouts } = useGuildsBarBottomRightBadge({ mentionCount: badge }));
  const ref = importAllResult.useRef(null);
  const tmp9 = useGuildsBarBottomRightBadge({ mentionCount: badge });
  const tmp11 = callback();
  const tmp12 = useCanShowFavoritesGuildCoachmark();
  const favoritesIntroPopoverDismissibleContent = items1 /* items1 */.useFavoritesIntroPopoverDismissibleContent(tmp12);
  const shouldShowPopover = favoritesIntroPopoverDismissibleContent.shouldShowPopover;
  obj = { selected: isFavoritesGuildSelected, circle: null, unread: null, styles: null, cutouts: null, overState: "Boolean", config: -102.506, label: -34.1, externalChildren: null, expandedChildren: null, children: null };
  let tmp18 = !tmp3;
  const obj4 = items1 /* items1 */;
  const tmp14 = closure_8;
  if (!tmp3) {
    tmp18 = !isFavoritesGuildSelected;
  }
  obj[1] = tmp18;
  obj[2] = unread;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[6] = closure_9;
  const intl = tmp4(1236).intl;
  obj[7] = intl.string(getSystemLocale /* getSystemLocale */.t.wMWyci);
  obj[8] = badge2;
  obj[9] = closure_7(HomeDrawerFavoritesRowExpandedChildren /* HomeDrawerFavoritesRowExpandedChildren */.HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = tmp(712).colors;
  obj = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj[10] = closure_7(StarIcon /* StarIcon */.StarIcon, obj);
  const children = [closure_7(UnreadIndicator, obj), , ];
  obj1 = { ref, style: tmp11.anchor, pointerEvents: "none", collapsable: false };
  children[1] = closure_7(View, obj1);
  let tmp16Result = shouldShowPopover;
  if (shouldShowPopover) {
    obj2 = { targetRef: null, visible: null, markAsDismissed: null };
    obj2[0] = ref;
    obj2[1] = shouldShowPopover;
    obj2[2] = favoritesIntroPopoverDismissibleContent.markPopoverAsDismissed;
    tmp16Result = tmp16(tmp(15310), obj2);
  }
  children[2] = tmp16Result;
  return tmp14(View, { children });
});
const result = require("initializeFromUserSettings").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;