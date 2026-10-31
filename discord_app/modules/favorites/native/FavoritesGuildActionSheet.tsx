// === Module 18182: FavoritesGuildActionSheet ===

// Module 18182 (FavoritesGuildActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import useFavoritesGuildHideActionDefault from "useFavoritesGuildHideAction" /* 18183 */;
import useFavoritesGuildResetActionDefault from "useFavoritesGuildResetAction" /* 18184 */;
import useFavoritesGuildAutoAddedThreadsActionDefault from "useFavoritesGuildAutoAddedThreadsAction" /* 18185 */;
import openFavoritesGuildChannelSortModalDefault from "openFavoritesGuildChannelSortModal" /* 18190 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 4866 */;

const _modDef3450 = tmp(3450);
require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default function FavoritesGuildActionSheet(onClose) {
  onClose = onClose.onClose;
  const tmp3 = useFavoritesGuildHideActionDefault();
  importDefault = tmp3;
  const tmp4 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp4;
  const tmp5 = useFavoritesGuildAutoAddedThreadsActionDefault();
  const items = [FavoriteStore];
  const stateFromStores = onClose(504).useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  const obj2 = { header: null, children: null };
  const obj3 = { title: null };
  const intl = onClose(1113).intl;
  obj3.title = intl.string(onClose(1113).t.wMWyci);
  obj2.header = closure_4(onClose(7321).BottomSheetTitleHeader, obj3);
  let tmp8Result = null;
  if (tmp5.isAvailable) {
    const obj4 = { hasIcons: true, children: null };
    const obj6 = { label: null, subLabel: null, icon: null, value: null, onValueChange: null };
    ({ label: obj5.label, subLabel: obj5.subLabel } = tmp5);
    const obj7 = { IconComponent: tmp6(8645).ThreadIcon };
    obj6.icon = closure_4(tmp6(7368).ActionSheetRow.Icon, obj7);
    ({ isEnabled: obj5.value, toggle: obj5.onValueChange } = tmp5);
    const items1 = [closure_4(tmp6(7368).ActionSheetSwitchRow, obj6), ];
    const obj8 = { label: null, icon: null, onPress: null };
    const intl2 = tmp6(1113).intl;
    obj8.label = intl2.string(_modDef3450.O2NG67);
    const obj9 = { IconComponent: tmp6(5738).TrashIcon };
    obj8.icon = closure_4(tmp6(7368).ActionSheetRow.Icon, obj9);
    obj8.onPress = function onPress() {
      onClose();
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18186, dependencyMap.paths), undefined, "FavoritesGuildCleanupModal");
    };
    items1[1] = closure_4(tmp6(7368).ActionSheetRow, obj8);
    obj4.children = items1;
    tmp8Result = closure_5(tmp6(7368).ActionSheetRow.Group, obj4);
  }
  const items2 = [tmp8Result, , ];
  let tmp9Result = null;
  if (stateFromStores) {
    const obj10 = { hasIcons: true, children: null };
    const obj11 = { label: null, icon: null, onPress: null };
    const intl3 = tmp6(1113).intl;
    obj11.label = intl3.string(tmp6(1113).t["0dOFq+"]);
    const obj12 = { IconComponent: tmp6(12342).ArrowsUpDownIcon };
    obj11.icon = closure_4(tmp6(7368).ActionSheetRow.Icon, obj12);
    obj11.onPress = function onPress() {
      onClose();
      openFavoritesGuildChannelSortModalDefault();
    };
    obj10.children = closure_4(tmp6(7368).ActionSheetRow, obj11);
    tmp9Result = closure_4(tmp6(7368).ActionSheetRow.Group, obj10);
  }
  items2[1] = tmp9Result;
  const obj13 = { label: tmp3.label, subLabel: tmp3.subLabel, icon: null, variant: "danger", onPress: null };
  const obj = onClose(504);
  obj13.icon = closure_4(onClose(7368).ActionSheetRow.Icon, { IconComponent: onClose(7135).EyeSlashIcon });
  obj13.onPress = function onPress() {
    onClose();
    closure_1.perform();
  };
  const items3 = [closure_4(onClose(7368).ActionSheetRow, obj13), ];
  let tmp9Result2 = null;
  if (tmp4.isAvailable) {
    const obj29 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj14.label, subLabel: obj14.subLabel } = tmp4);
    const obj30 = { IconComponent: tmp6(5738).TrashIcon };
    obj29.icon = closure_4(tmp6(7368).ActionSheetRow.Icon, obj30);
    obj29.onPress = function onPress() {
      onClose();
      closure_2.perform();
    };
    tmp9Result2 = closure_4(tmp6(7368).ActionSheetRow, obj29);
  }
  items3[1] = tmp9Result2;
  items2[2] = closure_5(onClose(7368).ActionSheetRow.Group, { hasIcons: true, children: items3 });
  obj2.children = items2;
  return closure_5(onClose(7366).ActionSheet, obj2);
};