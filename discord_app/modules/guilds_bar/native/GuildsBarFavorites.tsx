// === Module 15866: ? ===

// Module 15866
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "initializeFromUserSettings" /* 1390 */;
import { FAVORITES } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let c10 = "more-options";
let obj = { anchor: null };
obj = { position: "absolute", top: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: 12, width: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarFavorites() {
  let obj = shouldShowPopover(15850);
  obj1 = shouldShowPopover(10268);
  const isFavoritesGuildSelected = obj1.useIsFavoritesGuildSelected();
  let obj2 = shouldShowPopover(589);
  let items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const tmp5 = markPopoverAsDismissed;
  ({ badge, unread } = markPopoverAsDismissed(15867)(stateFromStores));
  const tmp6 = markPopoverAsDismissed(15867)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(15852)({ mentionCount: badge }));
  const ref = importAllResult.useRef(null);
  const tmp7 = markPopoverAsDismissed(15852)({ mentionCount: badge });
  const tmp9 = callback2();
  const favoritesIntroPopover = shouldShowPopover(10278).useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  const items1 = [shouldShowPopover, markPopoverAsDismissed];
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      if (closure_0) {
        callback(closure_1_7.TAKE_ACTION);
      }
      closure_1_1(closure_1_2[14])(closure_1_6);
    },
    onLongPress() {
      callback(table[15])();
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
        callback(table[15])();
      }
    };
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  obj = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: true, accessibilityActions: "list", onAccessibilityAction: null, label: null, externalChildren: null, expandedChildren: null, children: null };
  obj[6] = memo;
  obj[7] = accessibilityActions;
  obj[8] = onAccessibilityAction;
  const obj4 = shouldShowPopover(10278);
  const tmp13 = closure_9;
  let intl = shouldShowPopover(1236).intl;
  obj[9] = intl.string(shouldShowPopover(1236).t.wMWyci);
  obj[10] = badge2;
  obj[11] = callback(shouldShowPopover(15868).HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = markPopoverAsDismissed(712).colors;
  obj = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj[12] = callback(shouldShowPopover(9142).StarIcon, obj);
  const children = [callback(markPopoverAsDismissed(15850), obj), , ];
  obj1 = { ref, style: tmp9.anchor, pointerEvents: "none", collapsable: false };
  children[1] = callback(View, obj1);
  if (shouldShowPopover) {
    obj2 = { targetRef: null, markAsDismissed: null };
    obj2[0] = ref;
    obj2[1] = markPopoverAsDismissed;
    shouldShowPopover = tmp15(tmp5(15869), obj2);
  }
  children[2] = shouldShowPopover;
  return tmp13(View, { children });
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;