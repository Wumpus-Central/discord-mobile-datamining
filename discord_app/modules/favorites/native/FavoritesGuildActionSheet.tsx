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
  onClose(10224);
  let obj1 = onClose(504);
  const items = [FavoriteStore];
  const stateFromStores = obj1.useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = onClose(1114).intl;
  obj.title = intl.string(onClose(1114).t.wMWyci);
  obj.header = closure_4(onClose(7149).BottomSheetTitleHeader, obj);
  let tmp8Result = null;
  if (tmp4.isAvailable) {
    obj1 = { hasIcons: true, children: null };
    const obj2 = { label: null, subLabel: null, icon: null, value: null, onValueChange: null };
    ({ label: obj6.label, subLabel: obj6.subLabel } = tmp4);
    const obj3 = { IconComponent: tmp5(5073).ThreadIcon };
    obj2.icon = closure_4(tmp5(7200).ActionSheetRow.Icon, obj3);
    ({ isEnabled: obj6.value, toggle: obj6.onValueChange } = tmp4);
    obj1.children = closure_4(tmp5(7200).ActionSheetSwitchRow, obj2);
    tmp8Result = closure_4(tmp5(7200).ActionSheetRow.Group, obj1);
  }
  const items1 = [tmp8Result, ,];
  tmp8Result = null;
  if (obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess) {
    tmp8Result = null;
    if (stateFromStores) {
      const obj4 = { hasIcons: true, children: null };
      const obj5 = { label: null, icon: null, onPress: null };
      const intl2 = tmp5(1114).intl;
      obj5.label = intl2.string(tmp5(1114).t["0dOFq+"]);
      const obj6 = { IconComponent: tmp5(12151).ArrowsUpDownIcon };
      obj5.icon = closure_4(tmp5(7200).ActionSheetRow.Icon, obj6);
      obj5.onPress = function onPress() {
        onClose();
        openFavoritesGuildChannelSortModalDefault();
      };
      obj4.children = closure_4(tmp5(7200).ActionSheetRow, obj5);
      tmp8Result = closure_4(tmp5(7200).ActionSheetRow.Group, obj4);
    }
  }
  items1[1] = tmp8Result;
  const obj7 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp5(5680).XSmallIcon;
  } else {
    EyeSlashIcon = tmp5(6968).EyeSlashIcon;
  }
  obj7.icon = closure_4(onClose(7200).ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj7.variant = str;
  obj7.onPress = function onPress() {
    onClose();
    closure_1.perform();
  };
  const items2 = [closure_4(onClose(7200).ActionSheetRow, obj7)];
  let tmp8Result1 = null;
  if (tmp3.isAvailable) {
    const obj8 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
    const obj9 = { IconComponent: tmp5(4518).TrashIcon };
    obj8.icon = closure_4(tmp5(7200).ActionSheetRow.Icon, obj9);
    obj8.onPress = function onPress() {
      onClose();
      closure_2.perform();
    };
    tmp8Result1 = closure_4(tmp5(7200).ActionSheetRow, obj8);
  }
  items2[1] = tmp8Result1;
  items1[2] = closure_5(onClose(7200).ActionSheetRow.Group, { hasIcons: true, children: items2 });
  obj.children = items1;
  return closure_5(onClose(7198).ActionSheet, obj);
}
