// discord_app/modules/favorites/native/FavoritesGuildAddActionSheet.tsx
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openFavoritesGuildLimitUpsellDefault from "../utils/openFavoritesGuildLimitUpsell.native.tsx";
import openFavoritesGuildAddChannelModalDefault from "../utils/openFavoritesGuildAddChannelModal.native.tsx";
import FavoritesGuildAddCategoryActionSheet from "FavoritesGuildAddCategoryActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function handleCreateCategory() {
  ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildAddActionSheet);
  const result = FavoritesGuildAddCategoryActionSheet.openFavoritesGuildAddCategoryActionSheet();
}
function FavoritesGuildAddActionSheet() {
  let obj = shouldShowUpsell(favoriteLimit[4]);
  const favoritesLimitUpsell = obj.useFavoritesLimitUpsell();
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
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = shouldShowUpsell(favoriteLimit[9]).intl;
  obj.title = intl.string(shouldShowUpsell(favoriteLimit[9]).t.wMWyci);
  obj.header = closure_4(shouldShowUpsell(favoriteLimit[8]).BottomSheetTitleHeader, obj);
  const obj1 = { hasIcons: true, children: null };
  const obj2 = { label: null, icon: null, onPress: null };
  const intl2 = shouldShowUpsell(favoriteLimit[9]).intl;
  obj2.label = intl2.string(isAtLimit(favoriteLimit[11]).G9fGlP);
  obj2.icon = closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Icon, {
    IconComponent: shouldShowUpsell(favoriteLimit[12]).PlusMediumIcon,
  });
  obj2.onPress = callback;
  obj1.children = closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow, obj2);
  const items1 = [closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Group, obj1)];
  const obj4 = { hasIcons: true, children: null };
  const obj5 = { label: null, icon: null, onPress: null };
  const intl3 = shouldShowUpsell(favoriteLimit[9]).intl;
  obj5.label = intl3.string(shouldShowUpsell(favoriteLimit[9]).t["ISN+NM"]);
  const obj3 = { IconComponent: shouldShowUpsell(favoriteLimit[12]).PlusMediumIcon };
  obj5.icon = closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Icon, {
    IconComponent: shouldShowUpsell(favoriteLimit[13]).FolderPlusIcon,
  });
  obj5.onPress = handleCreateCategory;
  obj4.children = closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow, obj5);
  items1[1] = closure_4(shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Group, obj4);
  obj.children = items1;
  return closure_5(shouldShowUpsell(favoriteLimit[7]).ActionSheet, obj);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  const obj = { content: React4(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet };
  obj.showActionSheet(obj);
};
