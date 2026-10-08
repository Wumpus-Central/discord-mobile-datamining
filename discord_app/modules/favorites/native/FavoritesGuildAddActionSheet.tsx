// === Module 16376: FavoritesGuildAddActionSheet ===

// Module 16376 (FavoritesGuildAddActionSheet)
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5054 */;
import openFavoritesGuildLimitUpsellDefault from "openFavoritesGuildLimitUpsell" /* 10297 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 12698 */;
import FavoritesGuildAddCategoryActionSheet from "FavoritesGuildAddCategoryActionSheet" /* 16377 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function handleCreateCategory() {
  ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildAddActionSheet);
  const result = FavoritesGuildAddCategoryActionSheet.openFavoritesGuildAddCategoryActionSheet();
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildAddActionSheet() {
  const cResult = shouldShowUpsell(favoriteLimit[5]).c(12);
  let obj = shouldShowUpsell(favoriteLimit[5]);
  const favoritesLimitUpsell = shouldShowUpsell(favoriteLimit[6]).useFavoritesLimitUpsell();
  shouldShowUpsell = favoritesLimitUpsell.shouldShowUpsell;
  const isAtLimit = favoritesLimitUpsell.isAtLimit;
  favoriteLimit = favoritesLimitUpsell.favoriteLimit;
  if (cResult[0] === favoriteLimit) {
    if (cResult[1] === isAtLimit) {
      if (cResult[2] === shouldShowUpsell) {
        let tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { title: null };
        const intl = tmp(tmp2[10]).intl;
        obj3.title = intl.string(tmp(tmp2[10]).t.wMWyci);
        const tmp9 = closure_4(tmp(tmp2[9]).BottomSheetTitleHeader, obj3);
        cResult[4] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[4];
      }
      const _Symbol2 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[10]).intl;
        const stringResult = intl2.string(isAtLimit(tmp2[11]).G9fGlP);
        const obj4 = { IconComponent: tmp(tmp2[13]).PlusMediumIcon };
        const tmp15 = closure_4(tmp(tmp2[12]).ActionSheetRow.Icon, obj4);
        cResult[5] = stringResult;
        cResult[6] = tmp15;
        let tmp11 = tmp15;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp5) {
        const obj5 = { hasIcons: true, children: null };
        const obj6 = { label: tmp10, icon: tmp11, onPress: tmp5 };
        obj5.children = closure_4(tmp(tmp2[12]).ActionSheetRow, obj6);
        const tmp18 = closure_4(tmp(tmp2[12]).ActionSheetRow.Group, obj5);
        cResult[7] = tmp5;
        cResult[8] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { hasIcons: true, children: null };
        const obj8 = { label: null, icon: null, onPress: null };
        const intl3 = tmp(tmp2[10]).intl;
        obj8.label = intl3.string(tmp(tmp2[10]).t["ISN+NM"]);
        const obj9 = { IconComponent: tmp(tmp2[14]).FolderPlusIcon };
        obj8.icon = closure_4(tmp(tmp2[12]).ActionSheetRow.Icon, obj9);
        obj8.onPress = handleCreateCategory;
        obj7.children = closure_4(tmp(tmp2[12]).ActionSheetRow, obj8);
        const tmp22 = closure_4(tmp(tmp2[12]).ActionSheetRow.Group, obj7);
        cResult[9] = tmp22;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== tmp16) {
        const obj10 = { header: tmp7, children: null };
        const items = [tmp16, tmp19];
        obj10.children = items;
        const tmp25 = closure_5(tmp(tmp2[15]).ActionSheet, obj10);
        cResult[10] = tmp16;
        cResult[11] = tmp25;
        let tmp23 = tmp25;
      } else {
        tmp23 = cResult[11];
      }
      return tmp23;
    }
  }
  const fn = function t() {
    ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildAddActionSheet);
    if (shouldShowUpsell) {
      if (isAtLimit) {
        openFavoritesGuildLimitUpsellDefault(favoriteLimit);
      }
    }
    openFavoritesGuildAddChannelModalDefault({ source: "favorites_header_add_button_context_menu" });
  };
  cResult[0] = favoriteLimit;
  cResult[1] = isAtLimit;
  cResult[2] = shouldShowUpsell;
  cResult[3] = fn;
  tmp5 = fn;
  const obj2 = shouldShowUpsell(favoriteLimit[6]);
}) : (function FavoritesGuildAddActionSheet() {
  const favoritesLimitUpsell = shouldShowUpsell(favoriteLimit[6]).useFavoritesLimitUpsell();
  shouldShowUpsell = favoritesLimitUpsell.shouldShowUpsell;
  const isAtLimit = favoritesLimitUpsell.isAtLimit;
  favoriteLimit = favoritesLimitUpsell.favoriteLimit;
  const items = [shouldShowUpsell, isAtLimit, favoriteLimit];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildAddActionSheet);
    if (shouldShowUpsell) {
      if (isAtLimit) {
        openFavoritesGuildLimitUpsellDefault(favoriteLimit);
      }
    }
    openFavoritesGuildAddChannelModalDefault({ source: "favorites_header_add_button_context_menu" });
  }, items);
  const obj2 = { header: null, children: null };
  const obj3 = { title: null };
  const intl = shouldShowUpsell(favoriteLimit[10]).intl;
  obj3.title = intl.string(shouldShowUpsell(favoriteLimit[10]).t.wMWyci);
  obj2.header = closure_4(shouldShowUpsell(favoriteLimit[9]).BottomSheetTitleHeader, obj3);
  const obj4 = { hasIcons: true, children: null };
  const obj5 = { label: null, icon: null, onPress: null };
  const intl2 = shouldShowUpsell(favoriteLimit[10]).intl;
  obj5.label = intl2.string(isAtLimit(favoriteLimit[11]).G9fGlP);
  let obj = shouldShowUpsell(favoriteLimit[6]);
  obj5.icon = closure_4(shouldShowUpsell(favoriteLimit[12]).ActionSheetRow.Icon, { IconComponent: shouldShowUpsell(favoriteLimit[13]).PlusMediumIcon });
  obj5.onPress = callback;
  obj4.children = closure_4(shouldShowUpsell(favoriteLimit[12]).ActionSheetRow, obj5);
  const items1 = [closure_4(shouldShowUpsell(favoriteLimit[12]).ActionSheetRow.Group, obj4), ];
  const obj7 = { hasIcons: true, children: null };
  const obj8 = { label: null, icon: null, onPress: null };
  const intl3 = shouldShowUpsell(favoriteLimit[10]).intl;
  obj8.label = intl3.string(shouldShowUpsell(favoriteLimit[10]).t["ISN+NM"]);
  const obj6 = { IconComponent: shouldShowUpsell(favoriteLimit[13]).PlusMediumIcon };
  obj8.icon = closure_4(shouldShowUpsell(favoriteLimit[12]).ActionSheetRow.Icon, { IconComponent: shouldShowUpsell(favoriteLimit[14]).FolderPlusIcon });
  obj8.onPress = handleCreateCategory;
  obj7.children = closure_4(shouldShowUpsell(favoriteLimit[12]).ActionSheetRow, obj8);
  items1[1] = closure_4(shouldShowUpsell(favoriteLimit[12]).ActionSheetRow.Group, obj7);
  obj2.children = items1;
  return closure_5(shouldShowUpsell(favoriteLimit[15]).ActionSheet, obj2);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  const obj = ActionSheetActionCreators;
  obj.showActionSheet({ content: React4(closure_8, {}), key: FavoritesGuildAddActionSheet });
};