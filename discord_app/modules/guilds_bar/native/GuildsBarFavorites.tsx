// discord_app/modules/guilds_bar/native/GuildsBarFavorites.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FavoriteStore from "../../favorites/FavoriteStore.tsx";

const require = fn;
const View = fn(17).View;
const FAVORITES = fn(1074).FAVORITES;
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = "more-options";
const createStyles = fn(4829);
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
  let obj = shouldShowPopover(15904);
  const guildsBarAnimatedWrapperStyles = shouldShowPopover(15904).useGuildsBarAnimatedWrapperStyles();
  const isFavoritesGuildSelected = shouldShowPopover(9674).useIsFavoritesGuildSelected();
  let obj2 = shouldShowPopover(9674);
  let items = [FavoriteStore];
  const stateFromStores = shouldShowPopover(504).useStateFromStores(items, () =>
    favoriteChannels.getFavoriteChannels(),
  );
  const obj3 = shouldShowPopover(504);
  const tmp5 = markPopoverAsDismissed;
  ({ badge, unread } = markPopoverAsDismissed(15922)(stateFromStores));
  const tmp6 = markPopoverAsDismissed(15922)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(15907)({ mentionCount: badge }));
  const ref = noop.useRef(null);
  const tmp7 = markPopoverAsDismissed(15907)({ mentionCount: badge });
  const tmp9 = closure_11();
  const favoritesIntroPopover = shouldShowPopover(9690).useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  const items1 = [shouldShowPopover, markPopoverAsDismissed];
  const memo = noop.useMemo(
    () => ({
      onPress() {
        if (shouldShowPopover) {
          closure_1_1(constants.TAKE_ACTION);
        }
        markPopoverAsDismissed(15919)(FAVORITES);
      },
      onLongPress() {
        markPopoverAsDismissed(dependencyMap[15])();
      },
    }),
    items1,
  );
  const memo1 = noop.useMemo(() => {
    const obj = { accessibilityActions: null, onAccessibilityAction: null };
    const obj2 = { name, label: null };
    const intl = shouldShowPopover(1115).intl;
    obj2.label = intl.string(shouldShowPopover(1115).t.PdRCRg);
    const items = [obj2];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      if (nativeEvent.nativeEvent.actionName === name) {
        markPopoverAsDismissed(dependencyMap[15])();
      }
    };
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const obj5 = {
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
    externalChildren: "",
    expandedChildren: null,
    children: null,
  };
  const obj4 = shouldShowPopover(9690);
  let intl = shouldShowPopover(1115).intl;
  obj5.label = intl.string(shouldShowPopover(1115).t.wMWyci);
  obj5.externalChildren = badge2;
  obj5.expandedChildren = closure_8(shouldShowPopover(15923).HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = markPopoverAsDismissed(576).colors;
  obj5.children = closure_8(shouldShowPopover(9687).StarIcon, {
    color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT,
  });
  const children = [
    closure_8(markPopoverAsDismissed(15904), obj5),
    closure_8(View, { ref, style: tmp9.anchor, pointerEvents: "none", collapsable: false }),
  ];
  if (shouldShowPopover) {
    const obj8 = { targetRef: ref, markAsDismissed: markPopoverAsDismissed };
    shouldShowPopover = closure_8(tmp5(15924), obj8);
  }
  children[2] = shouldShowPopover;
  return closure_9(View, { children });
});
