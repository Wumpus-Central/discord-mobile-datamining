// discord_app/modules/favorites/FavoritesDismissibleContent.tsx
import react2 from "../../../_runtime/00576_react.js";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../dismissible_content/DismissibleContentConstants.tsx";
import useSelectedDismissibleContent from "../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import useGetDismissibleContent from "../dismissible_content/useGetDismissibleContent.tsx";
import FavoritesHooks from "FavoritesHooks.tsx";
import FavoritesGuildExperiment from "FavoritesGuildExperiment.tsx";
import FavoritesGuildIntroPopover from "onboarding/FavoritesGuildIntroPopover.tsx";
import useCanShowFavoritesGuildOnboardingDefault from "hooks/useCanShowFavoritesGuildOnboarding.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, tmp;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let items = [
  dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO,
  dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
  dismissible_content.DismissibleContent.FAVORITES_GUILD_NEW_BADGE,
  dismissible_content.DismissibleContent.FAVORITES_GUILD_SUGGESTIONS,
];
let items1 = [
  dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO,
  dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
];
const items2 = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useGetDismissibleContent;
      let first = _slicedToArray(obj.useDangerouslyPeekDismissibleContents(items1), 1)[0];
      if (first == null) {
        first = null;
      }
      return first;
    }
  : () => {
      const obj = useGetDismissibleContent;
      let first = _slicedToArray(obj.useDangerouslyPeekDismissibleContents(items1), 1)[0];
      if (first == null) {
        first = null;
      }
      return first;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp12;
      let tmp13;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "FavoritesDismissibleContent" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmpResult = FavoritesGuildExperiment;
      const isFreemium = tmpResult.useFavoritesGuildConfig(first).isFreemium;
      const tmpResult3 = FavoritesHooks;
      const isFavoritesGuildSelected = tmpResult3.useIsFavoritesGuildSelected();
      const tmp6 = useCanShowFavoritesGuildOnboardingDefault();
      const tmp7 = closure_8();
      const tmp8 = tmp7 === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
      if (cResult[1] === tmp6) {
        if (cResult[2] === arg0) {
          if (cResult[3] === isFavoritesGuildSelected) {
            if (cResult[4] === isFreemium) {
              if (cResult[5] === tmp8) {
                tmp9 = cResult[6];
              }
              const tmpResult4 = useSelectedDismissibleContent;
              [tmp12, tmp13] = tmpResult4.useSelectedDismissibleContent(tmp9);
              _slicedToArray(tmpResult4.useSelectedDismissibleContent(tmp9), 2);
              const tmp14 = tmp12 === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
              if (cResult[7] === tmp13) {
                let tmp15;
                if (cResult[8] === tmp14) {
                  tmp15 = cResult[9];
                }
                return tmp15;
              }
              const obj3 = { shouldShowPopover: tmp14, markPopoverAsDismissed: tmp13 };
              cResult[7] = tmp13;
              cResult[8] = tmp14;
              cResult[9] = obj3;
              tmp15 = obj3;
            }
          }
        }
      }
      if (isFreemium) {
        if (arg0) {
          if (tmp6) {
            if (!isFavoritesGuildSelected) {
              let items;
              if (tmp8) {
                items = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
              }
              cResult[1] = tmp6;
              cResult[2] = arg0;
              cResult[3] = isFavoritesGuildSelected;
              cResult[4] = isFreemium;
              cResult[5] = tmp8;
              cResult[6] = items;
              tmp9 = items;
            }
          }
        }
      }
      items = [];
    }
  : (arg0) => {
      let tmp11;
      let tmp12;
      const obj = FavoritesGuildExperiment;
      const isFreemium = obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium;
      const obj2 = FavoritesHooks;
      const isFavoritesGuildSelected = obj2.useIsFavoritesGuildSelected();
      const tmp4 = useCanShowFavoritesGuildOnboardingDefault();
      const tmp5 = closure_8();
      const FAVORITES_SERVER_ONBOARDING_MENU_ITEM =
        dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
      useSelectedDismissibleContent;
      if (isFreemium) {
        const tmp8 = arg0;
        if (tmp8) {
          if (tmp4) {
            if (!isFavoritesGuildSelected) {
              let items;
              if (tmp5 === FAVORITES_SERVER_ONBOARDING_MENU_ITEM) {
                items = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
              }
              const obj3 = {
                shouldShowPopover:
                  tmp11 === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
                markPopoverAsDismissed: tmp12,
              };
              [tmp11, tmp12] = tmp7(items);
              _slicedToArray(tmp7(items), 2);
              return obj3;
            }
          }
        }
      }
      items = [];
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(3);
      const obj2 = useGetDismissibleContent;
      const tmp4 =
        _slicedToArray(obj2.useDangerouslyPeekDismissibleContents(items2), 1)[0] ===
        dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
      [first, tmp7] = react.useState(tmp4);
      const tmp8 = tmp4 && !first;
      if (tmp8) {
        tmp7(true);
      }
      if (cResult[0] === first) {
        let tmp10;
        if (cResult[1] === tmp4) {
          tmp10 = cResult[2];
        }
        return tmp10;
      }
      let tmp11 = tmp4 || first;
      if (tmp11) {
        const tmpResult = FavoritesGuildIntroPopover;
        tmp11 = !tmpResult.hasOfferedFavoritesGuildOnboarding();
      }
      cResult[0] = first;
      cResult[1] = tmp4;
      cResult[2] = tmp11;
      tmp10 = tmp11;
    }
  : () => {
      let first;
      let tmp6;
      const obj = useGetDismissibleContent;
      const tmp3 =
        _slicedToArray(obj.useDangerouslyPeekDismissibleContents(items2), 1)[0] ===
        dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
      [first, tmp6] = react.useState(tmp3);
      const tmp7 = tmp3 && !first;
      if (tmp7) {
        tmp6(true);
      }
      let tmp9 = tmp3 || first;
      if (tmp9) {
        const tmpResult = FavoritesGuildIntroPopover;
        tmp9 = !tmpResult.hasOfferedFavoritesGuildOnboarding();
      }
      return tmp9;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp5;
      const obj = require("react");
      const cResult = obj.c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "FavoritesDismissibleContent" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmpResult = require("FavoritesGuildExperiment");
      const isFreemium = tmpResult.useFavoritesGuildConfig(first).isFreemium;
      if (cResult[1] === arg0) {
        if (cResult[2] === isFreemium) {
          tmp5 = cResult[3];
        }
        const tmpResult2 = require("useSelectedDismissibleContent");
        const tmp7 = _slicedToArray(tmpResult2.useSelectedDismissibleContent(tmp5), 2);
        _require = tmp8;
        const tmp9 = tmp7[0] === require("dismissible_content").DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
        let closure_1 = tmp9;
        if (cResult[4] === tmp7[1]) {
          let tmp10;
          if (cResult[5] === tmp9) {
            tmp10 = cResult[6];
          }
          if (cResult[7] === tmp9) {
            let tmp11;
            if (cResult[8] === tmp10) {
              tmp11 = cResult[9];
            }
            return tmp11;
          }
          const obj3 = { shouldShowBetaTag: tmp9, dismissBetaTag: tmp10 };
          cResult[7] = tmp9;
          cResult[8] = tmp10;
          cResult[9] = obj3;
          class D {
            constructor() {
              tmp = closure_1;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = ContentDismissActionType;
                tmp4 = closure_0(ContentDismissActionType.TAKE_ACTION);
              }
              return;
            }
          }
        }
        class D {
          constructor() {
            tmp = closure_1;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = ContentDismissActionType;
              tmp4 = closure_0(ContentDismissActionType.TAKE_ACTION);
            }
            return;
          }
        }
        cResult[4] = tmp7[1];
        cResult[5] = tmp9;
        cResult[6] = D;
        tmp10 = D;
      }
      if (isFreemium) {
        if (arg0) {
          const items = [require("dismissible_content").DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
          items1 = items;
        }
        cResult[1] = arg0;
        cResult[2] = isFreemium;
        cResult[3] = items1;
        tmp5 = items1;
      }
      items1 = [];
    }
  : (arg0) => {
      let require;
      let tmp9;
      const obj = FavoritesGuildExperiment;
      const isFreemium = obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium;
      useSelectedDismissibleContent;
      if (isFreemium) {
        const tmp5 = arg0;
        if (tmp5) {
          const items = [dismissible_content.DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
        }
        [tmp9, require] = tmp4([]);
        _slicedToArray(tmp4([]), 2);
        const tmp10 = tmp9 === dismissible_content.DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
        let closure_1 = tmp10;
        return {
          shouldShowBetaTag: tmp10,
          dismissBetaTag() {
            if (closure_1) {
              _require(ContentDismissActionType.TAKE_ACTION);
            }
          },
        };
      }
    };
const result = size.fileFinishedImporting("modules/favorites/FavoritesDismissibleContent.tsx");

export const FAVORITES_GUILD_DISMISSIBLE_CONTENT = items;
export const useFavoritesMenuItemPopoverDismissibleContent = tmp2;
export const useShouldRenderFavoritesMenuItemPopover = tmp3;
export const useFavoritesBetaTagDismissibleContent = tmp4;
