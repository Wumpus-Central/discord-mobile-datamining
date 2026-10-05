// === Module 16251: GuildsBarFavorites ===

// Module 16251 (GuildsBarFavorites)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16249 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let size;
const View = react_native.View;
const FAVORITES = Constants.FAVORITES;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = "more-options";
let obj = { anchor: size };
size = { position: "absolute", top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: 12, width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let accessibilityActions;
  let badge;
  let badge2;
  let cutouts;
  let favoriteChannels;
  let intl;
  let markPopoverAsDismissed;
  let onAccessibilityAction;
  let shouldShowPopover;
  let tmp12;
  let tmp6;
  let tmp7;
  let unread;
  const obj = shouldShowPopover(576);
  const cResult = obj.c(32);
  const obj2 = shouldShowPopover(16234);
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles();
  const obj3 = shouldShowPopover(10036);
  const isFavoritesGuildSelected = obj3.useIsFavoritesGuildSelected();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function _() {
      return favoriteChannels.getFavoriteChannels();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = shouldShowPopover(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  ({ badge, unread } = markPopoverAsDismissed(16252)(stateFromStores));
  markPopoverAsDismissed(16252)(stateFromStores);
  if (cResult[2] !== badge) {
    const obj4 = { mentionCount: badge };
    cResult[2] = badge;
    cResult[3] = obj4;
    tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(16237)(tmp12));
  markPopoverAsDismissed(16237)(tmp12);
  react.useRef(null);
  closure_11();
  const tmpResult2 = shouldShowPopover(10048);
  const favoritesIntroPopover = tmpResult2.useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  if (cResult[4] === markPopoverAsDismissed) {
    let tmp17;
    let tmp24;
    let tmp26;
    if (cResult[5] === shouldShowPopover) {
      tmp17 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      cResult[7] = F;
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    if (cResult[8] !== tmp17) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      tmp20[0] = tmp17;
      tmp20[1] = F;
      cResult[8] = tmp17;
      cResult[9] = tmp20;
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      const obj5 = { name, label: intl.string(shouldShowPopover(1126).t.PdRCRg) };
      intl = tmp(1126).intl;
      const items1 = [obj5];
      tmp22[0] = items1;
      tmp22[1] = function onAccessibilityAction(nativeEvent) {
        if (nativeEvent.nativeEvent.actionName === name) {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      };
      cResult[10] = tmp22;
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    const _Symbol3 = Symbol;
    ({ accessibilityActions, onAccessibilityAction } = tmp22);
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      const stringResult = obj8.string(shouldShowPopover(1126).t.wMWyci);
      cResult[11] = stringResult;
      tmp24 = stringResult;
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      const tmp27 = closure_8(shouldShowPopover(16253).HomeDrawerFavoritesRowExpandedChildren, {});
      cResult[12] = tmp27;
      tmp26 = tmp27;
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    const colors = tmp10(587).colors;
    const tmp28 = isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
    if (cResult[13] !== tmp28) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      const obj6 = { color: tmp28 };
      cResult[13] = tmp28;
      cResult[14] = closure_8(shouldShowPopover(9943).StarIcon, obj6);
      const tmp30 = closure_8(shouldShowPopover(9943).StarIcon, obj6);
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    if (cResult[15] === badge2) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    const obj7 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: tmp20, accessibilityActions, onAccessibilityAction, label: tmp24, externalChildren: badge2, expandedChildren: tmp26, children: tmp29 };
    cResult[15] = badge2;
    const tmp33 = closure_8(markPopoverAsDismissed(16234), obj7);
    class R {
      constructor() {
        if (shouldShowPopover) {
          markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
        }
        transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
      }
    }
    cResult[17] = cutouts;
    cResult[18] = isFavoritesGuildSelected;
    cResult[19] = guildsBarAnimatedWrapperStyles;
    cResult[20] = tmp29;
    cResult[21] = unread;
    cResult[22] = tmp33;
  }
  class R {
    constructor() {
      if (shouldShowPopover) {
        markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
      }
      transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
    }
  }
  cResult[4] = markPopoverAsDismissed;
  cResult[5] = shouldShowPopover;
  cResult[6] = R;
  tmp17 = R;
}) : (() => {
  let StarIcon;
  let accessibilityActions;
  let badge;
  let badge2;
  let cutouts;
  let favoriteChannels;
  let intl;
  let markPopoverAsDismissed;
  let obj6;
  let onAccessibilityAction;
  let shouldShowPopover;
  let unread;
  let obj = shouldShowPopover(16234);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  let obj2 = shouldShowPopover(10036);
  const isFavoritesGuildSelected = obj2.useIsFavoritesGuildSelected();
  let items = [FavoriteStore];
  const obj3 = shouldShowPopover(504);
  const stateFromStores = obj3.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  ({ badge, unread } = markPopoverAsDismissed(16252)(stateFromStores));
  markPopoverAsDismissed(16252)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(16237)({ mentionCount: badge }));
  markPopoverAsDismissed(16237)({ mentionCount: badge });
  const ref = react.useRef(null);
  const tmp9 = closure_11();
  const obj4 = shouldShowPopover(10048);
  const favoritesIntroPopover = obj4.useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  const tmp5 = markPopoverAsDismissed;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  const items1 = [shouldShowPopover, markPopoverAsDismissed];
  const memo = react.useMemo(() => ({
    onPress() {
      if (shouldShowPopover) {
        closure_1_1(constants.TAKE_ACTION);
      }
      markPopoverAsDismissed(dependencyMap[16])(FAVORITES);
    },
    onLongPress() {
      markPopoverAsDismissed(closure_1_2[17])();
    }
  }), items1);
  const memo1 = react.useMemo(() => {
    let intl;
    let items;
    const obj = {
      accessibilityActions: items,
      onAccessibilityAction(nativeEvent) {
        if (nativeEvent.nativeEvent.actionName === name) {
          markPopoverAsDismissed(closure_1_2[17])();
        }
      }
    };
    const obj2 = { name, label: intl.string(shouldShowPopover(dependencyMap[18]).t.PdRCRg) };
    intl = shouldShowPopover(dependencyMap[18]).intl;
    items = [obj2];
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const obj5 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: memo, accessibilityActions, onAccessibilityAction, label: intl.string(shouldShowPopover(1126).t.wMWyci), externalChildren: badge2, expandedChildren: closure_8(shouldShowPopover(16253).HomeDrawerFavoritesRowExpandedChildren, {}), children: closure_8(StarIcon, obj6) };
  const tmp16 = markPopoverAsDismissed(16234);
  intl = shouldShowPopover(1126).intl;
  StarIcon = shouldShowPopover(9943).StarIcon;
  const colors = markPopoverAsDismissed(587).colors;
  obj6 = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  const children = [closure_8(tmp16, obj5), , ];
  const obj7 = { ref, style: tmp9.anchor, pointerEvents: "none", collapsable: false };
  children[1] = closure_8(View, obj7);
  if (shouldShowPopover) {
    const obj8 = { targetRef: ref, markAsDismissed: markPopoverAsDismissed };
    shouldShowPopover = closure_8(tmp5(16254), obj8);
  }
  children[2] = shouldShowPopover;
  return closure_9(View, { children });
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;