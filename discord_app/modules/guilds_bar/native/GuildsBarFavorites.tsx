// === Module 18532: GuildsBarFavorites ===

// Module 18532 (GuildsBarFavorites)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import StarIcon from "StarIcon" /* 10193 */;
import FavoritesHooks from "FavoritesHooks" /* 10962 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18515 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 18518 */;
import useFavoritesGuildUnreadsDefault from "useFavoritesGuildUnreads" /* 18533 */;
import HomeDrawerFavoritesRow from "HomeDrawerFavoritesRow" /* 18534 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 4993 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
const FAVORITES = fn(1072).FAVORITES;
const jsx = fn(21).jsx;
let c7 = "more-options";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default noop.memo(function GuildsBarFavorites() {
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  const isFavoritesGuildSelected = FavoritesHooks.useIsFavoritesGuildSelected();
  items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  ({ badge, unread } = useFavoritesGuildUnreadsDefault(stateFromStores));
  const tmp4 = useFavoritesGuildUnreadsDefault(stateFromStores);
  ({ badge: badge2, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: badge }));
  const memo = noop.useMemo(() => ({
    onPress() {
      closure_1_1(18530)(closure_1_5);
    },
    onLongPress() {
      closure_1_1(18338)();
    }
  }), []);
  const memo1 = noop.useMemo(() => {
    const obj = { accessibilityActions: null, onAccessibilityAction: null };
    const obj2 = { name, label: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.PdRCRg);
    items = [obj2];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      if (nativeEvent.nativeEvent.actionName === name) {
        closure_1_1(dependencyMap[10])();
      }
    };
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const obj4 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: memo, accessibilityActions, onAccessibilityAction, label: 0, externalChildren: null, expandedChildren: null, children: null };
  const tmp5 = useGuildsBarBottomRightBadgeDefault({ mentionCount: badge });
  let intl = util.intl;
  obj4.label = intl.string(util.t.wMWyci);
  obj4.externalChildren = badge2;
  obj4.expandedChildren = jsx(HomeDrawerFavoritesRow.HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = nativeDefault.colors;
  obj4.children = jsx(StarIcon.StarIcon, { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  return jsx(GuildsBarAnimatedItemWrapperDefault, { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: memo, accessibilityActions, onAccessibilityAction, label: 0, externalChildren: null, expandedChildren: null, children: null });
});