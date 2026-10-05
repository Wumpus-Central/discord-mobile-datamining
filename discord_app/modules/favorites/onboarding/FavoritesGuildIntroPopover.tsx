// discord_app/modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import FavoritesHooks from "../FavoritesHooks.tsx";
import useCanShowFavoritesGuildOnboardingDefault from "../hooks/useCanShowFavoritesGuildOnboarding.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import DismissibleContentShownStateStore_mod from "../../dismissible_content/DismissibleContentShownStateStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";
import 00570__ from "../../../../_runtime/metro/00570__.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let hasOwnProperty;
let metroRequire;
let DismissibleContentShownStateStore = DismissibleContentShownStateStore_mod;
({ isContentShown: hasOwnProperty, useIsContentShown: metroRequire } = DismissibleContentShownStateStore);
DismissibleContentShownStateStore = DismissibleContentShownStateStore_mod;
const NOOP = Constants.NOOP;
let closure_10 = module_570.create(() => ({ shouldShowPopover: false, markPopoverAsDismissed: NOOP }));
let c11 = false;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(shouldShowPopover) {
      return shouldShowPopover.shouldShowPopover;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = closure_10(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function t(markPopoverAsDismissed) {
      return markPopoverAsDismissed.markPopoverAsDismissed;
    };
    cResult[1] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  const tmp3Result = closure_10(tmp5);
  if (cResult[2] === tmp3Result) {
    let tmp7;
    if (cResult[3] === tmp4) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj2 = { shouldShowPopover: tmp4, markPopoverAsDismissed: tmp3Result };
  cResult[2] = tmp3Result;
  cResult[3] = tmp4;
  cResult[4] = obj2;
  tmp7 = obj2;
}) : (() => {
  const obj = { shouldShowPopover: closure_10((shouldShowPopover) => shouldShowPopover.shouldShowPopover), markPopoverAsDismissed: closure_10((markPopoverAsDismissed) => markPopoverAsDismissed.markPopoverAsDismissed) };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = metroRequire(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && metroRequire(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  return tmp;
}) : (() => {
  const tmp = metroRequire(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && metroRequire(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let hasAccess;
  let isFreemium;
  let markPopoverAsDismissed;
  let shouldShowPopover;
  let state;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(20);
  const obj2 = FavoritesHooks;
  const favoritesAccess = obj2.useFavoritesAccess("FavoritesGuildIntroPopover");
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp9 = useCanShowFavoritesGuildOnboardingDefault();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(postConnectionOpen) {
        return postConnectionOpen.postConnectionOpen;
      }
    }
    cResult[2] = I;
  } else {
    class I {
      constructor(postConnectionOpen) {
        return postConnectionOpen.postConnectionOpen;
      }
    }
  }
  DismissibleContentShownStateStore(I);
  if (cResult[3] === tmp9) {
    class I {
      constructor(postConnectionOpen) {
        return postConnectionOpen.postConnectionOpen;
      }
    }
  }
  if (hasAccess) {
    class I {
      constructor(postConnectionOpen) {
        return postConnectionOpen.postConnectionOpen;
      }
    }
  }
}) : (() => {
  let hasAccess;
  let isFreemium;
  let markPopoverAsDismissed;
  let shouldShowPopover;
  let state;
  let obj = require("FavoritesHooks");
  const favoritesAccess = obj.useFavoritesAccess("FavoritesGuildIntroPopover");
  ({ hasAccess, isFreemium } = favoritesAccess);
  const items = [FavoriteStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => false === FavoriteStore.favoriteGuildVisibleSetting);
  const tmp5 = useCanShowFavoritesGuildOnboardingDefault();
  const tmp6 = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  require("useSelectedDismissibleContent");
  if (hasAccess) {
    if (isFreemium) {
      if (!stateFromStores) {
        if (tmp5) {
          let items1;
          let items3;
          if (tmp6) {
            items1 = [require("dismissible_content").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
          }
          const tmp10 = _slicedToArray(tmp8(items1), 2);
          _require = tmp12;
          const first = tmp10[0];
          const useSelectedDismissibleContent = require("useSelectedDismissibleContent").useSelectedDismissibleContent;
          require("useSelectedDismissibleContent");
          if (first === require("dismissible_content").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
            const items2 = [require("dismissible_content").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
            items3 = items2;
          } else {
            items3 = [];
          }
          const tmp14 = _slicedToArray(useSelectedDismissibleContent(items3, undefined, true), 1)[0] === require("dismissible_content").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          importDefault = tmp14;
          const items4 = [tmp14];
          const effect = react.useEffect(() => {
            if (shouldShowPopover) {
              c11 = true;
            }
          }, items4);
          const items5 = [tmp14, tmp10[1]];
          const layoutEffect = react.useLayoutEffect(() => {
            const obj = { shouldShowPopover, markPopoverAsDismissed };
            state.setState(obj);
          }, items5);
          const layoutEffect1 = react.useLayoutEffect(() => () => {
            const obj = { shouldShowPopover: false, markPopoverAsDismissed };
            return state.setState(obj);
          }, []);
          return null;
        }
      }
    }
  }
  items1 = [];
}));
const result = size.fileFinishedImporting("modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx");

export default memoResult;
export function hasOfferedFavoritesGuildOnboarding() {
  return c11;
}
export function resetHasOfferedFavoritesGuildOnboarding() {
  c11 = false;
}
export const useFavoritesIntroPopover = tmp3;
export const isFavoritesIntroPopoverShown = function isFavoritesIntroPopoverShown() {
  const tmp4 = hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  return tmp4;
};
export const useIsFavoritesIntroPopoverShown = tmp4;