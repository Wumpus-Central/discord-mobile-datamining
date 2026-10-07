// discord_app/modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import FavoritesHooks from "../FavoritesHooks.tsx";
import useCanShowFavoritesGuildOnboardingDefault from "../hooks/useCanShowFavoritesGuildOnboarding.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import DismissibleContentShownStateStore_mod from "../../dismissible_content/DismissibleContentShownStateStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";

const require = globalThis.__r;

require = fn;
let DismissibleContentShownStateStore = fn(2042);
({ isContentShown: hasOwnProperty, useIsContentShown: metroRequire } = DismissibleContentShownStateStore);
let DismissibleContentShownStateStore = DismissibleContentShownStateStore_mod;
const NOOP = fn(1085).NOOP;
const module_570 = fn(570);
let closure_10 = module_570.create(() => ({ shouldShowPopover: false, markPopoverAsDismissed: NOOP }));
let c11 = false;
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s(shouldShowPopover) {
          return shouldShowPopover.shouldShowPopover;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp4 = closure_10(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function t(markPopoverAsDismissed) {
          return markPopoverAsDismissed.markPopoverAsDismissed;
        };
        cResult[1] = fn2;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[1];
      }
      const tmp3Result = closure_10(tmp5);
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
    }
  : () => ({
      shouldShowPopover: closure_10((shouldShowPopover) => shouldShowPopover.shouldShowPopover),
      markPopoverAsDismissed: closure_10((markPopoverAsDismissed) => markPopoverAsDismissed.markPopoverAsDismissed),
    });
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () =>
      timestampProducer(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) &&
      timestampProducer(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM)
  : () =>
      timestampProducer(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) &&
      timestampProducer(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
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
          class I {
            constructor(arg0) {
              return arg0.postConnectionOpen;
            }
          }
          cResult[2] = I;
        } else {
          class I {
            constructor(arg0) {
              return arg0.postConnectionOpen;
            }
          }
        }
        DismissibleContentShownStateStore(I);
        if (cResult[3] === tmp9) {
          class I {
            constructor(arg0) {
              return arg0.postConnectionOpen;
            }
          }
        }
        if (hasAccess) {
          class I {
            constructor(arg0) {
              return arg0.postConnectionOpen;
            }
          }
        }
        tmp9 = useCanShowFavoritesGuildOnboardingDefault();
      }
    : () => {
        const favoritesAccess = require("FavoritesHooks").useFavoritesAccess("FavoritesGuildIntroPopover");
        ({ hasAccess, isFreemium } = favoritesAccess);
        const obj = require("FavoritesHooks");
        const items = [FavoriteStore];
        const stateFromStores = require("initialize").useStateFromStores(
          items,
          () => false === FavoriteStore.favoriteGuildVisibleSetting,
        );
        const obj2 = require("initialize");
        const tmp5 = useCanShowFavoritesGuildOnboardingDefault();
        require("useSelectedDismissibleContent");
        if (hasAccess) {
          if (isFreemium) {
            if (!stateFromStores) {
              if (tmp5) {
                if (tmp6) {
                  let items1 = [tmp(2036).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
                }
                const tmp10 = _slicedToArray(tmp8(items1), 2);
                _require = tmp11;
                if (tmp10[0] === tmp(2036).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
                  const items2 = [tmp(2036).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
                  let items3 = items2;
                } else {
                  items3 = [];
                }
                const tmp12 =
                  _slicedToArray(tmp(6901).useSelectedDismissibleContent(items3, undefined, true), 1)[0] ===
                  tmp(2036).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
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
                const layoutEffect1 = noop.useLayoutEffect(
                  () => () => state.setState({ shouldShowPopover: false, markPopoverAsDismissed }),
                  [],
                );
                return null;
              }
            }
          }
        }
        items1 = [];
        tmp6 = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
      },
);
export function hasOfferedFavoritesGuildOnboarding() {
  return c11;
}
export function resetHasOfferedFavoritesGuildOnboarding() {
  c11 = false;
}
export const useFavoritesIntroPopover = tmp3;
export const isFavoritesIntroPopoverShown = function isFavoritesIntroPopoverShown() {
  return (
    hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) &&
    hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM)
  );
};
export const useIsFavoritesIntroPopoverShown = tmp4;
