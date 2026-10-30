// discord_app/modules/guilds_bar/native/GuildsBarFavorites.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import FavoritesHooks from "../../favorites/FavoritesHooks.tsx";
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper.tsx";
import useGuildsBarBottomRightBadgeDefault from "hooks/useGuildsBarBottomRightBadge.tsx";
import useFavoritesGuildUnreadsDefault from "../../favorites/hooks/useFavoritesGuildUnreads.tsx";
import HomeDrawerFavoritesRow from "../../home_drawer/native/HomeDrawerFavoritesRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FavoriteStore from "../../favorites/FavoriteStore.tsx";

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
  let items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  ({ badge, unread } = useFavoritesGuildUnreadsDefault(stateFromStores));
  const tmp4 = useFavoritesGuildUnreadsDefault(stateFromStores);
  ({ badge: badge2, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: badge }));
  const memo = noop.useMemo(
    () => ({
      onPress() {
        closure_1_1(18329)(closure_1_5);
      },
      onLongPress() {
        closure_1_1(18138)();
      },
    }),
    [],
  );
  const memo1 = noop.useMemo(() => {
    const obj = { accessibilityActions: null, onAccessibilityAction: null };
    const obj2 = { name, label: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.PdRCRg);
    const items = [obj2];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      if (nativeEvent.nativeEvent.actionName === name) {
        closure_1_1(dependencyMap[10])();
      }
    };
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const obj4 = {
    selected: isFavoritesGuildSelected,
    circle: false,
    unread,
    styles: guildsBarAnimatedWrapperStyles,
    cutouts,
    overState: "l",
    config: memo,
    accessibilityActions,
    onAccessibilityAction,
    label: "AUDIO_TOGGLE_SELF_DEAF",
    externalChildren: "AUDIO_TOGGLE_SELF_MUTE",
    expandedChildren: "VOICE_STATE_UPDATES",
    children: "CONSOLE_COMMAND_UPDATE",
  };
  const tmp5 = useGuildsBarBottomRightBadgeDefault({ mentionCount: badge });
  let intl = util.intl;
  obj4.label = intl.string(util.t.wMWyci);
  obj4.externalChildren = badge2;
  obj4.expandedChildren = jsx(HomeDrawerFavoritesRow.HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = nativeDefault.colors;
  obj4.children = jsx(StarIcon.StarIcon, {
    color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT,
  });
  return jsx(GuildsBarAnimatedItemWrapperDefault, {
    selected: isFavoritesGuildSelected,
    circle: false,
    unread,
    styles: guildsBarAnimatedWrapperStyles,
    cutouts,
    overState: "l",
    config: memo,
    accessibilityActions,
    onAccessibilityAction,
    label: "AUDIO_TOGGLE_SELF_DEAF",
    externalChildren: "AUDIO_TOGGLE_SELF_MUTE",
    expandedChildren: "VOICE_STATE_UPDATES",
    children: "CONSOLE_COMMAND_UPDATE",
  });
});
