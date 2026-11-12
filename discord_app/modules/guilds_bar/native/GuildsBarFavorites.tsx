// === Module 18934: GuildsBarFavorites ===

// Module 18934 (GuildsBarFavorites)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import StarIcon from "StarIcon" /* 10114 */;
import FavoritesHooks from "FavoritesHooks" /* 10876 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18918 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 18921 */;
import useFavoritesGuildUnreadsDefault from "useFavoritesGuildUnreads" /* 18935 */;
import HomeDrawerFavoritesRow from "HomeDrawerFavoritesRow" /* 18936 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 5095 */;

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
      closure_1_1(18888)(closure_1_5);
    },
    onLongPress() {
      closure_1_1(18725)();
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
  const obj4 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: memo, accessibilityActions, onAccessibilityAction, label: 130, externalChildren: null, expandedChildren: null, children: "cover" };
  const tmp5 = useGuildsBarBottomRightBadgeDefault({ mentionCount: badge });
  let intl = util.intl;
  obj4.label = intl.string(util.t.wMWyci);
  obj4.externalChildren = badge2;
  obj4.expandedChildren = jsx(HomeDrawerFavoritesRow.HomeDrawerFavoritesRowExpandedChildren, {});
  colors = nativeDefault.colors;
  obj4.children = jsx(StarIcon.StarIcon, { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  return jsx(GuildsBarAnimatedItemWrapperDefault, { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: memo, accessibilityActions, onAccessibilityAction, label: 130, externalChildren: null, expandedChildren: null, children: "cover" });
});