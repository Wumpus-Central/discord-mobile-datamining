// === Module 15771: FavoritesGuildActionSheet ===

// Module 15771 (FavoritesGuildActionSheet)
import useFavoritesGuildHideActionDefault from "useFavoritesGuildHideAction" /* 15772 */;
import useFavoritesGuildResetActionDefault from "useFavoritesGuildResetAction" /* 15773 */;
import useFavoritesGuildAutoAddedThreadsActionDefault from "useFavoritesGuildAutoAddedThreadsAction" /* 15774 */;
import openFavoritesGuildChannelSortModalDefault from "openFavoritesGuildChannelSortModal" /* 15775 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;

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
  const obj = onClose(9685);
  const items = [FavoriteStore];
  const stateFromStores = onClose(504).useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  const obj3 = { header: null, children: null };
  const obj4 = { title: null };
  const intl = onClose(1115).intl;
  obj4.title = intl.string(onClose(1115).t.wMWyci);
  obj3.header = closure_4(onClose(6570).BottomSheetTitleHeader, obj4);
  let tmp8Result = null;
  if (tmp4.isAvailable) {
    const obj5 = { hasIcons: true, children: null };
    const obj7 = { label: null, subLabel: null, icon: null, value: null, onValueChange: null };
    ({ label: obj6.label, subLabel: obj6.subLabel } = tmp4);
    const obj8 = { IconComponent: tmp5(5387).ThreadIcon };
    obj7.icon = closure_4(tmp5(6620).ActionSheetRow.Icon, obj8);
    ({ isEnabled: obj6.value, toggle: obj6.onValueChange } = tmp4);
    obj5.children = closure_4(tmp5(6620).ActionSheetSwitchRow, obj7);
    tmp8Result = closure_4(tmp5(6620).ActionSheetRow.Group, obj5);
  }
  const items1 = [tmp8Result, , ];
  let tmp8Result3 = null;
  if (obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess) {
    tmp8Result3 = null;
    if (stateFromStores) {
      const obj9 = { hasIcons: true, children: null };
      const obj10 = { label: null, icon: null, onPress: null };
      const intl2 = tmp5(1115).intl;
      obj10.label = intl2.string(tmp5(1115).t["0dOFq+"]);
      const obj11 = { IconComponent: tmp5(11633).ArrowsUpDownIcon };
      obj10.icon = closure_4(tmp5(6620).ActionSheetRow.Icon, obj11);
      obj10.onPress = function onPress() {
        onClose();
        openFavoritesGuildChannelSortModalDefault();
      };
      obj9.children = closure_4(tmp5(6620).ActionSheetRow, obj10);
      tmp8Result3 = closure_4(tmp5(6620).ActionSheetRow.Group, obj9);
    }
  }
  items1[1] = tmp8Result3;
  const obj13 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp5(5992).XSmallIcon;
  } else {
    EyeSlashIcon = tmp5(6387).EyeSlashIcon;
  }
  obj13.icon = closure_4(onClose(6620).ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj13.variant = str;
  obj13.onPress = function onPress() {
    onClose();
    closure_1.perform();
  };
  const items2 = [closure_4(onClose(6620).ActionSheetRow, obj13), ];
  let tmp8Result4 = null;
  if (tmp3.isAvailable) {
    const obj24 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
    const obj25 = { IconComponent: tmp5(4790).TrashIcon };
    obj24.icon = closure_4(tmp5(6620).ActionSheetRow.Icon, obj25);
    obj24.onPress = function onPress() {
      onClose();
      closure_2.perform();
    };
    tmp8Result4 = closure_4(tmp5(6620).ActionSheetRow, obj24);
  }
  items2[1] = tmp8Result4;
  items1[2] = closure_5(onClose(6620).ActionSheetRow.Group, { hasIcons: true, children: items2 });
  obj3.children = items1;
  return closure_5(onClose(6618).ActionSheet, obj3);
};