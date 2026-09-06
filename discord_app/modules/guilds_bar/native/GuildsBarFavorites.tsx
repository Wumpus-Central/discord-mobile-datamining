// discord_app/modules/guilds_bar/native/GuildsBarFavorites.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FavoriteStore from "../../favorites/FavoriteStore.tsx";

const require = fn;
const View = fn(17).View;
const FAVORITES = fn(1074).FAVORITES;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = "more-options";
const createStyles = fn(4560);
let obj = { anchor: null };
let size = {
  position: "absolute",
  top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
  left: 12,
  width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
obj.anchor = size;
let closure_11 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default noop.memo(function GuildsBarFavorites() {
  let obj = shouldShowPopover(16294);
  let obj1 = shouldShowPopover(10224);
  const isFavoritesGuildSelected = obj1.useIsFavoritesGuildSelected();
  let obj2 = shouldShowPopover(504);
  let items = [FavoriteStore];
  const stateFromStores = obj2.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const tmp5 = markPopoverAsDismissed;
  ({ badge, unread } = markPopoverAsDismissed(16311)(stateFromStores));
  const tmp6 = markPopoverAsDismissed(16311)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(16296)({ mentionCount: badge }));
  const ref = noop.useRef(null);
  const tmp7 = markPopoverAsDismissed(16296)({ mentionCount: badge });
  const tmp9 = closure_11();
  const favoritesIntroPopover = shouldShowPopover(10238).useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  const items1 = [shouldShowPopover, markPopoverAsDismissed];
  const memo = noop.useMemo(
    () => ({
      onPress() {
        if (shouldShowPopover) {
          closure_1_1(constants.TAKE_ACTION);
        }
        markPopoverAsDismissed(16308)(FAVORITES);
      },
      onLongPress() {
        markPopoverAsDismissed(dependencyMap[15])();
      },
    }),
    items1,
  );
  const memo1 = noop.useMemo(() => {
    let obj = { accessibilityActions: null, onAccessibilityAction: null };
    obj = { name, label: null };
    const intl = shouldShowPopover(1114).intl;
    obj.label = intl.string(shouldShowPopover(1114).t.PdRCRg);
    const items = [obj];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      if (nativeEvent.nativeEvent.actionName === name) {
        markPopoverAsDismissed(dependencyMap[15])();
      }
    };
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  obj = {
    selected: isFavoritesGuildSelected,
    circle: false,
    unread,
    styles: guildsBarAnimatedWrapperStyles,
    cutouts,
    overState: "l",
    config: memo,
    accessibilityActions,
    onAccessibilityAction,
    label: null,
    externalChildren: null,
    expandedChildren: null,
    children: null,
  };
  const obj4 = shouldShowPopover(10238);
  const tmp13 = closure_9;
  let intl = shouldShowPopover(1114).intl;
  obj.label = intl.string(shouldShowPopover(1114).t.wMWyci);
  obj.externalChildren = badge2;
  obj.expandedChildren = closure_8(shouldShowPopover(16312).HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = markPopoverAsDismissed(576).colors;
  obj = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj.children = closure_8(shouldShowPopover(10235).StarIcon, obj);
  const children = [closure_8(markPopoverAsDismissed(16294), obj), ,];
  obj1 = { ref, style: tmp9.anchor, pointerEvents: "none", collapsable: false };
  children[1] = closure_8(View, obj1);
  if (shouldShowPopover) {
    obj2 = { targetRef: ref, markAsDismissed: markPopoverAsDismissed };
    shouldShowPopover = tmp15(tmp5(16313), obj2);
  }
  children[2] = shouldShowPopover;
  return tmp13(View, { children });
});
