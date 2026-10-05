// === Module 16251: GuildsBarFavorites ===

// Module 16251 (GuildsBarFavorites)
import nativeDefault from "native" /* 587 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16249 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;

const require = fn;
const View = fn(17).View;
const FAVORITES = fn(1085).FAVORITES;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = "more-options";
const createStyles = fn(4890);
let obj = { anchor: null };
let size = { position: "absolute", top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: 12, width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.anchor = size;
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = shouldShowPopover(576).c(32);
  const obj = shouldShowPopover(576);
  const guildsBarAnimatedWrapperStyles = shouldShowPopover(16234).useGuildsBarAnimatedWrapperStyles();
  const obj2 = shouldShowPopover(16234);
  const isFavoritesGuildSelected = shouldShowPopover(10036).useIsFavoritesGuildSelected();
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
  const obj3 = shouldShowPopover(10036);
  const stateFromStores = shouldShowPopover(504).useStateFromStores(tmp6, tmp7);
  const tmpResult = shouldShowPopover(504);
  ({ badge, unread } = markPopoverAsDismissed(16252)(stateFromStores));
  if (cResult[2] !== badge) {
    const obj4 = { mentionCount: badge };
    cResult[2] = badge;
    cResult[3] = obj4;
    let tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  const tmp11 = markPopoverAsDismissed(16252)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(16237)(tmp12));
  noop.useRef(null);
  closure_11();
  const tmp13 = markPopoverAsDismissed(16237)(tmp12);
  const favoritesIntroPopover = shouldShowPopover(10048).useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  if (cResult[4] === markPopoverAsDismissed) {
    if (cResult[5] === shouldShowPopover) {
      let tmp17 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      cResult[7] = F;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    if (cResult[8] !== tmp17) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      tmp20[0] = tmp17;
      tmp20[1] = F;
      cResult[8] = tmp17;
      cResult[9] = tmp20;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      const obj5 = { name, label: null };
      const intl = tmp(1126).intl;
      obj5.label = intl.string(tmp(1126).t.PdRCRg);
      const items1 = [obj5];
      tmp22[0] = items1;
      tmp22[1] = function onAccessibilityAction(nativeEvent) {
        if (nativeEvent.nativeEvent.actionName === name) {
          markPopoverAsDismissed(16062)();
        }
      };
      cResult[10] = tmp22;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    ({ accessibilityActions, onAccessibilityAction } = tmp22);
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      const stringResult = obj8.string(tmp(1126).t.wMWyci);
      cResult[11] = stringResult;
      const tmp24 = stringResult;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      const tmp27 = closure_8(tmp(16253).HomeDrawerFavoritesRowExpandedChildren, {});
      cResult[12] = tmp27;
      const tmp26 = tmp27;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    const colors = tmp10(587).colors;
    const tmp28 = isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
    if (cResult[13] !== tmp28) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      const obj6 = { color: tmp28 };
      const tmp30 = closure_8(tmp(9943).StarIcon, obj6);
      cResult[13] = tmp28;
      cResult[14] = tmp30;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    if (cResult[15] === badge2) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    const obj7 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: tmp20, accessibilityActions, onAccessibilityAction, label: tmp24, externalChildren: badge2, expandedChildren: tmp26, children: tmp29 };
    const tmp33 = closure_8(tmp10(16234), obj7);
    cResult[15] = badge2;
    class R {
      constructor() {
        if (shouldShowPopover) {
          tmp = markPopoverAsDismissed;
          tmp2 = ContentDismissActionType;
          tmp3 = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
        }
        tmp4 = closure_1(closure_2[16])(FAVORITES);
        return;
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
        tmp = markPopoverAsDismissed;
        tmp2 = ContentDismissActionType;
        tmp3 = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
      }
      tmp4 = closure_1(closure_2[16])(FAVORITES);
      return;
    }
  }
  cResult[4] = markPopoverAsDismissed;
  cResult[5] = shouldShowPopover;
  cResult[6] = R;
  tmp17 = R;
  const tmpResult2 = shouldShowPopover(10048);
}) : (() => {
  let obj = shouldShowPopover(16234);
  const guildsBarAnimatedWrapperStyles = shouldShowPopover(16234).useGuildsBarAnimatedWrapperStyles();
  const isFavoritesGuildSelected = shouldShowPopover(10036).useIsFavoritesGuildSelected();
  let obj2 = shouldShowPopover(10036);
  let items = [FavoriteStore];
  const stateFromStores = shouldShowPopover(504).useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const obj3 = shouldShowPopover(504);
  const tmp5 = markPopoverAsDismissed;
  ({ badge, unread } = markPopoverAsDismissed(16252)(stateFromStores));
  const tmp6 = markPopoverAsDismissed(16252)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(16237)({ mentionCount: badge }));
  const ref = noop.useRef(null);
  const tmp7 = markPopoverAsDismissed(16237)({ mentionCount: badge });
  const tmp9 = closure_11();
  const favoritesIntroPopover = shouldShowPopover(10048).useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  const items1 = [shouldShowPopover, markPopoverAsDismissed];
  const memo = noop.useMemo(() => ({
    onPress() {
      if (shouldShowPopover) {
        closure_1_1(constants.TAKE_ACTION);
      }
      markPopoverAsDismissed(16249)(FAVORITES);
    },
    onLongPress() {
      markPopoverAsDismissed(dependencyMap[17])();
    }
  }), items1);
  const memo1 = noop.useMemo(() => {
    const obj = { accessibilityActions: null, onAccessibilityAction: null };
    const obj2 = { name, label: null };
    const intl = shouldShowPopover(1126).intl;
    obj2.label = intl.string(shouldShowPopover(1126).t.PdRCRg);
    const items = [obj2];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      if (nativeEvent.nativeEvent.actionName === name) {
        markPopoverAsDismissed(dependencyMap[17])();
      }
    };
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const obj5 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: memo, accessibilityActions, onAccessibilityAction, label: 9, externalChildren: 577, expandedChildren: "removeOnJSPropsChangeListener", children: null };
  const obj4 = shouldShowPopover(10048);
  let intl = shouldShowPopover(1126).intl;
  obj5.label = intl.string(shouldShowPopover(1126).t.wMWyci);
  obj5.externalChildren = badge2;
  obj5.expandedChildren = closure_8(shouldShowPopover(16253).HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = markPopoverAsDismissed(587).colors;
  obj5.children = closure_8(shouldShowPopover(9943).StarIcon, { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  const children = [closure_8(markPopoverAsDismissed(16234), obj5), closure_8(View, { ref, style: tmp9.anchor, pointerEvents: "none", collapsable: false }), ];
  if (shouldShowPopover) {
    const obj8 = { targetRef: ref, markAsDismissed: markPopoverAsDismissed };
    shouldShowPopover = closure_8(tmp5(16254), obj8);
  }
  children[2] = shouldShowPopover;
  return closure_9(View, { children });
}));