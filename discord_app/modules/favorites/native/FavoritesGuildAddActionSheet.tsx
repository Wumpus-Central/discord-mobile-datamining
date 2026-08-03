import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
function handleAddToFavorites() {
  importDefault(4223).hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = importDefault(4223);
  const result = require(11991) /* AddFavoriteChannelModal */.openAddFavoriteChannelModal({ source: "favorites_header_add_button_context_menu" });
}
function handleCreateCategory() {
  importDefault(4223).hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = importDefault(4223);
  const result = require(15127) /* AddFavoriteCategoryActionSheet */.openAddFavoriteCategoryActionSheet();
}
function FavoritesGuildAddActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.wMWyci);
  obj[0] = callback(require(5308) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true, children: null };
  const obj1 = { label: null, icon: null, onPress: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl2.string(importDefault(3001).G9fGlP);
  const obj2 = { IconComponent: null };
  obj2[0] = require(9579) /* StarOutlineIcon */.StarOutlineIcon;
  obj1[1] = callback(require(5619) /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj2);
  obj1[2] = handleAddToFavorites;
  obj[1] = callback(require(5619) /* ActionSheetRowIcon */.ActionSheetRow, obj1);
  const items = [callback(require(5619) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj), ];
  const obj3 = { hasIcons: true, children: null };
  const obj4 = { label: null, icon: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl3.string(require(1236) /* getSystemLocale */.t["ISN+NM"]);
  const obj5 = { IconComponent: null };
  obj5[0] = require(15128) /* FolderPlusIcon */.FolderPlusIcon;
  obj4[1] = callback(require(5619) /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj5);
  obj4[2] = handleCreateCategory;
  obj3[1] = callback(require(5619) /* ActionSheetRowIcon */.ActionSheetRow, obj4);
  items[1] = callback(require(5619) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj3);
  obj[1] = items;
  return callback2(require(5617) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  let obj = require(4223) /* ACTION_SHEET_HEIGHT_HALF */;
  obj = { content: callback(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet };
  obj.showActionSheet(obj);
};