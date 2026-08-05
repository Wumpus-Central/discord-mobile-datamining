// discord_app/modules/favorites/native/FavoritesGuildActionSheet.tsx
import "noop";
import jsxProd from "jsxProd";
import { ActionSheet } from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { ActionSheetRowIcon } from "../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { useFavoritesGuildHideAction } from "../hooks/useFavoritesGuildHideAction.tsx";
import { useFavoritesGuildResetAction } from "../hooks/useFavoritesGuildResetAction.tsx";

let c3;
let c4;
let require = arg1;
function FavoritesGuildActionSheet() {
  const tmp2 = useFavoritesGuildHideAction();
  const require = tmp2;
  const tmp3 = useFavoritesGuildResetAction();
  importDefault = tmp3;
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.wMWyci);
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp5(5270).XSmallIcon;
  } else {
    EyeSlashIcon = tmp5(8306).EyeSlashIcon;
  }
  obj[2] = callback(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj[3] = str;
  obj[4] = function onPress() {
    tmp3(outer1_2[10]).hideActionSheet(outer1_5);
    tmp2.perform();
  };
  const items = [callback(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetRow, obj), ];
  let tmp4Result = null;
  if (tmp3.isAvailable) {
    const obj1 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj4[0], subLabel: obj4[1] } = tmp3);
    const obj2 = { IconComponent: null };
    obj2[0] = tmp5(4244).TrashIcon;
    obj1[2] = tmp4(tmp5(5648).ActionSheetRow.Icon, obj2);
    obj1[4] = function onPress() {
      tmp3(outer1_2[10]).hideActionSheet(outer1_5);
      tmp3.perform();
    };
    tmp4Result = tmp4(tmp5(5648).ActionSheetRow, obj1);
  }
  items[1] = tmp4Result;
  obj[1] = closure_4(ActionSheetRowIcon /* ActionSheetRowIcon */.ActionSheetRow.Group, { hasIcons: true, children: items });
  return callback(ActionSheet /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = require("useFavoritesGuildHideAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export const openFavoritesGuildActionSheet = function openFavoritesGuildActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALF /* ACTION_SHEET_HEIGHT_HALF */;
  obj = { content: callback(FavoritesGuildActionSheet, {}), key: FavoritesGuildActionSheet };
  obj.showActionSheet(obj);
};