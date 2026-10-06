// === Module 16116: FavoritesGuildAddActionSheet ===

// Module 16116 (FavoritesGuildAddActionSheet)
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4860 */;
import openFavoritesGuildLimitUpsellDefault from "openFavoritesGuildLimitUpsell" /* 10052 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 10719 */;
import FavoritesGuildAddCategoryActionSheet from "FavoritesGuildAddCategoryActionSheet" /* 16117 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
function handleCreateCategory() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(FavoritesGuildAddActionSheet);
  const obj2 = FavoritesGuildAddCategoryActionSheet;
  const result = obj2.openFavoritesGuildAddCategoryActionSheet();
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let ActionSheetRow;
  let Icon2;
  let favoriteLimit;
  let intl;
  let intl3;
  let items;
  let obj6;
  let obj8;
  let obj9;
  let shouldShowUpsell;
  let obj = shouldShowUpsell(favoriteLimit[5]);
  const cResult = obj.c(12);
  const obj2 = shouldShowUpsell(favoriteLimit[6]);
  const favoritesLimitUpsell = obj2.useFavoritesLimitUpsell();
  shouldShowUpsell = favoritesLimitUpsell.shouldShowUpsell;
  const isAtLimit = favoritesLimitUpsell.isAtLimit;
  favoriteLimit = favoritesLimitUpsell.favoriteLimit;
  if (cResult[0] === favoriteLimit) {
    if (cResult[1] === isAtLimit) {
      let tmp5;
      let tmp7;
      let tmp11;
      let tmp10;
      let tmp16;
      let tmp19;
      let tmp23;
      if (cResult[2] === shouldShowUpsell) {
        tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { title: intl.string(shouldShowUpsell(favoriteLimit[10]).t.wMWyci) };
        const BottomSheetTitleHeader = tmp(tmp2[9]).BottomSheetTitleHeader;
        intl = tmp(tmp2[10]).intl;
        const tmp9 = closure_4(BottomSheetTitleHeader, obj3);
        cResult[4] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[4];
      }
      const _Symbol2 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[10]).intl;
        const stringResult = intl2.string(isAtLimit(favoriteLimit[11]).G9fGlP);
        const obj4 = { IconComponent: shouldShowUpsell(favoriteLimit[13]).PlusMediumIcon };
        const Icon = tmp(tmp2[12]).ActionSheetRow.Icon;
        const tmp15 = closure_4(Icon, obj4);
        cResult[5] = stringResult;
        cResult[6] = tmp15;
        tmp11 = tmp15;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp5) {
        const obj5 = { hasIcons: true, children: closure_4(shouldShowUpsell(favoriteLimit[12]).ActionSheetRow, obj6) };
        const Group = tmp(tmp2[12]).ActionSheetRow.Group;
        obj6 = { label: tmp10, icon: tmp11, onPress: tmp5 };
        const tmp18 = closure_4(Group, obj5);
        cResult[7] = tmp5;
        cResult[8] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { hasIcons: true, children: closure_4(ActionSheetRow, obj8) };
        const Group2 = tmp(tmp2[12]).ActionSheetRow.Group;
        obj8 = { label: intl3.string(shouldShowUpsell(favoriteLimit[10]).t["ISN+NM"]), icon: closure_4(Icon2, obj9), onPress: handleCreateCategory };
        ActionSheetRow = tmp(tmp2[12]).ActionSheetRow;
        intl3 = tmp(tmp2[10]).intl;
        obj9 = { IconComponent: shouldShowUpsell(favoriteLimit[14]).FolderPlusIcon };
        Icon2 = tmp(tmp2[12]).ActionSheetRow.Icon;
        const tmp22 = closure_4(Group2, obj7);
        cResult[9] = tmp22;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== tmp16) {
        const obj10 = { header: tmp7, children: items };
        items = [tmp16, tmp19];
        const tmp25 = closure_5(shouldShowUpsell(favoriteLimit[15]).ActionSheet, obj10);
        cResult[10] = tmp16;
        cResult[11] = tmp25;
        tmp23 = tmp25;
      } else {
        tmp23 = cResult[11];
      }
      return tmp23;
    }
  }
  const fn = function t() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(FavoritesGuildAddActionSheet);
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
}) : (() => {
  let ActionSheetRow;
  let ActionSheetRow2;
  let BottomSheetTitleHeader;
  let Icon;
  let Icon2;
  let favoriteLimit;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  let shouldShowUpsell;
  let obj = shouldShowUpsell(favoriteLimit[6]);
  const favoritesLimitUpsell = obj.useFavoritesLimitUpsell();
  shouldShowUpsell = favoritesLimitUpsell.shouldShowUpsell;
  const isAtLimit = favoritesLimitUpsell.isAtLimit;
  favoriteLimit = favoritesLimitUpsell.favoriteLimit;
  const items = [shouldShowUpsell, isAtLimit, favoriteLimit];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(FavoritesGuildAddActionSheet);
    if (shouldShowUpsell) {
      if (isAtLimit) {
        openFavoritesGuildLimitUpsellDefault(favoriteLimit);
      }
    }
    openFavoritesGuildAddChannelModalDefault({ source: "favorites_header_add_button_context_menu" });
  }, items);
  const obj2 = { header: closure_4(BottomSheetTitleHeader, obj3), children: items1 };
  const ActionSheet = shouldShowUpsell(favoriteLimit[15]).ActionSheet;
  obj3 = { title: intl.string(shouldShowUpsell(favoriteLimit[10]).t.wMWyci) };
  BottomSheetTitleHeader = shouldShowUpsell(favoriteLimit[9]).BottomSheetTitleHeader;
  intl = shouldShowUpsell(favoriteLimit[10]).intl;
  const obj4 = { hasIcons: true, children: closure_4(ActionSheetRow, obj5) };
  const Group = shouldShowUpsell(favoriteLimit[12]).ActionSheetRow.Group;
  obj5 = { label: intl2.string(isAtLimit(favoriteLimit[11]).G9fGlP), icon: closure_4(Icon, obj6), onPress: callback };
  ActionSheetRow = shouldShowUpsell(favoriteLimit[12]).ActionSheetRow;
  intl2 = shouldShowUpsell(favoriteLimit[10]).intl;
  obj6 = { IconComponent: shouldShowUpsell(favoriteLimit[13]).PlusMediumIcon };
  Icon = shouldShowUpsell(favoriteLimit[12]).ActionSheetRow.Icon;
  items1 = [closure_4(Group, obj4), ];
  const obj7 = { hasIcons: true, children: closure_4(ActionSheetRow2, obj8) };
  const Group2 = shouldShowUpsell(favoriteLimit[12]).ActionSheetRow.Group;
  obj8 = { label: intl3.string(shouldShowUpsell(favoriteLimit[10]).t["ISN+NM"]), icon: closure_4(Icon2, obj9), onPress: handleCreateCategory };
  ActionSheetRow2 = shouldShowUpsell(favoriteLimit[12]).ActionSheetRow;
  intl3 = shouldShowUpsell(favoriteLimit[10]).intl;
  obj9 = { IconComponent: shouldShowUpsell(favoriteLimit[14]).FolderPlusIcon };
  Icon2 = shouldShowUpsell(favoriteLimit[12]).ActionSheetRow.Icon;
  items1[1] = closure_4(Group2, obj7);
  return closure_5(ActionSheet, obj2);
});
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  const obj = ActionSheetActionCreators;
  const obj2 = { content: React3(closure_8, {}), key: FavoritesGuildAddActionSheet };
  obj.showActionSheet(obj2);
};