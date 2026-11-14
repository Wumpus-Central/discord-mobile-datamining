// === Module 18855: FavoritesGuildActionSheet ===

// Module 18855 (FavoritesGuildActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import _modDef3679 from "module_3679" /* 3679 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import useFavoritesGuildHideActionDefault from "useFavoritesGuildHideAction" /* 18856 */;
import useFavoritesGuildResetActionDefault from "useFavoritesGuildResetAction" /* 18857 */;
import openFavoritesGuildChannelSortModalDefault from "openFavoritesGuildChannelSortModal" /* 18860 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 5158 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default function FavoritesGuildActionSheet(onClose) {
  onClose = onClose.onClose;
  const tmp2 = useFavoritesGuildHideActionDefault();
  importDefault = tmp2;
  const tmp3 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp3;
  items = [FavoriteStore];
  const stateFromStores = onClose(504).useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  const obj2 = { header: null, children: null };
  const obj3 = { title: null };
  const intl = onClose(1113).intl;
  obj3.title = intl.string(onClose(1113).t.wMWyci);
  obj2.header = closure_4(onClose(7913).BottomSheetTitleHeader, obj3);
  const obj4 = { hasIcons: true, children: null };
  const obj5 = { label: null, icon: null, onPress: null };
  const intl2 = onClose(1113).intl;
  obj5.label = intl2.string(_modDef3679.hklnjs);
  const obj = onClose(504);
  obj5.icon = closure_4(onClose(7953).ActionSheetRow.Icon, { IconComponent: onClose(8071).ThreadIcon });
  obj5.onPress = function onPress() {
    onClose();
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18858, dependencyMap.paths), undefined, "FavoritesGuildCleanupModal");
  };
  obj4.children = closure_4(onClose(7953).ActionSheetRow, obj5);
  const items1 = [closure_4(onClose(7953).ActionSheetRow.Group, obj4), , ];
  let tmp7Result = null;
  if (stateFromStores) {
    const obj7 = { hasIcons: true, children: null };
    const obj8 = { label: null, icon: null, onPress: null };
    const intl3 = tmp4(1113).intl;
    obj8.label = intl3.string(tmp4(1113).t["0dOFq+"]);
    const obj9 = { IconComponent: tmp4(12100).ArrowsUpDownIcon };
    obj8.icon = closure_4(tmp4(7953).ActionSheetRow.Icon, obj9);
    obj8.onPress = function onPress() {
      onClose();
      openFavoritesGuildChannelSortModalDefault();
    };
    obj7.children = closure_4(tmp4(7953).ActionSheetRow, obj8);
    tmp7Result = closure_4(tmp4(7953).ActionSheetRow.Group, obj7);
  }
  items1[1] = tmp7Result;
  const obj10 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: "danger", onPress: null };
  const obj6 = { IconComponent: onClose(8071).ThreadIcon };
  obj10.icon = closure_4(onClose(7953).ActionSheetRow.Icon, { IconComponent: onClose(7633).EyeSlashIcon });
  obj10.onPress = function onPress() {
    onClose();
    closure_1.perform();
  };
  const items2 = [closure_4(onClose(7953).ActionSheetRow, obj10), ];
  let tmp7Result2 = null;
  if (tmp3.isAvailable) {
    const obj13 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
    const obj25 = { IconComponent: tmp4(6040).TrashIcon };
    obj13.icon = closure_4(tmp4(7953).ActionSheetRow.Icon, obj25);
    obj13.onPress = function onPress() {
      onClose();
      closure_2.perform();
    };
    tmp7Result2 = closure_4(tmp4(7953).ActionSheetRow, obj13);
  }
  items2[1] = tmp7Result2;
  items1[2] = closure_5(onClose(7953).ActionSheetRow.Group, { hasIcons: true, children: items2 });
  obj2.children = items1;
  return closure_5(onClose(7951).ActionSheet, obj2);
};