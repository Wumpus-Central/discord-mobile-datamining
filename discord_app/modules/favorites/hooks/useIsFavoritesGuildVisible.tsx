// discord_app/modules/favorites/hooks/useIsFavoritesGuildVisible.tsx
import FavoritesUtils from "../FavoritesUtils.tsx";
import FavoritesHooks from "../FavoritesHooks.tsx";
import FavoritesGuildIntroPopover from "../onboarding/FavoritesGuildIntroPopover.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, isExperimentEnabled) {
  let hasAccess;
  let isFreemium;
  let isIntroPopoverShown;
  let keepWhileViewing;
  ({ isFreemium, hasAccess, isIntroPopoverShown, keepWhileViewing } = isExperimentEnabled);
  isExperimentEnabled = isExperimentEnabled.isExperimentEnabled;
  if (isExperimentEnabled) {
    let tmp2 = !keepWhileViewing;
    if (keepWhileViewing) {
      const obj = FavoritesUtils;
      tmp2 = !obj.isFavoritesGuildId(SelectedGuildStore.getGuildId());
    }
    let tmp6 = !tmp2;
    if (tmp2) {
      let tmp8 = !hasAccess;
      if (hasAccess) {
        tmp8 = false === FavoriteStore.favoriteGuildVisibleSetting;
      }
      let tmp9 = !tmp8;
      if (tmp9) {
        let favoriteGuildEnabled = FavoriteStore.favoriteGuildEnabled;
        if (!favoriteGuildEnabled) {
          if (isFreemium) {
            if (!isIntroPopoverShown) {
              const obj2 = FavoritesGuildIntroPopover;
              isIntroPopoverShown = obj2.hasOfferedFavoritesGuildOnboarding();
            }
            isFreemium = isIntroPopoverShown;
          }
          favoriteGuildEnabled = isFreemium;
        }
        tmp9 = favoriteGuildEnabled;
      }
      tmp6 = tmp9;
    }
    isExperimentEnabled = tmp6;
  }
  return isExperimentEnabled;
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let isExperimentEnabled;
      let keepWhileViewing;
      let obj = require("react");
      const cResult = obj.c(8);
      _require = tmp4;
      const tmpResult = require("FavoritesHooks");
      const favoritesAccess = tmpResult.useFavoritesAccess();
      isExperimentEnabled = favoritesAccess.isExperimentEnabled;
      const isFreemium = favoritesAccess.isFreemium;
      const hasAccess = favoritesAccess.hasAccess;
      const tmpResult3 = require("FavoritesGuildIntroPopover");
      const isFavoritesIntroPopoverShown = tmpResult3.useIsFavoritesIntroPopoverShown();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [hasAccess, isFreemium];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === hasAccess) {
        if (cResult[2] === isExperimentEnabled) {
          if (cResult[3] === isFreemium) {
            if (cResult[4] === isFavoritesIntroPopoverShown) {
              let tmp10;
              let tmp11;
              if (cResult[5] === (undefined === arg0 || arg0)) {
                tmp10 = cResult[6];
                tmp11 = cResult[7];
              }
              const tmpResult4 = require("get initialized");
              return tmpResult4.useStateFromStores(first, tmp10, tmp11);
            }
          }
        }
      }
      const fn = function u() {
        const obj = {
          isExperimentEnabled,
          isFreemium,
          hasAccess,
          isIntroPopoverShown: isFavoritesIntroPopoverShown,
          keepWhileViewing,
        };
        return computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, obj);
      };
      const items1 = [
        isExperimentEnabled,
        isFreemium,
        hasAccess,
        isFavoritesIntroPopoverShown,
        undefined === arg0 || arg0,
      ];
      cResult[1] = hasAccess;
      cResult[2] = isExperimentEnabled;
      cResult[3] = isFreemium;
      cResult[4] = isFavoritesIntroPopoverShown;
      cResult[5] = undefined === arg0 || arg0;
      cResult[6] = fn;
      cResult[7] = items1;
      tmp11 = items1;
      tmp10 = fn;
    }
  : () => {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      let isExperimentEnabled;
      let obj = flag(isExperimentEnabled[4]);
      const favoritesAccess = obj.useFavoritesAccess();
      isExperimentEnabled = favoritesAccess.isExperimentEnabled;
      const isFreemium = favoritesAccess.isFreemium;
      const hasAccess = favoritesAccess.hasAccess;
      const obj2 = flag(isExperimentEnabled[3]);
      const isFavoritesIntroPopoverShown = obj2.useIsFavoritesIntroPopoverShown();
      const items = [hasAccess, isFreemium];
      const items1 = [isExperimentEnabled, isFreemium, hasAccess, isFavoritesIntroPopoverShown, flag];
      const obj3 = flag(isExperimentEnabled[7]);
      return obj3.useStateFromStores(
        items,
        () => {
          const obj = {
            isExperimentEnabled,
            isFreemium,
            hasAccess,
            isIntroPopoverShown: isFavoritesIntroPopoverShown,
            keepWhileViewing: flag,
          };
          return computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, obj);
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default tmp2;
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  let obj3;
  const obj = FavoritesHooks;
  const favoritesAccess = obj.getFavoritesAccess();
  const obj2 = {
    isExperimentEnabled: favoritesAccess.isExperimentEnabled,
    isFreemium: favoritesAccess.isFreemium,
    hasAccess: favoritesAccess.hasAccess,
    isIntroPopoverShown: obj3.isFavoritesIntroPopoverShown(),
    keepWhileViewing: true,
  };
  obj3 = FavoritesGuildIntroPopover;
  return computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, obj2);
};
