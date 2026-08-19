// === Module 15399: FavoritesGuildActionSheet ===

// Module 15399 (FavoritesGuildActionSheet)
import noopAll from "noop" /* 19 */;
import useFavoritesGuildHideActionDefault from "useFavoritesGuildHideAction" /* 15400 */;
import useFavoritesGuildResetActionDefault from "useFavoritesGuildResetAction" /* 15401 */;
import initializeFromUserSettings from "initializeFromUserSettings" /* 1394 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default function FavoritesGuildActionSheet(onClose) {
  onClose = onClose.onClose;
  const tmp2 = useFavoritesGuildHideActionDefault();
  importDefault = tmp2;
  const tmp3 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp3;
  onClose(9979);
  obj1 = onClose(589);
  const items = [closure_3];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_3.hasStoredFavorites());
  const obj = { title: null };
  const intl = onClose(1236).intl;
  obj[0] = intl.string(onClose(1236).t.wMWyci);
  obj[0] = callback(onClose(6949).BottomSheetTitleHeader, obj);
  let tmp7Result = null;
  if (obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess) {
    tmp7Result = null;
    if (stateFromStores) {
      obj1 = { hasIcons: true, children: null };
      const obj2 = { label: null, icon: null, onPress: null };
      const intl2 = tmp4(1236).intl;
      obj2[0] = intl2.string(tmp4(1236).t["0dOFq+"]);
      const obj3 = { IconComponent: null };
      obj3[0] = tmp4(11329).ArrowsUpDownIcon;
      obj2[1] = callback(tmp4(7177).ActionSheetRow.Icon, obj3);
      obj2[2] = function onPress() {
        onClose();
        lib(closure_2[12])();
      };
      obj1[1] = callback(tmp4(7177).ActionSheetRow, obj2);
      tmp7Result = callback(tmp4(7177).ActionSheetRow.Group, obj1);
    }
  }
  const items1 = [tmp7Result, ];
  const obj4 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp4(6368).XSmallIcon;
  } else {
    EyeSlashIcon = tmp4(8605).EyeSlashIcon;
  }
  obj4[2] = callback(onClose(7177).ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj4[3] = str;
  obj4[4] = function onPress() {
    onClose();
    lib.perform();
  };
  const items2 = [callback(onClose(7177).ActionSheetRow, obj4), ];
  tmp7Result = null;
  if (tmp3.isAvailable) {
    const obj5 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj9[0], subLabel: obj9[1] } = tmp3);
    const obj6 = { IconComponent: null };
    obj6[0] = tmp4(4333).TrashIcon;
    obj5[2] = callback(tmp4(7177).ActionSheetRow.Icon, obj6);
    obj5[4] = function onPress() {
      onClose();
      closure_2.perform();
    };
    tmp7Result = callback(tmp4(7177).ActionSheetRow, obj5);
  }
  items2[1] = tmp7Result;
  items1[1] = callback(onClose(7177).ActionSheetRow.Group, { hasIcons: true, children: items2 });
  obj[1] = items1;
  return callback(onClose(7175).ActionSheet, obj);
};