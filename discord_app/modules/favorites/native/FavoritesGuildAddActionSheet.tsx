// discord_app/modules/favorites/native/FavoritesGuildAddActionSheet.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
function handleAddToFavorites() {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  const result = require("AddFavoriteChannelModal.tsx") /* AddFavoriteChannelModal */.openAddFavoriteChannelModal({ source: "favorites_header_add_button_context_menu" });
}
function handleCreateCategory() {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  const result = require("AddFavoriteCategoryActionSheet.tsx") /* AddFavoriteCategoryActionSheet */.openAddFavoriteCategoryActionSheet();
}
function FavoritesGuildAddActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.wMWyci);
  obj[0] = callback(require("../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx") /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true, children: null };
  const obj1 = { label: null, icon: null, onPress: null };
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[0] = intl2.string(require("../intl/FavoritesGuild.messages.js").G9fGlP);
  const obj2 = { IconComponent: null };
  obj2[0] = require("../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx") /* StarOutlineIcon */.StarOutlineIcon;
  obj1[1] = callback(require("../../../design/components/Sheet/native/ActionSheetRow.native.tsx") /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj2);
  obj1[2] = handleAddToFavorites;
  obj[1] = callback(require("../../../design/components/Sheet/native/ActionSheetRow.native.tsx") /* ActionSheetRowIcon */.ActionSheetRow, obj1);
  const items = [callback(require("../../../design/components/Sheet/native/ActionSheetRow.native.tsx") /* ActionSheetRowIcon */.ActionSheetRow.Group, obj), ];
  const obj3 = { hasIcons: true, children: null };
  const obj4 = { label: null, icon: null, onPress: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj4[0] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["ISN+NM"]);
  const obj5 = { IconComponent: null };
  obj5[0] = require("../../../design/components/Icon/native/redesign/generated/FolderPlusIcon.tsx") /* FolderPlusIcon */.FolderPlusIcon;
  obj4[1] = callback(require("../../../design/components/Sheet/native/ActionSheetRow.native.tsx") /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj5);
  obj4[2] = handleCreateCategory;
  obj3[1] = callback(require("../../../design/components/Sheet/native/ActionSheetRow.native.tsx") /* ActionSheetRowIcon */.ActionSheetRow, obj4);
  items[1] = callback(require("../../../design/components/Sheet/native/ActionSheetRow.native.tsx") /* ActionSheetRowIcon */.ActionSheetRow.Group, obj3);
  obj[1] = items;
  return callback2(require("../../../design/components/Sheet/native/ActionSheet.native.tsx") /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx") /* ACTION_SHEET_HEIGHT_HALF */;
  obj = { content: callback(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet };
  obj.showActionSheet(obj);
};