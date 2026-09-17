// === Module 16312: FavoritesGuildAddActionSheet ===

// Module 16312 (FavoritesGuildAddActionSheet)
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4607 */;
import openFavoritesGuildLimitUpsellDefault from "openFavoritesGuildLimitUpsell" /* 10374 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 11135 */;
import FavoritesGuildAddCategoryActionSheet from "FavoritesGuildAddCategoryActionSheet" /* 16313 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function handleCreateCategory() {
  ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildAddActionSheet);
  const result = FavoritesGuildAddCategoryActionSheet.openFavoritesGuildAddCategoryActionSheet();
}
function FavoritesGuildAddActionSheet() {
  const favoritesLimitUpsell = shouldShowUpsell(favoriteLimit[4]).useFavoritesLimitUpsell();
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
  const intl = shouldShowUpsell(favoriteLimit[9]).intl;
  obj3.title = intl.string(shouldShowUpsell(favoriteLimit[9]).t.wMWyci);
  obj2.header = closure_4(shouldShowUpsell(favoriteLimit[8]).BottomSheetTitleHeader, obj3);
  const obj4 = { hasIcons: true, children: null };
  const obj5 = { label: null, icon: null, onPress: null };
  const intl2 = shouldShowUpsell(favoriteLimit[9]).intl;
  obj5.label = intl2.string(isAtLimit(favoriteLimit[11]).G9fGlP);
  let obj = shouldShowUpsell(favoriteLimit[4]);
  obj5.icon = closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Icon, { IconComponent: shouldShowUpsell(favoriteLimit[12]).PlusMediumIcon });
  obj5.onPress = callback;
  obj4.children = closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow, obj5);
  const items1 = [closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Group, obj4), ];
  const obj7 = { hasIcons: true, children: null };
  const obj8 = { label: null, icon: null, onPress: null };
  const intl3 = shouldShowUpsell(favoriteLimit[9]).intl;
  obj8.label = intl3.string(shouldShowUpsell(favoriteLimit[9]).t["ISN+NM"]);
  const obj6 = { IconComponent: shouldShowUpsell(favoriteLimit[12]).PlusMediumIcon };
  obj8.icon = closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Icon, { IconComponent: shouldShowUpsell(favoriteLimit[13]).FolderPlusIcon });
  obj8.onPress = handleCreateCategory;
  obj7.children = closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow, obj8);
  items1[1] = closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Group, obj7);
  obj2.children = items1;
  return closure_5(shouldShowUpsell(favoriteLimit[7]).ActionSheet, obj2);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  const obj = ActionSheetActionCreators;
  obj.showActionSheet({ content: React4(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet });
};