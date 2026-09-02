// discord_app/modules/favorites/native/FavoritesGuildActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import useFavoritesGuildHideActionDefault from "../hooks/useFavoritesGuildHideAction.tsx";
import useFavoritesGuildResetActionDefault from "../hooks/useFavoritesGuildResetAction.tsx";
import useFavoritesGuildAutoAddedThreadsActionDefault from "../hooks/useFavoritesGuildAutoAddedThreadsAction.tsx";
import closure_3 from "../FavoriteStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default function FavoritesGuildActionSheet(onClose) {
  onClose = onClose.onClose;
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp2 = useFavoritesGuildHideActionDefault();
  importDefault = tmp2;
  const tmp3 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp3;
  const tmp4 = useFavoritesGuildAutoAddedThreadsActionDefault();
  let obj = onClose(10329);
  obj1 = onClose(586);
  const items = [closure_3];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_3.hasStoredFavorites());
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = onClose(1233).intl;
  obj[0] = intl.string(onClose(1233).t.wMWyci);
  obj[0] = callback(onClose(5629).BottomSheetTitleHeader, obj);
  let tmp8Result = null;
  if (tmp4.isAvailable) {
    obj1 = { hasIcons: true, children: null };
    const obj2 = { label: null, subLabel: null, icon: null, value: null, onValueChange: null };
    ({ label: obj6[0], subLabel: obj6[1] } = tmp4);
    const obj3 = { IconComponent: null };
    obj3[0] = tmp5(5026).ThreadIcon;
    obj2[2] = tmp8(tmp5(5999).ActionSheetRow.Icon, obj3);
    ({ isEnabled: obj6[3], toggle: obj6[4] } = tmp4);
    obj1[1] = tmp8(tmp5(5999).ActionSheetSwitchRow, obj2);
    tmp8Result = tmp8(tmp5(5999).ActionSheetRow.Group, obj1);
  }
  const items1 = [tmp8Result, ,];
  tmp8Result = null;
  if (obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess) {
    tmp8Result = null;
    if (stateFromStores) {
      const obj4 = { hasIcons: true, children: null };
      const obj5 = { label: null, icon: null, onPress: null };
      const intl2 = tmp5(1233).intl;
      obj5[0] = intl2.string(tmp5(1233).t["0dOFq+"]);
      const obj6 = { IconComponent: null };
      obj6[0] = tmp5(11944).ArrowsUpDownIcon;
      obj5[1] = tmp8(tmp5(5999).ActionSheetRow.Icon, obj6);
      obj5[2] = function onPress() {
        onClose();
        lib(closure_2[14])();
      };
      obj4[1] = tmp8(tmp5(5999).ActionSheetRow, obj5);
      tmp8Result = tmp8(tmp5(5999).ActionSheetRow.Group, obj4);
    }
  }
  items1[1] = tmp8Result;
  const obj7 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp5(5559).XSmallIcon;
  } else {
    EyeSlashIcon = tmp5(7750).EyeSlashIcon;
  }
  obj7[2] = callback(onClose(5999).ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj7[3] = str;
  obj7[4] = function onPress() {
    onClose();
    lib.perform();
  };
  const items2 = [callback(onClose(5999).ActionSheetRow, obj7)];
  let tmp8Result1 = null;
  if (tmp3.isAvailable) {
    const obj8 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj12[0], subLabel: obj12[1] } = tmp3);
    const obj9 = { IconComponent: null };
    obj9[0] = tmp5(4436).TrashIcon;
    obj8[2] = tmp8(tmp5(5999).ActionSheetRow.Icon, obj9);
    obj8[4] = function onPress() {
      onClose();
      closure_2.perform();
    };
    tmp8Result1 = tmp8(tmp5(5999).ActionSheetRow, obj8);
  }
  items2[1] = tmp8Result1;
  items1[2] = closure_5(onClose(5999).ActionSheetRow.Group, { hasIcons: true, children: items2 });
  obj[1] = items1;
  return closure_5(onClose(5997).ActionSheet, obj);
}
