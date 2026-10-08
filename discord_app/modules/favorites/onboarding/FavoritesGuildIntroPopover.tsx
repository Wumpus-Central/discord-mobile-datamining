// === Module 10306: FavoritesGuildIntroPopover ===

// Module 10306 (FavoritesGuildIntroPopover)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import FavoritesHooks from "FavoritesHooks" /* 10294 */;
import useCanShowFavoritesGuildOnboardingDefault from "useCanShowFavoritesGuildOnboarding" /* 10307 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DismissibleContentShownStateStore_mod from "DismissibleContentShownStateStore" /* 2055 */;
import FavoriteStore from "FavoriteStore" /* 2066 */;

require = fn;
let DismissibleContentShownStateStore = fn(2055);
({ isContentShown: hasOwnProperty, useIsContentShown: metroRequire } = DismissibleContentShownStateStore);
let DismissibleContentShownStateStore = DismissibleContentShownStateStore_mod;
const NOOP = fn(1085).NOOP;
const module_570 = fn(570);
const state = module_570.create(() => ({ shouldShowPopover: false, markPopoverAsDismissed: NOOP }));
let c11 = false;
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesIntroPopover() {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(shouldShowPopover) {
      return shouldShowPopover.shouldShowPopover;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = state(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function t(markPopoverAsDismissed) {
      return markPopoverAsDismissed.markPopoverAsDismissed;
    };
    cResult[1] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  const tmp3Result = state(tmp5);
  if (cResult[2] === tmp3Result) {
    if (cResult[3] === tmp4) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj2 = { shouldShowPopover: tmp4, markPopoverAsDismissed: tmp3Result };
  cResult[2] = tmp3Result;
  cResult[3] = tmp4;
  cResult[4] = obj2;
  tmp7 = obj2;
}) : (function useFavoritesIntroPopover() {
  return { shouldShowPopover: state((shouldShowPopover) => shouldShowPopover.shouldShowPopover), markPopoverAsDismissed: state((markPopoverAsDismissed) => markPopoverAsDismissed.markPopoverAsDismissed) };
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFavoritesIntroPopoverShown() {
  return timestampProducer(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && timestampProducer(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
}) : (function useIsFavoritesIntroPopoverShown() {
  return timestampProducer(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && timestampProducer(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildIntroPopover() {
  const cResult = c.c(20);
  const favoritesAccess = FavoritesHooks.useFavoritesAccess("FavoritesGuildIntroPopover");
  ({ hasAccess, isFreemium } = favoritesAccess);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function n() {
      return false === FavoriteStore.favoriteGuildVisibleSetting;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  const tmpResult = initialize;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(postConnectionOpen) {
      return postConnectionOpen.postConnectionOpen;
    };
    cResult[2] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
  }
  const tmp9 = useCanShowFavoritesGuildOnboardingDefault();
  if (cResult[3] === tmp9) {
    if (cResult[4] === hasAccess) {
      if (cResult[5] === isFreemium) {
        if (cResult[6] === stateFromStores) {
          if (cResult[7] === tmp11) {
            const tmpResult3 = tmp(7090);
            [tmp14, tmp15] = tmp(7090).useSelectedDismissibleContent(cResult[8]);
            const require = tmp15;
            if (cResult[9] !== tmp14) {
              if (tmp14 === tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
                const items1 = [tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
                let items2 = items1;
              } else {
                items2 = [];
              }
              cResult[9] = tmp14;
              cResult[10] = items2;
            } else {
              const tmp17 = _slicedToArray(tmp(7090).useSelectedDismissibleContent(cResult[10], undefined, true), 1)[0] === tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
              importDefault = tmp17;
              if (cResult[11] !== tmp17) {
                class V {
                  constructor() {
                    if (closure_1) {
                      flag = true;
                      c11 = true;
                    }
                    return;
                  }
                }
                const items3 = [tmp17];
                cResult[11] = tmp17;
                cResult[12] = V;
                cResult[13] = items3;
                let tmp19 = items3;
              } else {
                class V {
                  constructor() {
                    if (closure_1) {
                      flag = true;
                      c11 = true;
                    }
                    return;
                  }
                }
                tmp19 = cResult[13];
              }
              const effect = noop.useEffect(V, tmp19);
              if (cResult[14] === tmp15) {
                class V {
                  constructor() {
                    if (closure_1) {
                      flag = true;
                      c11 = true;
                    }
                    return;
                  }
                }
                const layoutEffect = noop.useLayoutEffect(C, tmp22);
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  class M {
                    constructor() {
                      return () => state.setState({ shouldShowPopover: false, markPopoverAsDismissed });
                    }
                  }
                  const items4 = [];
                  cResult[18] = items4;
                  cResult[19] = M;
                  let tmp25 = M;
                  const tmp24 = items4;
                } else {
                  class M {
                    constructor() {
                      return () => state.setState({ shouldShowPopover: false, markPopoverAsDismissed });
                    }
                  }
                  tmp25 = cResult[19];
                }
                const layoutEffect1 = noop.useLayoutEffect(tmp25, tmp24);
                return null;
              }
              class C {
                constructor() {
                  obj = { shouldShowPopover: closure_1, markPopoverAsDismissed: closure_0 };
                  setStateResult = closure_10.setState(obj);
                  return;
                }
              }
              const items5 = [tmp17, tmp15];
              cResult[14] = tmp15;
              cResult[15] = tmp17;
              cResult[16] = C;
              cResult[17] = items5;
              tmp22 = items5;
              const tmpResult4 = tmp(7090);
            }
            const tmp13 = _slicedToArray(tmp(7090).useSelectedDismissibleContent(cResult[8]), 2);
          }
        }
      }
    }
  }
  if (hasAccess) {
    class M {
      constructor() {
        return () => state.setState({ shouldShowPopover: false, markPopoverAsDismissed });
      }
    }
  }
  tmp11 = DismissibleContentShownStateStore(tmp10);
}) : (function FavoritesGuildIntroPopover() {
  const favoritesAccess = require("FavoritesHooks").useFavoritesAccess("FavoritesGuildIntroPopover");
  ({ hasAccess, isFreemium } = favoritesAccess);
  const obj = require("FavoritesHooks");
  const items = [FavoriteStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => false === FavoriteStore.favoriteGuildVisibleSetting);
  const obj2 = require("initialize");
  const tmp5 = useCanShowFavoritesGuildOnboardingDefault();
  require("useSelectedDismissibleContent");
  if (hasAccess) {
    if (isFreemium) {
      if (!stateFromStores) {
        if (tmp5) {
          if (tmp6) {
            let items1 = [tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
          }
          const tmp10 = _slicedToArray(tmp8(items1), 2);
          _require = tmp11;
          if (tmp10[0] === tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
            const items2 = [tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
            let items3 = items2;
          } else {
            items3 = [];
          }
          const tmp12 = _slicedToArray(tmp(7090).useSelectedDismissibleContent(items3, undefined, true), 1)[0] === tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          importDefault = tmp12;
          const items4 = [tmp12];
          const effect = noop.useEffect(() => {
            if (closure_1) {
              c11 = true;
            }
          }, items4);
          const items5 = [tmp12, tmp10[1]];
          const layoutEffect = noop.useLayoutEffect(() => {
            state.setState({ shouldShowPopover, markPopoverAsDismissed });
          }, items5);
          const layoutEffect1 = noop.useLayoutEffect(() => () => state.setState({ shouldShowPopover: false, markPopoverAsDismissed }), []);
          return null;
        }
      }
    }
  }
  items1 = [];
  tmp6 = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
}));
export function hasOfferedFavoritesGuildOnboarding() {
  return c11;
}
export function resetHasOfferedFavoritesGuildOnboarding() {
  c11 = false;
}
export const useFavoritesIntroPopover = tmp3;
export const isFavoritesIntroPopoverShown = function isFavoritesIntroPopoverShown() {
  return hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
};
export const useIsFavoritesIntroPopoverShown = tmp4;