// discord_app/modules/favorites/native/FavoritesGuildActionSheet.tsx
import "noop";
import initializeFromUserSettings from "initializeFromUserSettings";
import jsxProd from "jsxProd";
import { useFavoritesGuildHideAction } from "../hooks/useFavoritesGuildHideAction.tsx";
import { useFavoritesGuildResetAction } from "../hooks/useFavoritesGuildResetAction.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default function FavoritesGuildActionSheet(onClose) {
  onClose = onClose.onClose;
  let importDefault;
  let dependencyMap;
  const tmp2 = useFavoritesGuildHideAction();
  importDefault = tmp2;
  const tmp3 = useFavoritesGuildResetAction();
  dependencyMap = tmp3;
  let obj = onClose(9770);
  let obj1 = onClose(589);
  const items = [initializeFromUserSettings];
  const stateFromStores = obj1.useStateFromStores(items, () => initializeFromUserSettings.hasStoredFavorites());
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = onClose(1236).intl;
  obj[0] = intl.string(onClose(1236).t.wMWyci);
  obj[0] = callback(onClose(5457).BottomSheetTitleHeader, obj);
  let tmp7Result = null;
  if (obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess) {
    tmp7Result = null;
    if (stateFromStores) {
      obj1 = { hasIcons: true, children: null };
      const obj2 = { label: null, icon: null, onPress: null };
      const intl2 = tmp4(1236).intl;
      obj2[0] = intl2.string(tmp4(1236).t["0dOFq+"]);
      const obj3 = { IconComponent: null };
      obj3[0] = tmp4(11612).ArrowsUpDownIcon;
      obj2[1] = tmp7(tmp4(5827).ActionSheetRow.Icon, obj3);
      obj2[2] = function onPress() {
        onClose();
        _undefined(_undefined2[12])();
      };
      obj1[1] = tmp7(tmp4(5827).ActionSheetRow, obj2);
      tmp7Result = tmp7(tmp4(5827).ActionSheetRow.Group, obj1);
    }
  }
  const items1 = [tmp7Result, ];
  const obj4 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp4(5387).XSmallIcon;
  } else {
    EyeSlashIcon = tmp4(8566).EyeSlashIcon;
  }
  obj4[2] = callback(onClose(5827).ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj4[3] = str;
  obj4[4] = function onPress() {
    onClose();
    _undefined.perform();
  };
  const items2 = [callback(onClose(5827).ActionSheetRow, obj4), ];
  tmp7Result = null;
  if (tmp3.isAvailable) {
    const obj5 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj9[0], subLabel: obj9[1] } = tmp3);
    const obj6 = { IconComponent: null };
    obj6[0] = tmp4(4301).TrashIcon;
    obj5[2] = tmp7(tmp4(5827).ActionSheetRow.Icon, obj6);
    obj5[4] = function onPress() {
      onClose();
      _undefined2.perform();
    };
    tmp7Result = tmp7(tmp4(5827).ActionSheetRow, obj5);
  }
  items2[1] = tmp7Result;
  items1[1] = closure_5(onClose(5827).ActionSheetRow.Group, { hasIcons: true, children: items2 });
  obj[1] = items1;
  return closure_5(onClose(5825).ActionSheet, obj);
};