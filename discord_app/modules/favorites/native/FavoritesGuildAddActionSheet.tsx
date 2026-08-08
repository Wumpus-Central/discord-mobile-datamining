// discord_app/modules/favorites/native/FavoritesGuildAddActionSheet.tsx
import noop from "noop";
import jsxProd from "jsxProd";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { FavoritesGuildAddCategoryActionSheet } from "FavoritesGuildAddCategoryActionSheet.tsx";

let c4;
let c5;
const require = arg1;
function handleCreateCategory() {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = ACTION_SHEET_HEIGHT_HALF;
  const result = FavoritesGuildAddCategoryActionSheet.openFavoritesGuildAddCategoryActionSheet();
}
function FavoritesGuildAddActionSheet() {
  let obj = shouldShowUpsell(favoriteLimit[4]);
  const favoritesLimitUpsell = obj.useFavoritesLimitUpsell();
  shouldShowUpsell = favoritesLimitUpsell.shouldShowUpsell;
  const isAtLimit = favoritesLimitUpsell.isAtLimit;
  favoriteLimit = favoritesLimitUpsell.favoriteLimit;
  const items = [shouldShowUpsell, isAtLimit, favoriteLimit];
  const callback = React.useCallback(() => {
    isAtLimit(favoriteLimit[2]).hideActionSheet(outer1_6);
    if (shouldShowUpsell) {
      if (isAtLimit) {
        tmp(tmp2[5])(favoriteLimit);
      }
    }
    isAtLimit(favoriteLimit[6])({ source: "favorites_header_add_button_context_menu" });
  }, items);
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = shouldShowUpsell(favoriteLimit[9]).intl;
  obj[0] = intl.string(shouldShowUpsell(favoriteLimit[9]).t.wMWyci);
  obj[0] = callback(shouldShowUpsell(favoriteLimit[8]).BottomSheetTitleHeader, obj);
  const obj1 = { hasIcons: true, children: null };
  const obj2 = { label: null, icon: null, onPress: null };
  const intl2 = shouldShowUpsell(favoriteLimit[9]).intl;
  obj2[0] = intl2.string(isAtLimit(favoriteLimit[11]).G9fGlP);
  const obj3 = { IconComponent: null };
  obj3[0] = shouldShowUpsell(favoriteLimit[12]).PlusMediumIcon;
  obj2[1] = callback(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Icon, obj3);
  obj2[2] = callback;
  obj1[1] = callback(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow, obj2);
  const items1 = [callback(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Group, obj1), ];
  const obj4 = { hasIcons: true, children: null };
  const obj5 = { label: null, icon: null, onPress: null };
  const intl3 = shouldShowUpsell(favoriteLimit[9]).intl;
  obj5[0] = intl3.string(shouldShowUpsell(favoriteLimit[9]).t["ISN+NM"]);
  const obj6 = { IconComponent: null };
  obj6[0] = shouldShowUpsell(favoriteLimit[13]).FolderPlusIcon;
  obj5[1] = callback(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Icon, obj6);
  obj5[2] = handleCreateCategory;
  obj4[1] = callback(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow, obj5);
  items1[1] = callback(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Group, obj4);
  obj[1] = items1;
  return callback2(shouldShowUpsell(favoriteLimit[7]).ActionSheet, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { content: callback(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet };
  obj.showActionSheet(obj);
};