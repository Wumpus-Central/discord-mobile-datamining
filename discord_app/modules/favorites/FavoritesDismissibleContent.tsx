// === Module 10050: FavoritesDismissibleContent ===

// Module 10050 (FavoritesDismissibleContent)
import c from "c" /* 576 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6891 */;
import useGetDismissibleContent from "useGetDismissibleContent" /* 6892 */;
import FavoritesHooks from "FavoritesHooks" /* 10036 */;
import FavoritesGuildExperiment from "FavoritesGuildExperiment" /* 10038 */;
import FavoritesGuildIntroPopover from "FavoritesGuildIntroPopover" /* 10048 */;
import useCanShowFavoritesGuildOnboardingDefault from "useCanShowFavoritesGuildOnboarding" /* 10049 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
let items = [fn(2036).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, fn(2036).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, fn(2036).DismissibleContent.FAVORITES_GUILD_NEW_BADGE, fn(2036).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
let items1 = [fn(2036).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, fn(2036).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const items2 = [fn(2036).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first = _slicedToArray(useGetDismissibleContent.useDangerouslyPeekDismissibleContents(items1), 1)[0];
  if (first == null) {
    first = null;
  }
  return first;
}) : (() => {
  let first = _slicedToArray(useGetDismissibleContent.useDangerouslyPeekDismissibleContents(items1), 1)[0];
  if (first == null) {
    first = null;
  }
  return first;
});
fn(558);
ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "FavoritesDismissibleContent" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const isFreemium = FavoritesGuildExperiment.useFavoritesGuildConfig(first).isFreemium;
  const tmpResult = FavoritesGuildExperiment;
  const isFavoritesGuildSelected = FavoritesHooks.useIsFavoritesGuildSelected();
  const tmp6 = useCanShowFavoritesGuildOnboardingDefault();
  const tmpResult3 = FavoritesHooks;
  const tmp8 = closure_8() === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  if (cResult[1] === tmp6) {
    if (cResult[2] === arg0) {
      if (cResult[3] === isFavoritesGuildSelected) {
        if (cResult[4] === isFreemium) {
          if (cResult[5] === tmp8) {
            const tmpResult4 = useSelectedDismissibleContent;
            [tmp12, tmp13] = useSelectedDismissibleContent.useSelectedDismissibleContent(cResult[6]);
            const tmp14 = tmp12 === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
            if (cResult[7] === tmp13) {
              if (cResult[8] === tmp14) {
                let tmp15 = cResult[9];
              }
              return tmp15;
            }
            const obj3 = { shouldShowPopover: tmp14, markPopoverAsDismissed: tmp13 };
            cResult[7] = tmp13;
            cResult[8] = tmp14;
            cResult[9] = obj3;
            tmp15 = obj3;
            const tmp11 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(cResult[6]), 2);
          }
        }
      }
    }
  }
  if (isFreemium) {
    if (arg0) {
      if (tmp6) {
        if (!isFavoritesGuildSelected) {
          if (tmp8) {
            let items = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
          }
          cResult[1] = tmp6;
          cResult[2] = arg0;
          cResult[3] = isFavoritesGuildSelected;
          cResult[4] = isFreemium;
          cResult[5] = tmp8;
          cResult[6] = items;
        }
      }
    }
  }
  items = [];
  const tmp7 = closure_8();
}) : ((arg0) => {
  const obj = FavoritesGuildExperiment;
  const isFavoritesGuildSelected = FavoritesHooks.useIsFavoritesGuildSelected();
  const tmp4 = useCanShowFavoritesGuildOnboardingDefault();
  useSelectedDismissibleContent;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (arg0) {
      if (tmp4) {
        if (!isFavoritesGuildSelected) {
          if (tmp5 === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM) {
            let items = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
          }
          const obj3 = { shouldShowPopover: null, markPopoverAsDismissed: null };
          [tmp11, tmp12] = tmp7(items);
          obj3.shouldShowPopover = tmp11 === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          obj3.markPopoverAsDismissed = tmp12;
          return obj3;
        }
      }
    }
  }
  items = [];
  tmp5 = closure_8();
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = _slicedToArray(useGetDismissibleContent.useDangerouslyPeekDismissibleContents(items2), 1)[0] === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  const tmp5 = _slicedToArray(noop.useState(tmp4), 2);
  const first = tmp5[0];
  let tmp7 = tmp4;
  if (tmp4) {
    tmp7 = !first;
  }
  if (tmp7) {
    tmp5[1](true);
  }
  if (cResult[0] === first) {
    if (cResult[1] === tmp4) {
      let tmp9 = cResult[2];
    }
    return tmp9;
  }
  let tmp10 = tmp4;
  if (!tmp4) {
    tmp10 = first;
  }
  if (tmp10) {
    tmp10 = !FavoritesGuildIntroPopover.hasOfferedFavoritesGuildOnboarding();
    const tmpResult = FavoritesGuildIntroPopover;
  }
  cResult[0] = first;
  cResult[1] = tmp4;
  cResult[2] = tmp10;
  tmp9 = tmp10;
}) : (() => {
  const tmp3 = _slicedToArray(useGetDismissibleContent.useDangerouslyPeekDismissibleContents(items2), 1)[0] === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  const tmp4 = _slicedToArray(noop.useState(tmp3), 2);
  const first = tmp4[0];
  let tmp6 = tmp3;
  if (tmp3) {
    tmp6 = !first;
  }
  if (tmp6) {
    tmp4[1](true);
  }
  let tmp8 = tmp3;
  if (!tmp3) {
    tmp8 = first;
  }
  if (tmp8) {
    tmp8 = !FavoritesGuildIntroPopover.hasOfferedFavoritesGuildOnboarding();
    const tmpResult = FavoritesGuildIntroPopover;
  }
  return tmp8;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesDismissibleContent.tsx");

export const FAVORITES_GUILD_DISMISSIBLE_CONTENT = items;
export const useFavoritesMenuItemPopoverDismissibleContent = tmp2;
export const useShouldRenderFavoritesMenuItemPopover = tmp3;
export const useFavoritesBetaTagDismissibleContent = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "FavoritesDismissibleContent" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const obj = require("c");
  const isFreemium = require("FavoritesGuildExperiment").useFavoritesGuildConfig(first).isFreemium;
  if (cResult[1] === arg0) {
    if (cResult[2] === isFreemium) {
      const tmp7 = _slicedToArray(tmp(6891).useSelectedDismissibleContent(cResult[3]), 2);
      _require = tmp8;
      const tmp9 = tmp7[0] === tmp(2036).DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
      closure_1 = tmp9;
      if (cResult[4] === tmp7[1]) {
        if (cResult[5] === tmp9) {
          let tmp10 = cResult[6];
        }
        if (cResult[7] === tmp9) {
          if (cResult[8] === tmp10) {
            const tmp11 = cResult[9];
          }
          return tmp11;
        }
        const obj3 = { shouldShowBetaTag: tmp9, dismissBetaTag: tmp10 };
        cResult[7] = tmp9;
        cResult[8] = tmp10;
        cResult[9] = obj3;
        class D {
          constructor() {
            if (closure_1) {
              tmp = closure_0;
              tmp2 = ContentDismissActionType;
              tmp3 = closure_0(ContentDismissActionType.TAKE_ACTION);
            }
            return;
          }
        }
      }
      class D {
        constructor() {
          if (closure_1) {
            tmp = closure_0;
            tmp2 = ContentDismissActionType;
            tmp3 = closure_0(ContentDismissActionType.TAKE_ACTION);
          }
          return;
        }
      }
      cResult[4] = tmp7[1];
      cResult[5] = tmp9;
      cResult[6] = D;
      tmp10 = D;
      const tmpResult2 = tmp(6891);
    }
  }
  if (!isFreemium) {
    let items = [];
    cResult[1] = arg0;
    cResult[2] = isFreemium;
    cResult[3] = items;
  }
  items1 = [require("dismissible_content").DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
  items = items1;
  const tmpResult = require("FavoritesGuildExperiment");
}) : ((arg0) => {
  useSelectedDismissibleContent;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (arg0) {
      const items = [dismissible_content.DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
    }
    [tmp9, require] = tmp4([]);
    const tmp10 = tmp9 === dismissible_content.DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
    closure_1 = tmp10;
    const obj2 = {
      shouldShowBetaTag: tmp10,
      dismissBetaTag() {
          if (closure_1) {
            _require(ContentDismissActionType.TAKE_ACTION);
          }
        }
    };
    return obj2;
  }
  obj = FavoritesGuildExperiment;
});