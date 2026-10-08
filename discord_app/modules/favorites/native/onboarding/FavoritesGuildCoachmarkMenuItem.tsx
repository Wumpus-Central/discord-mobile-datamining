// === Module 16461: FavoritesGuildCoachmarkMenuItem ===

// Module 16461 (FavoritesGuildCoachmarkMenuItem)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef3439 from "module_3439" /* 3439 */;
import FavoritesDismissibleContent from "FavoritesDismissibleContent" /* 10308 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2066 */;

const LayerScope2 = LayerScope(6835);
require = fn;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
let items = [, , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], GUILD_FORUM: arr[2] } = fn(1085).ChannelTypes);
const set = new Set(items);
fn(558);
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildCoachmarkMenuItemContent(channelType) {
  const cResult = markPopoverAsDismissed(576).c(17);
  channelType = channelType.channelType;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function l() {
      return FavoriteStore.hasStoredFavorites();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = markPopoverAsDismissed(576);
  const stateFromStores = markPopoverAsDismissed(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== channelType) {
    const hasItem = set.has(channelType);
    cResult[2] = channelType;
    cResult[3] = hasItem;
    let tmp8 = hasItem;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult = markPopoverAsDismissed(504);
  const favoritesMenuItemPopoverDismissibleContent = markPopoverAsDismissed(10308).useFavoritesMenuItemPopoverDismissibleContent(tmp8);
  ({ shouldShowPopover, markPopoverAsDismissed } = favoritesMenuItemPopoverDismissibleContent);
  if (cResult[4] !== markPopoverAsDismissed) {
    class S {
      constructor() {
        tmp = markPopoverAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    cResult[4] = markPopoverAsDismissed;
    cResult[5] = S;
  } else {
    class S {
      constructor() {
        tmp = markPopoverAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[6] !== markPopoverAsDismissed) {
    class F {
      constructor() {
        tmp = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
        return;
      }
    }
    cResult[6] = markPopoverAsDismissed;
    cResult[7] = F;
  } else {
    class F {
      constructor() {
        tmp = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
        return;
      }
    }
  }
  if (cResult[8] !== stateFromStores) {
    class F {
      constructor() {
        tmp = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
        return;
      }
    }
    const tmp16 = _modDef3439;
    const stringResult = obj4.string(stateFromStores ? tmp16.TWuDTt : tmp16["25YCHl"]);
    cResult[8] = stateFromStores;
    cResult[9] = stringResult;
  } else {
    class F {
      constructor() {
        tmp = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          return;
        }
      }
      const stringResult1 = obj5.string(_modDef3439.Ztl9ht);
      cResult[10] = stringResult1;
      const tmp19 = stringResult1;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          return;
        }
      }
      const stringResult2 = obj6.string(_modDef3439["+h9aza"]);
      cResult[11] = stringResult2;
      const tmp22 = stringResult2;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          return;
        }
      }
    }
    if (cResult[12] === F) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
          return;
        }
      }
    }
    const obj2 = { visible: shouldShowPopover, position: "bottom", title: tmp14, description: tmp19, onDismiss: S, renderImgComponent: "r", buttonLabel: tmp22, onButtonPress: F };
    cResult[12] = F;
    cResult[13] = S;
    cResult[14] = shouldShowPopover;
    cResult[15] = tmp14;
    cResult[16] = obj2;
  }
  const tmpResult2 = markPopoverAsDismissed(10308);
}) : (function FavoritesGuildCoachmarkMenuItemContent(arg0) {
  let stateFromStores;
  let markPopoverAsDismissed;
  let onDismiss;
  let callback1;
  ({ targetRef, channelType } = arg0);
  const items = [callback1];
  stateFromStores = stateFromStores(markPopoverAsDismissed[9]).useStateFromStores(items, () => callback1.hasStoredFavorites());
  let obj = stateFromStores(markPopoverAsDismissed[9]);
  const favoritesMenuItemPopoverDismissibleContent = stateFromStores(markPopoverAsDismissed[7]).useFavoritesMenuItemPopoverDismissibleContent(set.has(channelType));
  const shouldShowPopover = favoritesMenuItemPopoverDismissibleContent.shouldShowPopover;
  markPopoverAsDismissed = favoritesMenuItemPopoverDismissibleContent.markPopoverAsDismissed;
  const items1 = [markPopoverAsDismissed];
  onDismiss = onDismiss.useCallback(() => {
    markPopoverAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const items2 = [markPopoverAsDismissed];
  callback1 = onDismiss.useCallback(() => {
    markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const items3 = [shouldShowPopover, stateFromStores, onDismiss, callback1];
  const memo = onDismiss.useMemo(() => {
    const obj = { visible: shouldShowPopover, position: "bottom", title: null, description: null, onDismiss: null, renderImgComponent: "r", buttonLabel: "Symbol", onButtonPress: null };
    const intl = util.intl;
    const tmp4 = _modDef3439;
    if (stateFromStores) {
      let TWuDTt = tmp4.TWuDTt;
      let tmp6 = importDefault;
    } else {
      TWuDTt = tmp4["25YCHl"];
      tmp6 = importDefault;
    }
    obj.title = intl.string(TWuDTt);
    const intl2 = util.intl;
    obj.description = intl2.string(tmp6(3439).Ztl9ht);
    obj.onDismiss = onDismiss;
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(tmp6(3439)["+h9aza"]);
    obj.onButtonPress = callback1;
    return obj;
  }, items3);
  const obj2 = stateFromStores(markPopoverAsDismissed[7]);
  const coachmark = stateFromStores(markPopoverAsDismissed[12]).useCoachmark(targetRef, memo);
  return null;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildCoachmarkMenuItem(arg0) {
  let LayerScope = require;
  let tmp = dependencyMap;
  const cResult = c.c(2);
  if (!obj2.useShouldRenderFavoritesMenuItemPopover()) {
    return null;
  } else if (cResult[0] !== arg0) {
    LayerScope = LayerScope2.LayerScope;
    const obj3 = { zIndex: 1, children: null };
    const obj4 = {};
    const merged = Object.assign(arg0);
    obj3.children = <closure_8 />;
    tmp = <LayerScope zIndex={1}>{null}</LayerScope>;
    cResult[0] = arg0;
    cResult[1] = tmp;
  }
  obj2 = FavoritesDismissibleContent;
}) : (function FavoritesGuildCoachmarkMenuItem(arg0) {
  let tmp3 = null;
  if (obj.useShouldRenderFavoritesMenuItemPopover()) {
    const obj2 = { zIndex: 1, children: null };
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj2.children = <closure_8 />;
    tmp3 = jsx(LayerScope2.LayerScope, { zIndex: 1, children: null });
  }
  return tmp3;
});