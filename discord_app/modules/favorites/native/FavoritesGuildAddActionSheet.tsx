// discord_app/modules/favorites/native/FavoritesGuildAddActionSheet.tsx
import "noop";
import jsxProd from "jsxProd";
import { FolderPlusIcon } from "../../../design/components/Icon/native/redesign/generated/FolderPlusIcon.tsx";
import { StarOutlineIcon } from "../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx";
import { ActionSheet } from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { ActionSheetRowIcon } from "../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { messagesProxy } from "../intl/FavoritesGuild.messages.js";
import { AddFavoriteCategoryActionSheet } from "AddFavoriteCategoryActionSheet.tsx";
import { AddFavoriteChannelModal } from "AddFavoriteChannelModal.tsx";

let c3;
let c4;
const require = arg1;
function handleAddToFavorites() {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = ACTION_SHEET_HEIGHT_HALF;
  const result = AddFavoriteChannelModal /* AddFavoriteChannelModal */.openAddFavoriteChannelModal({ source: "favorites_header_add_button_context_menu" });
}
function handleCreateCategory() {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet(FavoritesGuildAddActionSheet);
  const obj = ACTION_SHEET_HEIGHT_HALF;
  const result = AddFavoriteCategoryActionSheet /* AddFavoriteCategoryActionSheet */.openAddFavoriteCategoryActionSheet();
}
function FavoritesGuildAddActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.wMWyci);
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true, children: null };
  const obj1 = { label: null, icon: null, onPress: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj1[0] = intl2.string(messagesProxy.G9fGlP);
  const obj2 = { IconComponent: null };
  obj2[0] = StarOutlineIcon /* StarOutlineIcon */.StarOutlineIcon;
  obj1[1] = callback(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj2);
  obj1[2] = handleAddToFavorites;
  obj[1] = callback(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetRow, obj1);
  const items = [callback(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetRow.Group, obj), ];
  const obj3 = { hasIcons: true, children: null };
  const obj4 = { label: null, icon: null, onPress: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj4[0] = intl3.string(getSystemLocale /* getSystemLocale */.t["ISN+NM"]);
  const obj5 = { IconComponent: null };
  obj5[0] = FolderPlusIcon /* FolderPlusIcon */.FolderPlusIcon;
  obj4[1] = callback(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetRow.Icon, obj5);
  obj4[2] = handleCreateCategory;
  obj3[1] = callback(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetRow, obj4);
  items[1] = callback(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetRow.Group, obj3);
  obj[1] = items;
  return callback2(ActionSheet /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
FavoritesGuildAddActionSheet = "FavoritesGuildAddActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export const openFavoritesGuildAddActionSheet = function openFavoritesGuildAddActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALF /* ACTION_SHEET_HEIGHT_HALF */;
  obj = { content: callback(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet };
  obj.showActionSheet(obj);
};