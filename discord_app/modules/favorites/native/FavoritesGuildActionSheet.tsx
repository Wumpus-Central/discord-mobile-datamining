// discord_app/modules/favorites/native/FavoritesGuildActionSheet.tsx
import useFavoritesGuildHideActionDefault from "../hooks/useFavoritesGuildHideAction.tsx";
import useFavoritesGuildResetActionDefault from "../hooks/useFavoritesGuildResetAction.tsx";
import useFavoritesGuildAutoAddedThreadsActionDefault from "../hooks/useFavoritesGuildAutoAddedThreadsAction.tsx";
import openFavoritesGuildChannelSortModalDefault from "modal/openFavoritesGuildChannelSortModal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FavoriteStore from "../FavoriteStore.tsx";

const require = fn;
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
  const tmp4 = useFavoritesGuildAutoAddedThreadsActionDefault();
  const obj = onClose(10567);
  const items = [FavoriteStore];
  const stateFromStores = onClose(504).useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  const obj3 = { header: null, children: null };
  const obj4 = { title: null };
  const intl = onClose(1115).intl;
  obj4.title = intl.string(onClose(1115).t.wMWyci);
  obj3.header = closure_4(onClose(7480).BottomSheetTitleHeader, obj4);
  let tmp8Result = null;
  if (tmp4.isAvailable) {
    const obj5 = { hasIcons: true, children: null };
    const obj7 = { label: null, subLabel: null, icon: null, value: null, onValueChange: null };
    ({ label: obj6.label, subLabel: obj6.subLabel } = tmp4);
    const obj8 = { IconComponent: tmp5(5377).ThreadIcon };
    obj7.icon = closure_4(tmp5(7530).ActionSheetRow.Icon, obj8);
    ({ isEnabled: obj6.value, toggle: obj6.onValueChange } = tmp4);
    obj5.children = closure_4(tmp5(7530).ActionSheetSwitchRow, obj7);
    tmp8Result = closure_4(tmp5(7530).ActionSheetRow.Group, obj5);
  }
  const items1 = [tmp8Result, ,];
  let tmp8Result3 = null;
  if (obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess) {
    tmp8Result3 = null;
    if (stateFromStores) {
      const obj9 = { hasIcons: true, children: null };
      const obj10 = { label: null, icon: null, onPress: null };
      const intl2 = tmp5(1115).intl;
      obj10.label = intl2.string(tmp5(1115).t["0dOFq+"]);
      const obj11 = { IconComponent: tmp5(12484).ArrowsUpDownIcon };
      obj10.icon = closure_4(tmp5(7530).ActionSheetRow.Icon, obj11);
      obj10.onPress = function onPress() {
        onClose();
        openFavoritesGuildChannelSortModalDefault();
      };
      obj9.children = closure_4(tmp5(7530).ActionSheetRow, obj10);
      tmp8Result3 = closure_4(tmp5(7530).ActionSheetRow.Group, obj9);
    }
  }
  items1[1] = tmp8Result3;
  const obj13 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp5(5983).XSmallIcon;
  } else {
    EyeSlashIcon = tmp5(7297).EyeSlashIcon;
  }
  obj13.icon = closure_4(onClose(7530).ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj13.variant = str;
  obj13.onPress = function onPress() {
    onClose();
    closure_1.perform();
  };
  const items2 = [closure_4(onClose(7530).ActionSheetRow, obj13)];
  let tmp8Result4 = null;
  if (tmp3.isAvailable) {
    const obj24 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
    const obj25 = { IconComponent: tmp5(4784).TrashIcon };
    obj24.icon = closure_4(tmp5(7530).ActionSheetRow.Icon, obj25);
    obj24.onPress = function onPress() {
      onClose();
      closure_2.perform();
    };
    tmp8Result4 = closure_4(tmp5(7530).ActionSheetRow, obj24);
  }
  items2[1] = tmp8Result4;
  items1[2] = closure_5(onClose(7530).ActionSheetRow.Group, { hasIcons: true, children: items2 });
  obj3.children = items1;
  return closure_5(onClose(7528).ActionSheet, obj3);
}
