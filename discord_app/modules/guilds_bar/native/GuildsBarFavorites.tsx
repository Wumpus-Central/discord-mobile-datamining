// discord_app/modules/guilds_bar/native/GuildsBarFavorites.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../favorites/FavoriteStore.tsx";
import { FAVORITES } from "../../../Constants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let c10 = "more-options";
let obj = { anchor: null };
obj = { position: "absolute", top: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: 12, width: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarFavorites() {
  const tmp3 = markPopoverAsDismissed(1367)("GuildsBarFavorites");
  let obj = shouldShowPopover(15558);
  obj1 = shouldShowPopover(9979);
  const isFavoritesGuildSelected = obj1.useIsFavoritesGuildSelected();
  let obj2 = shouldShowPopover(589);
  let items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  ({ badge, unread } = markPopoverAsDismissed(15575)(stateFromStores));
  const tmp8 = markPopoverAsDismissed(15575)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(15560)({ mentionCount: badge }));
  const ref = importAllResult.useRef(null);
  const tmp9 = markPopoverAsDismissed(15560)({ mentionCount: badge });
  const tmp11 = callback();
  const favoritesIntroPopover = shouldShowPopover(9988).useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  const items1 = [shouldShowPopover, markPopoverAsDismissed];
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      if (closure_0) {
        callback(closure_1_7.TAKE_ACTION);
      }
      closure_1_1(closure_1_2[15])(closure_1_6);
    },
    onLongPress() {
      callback(table[16])();
    }
  }), items1);
  const memo1 = importAllResult.useMemo(() => {
    let obj = { accessibilityActions: null, onAccessibilityAction: null };
    obj = { name: closure_10, label: null };
    const intl = shouldShowPopover(1236).intl;
    obj[1] = intl.string(shouldShowPopover(1236).t.PdRCRg);
    const items = [obj];
    obj[0] = items;
    obj[1] = function onAccessibilityAction(nativeEvent) {
      if (nativeEvent.nativeEvent.actionName === closure_10) {
        callback(table[16])();
      }
    };
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  obj = { selected: isFavoritesGuildSelected, circle: null, unread: null, styles: null, cutouts: null, overState: "l", config: "sunrise_over_mountains", accessibilityActions: 0, onAccessibilityAction: false, label: false, externalChildren: false, expandedChildren: false, children: true };
  let tmp19 = !tmp3;
  const obj4 = shouldShowPopover(9988);
  const tmp15 = closure_9;
  if (!tmp3) {
    tmp19 = !isFavoritesGuildSelected;
  }
  obj[1] = tmp19;
  obj[2] = unread;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[6] = memo;
  obj[7] = accessibilityActions;
  obj[8] = onAccessibilityAction;
  let intl = tmp4(1236).intl;
  obj[9] = intl.string(shouldShowPopover(1236).t.wMWyci);
  obj[10] = badge2;
  obj[11] = closure_8(shouldShowPopover(15576).HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = tmp(712).colors;
  obj = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj[12] = closure_8(shouldShowPopover(9410).StarIcon, obj);
  const children = [closure_8(markPopoverAsDismissed(15558), obj), , ];
  obj1 = { ref, style: tmp11.anchor, pointerEvents: "none", collapsable: false };
  children[1] = closure_8(View, obj1);
  if (shouldShowPopover) {
    obj2 = { targetRef: null, markAsDismissed: null };
    obj2[0] = ref;
    obj2[1] = markPopoverAsDismissed;
    shouldShowPopover = tmp17(tmp(15577), obj2);
  }
  children[2] = shouldShowPopover;
  return tmp15(View, { children });
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;